<template>
  <el-header>
    <img alt="logo" id="logo" src="/static/img/pc/logo.png">
    <el-menu :default-active="defaultActive" class mode="horizontal" @select="handleSelect">
      <el-menu-item index="MIndex">首页</el-menu-item>
      <el-menu-item index="MAntiAging">抗衰老服务</el-menu-item>
      <el-menu-item index="MScience">科学研究</el-menu-item>
      <el-menu-item index="MCooperation">对外合作</el-menu-item>
      <el-menu-item index="MClient">客户服务</el-menu-item>
      <el-menu-item index="MContactUs">联系我们</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
export default {
  name: 'jhMHeader',
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
#logo {
  width: 120px;
  position: absolute;
  left: 10px;
  top: 25px;
  z-index: 999;
}
.el-header {
  background-color: #313131;
  height: 100px !important;
  position: relative;
  ul {
    background-color: #313131;
    font-weight: bolder;
    margin: auto 0px auto auto;
    border: 0;
    width: 210px;
  }
  li {
    color: #ffffff;
    font-size: 12px;
    width: 70px;
    text-align: center;
  }
  .is-active {
    color: #57b1ad;
    border-bottom: 2px #57b1ad solid;
  }
  .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0;
  }
}
</style>
