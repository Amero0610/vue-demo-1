<!--
 * @Author: Amero
 * @Date: 2022-02-03 19:54:07
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 02:48:46
 
-->

<template>
  <div>
    <p id="title">{{pageTitle}}</p>
    <div id="testbox">
      <div
        class="questionBox"
        v-for="(item, index) in questionList"
        :key="index"
      >
        <el-row type="flex" justify="" align="middle">
          <el-col :span="24">
            <el-card>
              <el-row type="flex" justify="start" align="middle">
                <el-col :span="2">
                  <p class="questionNo">{{ item.questionNo }}.</p>
                </el-col>
                <el-col :span="10">
                  <p class="quesitonContent">{{ item.questionContent }}</p>
                </el-col>
              </el-row>

              <el-row class="option" type="flex" justify="start" align="middle">
                <el-col :span="1">
                  <el-radio v-model="item.userAns" label="A"> </el-radio>
                </el-col>
                <el-col :span="1" class="optiontext_1">
                  <span>A</span>
                </el-col>
                <el-col :span="21" :push="1" :offset="0" class="optiontext_2">
                  <span class="optiontext_2">{{ item.AnsA }}</span>
                </el-col>
              </el-row>
              <el-row class="option" type="flex" justify="start" align="middle">
                <el-col :span="1">
                  <el-radio v-model="item.userAns" label="B"></el-radio>
                </el-col>
                <el-col :span="1" class="optiontext_1">
                  <span>B</span>
                </el-col>
                <el-col :span="21" :push="1" :offset="0" class="optiontext_2">
                  <span class="optiontext_2">{{ item.AnsB }}</span>
                </el-col>
              </el-row>
              <el-row class="option" type="flex" justify="start" align="middle">
                <el-col :span="1">
                  <el-radio v-model="item.userAns" label="C"></el-radio>
                </el-col>
                <el-col :span="1" class="optiontext_1">
                  <span>C</span>
                </el-col>
                <el-col :span="21" :push="1" :offset="0" class="optiontext_2">
                  <span class="optiontext_2">{{ item.AnsC }}</span>
                </el-col>
              </el-row>
              <el-row class="option" type="flex" justify="start" align="middle">
                <el-col :span="1">
                  <el-radio v-model="item.userAns" label="D"></el-radio>
                </el-col>
                <el-col :span="1" class="optiontext_1">
                  <span>D</span>
                </el-col>
                <el-col :span="21" :push="1" :offset="0" class="optiontext_2">
                  <span class="optiontext_2">{{ item.AnsD }}</span>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div id="clear_both"></div>
    <div id="submitBtn">
      <!-- :disabled="isDisabled"  -->
      <el-button type="primary" @click="getValue()" :disabled="isDisabled" plain
        >Submit Answer</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "questioncom",
  props: ["questionList","pageTitle"],
  data() {
    return {
      isDisabled: true,
      
    };
  },
  methods: {
    getValue: function () {
      let ansList = new Array();
      for (let i = 0; i < this.questionList.length; i++) {
        ansList.push(this.questionList[i].userAns);
 
      }
      this.$emit('sendAns',ansList);
  
    },
    judgeIsDisable: function (dataList) {
      let jIndex = 0;
      // dataList[i].userAns == "A" ||
      // dataList[i].userAns == "B" ||
      // dataList[i].userAns == "C" ||
      // dataList[i].userAns == "D"
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].userAns >= "A" && dataList[i].userAns <= "D") {
          jIndex++;
        }
      }
      jIndex == dataList.length
        ? (this.isDisabled = false)
        : (this.isDisabled = true);
    },
  },
  watch: {
    questionList: {
      handler: function (newVal) {
        this.judgeIsDisable(newVal);
      },
      deep: true,
    },
  },
};
</script>
<style>
#clear_both {
  clear: both;
}
#testbox {
  width: 100%;
}
/* ../../assets/font/GravityBold-JAp7.otf */
@font-face {
  font-family: "questionFont";
  src: url("../../assets/font/GravityBold-JAp7.otf");
}
@font-face {
  font-family: "ansFont";
  src: url("../../assets/font/Gravity-V546.otf");
}
.questionBox {
  /* font-family: 'questionFont'; */

  /* font-family: 'Montserrat', sans-serif; */
  /* font-weight: ; */
  width: 49%;
  margin-top: 3%;
  float: left;
  border-right: 3px solid white;
}
#title {
  color: black;
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 0px;
}
.question {
  text-align: left;
}
.quesitonContent,
.questionNo {
  font-size: 18px;
  font-weight: 500;
  font-family: "questionFont";
}

.quesitonContent {
  text-align: left;
}
.option {
  /* background-color: gray; */
  margin-top: 3vh;
  width: 100%;
}
.el-radio__label {
  display: none;
}
.optiontext_1 {
  text-align: right;
  font-size: 16px;
}
.optiontext_2 {
  text-align: left;
  font-size: 16px;
}
#submitBtn {
  width: 100%;
  margin-top: 3%;
}
</style>