<!--
 * @Author: Amero
 * @Date: 2022-02-15 00:12:55
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-16 01:39:52
 * @FilePath: \vue-demo-1\src\views\users.vue
-->
<template>
  <div id="userspageBox">
    <p id="title">Users Score</p>
    <div id="userspage">
      <el-table
        :data="tableList"
        highlight-current-row
        @current-change="handleCurrentChange"
        :row-class-name="tableRowClassName"
        @cell-click="testclick"
        :row-style="selectStyle"
      >
        <el-table-column prop="username" label="Name"></el-table-column>
        <el-table-column prop="readScore" label="Read Score" sortable>
          <template slot-scope="scope">
            <el-input
              :autofocus="true"
              v-if="
                scope.row.index === currentIndex &&
                currentLabel === 'Read Score'
              "
              v-model="scope.row.readScore"
              maxlength="300"
              size="mini"
              @change="changeValue"
              @focus="isDisabled"
            />

            <span v-else>{{ scope.row.readScore }}</span>
          </template></el-table-column
        >
        <el-table-column prop="writeScore" label="Write Score" sortable>
          <template slot-scope="scope">
            <el-input
              :autofocus="true"
              v-if="
                scope.row.index === currentIndex &&
                currentLabel === 'Write Score'
              "
              v-model="scope.row.writeScore"
              maxlength="300"
              size="mini"
              @change="changeValue"
              @focus="isDisabled"
            />

            <span v-else>{{ scope.row.writeScore }}</span>
          </template></el-table-column
        >
        <el-table-column prop="listenScore" label="Listen Score" sortable>
          <template slot-scope="scope">
            <el-input
              :autofocus="true"
              v-if="
                scope.row.index === currentIndex &&
                currentLabel === 'Listen Score'
              "
              v-model="scope.row.listenScore"
              maxlength="300"
              size="mini"
              @change="changeValue"
              @focus="isDisabled"
            />

            <span v-else>{{ scope.row.listenScore }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="sumScore"
          label="Score"
          sortable
          class-name="scoreStyle"
        >
          <template slot-scope="scope">
            <el-input
              :autofocus="true"
              v-if="
                scope.row.index === currentIndex && currentLabel === 'Score'
              "
              v-model="scope.row.sumScore"
              maxlength="300"
              size="mini"
              @change="changeValue"
              @focus="isDisabled"
            />

            <span v-else>{{ scope.row.sumScore }}</span>
          </template></el-table-column
        >
      </el-table>
    </div>
    <div class="confirmField" v-if="!Btn_disabled">
      <button id="Btn_Cancel" @click="Btn_Cancel" :disabled="Btn_disabled">
        Cancel
      </button>
      <button id="Btn_Confirm" @click="Btn_Confirm" :disabled="Btn_disabled">
        Confirm
      </button>
    </div>
  </div>
</template>
<script>
const SCORELAW = /^(255|([1-2][0-4][0-9]?)(?:\.\d{0,2})?|(0|[1-9][0-9]?)(?:\.\d{0,2}))?$/;
export default {
  data: () => ({
    Btn_disabled: true,
    currentIndex: "null",
    currentLabel: "",
    currentValue_old: "",
    currentValue_new: "",
    currentLabel_data: "",
    currentIndex_data: "",
    tableList: [
      {
        username: "w",
        readScore: 21,
        writeScore: 22,
        listenScore: 3,
        sumScore: 120,
      },
      {
        username: "z",
        readScore: 21,
        writeScore: 23,
        listenScore: 32,
        sumScore: 117,
      },
      {
        username: "m",
        readScore: 22,
        writeScore: 31,
        listenScore: 49,
        sumScore: 142,
      },
    ],
    labelName: ["Read Score", "Write Score", "Listen Score", "Score"],
    currentRow: null,
  }),
  methods: {
    checkInput: function (_str, _explainStr) {
      console.log(_str);
      return _explainStr.test(_str)
    },

    verifyScore: function (_score) {
      if (this.checkInput(_score, SCORELAW)) {
        return true;
      } else {
        this.$message({
          type: "error",
          message: "The format of the input is incorrect",
        });
        return false;
      }
    },
    returnDataName: function (str) {
      for (let i = 0; i < this.labelName.length; i++) {
        if (str == this.labelName[i]) {
          switch (i) {
            case 0: {
              return "readScore";
            }
            case 1: {
              return "writeScore";
            }
            case 2: {
              return "listenScore";
            }
            case 3: {
              return "sumScore";
            }
          }
        }
      }
    },
    returnRealIndex: function (data) {
      let queryName = data.username;
      for (let i = 0; i < this.tableList.length; i++) {
        if (this.tableList[i].username == queryName) {
          return i;
        }
      }
    },
    handleCurrentChange: function (val) {
      this.currentRow = val;
    },
    tableRowClassName: function ({ row, rowIndex }) {
      row.index = rowIndex;
      return "initBackground";
    },
    testclick: function (row, column) {
      // this.Btn_disabled = false;
      this.currentIndex_data = this.returnRealIndex(row);
      this.currentLabel_data = this.returnDataName(column.label);
      this.currentValue_old =
        this.tableList[this.currentIndex_data][this.currentLabel_data];
      this.currentValue_new = this.currentValue_old;
      switch (column.label) {
        case "Read Score": {
          this.currentIndex = row.index;
          this.currentLabel = column.label;
          break;
        }
        case "Write Score": {
          this.currentIndex = row.index;
          this.currentLabel = column.label;
          break;
        }
        case "Listen Score": {
          this.currentIndex = row.index;
          this.currentLabel = column.label;
          break;
        }
        case "Score": {
          this.currentIndex = row.index;
          this.currentLabel = column.label;
          break;
        }
        default:
          return;
      }
    },
    selectStyle: function () {},

    changeValue: function (value) {
      this.currentValue_new = value;
      // this.currentLabel = "";
    },
    blur: function () {
      (this.currentIndex = null), (this.currentLabel = "");
      this.Btn_disabled = true;
    },
    Btn_Cancel: function () {
      this.tableList[this.currentIndex_data][this.currentLabel_data] =
        this.currentValue_old;

      this.blur();
      this.currentValue_old = 0;
      this.currentValue_new = 0;
    },
    Btn_Confirm: function () {
      if (this.verifyScore(this.currentValue_new)) {
        this.tableList[this.currentIndex_data][this.currentLabel_data] =
          this.currentValue_new;
        this.blur();
        this.currentValue_old = 0;
        this.currentValue_new = 0;
      }
    },
    isDisabled: function () {
      this.Btn_disabled = false;
    },
  },
};
</script>
<style>
#userspageBox .confirmField {
  text-align: right;
  margin-top: 10px;
  margin-right: 20px;
}
#userspageBox .confirmField button {
  border: none;
  /* background-color: aqua; */
  margin-left: 10px;
  width: 160px;
  height: 35px;
  border-radius: 5px;
  transition: 0.2s;
  color: white;
}
#userspageBox .confirmField #Btn_Cancel {
  background-color: #808e9b;
}
#userspageBox .confirmField #Btn_Cancel:hover {
  background-color: #d2dae2;
  color: black;
}
#userspageBox .confirmField #Btn_Confirm {
  background-color: #4e54c8;
}
#userspageBox .confirmField #Btn_Confirm:hover {
  /* background-color: #3867d6; */
  color: white;
  background: #4e54c8; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(78, 84, 200),
    rgb(143, 148, 251)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(78, 84, 200),
    rgb(143, 148, 251)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#userspageBox {
  box-sizing: border-box;
  min-width: 700px;
}
#userspageBox #title {
  color: #2f3542;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.initBackground {
  color: black;
  background-color: #f1f2f6 !important;
}
#userspage .current-row td {
  background-color: #dfe4ea;
}
#userspage .el-table__row {
  text-align: left !important;
}
#userspage .el-table__cell {
  border-bottom: 1px #747d8c solid;
  border-right: 1px #747d8c solid;
}
#userspage .el-table::before {
  /* border-bottom: none !important; */
  background-color: transparent;
}
#userspage .el-table__header .cell {
  color: #57606f;
}
#userspage .el-table__header {
  border-top: 1px #747d8c solid;
}

#userspage .cell {
  transition: 0.4s;
}
#userspage .scoreStyle {
}
</style>
