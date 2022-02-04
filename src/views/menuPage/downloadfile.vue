<template>
  <div id="mainbox">
    <el-row justify="center" type="flex" align="middle">
      <el-col :span="10"> <p class="title">CET Paper Download</p></el-col>
    </el-row>
    <div class="optionBox">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="3"> <p>Exam:</p> </el-col>
        <el-col :span="9">
          <el-select
            v-model="examValue"
            placeholder="Please sleect exam type"
            class="myinputbox"
          >
            <el-option label="CET-6" value="cet6"> CET-6</el-option>
            <el-option label="CET-4" value="cet4"> CET-4</el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="optionBox">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="3"> <p>Year:</p> </el-col>
        <el-col :span="9">
          <el-input
            class="myinputbox"
            v-model="yearValue"
            placeholder="Please input year"
            maxlength="4"
          ></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="optionBox">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="3"> <p>Month:</p> </el-col>
        <el-col :span="9">
          <el-select
            class="myinputbox"
            v-model="monthValue"
            placeholder="Please sleect month type"
          >
            <el-option label="June" value="06"> June</el-option>
            <el-option label="December" value="12"> December</el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="optionBox">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="3"> <p>Index:</p> </el-col>
        <el-col :span="9">
          <el-select
            class="myinputbox"
            v-model="indexValue"
            placeholder="Please select paper number"
          >
            <el-option label="Type 1" value="01"> Type 1</el-option>
            <el-option label="Type 2" value="02"> Type 2</el-option>
            <el-option label="Type 3" value="03"> Type 3</el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="2">
        <el-button
          class="subBtn"
          type="primary"
          round
          :disabled="isDownload"
          @click="downloadClick"
          >Download</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>
<style>
#mainbox {
  width: 100%;
  height: 500px;
}
#mainbox .title {
  font-size: 23px;
  margin-top: 20px;
  font-weight: 500;
}
.optionBox {
  margin-top: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: pink; */
}
#mainbox .el-button {
  margin-top: 20px;
}
.myinputbox {
  width: 100%;
}
</style>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      examValue: "",
      yearValue: "",
      monthValue: "",
      indexValue: "",
      isDownload: true,
      downloading: false,
    };
  },
  //     year:this.yearValue,
  //   exam:this.examValue,
  //   month:this.monthValue,
  //   index:this.indexValue
  methods: {
    showLoading: function () {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      return loading;
    },
    downloadClick: function () {
      let loadingobj = this.showLoading();
      this.downloading = true;
      Axios({
        method: "POST",
        url: "http://123.57.7.40:5000/downfile/d",
        params: {
          year: this.yearValue,
          exam: this.examValue,
          month: this.monthValue,
          index: this.indexValue,
        },
      })
        .then((response) => {
          if (response.data) {
            this.$alert("Download Successfully!", "Message", {
              confirmButtonText: "Confirm",
            }).then(() => {
              loadingobj.close();
            });
          }
          if (response.data.errorCode == 1) {
            alert("failed");
            console.log("failed1");
          }
        })
        .catch((reserror) => {
          console.log(reserror);
          alert("cuowu ");
        });
    },
  },
  computed: {
    newparms: function () {
      let downloadParms = {
        exam: this.examValue,
        year: this.yearValue,
        month: this.monthValue,
        index: this.indexValue,
      };
      return downloadParms;
    },
  },
  watch: {
    newparms: function (val) {
      if (
        val.exam != "" &&
        val.year != "" &&
        val.month != "" &&
        val.index != ""
      ) {
        this.isDownload = false;
      } else {
        this.isDownload = true;
      }
    },
  },
};
</script>