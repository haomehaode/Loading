<template>
  <el-table
    :data="tableData"
    class="tb-edit"
    style="width: 100%"
    highlight-current-row
    @row-click="handleCurrentChange"
    :cell-class-name="getCellIndex"
  >
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <el-input
          v-show="
            scope.row.index == coordinate.row &&
              scope.column.index == coordinate.column
          "
          size="small"
          v-model="scope.row.date"
          placeholder="请输入内容"
          @change="handleEdit(scope.$index, scope.row)"
        ></el-input>
        <span
          v-show="
            scope.row.index != coordinate.row ||
              scope.column.index != coordinate.column
          "
          @click="getThis(scope)"
          >{{ scope.row.date }}</span
        >
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-input
          size="small"
          v-model="scope.row.name"
          placeholder="请输入内容"
          @change="handleEdit(scope.$index, scope.row)"
          v-show="
            scope.row.index == coordinate.row &&
              scope.column.index == coordinate.column
          "
        ></el-input>
        <span
          v-show="
            scope.row.index != coordinate.row ||
              scope.column.index != coordinate.column
          "
          @click="getThis(scope)"
          >{{ scope.row.name }}</span
        >
      </template>
    </el-table-column>
    <el-table-column prop="address" label="地址">
      <template slot-scope="scope">
        <el-input
          size="small"
          v-model="scope.row.address"
          placeholder="请输入内容"
          @change="handleEdit(scope.$index, scope.row)"
          v-show="
            scope.row.index == coordinate.row &&
              scope.column.index == coordinate.column
          "
        ></el-input>
        <span
          v-show="
            scope.row.index != coordinate.row ||
              scope.column.index != coordinate.column
          "
          @click="getThis(scope)"
          >{{ scope.row.address }}</span
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'EditTable',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金'
        }
      ],
      // 横纵坐标
      coordinate: { column: -1, row: -1 }
    }
  },
  methods: {
    handleCurrentChange (row, event, column) {
    //   console.log(row, event, column, event.currentTarget)
    //   console.log(this.tableData)
    },
    handleEdit (index, row) {
      console.log(this.tableData)
    },
    getThis (val) {
      this.coordinate.row = val.row.index
      this.coordinate.column = val.column.index
    },
    getCellIndex: function ({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex
      column.index = columnIndex
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  overflow: auto;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
</style>
