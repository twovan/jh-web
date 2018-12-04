<template>
<el-header>
    <img alt="logo" id="logo" src="../assets/logo.png">
    <el-menu :default-active="defaultActive" class="" mode="horizontal" @select="handleSelect">
      <el-menu-item index="Index">首页</el-menu-item>
      <el-menu-item index="Antiaging">抗衰老服务</el-menu-item>
      <el-menu-item index="Science">科学研究</el-menu-item>
      <el-menu-item index="Cooperation">对外合作</el-menu-item>
      <el-menu-item index="Client">客户服务</el-menu-item>
      <el-menu-item index="Contactus">联系我们</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
export default {
  name: 'jhHeader',
  props: ['defaultActive'],
  data() {
    return {}
  },
  methods: {
    handleSelect(index, indexPath) {
      this.$router.push({ name: indexPath })
    }
  }
}
</script>
<style lang="scss" scoped>
  #logo{
    width: 120px;
    margin-left: -450px;
    position: absolute;
    left: 50%;
    top: 35px;
    z-index: 999;
  }
  .el-header{
    background-color:#313131;
    height: 120px !important;
    position: relative;
    ul{
      background-color: #313131;
      font-weight: bolder;
      width: 608px;
      margin: auto;
      border: 0;
    }
    li{
      color: #ffffff;
      font-size: 15px;
    }
    .is-active{
      color: #57b1ad;
      border-bottom: 2px #57b1ad solid;
    }
    .el-menu-item{
      height: 120px;
      line-height: 120px;
    }
  }
</style>
