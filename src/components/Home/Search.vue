<template>
  <div class="search">
    <div class="img-box">
      <img src="@/assets/css/font/搜索.svg" />
    </div>
    <div class="input-box">
      <input
        type="text"
        v-model="msg"
        @input="$emit('search',$event.target.value)"
        placeholder="请输入搜索关键字"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },

  methods: {
    search($event) {
      console.log($event);
    }
  },
  deactivated() {
    // this.$router.go(0);
  },

  watch: {
    $route() {
      this.msg = "";
    }
  }
};
</script>
<style scoped lang='scss'>
@import "../../assets/scss/style.scss";

.search {
  width: 100%;
  height: 5vh;
  border-radius: 2rem;
  margin: 2vh 0;
  display: flex;
  background-color: $bg;
  .img-box {
    width: 20px;
    height: 5vh;
    position: relative;
    margin: 0 1vw;

    img {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 70%;
      top: 50%;
      width: 3vh;
      height: 5vh;
      color: rgb(159, 164, 168);
      font-weight: 800;
    }
  }
  .input-box {
    padding-top: 1vh;

    input {
      padding: 1vh 2vw;
      width: 64vw;
      height: 3vh;
      border: none;
      border-radius: 2rem;
      background-color: $bg;
      font-weight: 400;
      font-size: 2.4vh;
      background-color: $bg;
      caret-color: black !important;
    }
    ::-webkit-input-placeholder {
      /* WebKit, Blink, Edge */
      color: $fontcolor;
    }
    :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: $fontcolor;
    }
    ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: $fontcolor;
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $fontcolor;
    }
  }
}
</style>