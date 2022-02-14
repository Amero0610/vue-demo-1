<!--
 * @Author: Amero
 * @Date: 2022-02-15 00:12:55
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-15 02:51:54
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
            />

            <span v-else>{{ scope.row.listenScore }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sumScore" label="Score" sortable>
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
              @blur="blur"
            />

            <span v-else>{{ scope.row.sumScore }}</span>
          </template></el-table-column
        >
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentIndex: "null",
    currentLabel: "",

    tableList: [
      {
        username: "w",
        readScore: "21",
        writeScore: "22",
        listenScore: "3",
        sumScore: "120",
      },
      {
        username: "z",
        readScore: "21",
        writeScore: "23",
        listenScore: "32",
        sumScore: "117",
      },
      {
        username: "m",
        readScore: "22",
        writeScore: "31",
        listenScore: "49",
        sumScore: "142",
      },
    ],
    currentRow: null,
  }),
  methods: {
    handleCurrentChange: function (val) {
      this.currentRow = val;
    },
    tableRowClassName: function ({ row, rowIndex }) {
      row.index = rowIndex;
      return "initBackground";
    },
    testclick: function (row, column) {
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
      this.tableList[this.currentIndex][this.currentLabel] = value;
      this.currentIndex = null;
      this.currentLabel = "";
    },
    blur: function () {
      (this.currentIndex = null), (this.currentLabel = "");
    },
  },
};
</script>
<style>
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
</style>
