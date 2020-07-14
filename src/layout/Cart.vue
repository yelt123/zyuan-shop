<template>
  <div class="cart" v-if="status">
    <div class="top">
      <div class="title">购物车</div>
      <div class="manage">管理</div>
    </div>
    <no-goods />
  </div>
  <div class="carts" v-else>1</div>
</template>
<script>
import { getData } from "@/services/getData.js";
import noGoods from "@/components/Cart/NoGoods.vue";
export default {
  components: {
    noGoods
  },
  data() {
    return {
      status: false
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    async getCart() {
      const res = await getData({
        url: "/goods/api_index/getcarts",
        data: {
          uid: window.localStorage.uid
        }
      });
      if (res.data.data.carts.length === 0) {
        this.status = true;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/css/font/iconfont.css";

.cart {
  width: 100vw;
  height: 100vh;

  .top {
    background-color: #fff;
    width: 100%;
    margin-bottom: 2vh;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    .title {
      float: left;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .manage {
      float: right;
      position: absolute;
      right: 10px;
    }
  }
 
}
</style>