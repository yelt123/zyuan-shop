<template>
  <div class="address">
    <nav-bar :title="title" />
    <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- <router-link class="buttom" tag="div" :to="{path:'/EditAddress'}">添加地址</router-link> -->
  </div>
</template>
<script>
import navBar from "@/components/Profile/NavBar.vue";
import { getData } from "@/services/getData.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      title: this.$route.meta.title,
      addressList: [],
      chosenAddressId: "1",
      i: 1
    };
  },
  components: {
    navBar
  },
  created() {
    this.getAddress();

  },
  activated() {
    this.i = 1;
    this.getAddress();
  },
  mounted() {
    // console.log(this.addressList);
  },
  methods: {
    async getAddress() {
      const res = await getData({
        url: "/member_address/api_index/getAddressList",
        data: {
          uid: window.localStorage.uid
        }
      });
      this.addressList = [];

      for (let i = 0; i < res.data.length; i++) {
        let {
          id,
          receive_name: name,
          receive_phone: tel,
          address,
          is_default: isDefault
        } = res.data[i];
        if (isDefault === "1") {
          isDefault = true;
        } else {
          isDefault = false;
        }
        const obj = {
          id,
          name,
          tel,
          address,
          isDefault
        };
        this.addressList.push(obj);
      }
    },
    onAdd() {
      this.$router.push({ path: "/EditAddress" });
      Toast("新增地址");
    },
    onEdit(item, index) {
      if (this.i === 1) {
        this.$router.push({ path: "/EditAddress" });
        this.i++;
      } else {
        this.$router.replace({ path: "/EditAddress" });
      }

      Toast("编辑地址:" + index);
    }
  }
};
</script>
<style lang='scss' scoped>
.address {
  width: 100%;
  height: 100%;
  .buttom {
    width: 90%;
    height: 7vh;
    background-color: #dc3545;
    position: fixed;
    bottom: 0;
    border-radius: 2rem;
    line-height: 7vh;
    text-align: center;
    font-size: 18px;
    color: #fff;
    left: 5%;
  }
}
</style>