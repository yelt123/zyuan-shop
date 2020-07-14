<template>
  <div class="search-result">
    <no-goods v-if="status" />
    <div v-else class="y-goods">yse</div>
  </div>
</template>
<script>
// import searchPlus from "@/components/Home/SearchPlus.vue";
import noGoods from "@/components/Cart/NoGoods.vue";
export default {
  data() {
    return {
      status: true
    };
  },
  components: {
    // searchPlus,
    noGoods
  }
};
</script>