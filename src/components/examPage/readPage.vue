<!--
 * @Author: Amero
 * @Date: 2022-02-05 00:51:58
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 01:46:53
 * @FilePath: \vue-demo-1\src\components\examPage\readPage.vue
-->
<template>
  <div>
    <questioncom
      :pageTitle="pageTitle"
      :questionList="questionList"
      @sendAns="getAns"
    ></questioncom>
  </div>
</template>
<script>
import questioncom from "./questionCom.vue";
export default {
  name: "readpage",
  components: {
    questioncom,
  },
  data() {
    return {
      questionList: [
        {
          userAns: "value",
          questionNo: 10,
          questionContent: "This is Question10",
          AnsA: "10Ans A",
          AnsB: "10Ans B",
          AnsC: "10Ans C",
          AnsD: "10Ans D",
        },
        {
          userAns: "value",
          questionNo: 11,
          questionContent: "This is Question11",
          AnsA: "11Ans A",
          AnsB: "11Ans B",
          AnsC: "11Ans C",
          AnsD: "11Ans D",
        },
      ],
      pageTitle: "Read Page",
    };
  },
  methods: {
    getAns: function (data) {
      this.$notify({
        title: "Notification",
        message: "Your answer have been saved!",
        type: "success",
        showClose: false,
      });
      this.$emit("readAns", data);
    },
  },
};
</script>