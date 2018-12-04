<template>
  <div class="footer">
    <span>
      <a href="#">隐私政策</a>   |   <a href="#">使用条款</a>   |   <a href="#">法律信息</a>   |   <a href="#">网站地图</a>   |   <a href="#">友情链接</a><br><br>
      Copyright © 2002-2018 <a href="www.jhhs-h.com" target="_blank">www.jhhs-h.com</a> 嘉禾弘生 All Rights Reserved.
    </span>
     <img alt="logo" id="logo" src="../assets/footer-logo.png">
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
<style lang="scss">
.el-footer {
  background-color: #777777;
  padding: 0;
  text-align: center;
  color: #b4b4b4;
  // line-height: 100px;
  height: 100px !important;
  margin-top: -10px;
  position: relative;
  float: left;
  span {
    margin-top: 20px;
    display: block;
  }
  img{
    position: absolute;
    top: 12.5px;
    right: 50px;
    width: 150px;
  }
  a {
    text-decoration: underline;
  }
  a:link,a:visited{color:#b4b4b4;}
}
</style>
