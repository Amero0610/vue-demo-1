<template>
  <div id="Boardbox" >
    <el-row type="flex" align="middle" id="Headerrow" justify="space-between">
      <el-col :span="8">
        <div id="Headertitle">
          <span> This is my management system.</span>
        </div>
      </el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <el-row type="flex" align="middle" justify="end"> 
          <el-col :span="5">
            <div id="HeaderPersonNamw">
              <span id="HeaderPersonName" >{{username}}</span>
            </div></el-col
          >
          <el-col :span="5">
            <div id="HeaderPersonalIcon">
              <el-avatar
                size="large"
                :src="require('../../assets/PersonalIcon.png')"
              ></el-avatar></div
          ></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style>
#Headerrow{
    height: 60px;
}
#Boardbox {
  width: 100%;
  height: 60px;
    background-color: #409EFF;
    color: white;
}
#HeaderPersonalIcon {
}
#Headertitle {
font-size: large;
}
#HeaderPersonName {
    font-size: large;
}
</style>
<script>
function test(val){
  this.username = val;
  console.log("Board call");
  console.log(this.username)
}
 import globalfile from "./../../assets/globalAssets/global.js";
export default {


  test,
  props:{

  },
  data() {
    return {
      username:globalfile.Username
    };
  }
};
</script>
