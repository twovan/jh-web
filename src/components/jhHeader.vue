<template>
<el-header>
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">page1</el-menu-item>
      <el-menu-item index="2">page2</el-menu-item>
      <el-menu-item index="3">page3</el-menu-item>
      <el-menu-item index="4">page4</el-menu-item>
      <el-menu-item index="5">page5</el-menu-item>
      <el-menu-item index="6">page6</el-menu-item>
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
      this.$router.push({ name: 'page' + index })
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-header{
    // background-color:red;
  }
</style>
