<template>
  <el-container>
  <jh-header :defaultActive="activeIndex"></jh-header>
  <el-main>
  <router-view></router-view>
  </el-main>
  <el-footer>
  <jh-footer></jh-footer>
  </el-footer>
</el-container>
</template>

<script>
// 全局图标
/* eslint-disable */
import "./sass/icons/iconfont.scss";
import "./sass/icons/iconfont";
import "./sass/default.scss";
import jhHeader from '@/components/jhHeader'
import jhFooter from '@/components/jhFooter'


export default {
  data(){
    return {
      activeIndex: "1"
    }
  },
  components: {
    jhHeader,
    jhFooter
  },
  methods: {
  },
  created() {}
}
</script>
