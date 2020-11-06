<template>
  <div>
    <div class="charts" style="width:'100%'">
      <div class="charts-title">
        24小时内最高：99.99
        <div id="myChart" :style="{width:'100%',height:'500px'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'Sign',
  mounted () {
    var myChart = echarts.init(document.getElementById('myChart'))
    myChart.setOption({
      xAxis: {
        type: 'category',
        name: '( ° )',
        splitLine: { show: false },
        data: ['0', '10', '20', '30', '40', '50', '60']
      },
      yAxis: {
        type: 'value',
        name: 'y',
        minorTick: {
          show: true
        },
        minorSplitLine: {
          show: true
        }
      },
      series: [
        {
          data: [0, 2, 4, 6, 8, 10, 12],
          type: 'line'
        }, {
          data: [0, 0, 0, 0, 0, 10, 0],
          type: 'line'
        }
      ]
    })
  }
}
</script>
<style scoped>
</style>
