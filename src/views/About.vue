<template>
  <div>
    <div id="Informationbox">
      <p v-show="!ishowInputBox">Please verify your account</p>
      <p v-show="ishowInputBox">Please enter your information</p>
    </div>
    <el-row type="flex" justify="center">
      <div class="ResultBoard" v-show="isshowResult">
        <el-result
          icon="success"
          title="Success"
          subTitle="You have successfully verified"
        >
          <template slot="extra">
            <el-button type="primary" size="medium" @click="ResultBtn">
              Back</el-button
            >
          </template>
        </el-result>
      </div>
      <el-col :span="12" v-show="ishowInputBox">
        <div class="InputBox">
          <el-row type="flex" align="middle">
            <el-col :span="7"> <p>Username:</p></el-col>
            <el-col :span="18">
              <el-input
                placeholder="Please Input Username"
                v-model="Username"
                :clearable="isclearable"
                maxlength="10"
                show-word-limit
              ></el-input
            ></el-col>
          </el-row>
          <el-row type="flex" align="middle">
            <el-col :span="7">
              <el-tooltip class="item" effect="dark" placement="left">
                <div slot="content">
                  Use 6 or more characters<br />Must contain 1 letter<br />Must
                  contain 1 number<br />Max 50 characters
                </div>

                <p>Password:</p>
              </el-tooltip>
            </el-col>

            <el-col :span="18">
              <el-input
                placeholder="Please Input Password"
                v-model="Password"
                show-password
                :clearable="isclearable"
                maxlength="18"
              ></el-input
            ></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" v-show="ishowInputBox">
      <el-col :span="12">
        <div id="selectbox">
          <el-row type="flex" align="middle" justify="center">
            <el-col :span="17">
              <el-select
                v-model="selectValue"
                placeholder="Please Select"
                :clearable="isclearable"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
            ></el-col>
          </el-row>
          <el-row type="flex" align="middle" justify="center">
            <el-col :span="17"
              ><el-button
                type="primary"
                plain
                :disabled="isdisabled"
                round
                @click="SubmitBtn"
                >Submit</el-button
              ></el-col
            >
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
#Informationbox {
  width: 300px;
  font-size: 18px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#Informationbox .el-input {
  width: 230px;
}
.loadingbox {
  width: 100%;
  height: 100px;
}
.InputBox {
  text-align: left;
  width: 300px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.InputBox .el-row {
  margin-top: 10px;
}
#selectbox {
  font-size: 18px;
  width: 300px;
  height: 300px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  /* background-color: pink; */
}
#selectbox .el-select {
  margin-top: 10px;
}
#selectbox .el-button {
  margin-top: 10px;
}
</style>
<script>
import globalfile from "./../assets/globalAssets/global.js";
import abouttest from "./../components/HeaderPage/Board.vue";
export default {
  inject: ["reload"],
  data() {
    return {
      isclearable: true,
      ishowInputBox: globalfile.isShowInputbox,
      isshowResult: globalfile.UserToken,
      isloading: true,
      Username: "",
      Password: "",
      selectValue: "",
      isdisabled: true,
      index: 0,
      options: [
        {
          value: "value 1",
          label: "label 1",
        },
        {
          value: "value 2",
          label: "label 2",
        },
        {
          value: "value 3",
          label: "label 3",
        },
        {
          value: "value 4",
          label: "label 4",
        },
        {
          value: "value 5",
          label: "label 5",
        },
      ],
    };
  },
  methods: {
    SubmitBtn() {
      if (this.Password.length >= 6) {
        let tempJson = {};
        tempJson.Username = this.Username;
        tempJson.Password = this.Password;
        tempJson.selectValue = this.selectValue;
        this.$notify({
          title: tempJson.Username,
          message: "Successfully submitted!",
          type: "success",
        });
        console.log(JSON.stringify(tempJson));
      } else {
        this.Password = "";
        this.$notify.error({
          title: "Error",
          message: "The minimum password length is 6",
        });
      }
    },
    ResultBtn() {
      globalfile.Username = globalfile.tempObjectvar.Username;
      globalfile.UserToken = false;
      this.isshowResult = globalfile.UserToken;
      globalfile.isShowInputbox = true;
      this.ishowInputBox = globalfile.isShowInputbox;
      this.reload();
      this.isloading = false;
      abouttest.test(globalfile.Username);
      console.log(globalfile.Username);
    },
  },
  computed: {
    newparms: function () {
      let tempObject = {
        Username: this.Username,
        Password: this.Password,
        selectValue: this.selectValue,
      };
      return tempObject;
    },
  },
  watch: {
    newparms: function (val) {
      if (val.Username != "" && val.Password != "" && val.selectValue != "") {
        this.isdisabled = false;
      } else {
        this.isdisabled = true;
      }
    },
    isshowResult: function (val) {
      this.isshowResult = val;
      console.log("watch success");
    },
    Username: function (val) {
      if (val.length == 10) {
        this.$notify({
          title: "Warning",
          message: "Maximum length reached",
          type: "warning",
        });
      }
    },
  },
};
</script>
