<template>
  <div class="EditAddress">
    <nav-bar :title="title" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
import navBar from "@/components/Profile/NavBar.vue";
import AreaList from "@/utils/AreaList.js";
import { getData } from "@/services/getData.js";

export default {
  components: {
    navBar
  },
  data() {
    return {
      areaList: AreaList,
      searchResult: [],
      title: this.$route.meta.title
    };
  },
  // activated() {},
  updated(){
    location.reload();
  },
  methods: {
    async onSave(e) {
      
      const res = await getData({
        url: "/member_address/api_index/addAdress",

        data: {
          uid: window.localStorage.uid,
          receive_name: e.name,
          receive_phone: e.tel,
          cri_code: e.areaCode,
          address: `${e.province}${e.city}${e.county}${e.addressDetail}`,
          is_default: e.isDefault
        }
      });
      console.log(e);
      if (res.message === "添加成功") {
        this.$router.push("/Address");
      } else {
        alert("输入 有误");
        return;
      }
    },
    onDelete() {
      Toast("delete");
    }
  }
};
</script>