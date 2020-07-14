<template>
  <div class="search-page">
    <search-plus />
    <template v-if="status">
      <div class="s-history">
        <div class="title">搜索历史</div>
        <img v-if="!his" src="../../assets/css/font/删除.svg" @click="imgClick" />
      </div>
      <div class="res-box">
        <div v-if="!his">
          <span class="s-result" v-for="(item,index) in searchData" :key="index">{{item}}</span>
        </div>
        <div v-else class="s-no">暂无历史</div>
      </div>
    </template>

    <router-view v-else></router-view>
    <div class="module" v-show="modules">
      <div class="select-inp">
        <div class="s-title">确定要删除历史记录吗</div>
        <div class="s-btn" @click="btnClick($event)">
          <button>取消</button>
          <button class="sure">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchPlus from "@/components/Home/SearchPlus.vue";
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      searchData: [],
      status: true,
      modules: false,
      his: false
    };
  },
  components: {
    searchPlus
  },
  created() {
    this.getSearch();
    
  },
  beforeRouteUpdate(to, from, next) {
    this.status = false;
    next();
  },
  deactivated() {
    this.$router.go(0);
  },
  activated() {
    this.status = true;
    this.getSearch(); 
  },
  methods: {
    async btnClick(e) {
      let dom = e.target;
      dom.classList.add("active");
      setTimeout(() => {
        dom.classList.remove("active");
      }, 100);

      if (e.target.innerText.includes("确定")) {
        await getData({
          url: "/goods/api_index/goods_shdel",
          data: {
            uid: window.localStorage.uid
          }
        });
        this.modules = false;
        this.$router.go(0);
      } else {
        this.modules = false;
      }
    },
    async getSearch() {
      const res = await getData({
        url: "/goods/api_index/goods_sh",
        data: {
          uid: window.localStorage.uid
        }
      });
      this.searchData = res.data;
      if (!this.searchData) {
        this.his = true;
      }
    },
    async imgClick() {
      this.modules = true;
      await getData({
        url: "/goods/api_index/goods_shdel",
        data: {
          uid: window.localStorage.uid
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.search-page {
  width: 100vw;
  height: 100%;
}
.s-history {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 3vw 2vw;
  width: 100%;
  // border: 1px solid red;
  background-color: #fff;

  .title {
    font-size: 14px;
    color: rgb(131, 131, 133);
  }
  img {
    font-size: 16px;
  }
}
.res-box {
  width: 100%;
  // border: 1px solid green;
  background-color: #fff;
  padding: 2vw;
  .s-result {
    display: inline-block;
    background-color: rgb(245, 244, 244);
    border-radius: 15px;
    margin: 2vw;
    font-size: 12px;
    padding: 5px 10px;
    color: rgb(131, 131, 133);
  }
  .s-no {
    color: #838385;
  }
}

.module {
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  .select-inp {
    width: 80vw;
    height: 20vh;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    text-align: center;
    line-height: 10vh;
    .s-btn {
      display: inline-block;
      // width: 40px;
      button {
        width: 30vw;
        height: 7vh;
        line-height: 7vh;
        border: none;
        background-color: #fff;
        margin: 0 2vw;
        // border: 1px solid red;
        &.sure {
          color: rgb(42, 149, 175);
        }
        &.active {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
      }
    }
  }
}
</style>