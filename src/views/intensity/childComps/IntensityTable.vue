<template>
  <el-table :data="tableData" :header-cell-style="rowClass" :cell-style="cellStyle" height="217" size="mini">
    <el-table-column prop="date" label="肋位" style="text-align: center"></el-table-column>
    <el-table-column label="剪力" >
      <el-table-column prop="name" label="实际值(t)" ></el-table-column>
      <el-table-column label="许用值(%)">
        <el-table-column prop="province" label="航行" ></el-table-column>
        <el-table-column prop="city" label="港内" ></el-table-column>
      </el-table-column>
      <el-table-column label="许用值(t)">
        <el-table-column prop="address" label="航行(中拱)"></el-table-column>
        <el-table-column prop="zip" label="航行(中垂)" ></el-table-column>
        <el-table-column prop="address" label="港内(中拱)" ></el-table-column>
        <el-table-column prop="zip" label="港内(中垂)" ></el-table-column>
      </el-table-column>
    </el-table-column>
    <el-table-column label="弯矩" >
      <el-table-column prop="name" label="实际值(t-m)" ></el-table-column>
      <el-table-column label="许用值(%)">
        <el-table-column prop="province" label="航行" ></el-table-column>
        <el-table-column prop="city" label="港内" ></el-table-column>
      </el-table-column>
      <el-table-column label="许用值(t-m)">
        <el-table-column prop="address" label="航行(中拱)" ></el-table-column>
        <el-table-column prop="zip" label="航行(中垂)" ></el-table-column>
        <el-table-column prop="address" label="港内(中拱)" ></el-table-column>
        <el-table-column prop="zip" label="港内(中垂)" ></el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'IntensityTable',
  data () {
    return {
      tableData: [{
        date: '12',
        name: '112',
        province: '23',
        city: '23',
        address: '24',
        zip: 200333
      }, {
        date: '12',
        name: '112',
        province: '23',
        city: '23',
        address: '24',
        zip: 200333
      }, {
        date: '12',
        name: '112',
        province: '23',
        city: '23',
        address: '24',
        zip: 200333
      }, {
        date: '12',
        name: '112',
        province: '23',
        city: '23',
        address: '24',
        zip: 200333
      }, {
        date: '12',
        name: '112',
        province: '23',
        city: '23',
        address: '24',
        zip: 200333
      }]
    }
  },
  methods: {
    rowClass ({ row, rowIndex }) {
      return 'text-align:center'
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      return 'text-align:center'
    }
  }
}
</script>
<style scoped>
</style>
