<template>
  <el-container>
    <jh-header :defaultActive="activeIndex" v-show="pcshow"></jh-header>
    <jh-m-header :defaultActive="activeIndex" v-show="mshow"></jh-m-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <jh-footer v-show="pcshow"></jh-footer>
      <jh-m-footer v-show="mshow"></jh-m-footer>
    </el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
<script>
// 全局图标
/* eslint-disable */
import "./sass/icons/iconfont.scss";
import "./sass/icons/iconfont";
import "./sass/default.scss";
import jhHeader from "@/components/jhHeader";
import jhFooter from "@/components/jhFooter";
import jhMHeader from "@/components/jhMHeader";
import jhMFooter from "@/components/jhMFooter";

export default {
  data() {
    return {
      // activeIndex: "Index",
      pcshow: false,
      mshow: false
    };
  },
  components: {
    jhHeader,
    jhFooter,
    jhMHeader,
    jhMFooter
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      console.log("手机端");
      this.$router.replace("/m_index");
      this.activeIndex="MIndex";
      this.mshow = true;
    } else {
      console.log("pc端");
      this.$router.replace("/pc_index");
       this.activeIndex="Index";
      this.pcshow = true;
    }
  },
  created() {}
};
</script>