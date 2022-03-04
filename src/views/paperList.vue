<!--
 * @Author: Amero
 * @Date: 2022-03-03 22:46:30
 * @LastEditors: Amero
 * @LastEditTime: 2022-03-04 23:21:12
 * @FilePath: \vue-demo-1\src\views\paperList.vue
-->
<template>
  <div class="paperlist">
    <el-dialog
      title="Tip"

      :visible.sync="dialogVisible"
      :close-on-click-modal = "false"
      :show-close= "false"
      width="30%"
      
    >
      <span>Did you jump to the test paper page?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="toShowPdfPage"
          >Confirm</el-button
        >
      </span>
    </el-dialog>

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
import axios from "axios";
let globalObject = require("../assets/globalAssets/globaldata");
export default {
  data: () => ({
    paperList: globalObject.pdf_LISTINFO,
    dialogVisible:false
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
      const listURL = "http://123.57.7.40:5000/getcloudfile/list";
      axios
        .get(listURL)
        .then((data) => {
          globalObject.pdf_LISTINFO = [];
          this.paperList = [];
          for (let i = 0; i < data.data.objects.length; i++) {
            if (this.fileFilter(data.data.objects[i].name)) {
              this.paperList.push(data.data.objects[i]);
            }
          }
          globalObject.pdf_LISTINFO = this.paperList;
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    api_headFile: function (_filename) {
      const headURL = "http://123.57.7.40:5000/getcloudfile/head";
      axios
        .get(headURL, {
          params: {
            filename: _filename,
          },
        })
        .then((data) => {
          globalObject.pdf_URL = data.data.res.requestUrls[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    btn_ShowPaperList: function () {
      this.api_showList();
    },
    btn_HeadPaper: function () {
      this.api_headFile(globalObject.pdf_FILENAME);
    },
    toShowPdfPage: function () {
      this.dialogVisible = false;
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
    handleCurrentChange: function (currentRow) {
      globalObject.pdf_FILENAME = currentRow.name;
      globalObject.pdf_URL = currentRow.url;
      this.dialogVisible = true
    },
  },
  mounted: function () {
    this.btn_ShowPaperList();
  },
};
</script>
<style>
.paperlist .mainBox {
}
.paperlist .el-dialog__wrapper{
  transition-duration: 0.3s !important;
}
</style>
