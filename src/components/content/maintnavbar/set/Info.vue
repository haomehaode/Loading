<template>
  <div class="info">
    <el-dialog title="航行信息" :visible.sync="dialogInfoFormVisible" :before-close="btnCancel">
      <el-form :model="Navigationlnformation">
        <el-form-item label="操作者" :label-width="formLabelWidth">
          <el-input v-model="Navigationlnformation.Operator" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="Navigationlnformation.Date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="装载情况" :label-width="formLabelWidth">
          <el-input v-model="Navigationlnformation.LoadingDescribe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="航区" :label-width="formLabelWidth">
          <el-select v-model="Navigationlnformation.NavigatingZone" placeholder="请选择航区">
            <el-option label="A" value="A"></el-option>
            <el-option label="B" value="B"></el-option>
            <el-option label="C" value="C"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="航段" :label-width="formLabelWidth">
          <el-select v-model="Navigationlnformation.leg" placeholder="请选择航段">
            <el-option label="J1" value="J1"></el-option>
            <el-option label="J2" value="J2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="船型" :label-width="formLabelWidth" >
          <el-select v-model="Navigationlnformation.ShipType" placeholder="请选择船型">
            <el-option label="集装箱船" value="集装箱船"></el-option>
            <el-option label="散货船" value="散货船"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="Navigationlnformation.Remark" autocomplete="off"></el-input>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="btnCancel">取 消</el-button>
        <el-button type="primary" @click="btnConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: {
    dialogInfoFormVisible: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      Navigationlnformation: {
        Operator: '',
        Date: '',
        LoadingDescribe: '',
        NavigatingZone: '',
        leg: '',
        ShipType: '',
        Remark: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    btnConfirm () {
      console.log(this.Navigationlnformation)
      this.$emit('infoBtnClick', false)
    },
    btnCancel () {
      this.$emit('infoBtnClick', false)
    }
  }
}
</script>
<style scoped>
el-input el-select{
  width: 100px;
}
</style>
