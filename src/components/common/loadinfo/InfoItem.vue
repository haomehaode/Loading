<template>
  <div id="info-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'InfoItem'
}
</script>

<style scoped>
#info-item {
  flex: 1;
  text-align: left;
  font-size: 14px;
  margin-left: 20px ;
  line-height: 49px;
}
</style>
