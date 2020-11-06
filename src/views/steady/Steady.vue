<template>
  <div>
    <el-container  style="height: 850px; border: 1px solid #eee">
      <el-aside width="380px">
        <loading-info/>
      </el-aside>
      <el-container>
        <el-main>
          <sign/>
        </el-main>
        <el-footer height="240px">
          <el-row :gutter="40">
            <el-col :span="12">
              <kN-table/>
            </el-col>
            <el-col :span="12">
              <constant-quasi-table/>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LoadingInfo from 'components/content/loadinginfo/LoadingInfo'
import KNTable from './childComps/KNTable'
import ConstantQuasiTable from './childComps/ConstantQuasiTable'
import Sign from './childComps/Sign'
export default {
  name: 'Steady',
  components: {
    LoadingInfo,
    KNTable,
    ConstantQuasiTable,
    Sign
  }
}
</script>
<style scoped>

</style>
