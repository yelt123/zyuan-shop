<template>
  <div class="navBar">
    <ul>
      <router-link tag="li" class="iconfont icon-shouye" :to="{name:'Home'}">
        <p>首页</p>
      </router-link>
      <router-link tag="li" class="iconfont icon-sort" :to="{name:'Category'}">
        <p>分类</p>
      </router-link>
      <router-link tag="li" class="iconfont icon-gouwuche" :to="{name:'Cart'}">
        <p>购物车</p>
      </router-link>
      <router-link tag="li" class="iconfont icon-gerenzhongxin" :to="{name:'Profile'}">
        <p>个人中心</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style  lang='scss'>
@import "../../assets/css/font/iconfont.css";
.navBar {
  width: 100vw;
  height: 10vh;
  position: fixed;
  bottom: 0;
  ul {
    background-color: #fff;
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      flex: 1;
      color: rgb(175, 162, 162);
      line-height: 5vh;
      text-align: center;
      font-size: 3.5vh;
      font-weight: 800;
      margin: 0.5vh 0;
      p {
        font-size: 2vh;
        font-weight: 400;
        margin-top: -0.8vh;
      }
      &.router-link-active {
       color:  rgb(230, 76, 15);
      }
    }
  }
}
</style>