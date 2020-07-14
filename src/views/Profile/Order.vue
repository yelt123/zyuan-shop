<template>
  <div class="order">
    <nav-bar :title="title" />
    <keep-alive>
      <van-tabs replace="true" @click="onClick" v-model="active">
        <van-tab :title="item" v-for="(item,index) in titleArr" :key="index">
          <div class="contain">{{item}}</div>
        </van-tab>
      </van-tabs>
    </keep-alive>
  </div>
</template>
<script>
import navBar from "@/components/Profile/NavBar.vue";
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      titleArr: ["全部", "待发货", "待收货", "待评价"],
      title: "",
      active: 0,
      goodsData: []
    };
  },
  activated() {
    this.active = 0;
  },
  components: {
    navBar
  },
  created() {
    this.title = this.$route.meta.title;
    this.getAllData();
  },
  methods: {
    onClick() {
      this.getAllData();
    },
    async getAllData() {
      const res = await getData({
        url: "/order/api_index/allOrder",
        data: {
          uid: window.localStorage.uid,
          status: this.active + 1,
          page: 1,
          pageNum: 10
        }
      });

      this.goodsData = res;
    }
  }
};
</script>