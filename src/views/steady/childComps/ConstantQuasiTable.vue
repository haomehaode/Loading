<template>
  <div>
    <div class="table-title">稳性衡准</div>
    <el-table :data="tableData" height="181" style="width: 100%" stripe border size="mini">
      <el-table-column prop="item" label="条目" />
      <el-table-column prop="calculate" label="计算值" />
      <el-table-column prop="average" label="平均值" />
      <el-table-column prop="verdict" label="判断" />
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'ConstantQuasiTable',
  data () {
    return {
      tableData: [{
        item: '摇摆周期',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }, {
        item: '回航横倾角',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }, {
        item: '摇摆周期',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }, {
        item: '摇摆周期',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }, {
        item: '摇摆周期',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }, {
        item: '摇摆周期',
        calculate: '23',
        average: '0.000',
        verdict: 'Ok'
      }]
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

</style>
