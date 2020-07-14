<template>
  <div id="app" v-cloak>
    <div class="status" v-if="status">123</div>
    <my-default v-else />
  </div>
</template>

<script>
import myDefault from "@/layout/Default.vue";

export default {
  data() {
    return {
      status: false
    };
  },
  name: "App",
  components: {
    myDefault
  },
  beforeCreate() {
    this.status = true;
  },
  mounted() {
    this.status = false;
  },
  watch: {
    // $route() {
    //   console.log(this.$route.meta);
    // }
  }
};
</script>

<style>
@import "./assets/css/Reset.css";
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding-bottom: 10vh; */
}
.status {
  width: 100%;
  height: 100vh;
  background-color: rgba(2, 2, 2, 0.5);
}
[v-cloak] {
  display: none;
}
</style>
