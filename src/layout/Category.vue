<template>
  <div class="category">
    <router-link to="Search">
      <search class="search" />
    </router-link>
    <div class="goods">
      <div class="goodsList">
        <ul>
          <li
            @click="liClick($event,item)"
            v-for=" (item,index) in goodsList "
            :key="index"
          >{{item.catname}}</li>
        </ul>
      </div>
      <div class="goodsDetails">
        <div class="Details" v-for="(item,index) in childrenArr" :key="index">
          <div class="title">{{item.catname}}</div>
          <div class="goods-box">
            <router-link
              tag="div"
              v-for="(i,id) in item.children"
              :key="id"
              :to="{name:'ResultSearch',query:{catid:i.catid},params:{catname:i.catname}}"
            >
              <div class="good">
                <div>
                  <img :src="i.catimg" />
                  <div class="goodName">{{i.catname}}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from "@/components/Home/Search.vue";
import { getData } from "@/services/getData.js";
export default {
  data() {
    return {
      goodsList: [],
      id: 3,
      childrenArr: false
    };
  },
  created() {
    this.getGoods();
    this.getChildrenGoods();
  },
  updated() {
    let dom = document.querySelectorAll(".goodsList ul li");
    if (this.id === 3 && dom[0]) {
      dom[0].classList.add("active");
    }
  },
  activated() {},
  methods: {
    liClick(e, item) {
      let dom = document.querySelectorAll(".goodsList ul li");
      if (dom) {
        for (let i = 0; i < dom.length; i++) {
          dom[i].classList.remove("active");
        }
        e.target.classList.add("active");
        this.id = item.catid;
        this.getChildrenGoods();
      }
    },
    async getChildrenGoods() {
      const res = await getData({
        url: "/goods/api_index/getsonscat",
        data: {
          id: this.id
        }
      });
      this.childrenArr = res.data;
    },
    async getGoods() {
      const res = await getData({
        url: "/goods/api_index/getgoodscat"
      });
      this.goodsList = res.data;
    }
  },
  components: {
    search
  }
};
</script>
<style lang='scss' scoped>
.category {
  margin-top: -1vh;
  padding: 1vh 2vh 0.2vh 0.1vh;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .search {
    margin-left: 1.5vw;
  }
  .goods {
    height: 100%;
  }

  .goodsList ul {
    background-color: rgba($color: #e4e1f5, $alpha: 0.3);
    display: inline-block;
    padding-bottom: 49.5vh;
    li {
      width: 22vw;
      color: rgb(83, 83, 83);
      height: 16vw;
      font-size: 3.6vw;
      line-height: 12vw;
      padding-left: 2vw;
    }
    .active {
      background-color: #fff;
    }
  }
  .goodsDetails {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 9vh;
    width: 77.8vw;
    padding-bottom: 10vh;

    .Details {
      padding: 2vw 2vw 20vw 2vw;
      position: relative;
      width: 100%;

      .title {
        position: relative;
        margin-bottom: 15px;
      }
      .goods-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        .good {
          // flex: 0.33;
          // position: relative;
          text-align: center;
          margin: 5px;
          font-size: 14px;

          img {
            width: 13vw;
          }
        }
      }
    }
  }
}
</style>