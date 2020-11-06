<template>
  <div>
    <tab-bar>
      <tab-bar-item operation="info"  @itemClick="itemClick">
        <img src="~assets/img/navbar/info.svg" alt="" slot="item-icon" />
        <span slot="item-text">航行信息</span>
      </tab-bar-item>
      <tab-bar-item operation="data"  @itemClick="itemClick">
        <img src="~assets/img/navbar/data.svg" alt="" slot="item-icon" />
        <span slot="item-text">常量数据</span>
      </tab-bar-item>
      <tab-bar-item operation="containers"  @itemClick="itemClick">
        <img src="~assets/img/navbar/containers.svg" alt="" slot="item-icon" />
        <span slot="item-text">集装箱</span>
      </tab-bar-item>
      <tab-bar-item operation="set"  @itemClick="itemClick">
        <img src="~assets/img/navbar/set.svg" alt="" slot="item-icon" />
        <span slot="item-text">系统设置</span>
      </tab-bar-item>
    </tab-bar>
    <info :dialogInfoFormVisible="dialogInfoFormVisible" @infoBtnClick="infoBtnClick"/>
    <data-constant :dialogDataFormVisible="dialogDataFormVisible" @infoBtnClick="infoBtnClick"/>
  </div>
</template>
<script>
import TabBar from 'components/common/navbar/NavBar'
import TabBarItem from 'components/common/navbar/NavBarItem'
import Info from './Info'
import DataConstant from './DataConstant'
export default {
  name: 'Setting',
  components: {
    TabBar,
    TabBarItem,
    Info,
    DataConstant
  },
  data () {
    return {
      dialogInfoFormVisible: false,
      dialogDataFormVisible: false
    }
  },
  methods: {
    itemClick (operation) {
      switch (operation) {
        case 'info':
          this.dialogInfoFormVisible = true
          break
        case 'data':
          this.dialogDataFormVisible = true
          break
        default :
          break
      }
    },
    infoBtnClick (show) {
      this.dialogInfoFormVisible = show
      this.dialogDataFormVisible = show
    }
  }
}
</script>
<style scoped>
</style>
