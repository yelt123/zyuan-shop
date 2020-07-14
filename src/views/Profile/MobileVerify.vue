<template>
  <div class="mobileVerify">
    <nav-bar />
    <div class="Tips">
      <svg
        t="1594106813415"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3901"
        width="128"
        height="128"
      >
        <path
          d="M752.941176 0H271.058824C237.748706 0 210.823529 28.611765 210.823529 63.969882v896.060236C210.823529 995.388235 237.748706 1024 271.058824 1024h481.882352c33.249882 0 60.235294-28.672 60.235295-63.969882V63.969882C813.176471 28.611765 786.191059 0 752.941176 0zM512 963.764706a60.235294 60.235294 0 1 1 0-120.470588 60.235294 60.235294 0 0 1 0 120.470588z m240.941176-180.705882H271.058824V120.470588h481.882352v662.588236z"
          p-id="3902"
          fill="#8a8a8a"
        />
      </svg>

      <div class="title">
        为了您的账户安全，需要验证你的手机
        <div class="phone">{{phone}}</div>
      </div>
      <div class="send">
        <div class="title-2">短信验证码</div>
        <input type="text" v-model="text" placeholder="请输入短信验证码" />
        <button class="send-btn" @click="send">发送验证码</button>
      </div>
      <div class="buttom" @click="next">下一步</div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/Profile/NavBar.vue";
import { getData } from "@/services/getData.js";

export default {
  data() {
    return {
      phone: "",
      mobile: "",
      text: ""
    };
  },
  methods: {
    async next() {
      var url = "";
      this.$route.query.type === 1
        ? (url = "/member/api_index/editMobile")
        : (url = "/notice/api_index/smsCode");
      let res = "";
      if (this.$route.query.type === 1) {
        res = await getData({
          url: url,
          data: {
            mobile: this.mobile,
            uid: this.$store.state.userData.uid,
            mobile_code: this.text,
            type: this.$route.query.type
          }
        });
      }
      if (res.code === 200 && res.status === "success") {
        this.$router.push({
          name: "ChangePassword",
          query: { type: this.$route.query.type,mobile_code:this.text }
        });
        console.log(res);
      }
    },
    async send() {
      const dom = document.querySelector(".send-btn");
      dom.style.opacity = 0.6;
      dom.disabled = "disabled";
      let count = 60;
      let timer = setInterval(function() {
        --count;
        dom.innerText = `${count}秒后重新发送`;
        if (count <= 0) {
          dom.style.opacity = 1;
          dom.disabled = "";
          dom.innerText = "点击重新发送";
          clearInterval(timer);
        }
      }, 1000);
      const res = await getData({
        url: "/notice/api_index/smsCode",
        data: {
          mobile: this.mobile
        }
      });
      console.log(res);
    }
  },

  created() {
    this.mobile = this.$store.state.userToken.mobile;

    this.phone = this.mobile.substr(0, 3) + "****" + this.mobile.substr(7);
  },
  activated() {
    document.querySelector(".send-btn").innerText = "发送验证码";
    this.text = "";
  },
  components: {
    navBar
  }
};
</script>
<style lang='scss' scoped>
.mobileVerify {
  width: 100%;
  height: 100%;
  .Tips {
    width: 100%;
    & .title {
      position: absolute;
      font-size: 14px;
      color: rgb(12, 12, 12);
      left: 50%;
      top: 45%;
      white-space: nowrap;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .icon {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }
  .send {
    background-color: #fff;
    width: 100%;
    height: 9vh;
    position: absolute;
    top: 55%;
    display: flex;
    justify-content: space-between;
    .title-2 {
      // border: 1px solid red;

      height: 9vh;
      width: 23vw;
      margin-right: 10px;
      line-height: 9vh;
      transform: translateX(15%);
      font-size: 14px;
    }
    .send-btn {
      width: 30vw;
      border: none;
      background-color: #1989fa;
      color: #fff;
      height: 5vh;
      line-height: 5vh;
      font-size: 14px;
      position: relative;
      border-radius: 3px;
      top: 23%;
      right: 10px;
    }
    input {
      width: 44vw;
      border: none;
    }
  }
  .buttom {
    width: 90%;
    height: 7vh;
    background-color: #1989fa;
    color: #fff;
    border-radius: 2rem;
    line-height: 7vh;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 5%;
  }
}
</style>