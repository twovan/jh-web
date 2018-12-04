<template>
  <div class="client">
    <img alt="logo" id="logo" src="../assets/m-img/client-1.png" width="100%">
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
.client {
  text-align: center;
  overflow: hidden;
  background: url("/static/img/client.png") no-repeat;
  background-size: cover;
  img {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
