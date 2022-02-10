<template>
  <div>
    <el-tabs>
      <el-tab-pane
        ><span slot="label"
          ><i class="el-icon-my-zhijuanzhiqia"></i> Document</span
        >Document

        <el-button type="primary" @click="testfunc">Submit</el-button>
        <div v-show="isshowtestbox" class="testbox"></div>
        <div class="datepicker">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Select date"
            prefix-icon="el-icon-my-jiluchoucha"
          >
          </el-date-picker>
        </div>
        <div class="Inputbox">
          <el-row type="flex" align="middle">
            <el-col :span="9"> <p>Username:</p></el-col>
            <el-col :span="18">
              <el-input
                placeholder="Please Input Username"
                v-model="Username"
                clearable
              ></el-input
            ></el-col>
          </el-row>
          <br />
          <el-row type="flex" align="middle">
            <el-col :span="9"> <p>Password:</p></el-col>
            <el-col :span="18">
              <el-input
                placeholder="Please Input Password"
                v-model="Password"
                show-password
                clearable
              ></el-input
            ></el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane
        ><span slot="label"><i class="el-icon-my-jiluchoucha"></i> Report</span>
        <report></report>
      </el-tab-pane>
      <el-tab-pane
        ><span slot="label"><i class="el-icon-my-sousuo"></i> Search</span>
        Search
        <div class="pdf-content">
          <iframe
            height="500px"
            width="80%"
            :src="pdfUrl"
            frameborder="0"
          ></iframe>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
.pdf-content {
  width: 100%;
  height: 1100px;
}
.Inputbox {
  text-align: left;
  width: 300px;
}
.datepicker .el-input__inner {
  text-align: center;
}
.testbox {
  width: 200px;
  height: 200px;
  background-color: rgb(163, 93, 230);
}
</style>
<script>
import report from "./../components/InfoPage/repoart.vue";
// import pdffile from './../assets/file/testfile.pdf';
import globalfile from "./../assets/globalAssets/global.js";
export default {
  components: {
    report,
  },
  data() {
    return {
      // `${baseUrl.pageRoot}pdf/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`

      pdfUrl: "",
      Username: "",
      Password: "",
      value1: "",
      isshowtestbox: false,
    };
  },
  methods: {
    judgeUser(Uname, Upass) {
      if (Uname == "admin" && Upass == "7890") {
        globalfile.UserToken = true;
        return true;
      } else {
        return false;
      }
    },
    testfunc() {
      globalfile.tempObjectvar.Username = this.Username;
      globalfile.tempObjectvar.Password = this.Password;
      if (this.judgeUser(this.Username, this.Password)) {
        this.$alert("Send Success!", "Message", {
          confirmButtonText: "Confirm",
        });
      } else {
        this.$message.error({
          message: "Wrong!Pleas Check Again!",
          center: true,
        });
      }

      // this.isshowtestbox = !this.isshowtestbox;
    },
  },
};
</script>
