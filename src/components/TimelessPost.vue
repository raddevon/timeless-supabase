<template>
  <li>
    <ul class="metadata">
      <li>{{ createdDate }}</li>
      <li>{{ post.profiles.email }}</li>
    </ul>
    {{ post.body }}
  </li>
</template>

<script>
export default {
  name: "timeless-post",
  props: ["post"],
  computed: {
    createdDate() {
      const createdDate = new Date(this.post.created_at);
      return createdDate.toLocaleDateString("en-US", { dateStyle: "long" });
    },
  },
};
</script>

<style scoped>
.metadata {
  padding: 0;
  color: #777;
  list-style-type: none;
  font-size: 0.8em;
  display: flex;
}
.metadata li + li::before {
  content: "|";
  margin: 0 5px;
}
</style>