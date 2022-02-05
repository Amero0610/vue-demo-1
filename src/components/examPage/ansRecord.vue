<!--
 * @Author: Amero
 * @Date: 2022-02-05 19:02:51
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-05 22:19:20
 * @FilePath: \vue-demo-1\src\components\examPage\ansRecord.vue
-->
<template>
  <div>
    <el-row type="flex" align="top">
      <el-col :span="6" :push="1" id="ansRecordTitle">listen:</el-col>
      <el-col :span="20">
        <div class="optionBox">
          <el-row
            type="flex"
            justify="start"
            align="top"
            class="optionBoxitem"
            v-for="quesList in quesLists"
            :key="quesList"
          >
            <el-col :span="5" v-for="item in quesList" :key="item">
              <div class="singleOption_active" v-if="item != 0" :style="bkg">
                {{ item }}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ansRecord",
  data() {
    return {
      bkg: {
        background: "#909399",
      },
      quesLists: [
        [1, 2, 3, 4, 5],
        [7, 8, 9, 0, 0],
      ],
    };
  },
  filters: {},
};
</script>
<style >
#ansRecordTitle {
  text-align: left;
  font-size: 18px;
  color: red;
}
.singleOption_active {
  vertical-align: bottom;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
}
.singleOption_none {
  display: none;
  vertical-align: bottom;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 25px;
  display: inline-block;
}

.optionBox {
  /* margin-left: 11px; */
  width: 100%;
  /* background-color: lightblue; */
}
.optionBoxitem {
  margin-top: 5px;
}
</style>