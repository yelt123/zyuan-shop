<template>
  <div class="ResultSearch">
    <search-plus />
    <no-goods v-if="status" />
    <div class="container" v-else>商品列表</div>
  </div>
</template>
<script>
import searchPlus from "@/components/Home/SearchPlus.vue";
import noGoods from "@/components/Cart/NoGoods.vue";
export default {
  data() {
    return {
      goodData: [],
      status: true
    };
  },
  components: { searchPlus, noGoods },
  activated() {
    document.title = this.$route.params.catname;
    this.getGoodData();
  },
  methods: {
    async getGoodData() {
      const res = await this.getData({
        url: "/goods/api_index/goodslist",
        data: {
          uid: window.localStorage.uid,
          page: 1,
          paginate: 10,
          catid: this.$route.query.catid
        }
      });
      console.log(res);
      this.goodData = res.data;
      if (this.goodData.length && this.goodData) {
        this.status = false;
      }
    }
  }
};
</script>