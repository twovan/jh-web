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
      activeIndex: "Index",
      pcshow: true,
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
      if (flag) {
        this.activeIndex = "MIndex";
        this.mshow = true;
        this.pcshow = false;
        this.$router.replace("/m_index");
        console.log("手机端");
        console.log(this.mshow);
      } else {
        this.activeIndex = "Index";
        this.$router.replace("/pc_index");
        console.log("pc端");
        console.log(this.mshow);
      }
    }
  },
  mounted() {
    this._isMobile();
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.el-footer {
  height: 100px !important;
  background-color: #777777;
  text-align: center;
  color: #b4b4b4;
  overflow: hidden;
}
</style>