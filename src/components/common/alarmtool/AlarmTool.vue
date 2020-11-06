<template>
  <div id="alarm-tool">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AlarmTool'
}
</script>

<style scoped>
#alarm-tool {
  display: flex;
}
</style>
