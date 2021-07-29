<template>
  <form @submit.prevent="logInUser">
    <label for="email">Email: </label>
    <input v-model="email" type="email" name="email" required />
    <label for="password">Password: </label>
    <input v-model="password" type="password" name="password" required />
    <button :disabled="!formIsValid">Log In</button>
    <button :disabled="!formIsValid" type="button" @click="signUpUser">
      Sign Up
    </button>
  </form>
</template>

<script>
export default {
  name: "login-form",
  props: ["setUser"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    formIsValid() {
      const emailIsValid = this.email && this.email.includes("@");
      return emailIsValid && this.password;
    },
  },
  methods: {
    async logInUser() {
      if (!this.formIsValid) {
        return;
      }
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (error) {
        console.error(error);
        alert("Your login failed");
      } else {
        this.setUser(user);
      }

      this.email = "";
      this.password = "";
    },
    async signUpUser() {
      if (!this.formIsValid) {
        return;
      }
      const { error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) {
        console.error(error);
        alert("Your signup failed");
      } else {
        this.logInUser();
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
}
</style>