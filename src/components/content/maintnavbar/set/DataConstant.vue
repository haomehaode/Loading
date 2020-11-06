<template>
  <div class="data">
    <el-dialog title="常量数据" :visible.sync="dialogDataFormVisible" :before-close="btnCancel" >
      <el-form>
        <el-form-item  :label-width="formLabelWidth">
         <el-radio v-model="radio" label="1">离港</el-radio>
         <el-radio v-model="radio" label="2">航行</el-radio>
         <el-radio v-model="radio" label="3">到港</el-radio>
         <el-radio v-model="radio" label="4">自定义</el-radio>
        </el-form-item>
          <el-table :data="dataConstant" :header-cell-style="rowClass" :cell-style="cellStyle">
            <el-table-column property="item" label="条目" width="90" ></el-table-column>
            <el-table-column property="weight" label="重量(t)" width="80" ></el-table-column>
            <el-table-column property="tail" label="尾端点(m)" width="90"></el-table-column>
            <el-table-column property="head" label="首端点(m)" width="90"></el-table-column>
            <el-table-column property="lengthways" label="重心纵向位置(m)" width="130"></el-table-column>
            <el-table-column property="vertical" label="重心垂向位置(m)" width="130"></el-table-column>
            <el-table-column property="horizontal" label="重新横向位置(m)" width="130"></el-table-column>
            <el-table-column property="free" label="自由页面惯性矩(m-t)"></el-table-column>
          </el-table>
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
  name: 'DataConstant',
  props: {
    dialogDataFormVisible: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      formLabelWidth: '12px',
      radio: '1',
      dataConstant: [{
        item: '船员及行李',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '备品',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '粮食',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '油污水',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '生活污水',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '日用水柜',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '日用油柜',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }, {
        item: '其他',
        weight: '0.000',
        tail: '0.000',
        head: '0.000',
        lengthways: '0.000',
        vertical: '0.000',
        horizontal: '0.000',
        free: '0.000'
      }]
    }
  },
  methods: {
    btnConfirm () {
      console.log(this.radio)
      this.$emit('infoBtnClick', false)
    },
    btnCancel () {
      this.$emit('infoBtnClick', false)
    },
    rowClass ({ row, rowIndex }) {
      return 'text-align:center'
    },
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      return 'text-align:center'
    }
  }
}
</script>
<style scoped>
el-radio {
  padding-left: 20px;
}
</style>
