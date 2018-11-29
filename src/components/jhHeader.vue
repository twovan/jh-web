<template>
<el-header>
  <!-- <img alt="logo" src="../assets/logo.png"> -->
    <el-menu :default-active="defaultActive" class="" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="antiaging">抗衰老服务</el-menu-item>
      <el-menu-item index="science">科学研究</el-menu-item>
      <el-menu-item index="cooperation">对外合作</el-menu-item>
      <el-menu-item index="client">客户服务</el-menu-item>
      <el-menu-item index="contactus">联系我们</el-menu-item>
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
  .el-header{
    background-color:#313131;
    height: 100px;
    ul{
      background-color: #313131;
      font-weight: bolder;
    }
    li{
      color: #ffffff;
    }
    .is-active{
      color: #57b1ad;
      border-bottom: 2px #57b1ad solid;
    }
  }
</style>
