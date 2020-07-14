<template>
  <div class="r-commodities">
    <div v-if="show" class="no-have">暂无商品</div>
  </div>
</template>
<script>
export default {
  data() {
    return { goods: [], show: true };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      const res = await this.getData({
        url: "/goods/api_index/goodslist",
        data: {
          page: 1,
          paginate: 10
        }
      });
      this.goods = res.data;
      // console.log(res.data);
    }
  },
  watch: {
    goods: function() {
      if (this.goods.total > 0) {
        this.show = false;
      }
    }
  }
};
</script>
 <style scoped lang='scss'>
.r-commodities {
  margin: 2vh 0;
  padding: 2vh 0;
  .no-have {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>