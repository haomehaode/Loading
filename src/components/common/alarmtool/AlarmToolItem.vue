<template>
  <div class="alarm-tool-item">
    <div>
      <slot name="item-icon"></slot>
      <slot name="item-text">|</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmToolItem'
}
</script>

<style scoped>
  .alarm-tool-item {
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    padding-left: 15px;
  }
  .alarm-tool-item img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 10px;
  }
</style>
