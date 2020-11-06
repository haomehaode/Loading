<template>
  <div class="constant-quasi">
    <el-container  style="height: 850px; border: 1px solid #eee">
      <el-aside width="380px">
        <loading-info/>
      </el-aside>
      <el-container>
        <el-main>
          <criterion-figure/>
        </el-main>
        <el-footer height="240px">
          <judge/>
        </el-footer>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import LoadingInfo from 'components/content/loadinginfo/LoadingInfo'
import Judge from './childComps/Judge'
import CriterionFigure from './childComps/CriterionFigure'
export default {
  name: 'ConstantQuasi',
  components: {
    LoadingInfo,
    Judge,
    CriterionFigure
  }
}
</script>
<style scoped>

</style>
