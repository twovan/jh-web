<template>
  <div id="jhmfooter">
    <span>
      <a href="#">隐私政策</a> |
      <a href="#">使用条款</a> |
      <a href="#">法律信息</a> |
      <a href="#">网站地图</a> |
      <a href="#">友情链接</a>
      <br>
      <br>Copyright © 2002-2018
      <br>
      <a href="www.jhhs-h.com" target="_blank">www.jhhs-h.com</a> 嘉禾弘生
      <br>All Rights Reserved.
    </span>
    <img alt="logo" id="logo" src="/static/img/pc/footer-logo.png">
  </div>
</template>
<script>
export default {
  name: 'jhMFooter',
  props: [],
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
#jhmfooter {
  position: relative;
  width: 100%;
  height: 100px;
  font-size: 10px;
  text-align: left;
  span {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
  }
  img {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 100px;
  }
  a {
    text-decoration: underline;
  }
  a:link,
  a:visited {
    color: #b4b4b4;
  }
}
</style>
