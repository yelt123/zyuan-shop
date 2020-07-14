<template>
  <div class="nav-bar">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      title: this.$route.meta.title
    };
  },
  // props: ["title"],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("刷新");
    }
  }
};
</script>
<style lang='scss'>
.van-nav-bar {
  height: 10vh;
  color: #000;
  .van-icon {
    color: #000;
  }
}
.van-nav-bar__text {
  color: #000;
}
</style>