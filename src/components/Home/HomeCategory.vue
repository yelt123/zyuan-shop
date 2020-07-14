<template>
  <div class="home-category">
    <van-grid class="category-box" :border="false" :clickable="true" icon-size="40px">
      <van-grid-item
        v-for="( item,index ) in categoryData.data"
        :key="index"
        :icon="item.catimg"
        :text="item.catname"
        :to="{name:'ResultSearch',params:{catname:item.catname},query:{catid:item.catid}}"
      />
    </van-grid>
  </div>
</template>
<script>
import { getData } from "@/services/getData.js";
export default {
  data() {
    return { categoryData: [] };
  },
  created() {
    this.sendRequest();
  },
  watch: {
    categoryData: function() {
      // console.log(this.categoryData.data);
    }
  },
  mounted() {},
  methods: {
    async sendRequest() {
      const res = await getData({
        url: "/goods/api_index/getgoodscat"
      });
      this.categoryData = res;
      // console.log(res);
    }
  }
};
</script>
<style scoped lang='scss'>
.home-category {
  background-color: #fff;
  border: 5px solid #fff;
  border-radius: 5px;
}
</style>