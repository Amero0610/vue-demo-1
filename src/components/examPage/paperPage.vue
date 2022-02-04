<!--
 * @Author: Amero
 * @Date: 2022-02-05 00:52:23
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 01:12:22
 * @FilePath: \vue-demo-1\src\components\examPage\paperPage.vue
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
  name: "paperpage",
  components: {
    questioncom,
  },
  data() {
    return {
      questionList: [
        {
          userAns: "value_1",
          questionNo: 10,
          questionContent: "This is Question10",
          AnsA: "10Ans A",
          AnsB: "10Ans B",
          AnsC: "10Ans C",
          AnsD: "10Ans D",
        },
        {
          userAns: "value_2",
          questionNo: 11,
          questionContent: "This is Question11",
          AnsA: "11Ans A",
          AnsB: "11Ans B",
          AnsC: "11Ans C",
          AnsD: "11Ans D",
        },
      ],
      pageTitle: "Paper Page",
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
      this.$emit("paperAns", data);
    },
  },
};
</script>