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
        data: ['0', '6H', '9H', '12H', '15H', '18H', '24H']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [1, 3, 4, 7, 4, 6, 9],
        type: 'line'
      }]
    })
  }
}
</script>
<style scoped>
</style>
