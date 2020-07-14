<template>
  <div class="safe-center">
    <nav-bar />
    <div class="safe">
      <van-cell
        title="修改登录密码"
        is-link
        :to="{path:'/MobileVerify',query:{type:1}}"
        label="建议您定期修改登录密码以保护账号安全"
      />
      <van-cell
        title="修改手机号码"
        is-link
        :to="{path:'/MobileVerify',query:{type:2}}"
        label="若更换手机号码请尽快更换"
      />
    </div>
  </div>
</template>
<script>
import navBar from "@/components/Profile/NavBar.vue";

export default {
  created() {
    this.$store.commit("setUserData");
  },
  components: {
    navBar
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.safe-center {
  width: 100%;
  height: 100%;
  position: relative;
  .safe {
    margin-top: 3vh;
    position: absolute;
    width: 100%;
  }
}
</style>