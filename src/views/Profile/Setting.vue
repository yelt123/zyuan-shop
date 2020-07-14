<template>
  <div class="setting">
    <nav-bar />
    <div class="setData">
      <div class="logo">
        <div class="left">头像</div>
        <div>
          <img src="../../assets/img/2345截图20200428230654.png" @click="imgClick" class="userImg" />
          <input type="file" style="display:none" />
          <img src="../../assets/css/font/右箭头.svg" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import navBar from "@/components/Profile/NavBar.vue";
export default {
  methods: {
    imgClick() {
      const input = document.querySelector("input");
      console.log(input.click())
    }
  },
  components: {
    navBar
  }
};
</script>
<style lang='scss' scoped>
.setData {
  width: 100%;
  // height: 10vh;
  border: 1px solid red;
  .logo {
    padding: 1vh 2vh;
    background-color: rgba(107, 140, 148, 0.5);
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 20vw;
    line-height: 16vw;
    .userImg {
      width: 16vw;
      height: 16vw;
      border-radius: 50%;
    }
  }
}
</style>