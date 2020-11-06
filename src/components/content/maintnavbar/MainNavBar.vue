<template>
  <div class="main-tab-bar">
    <el-tabs type="border-card">
      <el-tab-pane label="文件">
        <file/>
      </el-tab-pane>
      <el-tab-pane label="视图">
        <views/>
      </el-tab-pane>
      <el-tab-pane label="工具">
        <tools/>
      </el-tab-pane>
      <el-tab-pane label="设置">
        <setting/>
      </el-tab-pane>
      <el-tab-pane label="帮助">
        <help/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import File from './file/File'
import Views from './Views'
import Tools from './Tools'
import Setting from './set/Setting'
import Help from './Help'
export default {
  name: 'MainNavBar',
  components: {
    File,
    Views,
    Tools,
    Setting,
    Help
  }
}
</script>

<style scoped>
</style>
