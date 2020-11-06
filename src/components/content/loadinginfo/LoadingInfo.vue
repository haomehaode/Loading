<template>
  <div class="loading-info">
    <el-menu accordion :default-openeds="openeds" default-active="2" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>吃水与纵倾</span>
        </template>
        <el-menu-item>
          <info-load-item>
            <info-item>吃水与纵倾</info-item>
            <info-item>{{loadingInfo.draftAndTrim}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>平均吃水</info-item>
            <info-item>{{loadingInfo.averageDraught}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>尾吃水</info-item>
            <info-item>{{loadingInfo.tailDraught}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
           <info-load-item>
            <info-item>纵倾</info-item>
            <info-item>{{loadingInfo.trim}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>纵倾角</info-item>
            <info-item>{{loadingInfo.trimAngle}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>横倾角</info-item>
            <info-item>{{loadingInfo.heelAngle}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>螺旋桨浸没率</info-item>
            <info-item>{{loadingInfo.propellerImmersionRate}}</info-item>
          </info-load-item>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">盲区</span>
        </template>
        <el-menu-item>
          <info-load-item>
            <info-item>盲区</info-item>
            <info-item>{{loadingInfo.deadZone}}</info-item>
          </info-load-item>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span slot="title">排水量</span>
        </template>
        <el-menu-item>
          <info-load-item>
            <info-item>空船重量</info-item>
            <info-item>{{loadingInfo.lightWeight}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>载重量</info-item>
            <info-item>{{loadingInfo.loadCapacity}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>排水量</info-item>
            <info-item>{{loadingInfo.displacement}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>储备浮力</info-item>
            <info-item>{{loadingInfo.reserveBuoyancy}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>压载舱</info-item>
            <info-item>{{loadingInfo.ballast}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>燃油舱</info-item>
            <info-item>{{loadingInfo.forFuel}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>淡水舱</info-item>
            <info-item>{{loadingInfo.freshWater}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>集装箱货舱</info-item>
            <info-item>{{loadingInfo.containerHold}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>机器处所</info-item>
            <info-item>{{loadingInfo.machinesSpace}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>居住处所</info-item>
            <info-item>{{loadingInfo.liveSpace}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>空舱</info-item>
            <info-item>{{loadingInfo.shortPosition}}</info-item>
          </info-load-item>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span slot="title">强度(%)</span>
        </template>
        <el-menu-item>
          <info-load-item>
            <info-item>剪力</info-item>
            <info-item>{{loadingInfo.shearingForce}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>弯矩</info-item>
            <info-item>{{loadingInfo.bendingMoment}}</info-item>
          </info-load-item>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-message-solid"></i>
          <span slot="title">完整稳性</span>
        </template>
        <el-menu-item>
          <info-load-item>
            <info-item>重心纵向位置</info-item>
            <info-item>{{loadingInfo.barycenterLengthwaysLocation}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>重心横向位置</info-item>
            <info-item>{{loadingInfo.barycenterCrosswiseLocation}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>横稳性高度</info-item>
            <info-item>{{loadingInfo.transverseStabilityHeight}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>重心高度</info-item>
            <info-item>{{loadingInfo.barycenterHeight}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>初稳性高度</info-item>
            <info-item>{{loadingInfo.initialMetacentricHeight}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>自由液面修正值</info-item>
            <info-item>{{loadingInfo.freeLiquidLevelModification}}</info-item>
          </info-load-item>
        </el-menu-item>
        <el-menu-item>
          <info-load-item>
            <info-item>修正后初稳性高</info-item>
            <info-item>{{loadingInfo.amendInitialMetacentricHeight}}</info-item>
          </info-load-item>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import InfoItem from 'components/common/loadinfo/InfoItem'
import InfoLoadItem from 'components/common/loadinfo/InfoLoadItem'
import { GetLoadById } from 'network/loadinfo'
export default {
  name: 'LoadingInfo',
  components: {
    InfoItem,
    InfoLoadItem
  },
  data () {
    return {
      openeds: ['3'],
      activeName: '1',
      loadingInfo: {
        draftAndTrim: '12.31',
        averageDraught: '12.44',
        tailDraught: '2.5',
        trim: '5.0',
        trimAngle: '2.4',
        heelAngle: '22',
        propellerImmersionRate: '13',
        deadZone: '2.4',
        lightWeight: '5400',
        loadCapacity: '5400',
        displacement: '6400',
        reserveBuoyancy: '5400',
        ballast: '1000',
        forFuel: '2000',
        freshWater: '3000',
        containerHold: '4000',
        machinesSpace: '2000',
        liveSpace: '3000',
        shortPosition: '4000',
        shearingForce: '233',
        bendingMoment: '456',
        barycenterLengthwaysLocation: '342',
        barycenterCrosswiseLocation: '342',
        transverseStabilityHeight: '23',
        barycenterHeight: '76',
        initialMetacentricHeight: '234',
        freeLiquidLevelModification: '2344',
        amendInitialMetacentricHeight: '897'
      }
    }
  },
  created () {
    this.GetLoadById()
  },
  methods: {
    handleOpen (key, keyPath) {
      this.openeds.length = 0
      this.openeds.push(key)
    },
    handleClose (key, keyPath) {
    //   if (this.openeds.length === 0) {
    //     this.openeds.push(1)
    //   }
    },
    GetLoadById () {
      GetLoadById('6ab61065-dd27-4fcd-b91b-00e0596fcc6b').then(res => {
        this.loadingInfo = res
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
</style>
