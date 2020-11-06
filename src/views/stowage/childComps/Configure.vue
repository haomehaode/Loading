<template>
  <div class="cnfigure">
    <el-row :gutter="40">
      <el-col :span="4">
        <el-tree :default-expand-all="true" :data="data"   @node-click="handleNodeClick" />
      </el-col>
      <el-col :span="20">
        <el-table :data="tableData" height="217" style="width: 100%" border size="mini">
          <el-table-column prop="Number" label="序号" width="50" />
          <el-table-column prop="Cabin" label="舱室"  />
          <el-table-column prop="HoldCapacity" label="舱容(m^3)" width="80" />
          <el-table-column prop="Height" label="高度(m^3)" width="80"/>
          <el-table-column prop="Volume_M" label="体积(m^3)" width="80"/>
          <el-table-column prop="Volume" label="体积(%)" width="80"/>
          <el-table-column prop="Density" label="密度(t/m^3)" width="90"/>
          <el-table-column prop="Weight" label="重量(t)" width="80"/>
          <el-table-column prop="BarycenterLengthwaysLocation" label="重心纵向位置(m)" width="115"/>
          <el-table-column prop="BarycenterVerticalLocation" label="重心垂向位置(m)" width="115"/>
          <el-table-column prop="BarycenterCrosswiseLocation" label="重心横向位置(m)" width="115"/>
          <el-table-column prop="FreeLiquidLevel" label="自由液面惯性矩(m^4)" width="140"/>
          <el-table-column prop="RevisionStatus" label="修正状态" width="70"/>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Configure',
  data () {
    return {
      data: [{
        id: 1,
        label: '舱室',
        children: [
          {
            label: '压载舱'
          }, {
            label: '燃油舱'
          }, {
            label: '淡水舱'
          }, {
            label: '集装箱'
          }, {
            label: '机器处所'
          }, {
            label: '居住处所'
          }, {
            label: '空舱'
          }
        ]
      }],
      tableData: [{
        Number: '1',
        Cabin: '压载舱02',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '2',
        Cabin: '压载舱009',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '3',
        Cabin: '居住处所8',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '4',
        Cabin: '居住处所8',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '5',
        Cabin: '居住处所02',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '6',
        Cabin: '居住处所02',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }, {
        Number: '7',
        Cabin: '居住处所02',
        HoldCapacity: '0.000',
        Height: '0.000',
        Volume_M: '0.000',
        Volume: '0.000',
        Density: '0.000',
        Weight: '0.000',
        BarycenterLengthwaysLocation: '0.000',
        BarycenterVerticalLocation: '0.000',
        BarycenterCrosswiseLocation: '0.000',
        FreeLiquidLevel: '0.000',
        RevisionStatus: '0.000'
      }]
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
<style scoped>
.el-aside{
  margin-top: 23px;
}
</style>
