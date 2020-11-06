<template>
  <div>
    <tab-bar>
      <tab-bar-item operation="help"  @itemClick="itemClick">
        <img src="~assets/img/navbar/help.svg" alt="" slot="item-icon" />
        <span slot="item-text">帮助</span>
      </tab-bar-item>
      <tab-bar-item operation="about"  @itemClick="itemClick">
        <img src="~assets/img/navbar/about.svg" alt="" slot="item-icon" />
        <span slot="item-text">关于</span>
      </tab-bar-item>
      <tab-bar-item operation="manual"  @itemClick="itemClick">
        <img src="~assets/img/navbar/manual.svg" alt="" slot="item-icon" />
        <span slot="item-text">操作手册</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/navbar/NavBar'
import TabBarItem from 'components/common/navbar/NavBarItem'
export default {
  name: 'Help',
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    itemClick (operation) {
      alert(operation)
      console.log(operation)
    }
  }
}
</script>
<style scoped>
</style>
