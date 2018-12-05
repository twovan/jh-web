<template>
  <div class="client">
    <img alt="logo" id="logo" src="/static/img/pc/client-1.png" width="60%">
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
  background: url("/static/img/pc/client.png") no-repeat;
  background-size: cover;
  height: 800px;
  img {
    margin-top: 110px;
  }
}
</style>
