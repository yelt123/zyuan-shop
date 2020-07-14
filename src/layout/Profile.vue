<template>
  <div class="profile">
    <div class="P-top">
      <div class="top-box">
        <div class="title">个人中心</div>
        <router-link to="/Setting">
          <div class="user-logo">
            <img :src="userData.avatar" />
          </div>
        </router-link>
        <div class="user-name">{{userData.nickname}}</div>
      </div>
    </div>

    <div class="P-bottom">
      <div class="order">
        <van-cell title-class="iconfont icon-dingdan" title="我的订单" is-link to="/Order" />
      </div>
      <div class="address">
        <van-cell title-class="iconfont icon-dizhi" title="我的地址" is-link to="/Address" />
      </div>
      <div class="safe-center">
        <van-cell
          title-class="iconfont icon-anquanzhongxin89"
          title="安全中心"
          is-link
          to="/SafeCenter"
        />
      </div>
      <div class="setting">
        <van-cell title-class="iconfont icon-shezhi" title="设置" is-link to="/Setting" />
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      userData: ""
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    async getuser() {
      const res = await getData({
        url: "/member/api_index/personalData",
        data: {
          uid: window.localStorage.uid,
          field: ["nickname", "avatar", "mobile"]
        }
      });
      this.userData = res.data;
      this.$store.commit("setUserToken", res.data);
    }
  }
};
</script>
<style scoped lang='scss'>
.profile {
  width: 100vw;
  height: 90vh;

  .P-top {
    color: rgb(247, 243, 243);
    width: 100vw;
    height: 40vh;
    background: linear-gradient(to right, #edb24a, #e99745, #e98641);
    // border-radius: 0 0 8rem 8rem/0 0 0.53333rem 0.53333rem;
    position: relative;

    .top-box {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      margin: 5vh 0;
      .user-logo {
        margin: 5vh 0;
        img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .p-bottom {
    position: relative;
    width: 90%;
    height: 50vh;
    border: 1px solid red;
  }
  .iconfont:before {
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>