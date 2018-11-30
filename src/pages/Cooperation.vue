<template>
  <div class="cooperation">
    <div id="bg1">
      <img alt="logo" id="science1" src="../assets/cooperation-bg1.png" width="30%">
    </div>
    <div id="bg2">
      <img alt="logo" id="science1" src="../assets/cooperation-bg2.png" width="50%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.cooperation {
  text-align: center;
  div {
    width: 100%;
  }
  img {
    margin: 50px auto;
  }
  #bg1 {
    background-color: #777777;
  }
  #bg2 {
    background-color: #dddddd;
  }
}
</style>
