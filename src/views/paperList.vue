<!--
 * @Author: Amero
 * @Date: 2022-03-03 22:46:30
 * @LastEditors: Amero
 * @LastEditTime: 2022-03-04 01:30:49
 * @FilePath: \vue-demo-1\src\views\paperList.vue
-->
<template>
  <div class="paperlist">
    <div class="mainBox">this is paper list</div>
    <el-button type="primary" @click="btn_ShowPaperList"
      >Show Paper List</el-button
    >
    <el-button type="primary" @click="btn_HeadPaper">Set File url</el-button>
    <el-table
      :data="paperList"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column label="PaperName" property="name">
        <template slot-scope="scope">{{
          scope.row.name | nameFilter
        }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
let globalObject = require("../assets/globalAssets/globaldata");
let OSS = require("ali-oss");
let client = new OSS({
  region: "oss-cn-beijing",
  accessKeyId: "LTAI5tKQaN8iUWRYMWzCrVtQ",
  accessKeySecret: "2aEoPPFQoLMAgIEv0qfMv1EJhXyiSc",
  bucket: "my-imagestore",
  secure: true,
});
export default {
  data: () => ({
    paperList: globalObject.pdf_LISTINFO,
  }),
  filters: {
    nameFilter: function (remote_filename) {
      let filenameArray = remote_filename.split("/");
      return filenameArray[filenameArray.length - 1];
    },
  },
  methods: {
    fileFilter: function (remote_filename) {
      let filenameArray = remote_filename.split("/");
      if (filenameArray[0] == "testFile") {
        return true;
      } else {
        return false;
      }
    },
    api_showList: function () {
      client
        .list()
        .then((r1) => {
          globalObject.pdf_LISTINFO = [];
          this.paperList = [];
          for (let i = 0; i < r1.objects.length; i++) {
            if (this.fileFilter(r1.objects[i].name)) {
              this.paperList.push(r1.objects[i]);
            }
          }
          globalObject.pdf_LISTINFO = this.paperList;

          // globalObject.pdf_LISTINFO = this.paperList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    api_headFile: function (filename) {
      client
        .head(filename)
        .then((result) => {
          console.log(result);
          console.log(result.res.requestUrls[0]);
          globalObject.pdf_URL = result.res.requestUrls[0];
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    },
    btn_ShowPaperList: function () {
      this.api_showList();
    },
    btn_HeadPaper: function () {
      this.api_headFile(globalObject.pdf_FILENAME);
    },
    handleCurrentChange: function (currentRow) {
      console.log(currentRow);
      globalObject.pdf_FILENAME = currentRow.name;
      globalObject.pdf_URL = currentRow.url;
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.8)",
      });
      setTimeout(() => {
        loading.close();
        this.$router.push("/pdfpage");
      }, 987);
    },
  },
};
</script>
<style>
.paperlist .mainBox {
}
</style>
