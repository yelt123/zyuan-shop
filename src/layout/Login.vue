<template>
  <div class="login">
    <zJJ />
    <div class="login-mian">
      <div class="item">
        <span>{{textArr[0]}}</span>
        <input type="number" :placeholder="`请输入`+textArr[0]" class="phone" v-model="phone" />
      </div>
      <div class="hx" />
      <div class="item" v-if="number">
        <span>{{textArr[1]}}</span>
        <input type="password" class="password" :placeholder="`请输入`+textArr[1]" v-model="password" />
      </div>
      <div class="item" v-else>
        <span>{{textArr[2]}}</span>
        <input type="text" :placeholder="`请输入`+textArr[2]" v-model="Verification" />
        <button class="sendMsg" @click="sendMsg($event)">发送验证码</button>
      </div>
    </div>
    <div class="login-bottom">
      <div class="msg" @click="msgClick">{{msg}}</div>

      <div class="register" @click="registerClick">注册</div>
    </div>
    <button
      class="btn"
      @click="loginClick"
      :style="{'background-color':((password||Verification&&phone)?'rgba(9, 130, 230, 1)':'rgba(9, 130, 230, 0.5)'),
      'pointer-events':((password||Verification&&phone)?'auto':'none')}"
    >登录</button>
    <div class="popup" v-if="popup">{{popupMsg}}</div>
  </div>
</template>
<script>
import zJJ from "@/components/Login/ZJJ.vue";
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      textArr: ["手机号", "密码", "短信验证码"],
      number: true,
      msg: "短信验证码登录",
      phone: "",
      password: "",
      Verification: "",
      popup: false,
      popupMsg: "",
      loginData: {},
      loginS: 0.5,
      sendStatus: false//验证密码or验证短信验证码，true为密码
    };
  },
  activated() {
    this.phone = "";
    this.password = "";
  },

  components: { zJJ },
  methods: {
    async loginClick() {
      if (!this.phone) {
        this.popup = true;
        this.popupMsg = "请输入手机号";
        return;
      } else if (this.Verification || this.password) {
        const res = await getData({
          url: this.sendStatus
            ? "/member/api_index/mobileLogin"
            : "/member/api_index/accountLogin",
          data: this.sendStatus
            ? { mobile: this.phone, mobile_code: this.Verification }
            : {
                account: this.phone,
                password: this.password
              }
        });

        console.log(res);

        // this.$store.dispatch("userData", window.localStorage.userData);
        // this.$store.state.userData = JSON.parse(window.localStorage.userData);
        // console.log(this.$store.state);
        if (res.status === "error") {
          console.log("error");
          this.popup = true;
          this.popupMsg = res.message;
        }
        if (res.status === "success") {
          this.$router.push("/Home");
          window.localStorage.uid = res.data.uid;
          window.localStorage.userData = JSON.stringify(res.data);
        }
      } else if (!this.password) {
        this.popup = true;
        this.popupMsg = "请输入密码";
        return;
      }
    },
    registerClick() {
      this.$router.replace("/Register");
    },
    async sendMsg(e) {
      if (this.phone) {
        const dom = e.target;
        dom.style.opacity = 0.6;
        let count = 60;
        let timer = setInterval(() => {
          --count;
          dom.innerText = `请${count}秒后重试`;
          dom.disabled = "disabled";
          if (count <= 0) {
            dom.innerText = "点击重新发送";
            dom.style.opacity = 1;
            clearInterval(timer);
            dom.disabled = "";
          }
        }, 1000);
      }

      if (this.phone === "") {
        this.popupMsg = "手机号不能为空";
        this.popup = true;
      } else {
        const res = await getData({
          url: "/notice/api_index/smsCode",
          data: {
            mobile: this.phone
          }
        });
        this.loginData = res;
      }
    },
    msgClick() {
      this.sendStatus = !this.sendStatus;
      this.number = !this.number;
      this.password = "";
      this.Verification = "";
    }
  },
  watch: {
    number() {
      if (!this.number) {
        this.msg = "手机号登录";
      } else {
        this.msg = "短信验证码登录";
      }
    },
    popup() {
      setTimeout(() => {
        this.popup = false;
      }, 2000);
    },
    loginData() {
      if (this.loginData.status === "error") {
        this.popup = true;
        this.popupMsg = this.loginData.message;
      }
    }
  }
};
</script>
<style scoped lang='scss'>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #fff;
  .popup {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    color: #fff;
    background-color: rgba(10, 10, 10, 0.7);
  }
  .hx {
    width: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid rgba(184, 184, 182, 0.2);
  }

  .login-mian {
    width: 100%;
    .item {
      width: 100%;
      height: 10vh;
      line-height: 10vh;
      .sendMsg {
        width: 100px;
        display: block;

        outline-style: none;
        height: 30px;
        line-height: 30px;
        position: absolute;
        right: 5vw;
        top: 23vh;
        color: #fff;
        background-color: rgba(9, 130, 230, 1);
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        border: none;
      }
      span {
        margin-left: 5vw;
      }
      input {
        position: relative;

        top: 1vh;
        float: right;
        left: -10vw;
        height: 8vh;
        width: 60%;
        border: none;
        margin-left: 5vw;
      }
    }
  }
  .login-bottom {
    padding: 5vw;
    .msg {
      float: left;
    }
    .register {
      float: right;
    }
  }
  .btn {
    color: #fff;
    background-color: rgba(9, 130, 230, 0.5);
    outline: none;
    box-shadow: none;
    width: 80vw;
    height: 6vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
  }
}
</style>