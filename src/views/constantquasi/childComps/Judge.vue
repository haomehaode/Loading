<template>
  <div>
    <div class="item-check">
      <info-load-item>
        <info-item>判定结果</info-item>
        <info-item>{{check}}</info-item>
      </info-load-item>
    </div>
    <el-table :data="tableData" height="180" style="width: 98%" stripe border size="mini">
      <el-table-column prop="item" label="条目" />
      <el-table-column prop="calculate" label="计算值" />
      <el-table-column prop="average" label="平均值" />
      <el-table-column prop="verdict" label="判断" />
    </el-table>
  </div>
</template>
<script>
import InfoItem from 'components/common/loadinfo/InfoItem'
import InfoLoadItem from 'components/common/loadinfo/InfoLoadItem'
export default {
  name: 'Judge',
  components: {
    InfoItem,
    InfoLoadItem
  },
  data () {
    return {
      check: '满足',
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
        item: '回航横倾角',
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
.item-check {
  width: 200px;
  margin-left: 10px;
}
.info-item {
  height:20px ;
}
.el-table {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
