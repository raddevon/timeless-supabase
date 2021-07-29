<template>
  <header>
    <div>
      <h1><img src="../assets/logo.svg" alt="Timeless" /></h1>
    </div>
    <div>
      <user-actions v-if="user" :set-user="setUser" />
      <login-form v-else :set-user="setUser" />
    </div>
  </header>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import UserActions from "./UserActions.vue";
export default {
  name: "timeless-header",
  props: ["setUser", "user"],
  components: {
    LoginForm,
    UserActions,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
h1 {
  margin: 0;
}
img {
  display: block;
  width: 120px;
}
</style>