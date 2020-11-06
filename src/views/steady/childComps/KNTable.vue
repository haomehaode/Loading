<template>
  <div class="kn-table">
    <div class="table-title">KN表</div>
    <el-table :data="tableData" height="181" stripe  border size="mini">
      <el-table-column prop="HeelAngle" label="横倾角" />
      <el-table-column prop="Angle10" label="10(°)"  />
      <el-table-column prop="Angle20" label="20(°)" />
      <el-table-column prop="Angle30" label="30(°)"/>
      <el-table-column prop="Angle40" label="40(°)" />
      <el-table-column prop="Angle50" label="50(°)" />
      <el-table-column prop="Angle60" label="60(°)" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'KNTable',
  data () {
    return {
      tableData: [{
        HeelAngle: 'SIN',
        Angle10: '1',
        Angle20: '1',
        Angle30: '1',
        Angle40: '1',
        Angle50: '1',
        Angle60: '1'
      }, {
        HeelAngle: 'KN 值',
        Angle10: '2',
        Angle20: '2',
        Angle30: '2',
        Angle40: '2',
        Angle50: '2',
        Angle60: '2'
      }, {
        HeelAngle: 'Kg * SIN',
        Angle10: '5',
        Angle20: '5',
        Angle30: '5',
        Angle40: '5',
        Angle50: '5',
        Angle60: '5'
      }, {
        HeelAngle: 'KN - Kg * SIN',
        Angle10: '7',
        Angle20: '8',
        Angle30: '3',
        Angle40: '2',
        Angle50: '4',
        Angle60: '3'
      }

      ]
    }
  }
}
</script>
<style scoped>
.table-title{
  text-align: center;
  font-size: 14px;
  line-height: 49px;
  background-color: rgb(245, 247, 250);
}
.el-table th>.cell{
  text-align: center;
}
.el-table .cell {
  text-align: center;
}
</style>
