<template>
  <div class="search-plus">
    <div class="icon iconfont icon-zuojiantou" @click="handleClick" />
    <search class="search" @search="searchFn" />
    <router-link :to="{path:'/SearchResult',query:{searchData:this.searchData}}">
      <div class="search-title" @click="searchClick">搜索</div>
    </router-link>
  </div>
</template>
<script>
import search from "@/components/Home/Search.vue";
export default {
  data() {
    return {
      matched: null,
      searchData: null
    };
  },
  components: {
    search
  },

  methods: {
    searchFn(value) {
      this.searchData = value;
    },
    async searchClick() {
      this.getData({
        url: "/goods/api_index/goodslist",
        data: {
          uid: window.localStorage.uid,
          page: 1,
          paginate: 10,
          sercon: this.searchData,
          catid: ""
        }
      });
    },

    handleClick() {
      if (this.$route.matched.length <= 2) {
        // console.log(this.$router);
        let history = { path: "/" };
        this.$router.push(history);
        // this.$router.go(-1);
      } else {
        let matched = this.$route.matched.reverse();
        let item = matched.splice(0, 1);
        let history = {
          path: item[0].path
        };
        this.$router.push(history);
      }
    }
  },
  watch: {
    $route: function() {
      this.matched = this.$route.matched;
    }
  }
};
</script>
<style scoped lang='scss'>
.search-plus {
  position: relative;
  padding: 0.5vh 0;
  background-color: #fff;
  .icon {
    position: absolute;
    margin: 3.2vh 0 0 4vw;
  }
  .search {
    width: 74% !important;
    transform: translateX(10vw);
    input {
      width: 64vw !important;
    }
  }
  .search-title {
    position: absolute;
    right: 5vw;
    top: 3.5vh;
    color: rgb(134, 132, 132);
    font-size: 14;
  }
}
</style>