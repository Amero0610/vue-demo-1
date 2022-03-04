<!--
 * @Author: Amero
 * @Date: 2022-02-02 21:10:35
 * @LastEditors: Amero
 * @LastEditTime: 2022-03-04 22:59:30
 * @FilePath: \vue-demo-1\src\views\menuPage\pdfPage.vue
-->
<template>
  <div id="pdfContent">
    <el-empty
      v-if="!showPage"
      :image-size="300"
      description="You have not selected a test paper."
    >
      <el-button type="primary" plain @click="btn_selectPaper">Select Paper</el-button>
    </el-empty>
    <iframe
      v-if="showPage"
      :src="pdfUrl"
      frameborder="0"
      height="100%"
      width="100%"
    />
  </div>
</template>
<script>
//let pdfFileCloudURL = "https://my-imagestore.oss-cn-beijing.aliyuncs.com/testFile/CET-6-2018%E5%B9%B406%E6%9C%88%E7%AC%AC3%E5%A5%97%E5%8D%B7.pdf";
let globalObject = require("../../assets/globalAssets/globaldata");
export default {
  data() {
    return {
      showPage: globalObject.pdf_URL,
      //pdfUrl:"./pdfjs-2.12.313-dist/web/viewer.html?file="+"http://123.57.7.40:5057/煤气灯效应.pdf",
      pdfUrl:
        "./pdfjs-2.12.313-dist/web/viewer.html?file=" + globalObject.pdf_URL,
    };
  },
  methods:{
      btn_selectPaper:function(){
          this.$router.push("/showpaperlist");
      },
  }
};
</script>
<style>
#pdfContent {
  width: 100%;
  height: calc(100vh - 60px);
  /* background-color: red; */
}
</style>