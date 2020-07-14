<template>
  <div class="carousel">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-interval="3000"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          v-for="(item ,index) in carouselData.APP"
          :key="index"
          :data-slide-to="index"
          :class="{active : index === 0}"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(item ,index) in carouselData.APP"
          :key="index"
          :class="{active : index === 0}"
        >
          <img class="d-block w-100" :src="item.img_url" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>

import { getData } from "@/services/getData.js";
document.querySelector(".active");
export default {
  methods: {
    async sendRequest() {
      const res = await getData({
        url: "/home_configuration/api_index/getCarouselInfo"
      }).then(res => res.data);
      this.carouselData = res;
      return this.carouselData;
    }
  },

  data() {
    return {
      carouselData: []
    };
  },
  created() {
    this.sendRequest();
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>

.carousel{
  margin: 2vh 0;
}
.carousel-item {
    width:100%;
  img {
    height:30vh;
    border-radius: 5px;
  }
}

.carousel-indicators li {
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  margin: 0 1vw;
}
</style>