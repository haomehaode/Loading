<template>
  <div>
    <div id="myChart" :style="{ width: '100%', height: '500px' }"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'CriterionFigure',
  methods: {
    func (x) {
      x /= 10
      return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50
    },
    generateData () {
      const data = []
      for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, this.func(i)])
      }
      return data
    }
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('myChart'))
    myChart.setOption({
      animation: false,
      grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50
      },
      xAxis: {
        name: 'x',
        minorTick: {
          show: true
        },
        splitLine: {
          lineStyle: {
            color: '#999'
          }
        },
        minorSplitLine: {
          show: true,
          lineStyle: {
            color: '#ddd'
          }
        }
      },
      yAxis: {
        name: 'y',
        min: -100,
        max: 100,
        minorTick: {
          show: true
        },
        splitLine: {
          lineStyle: {
            color: '#999'
          }
        },
        minorSplitLine: {
          show: true,
          lineStyle: {
            color: '#ddd'
          }
        }
      },
      dataZoom: [{
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
      }, {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
      }],
      series: [
        {
          type: 'line',
          showSymbol: false,
          clip: true,
          data: this.generateData()
        }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      }
    })
  }
}
</script>
<style scoped>
</style>
