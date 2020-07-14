<template>
  <div class="change-password">
    <nav-bar />
    {{userToken.mobile}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import navBar from "@/components/Profile/NavBar.vue";
export default {
  components: { navBar },
  data() {
    return {
      
    };
  },
  created() {
    this.changePassword();
  },
  methods: {
    async changePassword() {
      const res = await this.getData({
        url: "/member/api_index/forgetPassword",
        data: {
          type: this.$route.query.type,
          mobile: this.userToken.mobile,
          mobile_code: this.$route.query.mobile_code
        }
      });
      console.log(res);
    }
  },
  computed: {
    ...mapState(["userToken"])
  }
};
</script>