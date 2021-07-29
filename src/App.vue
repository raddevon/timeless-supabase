<template>
  <timeless-header :user="user" :set-user="setUser" />
  <timeless-feed />
</template>

<script>
import TimelessHeader from "./components/TimelessHeader.vue";
import TimelessFeed from "./components/TimelessFeed.vue";
export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    TimelessHeader,
    TimelessFeed,
  },
  methods: {
    setUser(newUser) {
      this.user = newUser;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button + button {
  margin-left: 5px;
}
</style>
