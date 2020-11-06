<template>
  <div>
    <tab-bar>
      <tab-bar-item operation="propeller"  @itemClick="itemClick">
        <img src="~assets/img/navbar/propeller.svg" alt="" slot="item-icon" />
        <span slot="item-text">螺旋桨浸没率</span>
      </tab-bar-item>
      <tab-bar-item operation="hydrostatic"  @itemClick="itemClick">
        <img src="~assets/img/navbar/water.svg" alt="" slot="item-icon" />
        <span slot="item-text">静水力</span>
      </tab-bar-item>
      <tab-bar-item operation="focus"  @itemClick="itemClick">
        <img src="~assets/img/navbar/focus.svg" alt="" slot="item-icon" />
        <span slot="item-text">许用重心高度</span>
      </tab-bar-item>
      <tab-bar-item operation="fadearea"  @itemClick="itemClick">
        <img src="~assets/img/navbar/fadearea.svg" alt="" slot="item-icon" />
        <span slot="item-text">盲区</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/navbar/NavBar'
import TabBarItem from 'components/common/navbar/NavBarItem'
export default {
  name: 'Tools',
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    itemClick (operation) {
      console.log(operation)
    }
  }
}
</script>
<style scoped>
</style>
