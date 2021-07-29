<template>
  <ol v-if="posts.length">
    <timeless-post v-for="post in posts" :key="post.id" :post="post" />
  </ol>
</template>

<script>
import TimelessPost from "./TimelessPost.vue";

export default {
  name: "timeless-feed",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const { data, error } = await this.$supabase
      .from("posts")
      .select(`id, body, created_at, profiles (email)`)
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      alert("Unable to fetch posts");
    } else {
      this.posts = data;
    }
  },
  components: {
    TimelessPost,
  },
};
</script>

<style scoped>
ol {
  list-style-type: none;
  padding: 10px;
}
ol > li + li {
  margin-top: 20px;
}
</style>