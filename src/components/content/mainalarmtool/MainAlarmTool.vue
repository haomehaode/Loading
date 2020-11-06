<template>
  <div class="alarm-tool">
    <alarm-tool>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/redalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">完整稳性</span>
      </alarm-tool-item>
      <alarm-tool-item/>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/greenalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">其他衡准</span>
      </alarm-tool-item>
      <alarm-tool-item/>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/greenalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">许用重心高度</span>
      </alarm-tool-item>
      <alarm-tool-item/>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/greenalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">总纵强度</span>
      </alarm-tool-item>
      <alarm-tool-item/>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/greenalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">盲区</span>
      </alarm-tool-item>
      <alarm-tool-item/>
      <alarm-tool-item>
        <img src="~assets/img/alarmtool/greenalarm.svg" alt="" slot="item-icon">
        <span slot="item-text">螺旋桨浸没率</span>
      </alarm-tool-item>
    </alarm-tool>
  </div>
</template>
<script>
import AlarmTool from 'components/common/alarmtool/AlarmTool'
import AlarmToolItem from 'components/common/alarmtool/AlarmToolItem'
export default {
  name: 'MainAlarmTool',
  components: {
    AlarmTool,
    AlarmToolItem
  }
}
</script>
<style scoped>
  .alarm-tool {
    height: 39px;
    background-color: rgb(245, 247, 250);
    padding-right: 10px;
  }
</style>
