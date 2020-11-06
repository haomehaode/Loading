<template>
  <div class="nav-bar-item" @click="itemClick">
    <div><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    path: {
      type: String,
      default () {
        return ' '
      }
    },
    activeColor: {
      type: String,
      default: 'rgb(64,158,255)'
    },
    operation: {
      type: String,
      default () {
        return ' '
      }
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : { }
    }
  },
  methods: {
    itemClick () {
      if (this.path === ' ') {
        this.$emit('itemClick', this.operation)
      } else {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
  .nav-bar-item {
    text-align: center;
    height: 70px;
    font-size: 14px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .nav-bar-item img {
    width: 48px;
    height: 48px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 7px;
  }
</style>
