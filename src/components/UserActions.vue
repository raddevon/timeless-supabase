<template>
  <button @click="createPost">New Post</button>
  <button @click="logOutUser">Log Out</button>
</template>

<script>
export default {
  name: "user-action",
  props: ["setUser"],
  methods: {
    async createPost() {
      const postBody = prompt(
        `What would you like to post? (It's once per year, so make it count.)`
      );
      if (!postBody) {
        return;
      }
      const { error } = await this.$supabase
        .from("posts")
        .insert([{ body: postBody, user_id: this.$supabase.auth.user().id }]);
      if (error) {
        console.error(error);
        alert("Your post failed");
      }
    },
    async logOutUser() {
      const { error } = await this.$supabase.auth.signOut();
      if (error) {
        console.error(error);
        alert("Your logout failed");
      } else {
        this.setUser(null);
      }
    },
  },
};
</script>