<template>
  <div>
    <tab-bar>
      <!-- <tab-bar-item path='/Stowage'>
              <img src="~assets/img/navbar/stowage.svg" alt="" slot="item-icon">
              <span slot="item-text">配载</span>
            </tab-bar-item> -->
      <tab-bar-item path="/Stowage">
        <img src="~assets/img/navbar/stowageinfo.svg" alt="" slot="item-icon" />
        <span slot="item-text">配载信息</span>
      </tab-bar-item>
      <tab-bar-item path="/ConstantQuasi">
        <img
          src="~assets/img/navbar/constantquasi.svg"
          alt=""
          slot="item-icon"
        />
        <span slot="item-text">其他恒准</span>
      </tab-bar-item>
      <tab-bar-item path="/Steady">
        <img src="~assets/img/navbar/steady.svg" alt="" slot="item-icon" />
        <span slot="item-text">完整稳性</span>
      </tab-bar-item>
      <tab-bar-item path="/Intensity">
        <img src="~assets/img/navbar/strength.svg" alt="" slot="item-icon" />
        <span slot="item-text">总纵强度</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/navbar/NavBar'
import TabBarItem from 'components/common/navbar/NavBarItem'
export default {
  name: 'Views',
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    itemClick () {
      alert('弹框')
      console.log('path')
    }
  }
}
</script>
<style scoped>
</style>
