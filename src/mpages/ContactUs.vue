<template>
  <div class="contactus">
    <div>
      <img alt="logo" id="science1" src="/static/img/mobile/contactus-1.png" width="100%">
    </div>
    <div>
      <img alt="logo" id="science2" src="/static/img/mobile/contactus-2.png" width="100%">
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
.contactus {
  overflow: hidden;
  background-color: #eeeeee;
  div {
    width: 100%;
    float: left;
  }
  #science2 {
    margin: 10px auto 10px auto;
  }
}
</style>
