<template>
  <div class="register">
    <div class="login-top">
      <div class="icon iconfont icon-zuojiantou" @click="handleClick" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang='scss'>
.register {
    background-color: #fff;
  .login-top {
    width: 100vw;
    height: 10vh;
    line-height: 10vh;
    // border: 1px solid red;
    position: relative;
    .icon {
      position: absolute;
      left: 3vw;
      font-size: 20px;
    }
  }
}
</style>