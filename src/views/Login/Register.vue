<template>
  <div class="login">
    <zJJ />

    <div class="login-mian">
      <div class="item">
        <span>{{textArr[0]}}</span>
        <input type="number" :placeholder="`请输入`+textArr[0]" v-model="phone" />
      </div>
      <div class="item">
        <span>{{textArr[1]}}</span>
        <input type="text" :placeholder="`请输入`+textArr[1]" v-model="name" />
      </div>
      <div class="item">
        <span>{{textArr[2]}}</span>
        <input type="password" :placeholder="`请输入`+textArr[2]" v-model="password" />
      </div>
      <div class="item">
        <span>{{textArr[3]}}</span>
        <input type="password" :placeholder="`请输入`+textArr[3]" v-model="Cpassword" />
      </div>
      <div class="item">
        <span>{{textArr[4]}}</span>
        <input type="text" :placeholder="`请输入`+textArr[4]" v-model="Verification" />
        <button class="sendMsg" @click="sendMsg($event)">发送验证码</button>
      </div>
    </div>
    <div class="login-bottom">
      <div class="msg">
        <van-radio-group v-model="radio" @click="radioClick" class="Agree">
          <van-radio>我已阅读并了解</van-radio>
        </van-radio-group>
        <router-link to="/AgreeMent" tag="div" class="agreeMent">《注册协议》</router-link>
      </div>

      <div class="register" @click="loginClick">已有账号登录</div>
    </div>
    <button class="btn">注册</button>
    <div class="popup" v-if="popup">{{popupMsg}}</div>
  </div>
</template>
<script>
import zJJ from "@/components/Login/ZJJ.vue";
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      radio: true,
      textArr: ["手机号", "昵称", "密码", "重复密码", "短信验证码"],
      name: "",
      msg: "短信验证码登录",
      phone: "",
      password: "",
      Cpassword: "",
      Verification: "",
      popup: false,
      popupMsg: "",
      loginData: {}
    };
  },
  components: { zJJ },
  methods: {
    loginClick() {
      this.$router.replace("/Login");
    },
    radioClick() {
      this.radio = !this.radio;
      console.log(this.radio);
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
        console.log(res);
      }
    }
  },
  watch: {
   
    popup() {
      setTimeout(() => {
        this.popup = false;
      }, 2000);
    },
    loginData() {
      console.log(this.loginData);
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
        top: 52.5vh;
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
      font-size: 14px;
      width: 60vw;
      .Agree {
        float: left;
      }
      .agreeMent {
        height: 3vh;
        line-height: 3vh;
        color: blue;
      }
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