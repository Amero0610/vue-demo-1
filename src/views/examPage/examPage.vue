<!--
 * @Author: Amero
 * @Date: 2022-02-05 00:29:01
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 22:23:26
 * @FilePath: \vue-demo-1\src\views\examPage\examPage.vue
-->
<template>
  <div>
    <!-- <el-collapse value="test" id="ansRecordPanel">
      <el-collapse-item name="test" title="Answer Record">
        <div id="ansRecordPanelBox">
          <ansrecord></ansrecord>
        </div>
      </el-collapse-item>
    </el-collapse> -->


    <el-tabs type="border-card" v-model="editableTabsValue">
      <el-tab-pane name="listenPart">
        <span slot="label"><i class=""></i>Listen</span>
        <listenpage @listenAns="listenAns"  ref="listenCom"></listenpage>
      </el-tab-pane>
      <el-tab-pane name="readPart">
        <span slot="label"><i class=""></i>Read</span>
        <readpage @readAns="readAns" ref="readCom"></readpage>
      </el-tab-pane>
      <el-tab-pane name="translatePart">
        <span slot="label"><i class=""></i>Translate</span>
        <translatepage @translateAns="translateAns" ref="translateCom"></translatepage>
      </el-tab-pane>
      <el-tab-pane name="paperPart">
        <span slot="label"><i class=""></i>Paper</span>
        <paperpage @paperAns="paperAns" ref="paperCom"></paperpage>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" plain @click="submitAns">SubmitAns</el-button>
  </div>
</template>
<script>
// import ansrecord from "../../components/examPage/ansRecord.vue";
import listenpage from "../../components/examPage/listenPage.vue";
import readpage from "../../components/examPage/readPage.vue";
import translatepage from "../../components/examPage/translatePage.vue";
import paperpage from "../../components/examPage/paperPage.vue";
export default {
  components: {
    listenpage,
    readpage,
    translatepage,
    paperpage
    // ansrecord
  },
  data() {
    return {
      Ans: {},
      editableTabsValue: "listenPart",
    };
  },
  methods: {
    listenAns: function (data) {
      this.Ans.listenAns = data;
      this.editableTabsValue = "readPart";
    },
    readAns: function (data) {
      this.Ans.readAns = data;
      this.editableTabsValue = "translatePart";
    },
    translateAns: function (data) {
      this.Ans.translateAns = data;
      this.editableTabsValue = "paperPart";
    },
    paperAns: function (data) {
      this.Ans.paperAns = data;
      this.submitAns();
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
    checkAnsPart: function (ansObject) {
      let temp = ["listenAns", "readAns", "translateAns", "paperAns"];
      let returnStr = "Unanswered part: <br>";
      let partList = Object.keys(ansObject);
      console.log(partList);
      for (let i = 0; i < temp.length; i++) {
        if (partList.indexOf(temp[i]) == -1) {
          returnStr =
            returnStr +
            temp[i].substring(0, temp[i].length - 3) +
            " Part" +
            "<br>";
        }
      }
      return returnStr;
    },
    submitAns: function () {
      // console.log(this.Ans);
      // console.log(Object.keys(this.Ans));
      if (Object.keys(this.Ans).length != 4) {
        let tempa = this.checkAnsPart(this.Ans);
        this.$confirm(
          "You have not answered all the questions, do you want to continue to answer <br>" +
            tempa,
          "Warning",
          {
            dangerouslyUseHTMLString: true,
            confirmButtonText: "Continue",
            cancelButtonText: "Submit",
            type: "warning",
            closeOnClickModal: false,
            center: false,
            roundButton: true,
            showClose: false,
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
<style >
/* #ansRecordPanel{
  width: 30%;
  }
#ansRecordPanelBox{
  background-color: rgb(245, 220, 224);
} */
</style>