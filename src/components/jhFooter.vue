<template>
  <div id="jhfooter">
    <span>
      <a href="#">隐私政策</a> |
      <a href="#">使用条款</a> |
      <a href="#">法律信息</a> |
      <a href="#">网站地图</a> |
      <a href="#">友情链接</a>
      <br>
      <br>Copyright © 2002-2018
      <a href="www.jhhs-h.com" target="_blank">www.jhhs-h.com</a> 嘉禾弘生 All Rights Reserved.
      <img alt="logo" id="logo" src="/static/img/pc/footer-logo.png">
    </span>
  </div>
</template>
<script>
export default {
  name: 'jhFooter',
  props: [],
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
el-footer {
  height: 100px !important;
}
#jhfooter {
  position: relative;
  width: 100%;
  height: 100px;
  span {
    height: 60px;
    display: block;
    line-height: 20px;
    margin: 20px auto;
    width: 900px;

    img {
      position: absolute;
      bottom: 30px;
      right: 50px;
      width: 150px;
    }
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
