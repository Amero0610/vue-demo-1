<!--
 * @Author: Amero
 * @Date: 2022-02-05 00:29:01
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 02:53:14
 * @FilePath: \vue-demo-1\src\views\examPage\examPage.vue
-->
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class=""></i>Listen</span>

        <listenpage @listenAns="listenAns"></listenpage>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class=""></i>Read</span>
        <readpage @readAns="readAns"></readpage>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class=""></i>Translate</span>
        <translatepage @translateAns="translateAns"></translatepage>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class=""></i>Paper</span>
        <paperpage @paperAns="paperAns"></paperpage>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" plain @click="submitAns">SubmitAns</el-button>
  </div>
</template>
<script>
import listenpage from "../../components/examPage/listenPage.vue";
import readpage from "../../components/examPage/readPage.vue";
import translatepage from "../../components/examPage/translatePage.vue";
import paperpage from "../../components/examPage/paperPage.vue";
export default {
  components: {
    listenpage,
    readpage,
    translatepage,
    paperpage,
  },
  data() {
    return {
      Ans: {},
    };
  },
  methods: {
    listenAns: function (data) {
      this.Ans.listenAns = data;
    },
    readAns: function (data) {
      this.Ans.readAns = data;
    },
    translateAns: function (data) {
      this.Ans.translateAns = data;
    },
    paperAns: function (data) {
      this.Ans.paperAns = data;
    },
    createAnsString: function (answerName, answerData) {
      if (answerData == undefined) {
        return answerName + "";
      }
      let tempStr = "";
      let templen = answerData.length;
      tempStr = tempStr + answerName + ":";
      for (let i = 0; i < templen; i++) {
        tempStr =
          tempStr +
          (i + 1).toString() +
          "." +
          answerData[i].toString() +
          " &nbsp";
      }
      return tempStr;
    },
    showNotify: function () {
      let listenAnsStr = this.createAnsString("Listen", this.Ans.listenAns);
      let readAnsStr = this.createAnsString("Read", this.Ans.readAns);
      let translateAnsStr = this.createAnsString(
        "Translate",
        this.Ans.translateAns
      );
      let paperAnsStr = this.createAnsString("Paper", this.Ans.paperAns);
      this.$message({
        type: "success",
        dangerouslyUseHTMLString: true,
        message:
          listenAnsStr +
          "<br> <br>" +
          readAnsStr +
          "<br> <br>" +
          translateAnsStr +
          "<br> <br>" +
          paperAnsStr,
      });
    },
    submitAns: function () {
      if (Object.keys(this.Ans).length != 4) {
        this.$confirm(
          "You have not answered all the questions, do you want to continue to answer",
          "Warning",
          {
            confirmButtonText: "Continue",
            cancelButtonText: "Submit",
            type: "warning",
            closeOnClickModal: false,
            center: true,
          }
        )
          .then(() => {
            this.$notify({
              title: "Notification",
              message: "Please continue to answer",
              type: "success",
            });
          })
          .catch(() => {
            this.$notify({
              title: "Notification",
              message: "Your answer has been submitted",
              type: "success",
            });

            this.showNotify();
          });
      } else {
        this.showNotify();
      }
    },
  },
};
</script>