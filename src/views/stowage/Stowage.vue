<template>
  <div>
      <!-- <el-header>Header</el-header> -->
      <el-container style="height: 850px; border: 1px solid #eee" >
        <el-aside width="380px">
          <loading-info/>
        </el-aside>
        <el-container>
          <el-main>
            <sign/>
          </el-main>
          <el-footer height="240px">
            <configure/>
          </el-footer>
        </el-container>
      </el-container>
  </div>
</template>
<script>
import LoadingInfo from 'components/content/loadinginfo/LoadingInfo'
import Configure from './childComps/Configure'
import Sign from './childComps/Sign'
export default {
  name: 'Stowage',
  components: {
    LoadingInfo,
    Configure,
    Sign
  }
}
</script>
<style scoped>
</style>
