<template>
    <div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="bg">
      <img alt="logo" src="../assets/home.png" width="40%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
  },
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 54px;
    opacity: 0.75;
    line-height: 350px;
    margin: 0;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .bg{
    width: 100%;
    height: 800px;
    background: url("../assets/home-bg.png");
    text-align: center;
    img{
      width: 40%;
      margin-top: 100px;
    }
  }
</style>
