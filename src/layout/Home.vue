<template>
  <div class="home">
    <div class="home-box">
      <router-link :to="{name:'Search'}" tag="div">
        <search />
      </router-link>
      <carousel />
      <home-category />
      <r-commodities />
    </div>
  </div>
</template>
<script>
import search from "@/components/Home/Search.vue";
import carousel from "@/components/Home/Carousel.vue";
import homeCategory from "@/components/Home/HomeCategory.vue";
import rCommodities from "@/components/Home/RCommodities.vue";
export default {
  components: {
    search,
    carousel,
    homeCategory,
    rCommodities
  },
  // deactivated(){
  //   this.$router.go(0)
  // }
};
</script>
<style scoped lang='scss'>
.home {
  height: 100%;
  width: 100%;
  position: relative;
  .home-box {
    width: 90%;
    // border: 1px solid red;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>