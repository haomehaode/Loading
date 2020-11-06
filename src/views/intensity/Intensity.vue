<template>
  <div>
    <el-container style="height: 850px; border: 1px solid #eee" >
      <el-aside width="380px">
        <loading-info/>
      </el-aside>
      <el-container>
        <el-main>
          <edit-table/>
        </el-main>
        <el-footer height="240px">
          <intensity-table/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LoadingInfo from 'components/content/loadinginfo/LoadingInfo'
import IntensityTable from './childComps/IntensityTable'
import EditTable from './childComps/EditTable'
export default {
  name: 'Intensity',
  components: {
    LoadingInfo,
    IntensityTable,
    EditTable
  }
}
</script>
<style scoped>

</style>
