<!--
 * @Author: Amero
 * @Date: 2022-02-10 19:06:55
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-14 21:03:36
 * @FilePath: \vue-demo-1\src\views\userinfo.vue
-->
<template>
  <div id="userinfoBox">
    <p>UserInfo Table</p>
    <div class="userInfoMainbox">
      <div class="optionBox">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4"> <p>User Name:</p> </el-col>
          <el-col :span="9">
            <el-input
              class="myinputbox"
              v-model="userInfoList.name"
              placeholder=""
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="optionBox">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4"> <p>Sex:</p> </el-col>
          <el-col :span="9">
            <el-select
              class="myinputbox"
              v-model="userInfoList.sex"
              placeholder="Please select sex"
            >
              <el-option label="Male" value="M"> </el-option>
              <el-option label="Female" value="F"> </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="optionBox">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4"> <p>Email:</p> </el-col>
          <el-col :span="9">
            <el-input
              class="myinputbox"
              v-model="userInfoList.email"
              placeholder="Please input your email"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="optionBox">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4"> <p>StuNo:</p> </el-col>
          <el-col :span="9">
            <el-input
              class="myinputbox"
              v-model="userInfoList.number"
              placeholder="Please input your number"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="optionBox">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="4"></el-col>
          <el-col :span="9">
            <el-button
              class="subBtn"
              type="primary"
              :disabled="isSubmit"
              @click="submitClick"
              >Submit</el-button
            >
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
@import url("./../../public/font-awesome-4.7.0/css/font-awesome.min.css");

.optionBox p {
  text-align: right;
  margin-right: 20px;
}
.userInfoMainbox {
}
.userInfoMainbox .el-button {
  margin-top: 10px;
}
</style>
<script>
import axios from 'axios';
// const URL_USERINFO = "http://127.0.0.1:3000/data/userinfo/user";
const URL_USERLOGIN = "http://127.0.0.1:3000/data/userlogin/"
export default {
  data: () => ({
    isSubmit: true,
    userInfoList: {
      name: "",
      sex: "",
      email: "",
      number: "",
    },
  }),
  methods: {
    api_getuserInfo:function(){
      axios.get(
        URL_USERLOGIN,{
          headers:{
            getvalue:"true",
          },
          params:{
            userId:"970"
          }
      }).then(data=>{
        console.log(data.data);
      })
    },
    submitClick: function () {
      console.log( JSON.stringify(this.userInfoList));

      
    },
    judgeIsDisable: function (dataList) {
      let jIndex = 0;
      let valueArray = Object.values(dataList);
      valueArray.forEach(function (item) {
        if (item != "") {
          jIndex++;
        }
      });
      jIndex == Object.keys(dataList).length
        ? (this.isSubmit = false)
        : (this.isSubmit = true);
    },
  },
  watch: {
    userInfoList: {
      handler: function (newVal) {
        this.judgeIsDisable(newVal);
      },
      deep: true,
    },
  },
};
</script>
