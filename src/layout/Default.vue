<template>
  <div class="default">
    <keep-alive>
      <router-view v-if="sta" />
      <div class="cs" v-else>222222222</div>  
    </keep-alive>
    <nav-bar v-show="getNav" />
  </div>
</template>
<script>
import navBar from "@/views/Home/NavBar.vue";
export default {
  data() {
    return { sta: true, navStatus: this.getNav };
  },
  beforeCreate() {
    this.sta = false;
  },
  mounted() {
    this.sta = true;
  },
  computed: {
    getNav() {
      if (
        this.$route.path == "/Home" ||
        this.$route.path == "/Category" ||
        this.$route.path == "/Cart" ||
        this.$route.path == "/Profile"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    navBar
  }
};
</script>