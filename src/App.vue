<template>
  <div id="app">
    <main-nav-bar/>
    <main-alarm-tool/>
     <router-view />
  </div>
</template>
<script>
import MainNavBar from 'components/content/maintnavbar/MainNavBar'
import MainAlarmTool from 'components/content/mainalarmtool/MainAlarmTool'
export default {
  name: 'App',
  components: {
    MainNavBar,
    MainAlarmTool
  }
}
</script>
<style>
  @import "assets/css/base.css";
</style>
