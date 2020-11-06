<template>
  <div>
    <tab-bar>
      <tab-bar-item operation="new" @itemClick="itemClick">
        <img src="~assets/img/navbar/new.svg" alt="" slot="item-icon" />
        <span slot="item-text">新建</span>
      </tab-bar-item>
      <tab-bar-item operation="open" @itemClick="itemClick">
        <img src="~assets/img/navbar/open.svg" alt="" slot="item-icon" />
        <span slot="item-text">打开</span>
      </tab-bar-item>
      <tab-bar-item operation="save" @itemClick="itemClick">
        <img src="~assets/img/navbar/save.svg" alt="" slot="item-icon" />
        <span slot="item-text">保存</span>
      </tab-bar-item>
      <tab-bar-item operation="saveas" @itemClick="itemClick">
        <img src="~assets/img/navbar/saveas.svg" alt="" slot="item-icon" />
        <span slot="item-text">另存为</span>
      </tab-bar-item>
      <tab-bar-item operation="print" @itemClick="itemClick">
        <img src="~assets/img/navbar/print.svg" alt="" slot="item-icon" />
        <span slot="item-text">打印</span>
      </tab-bar-item>
      <tab-bar-item operation="quit" @itemClick="itemClick">
        <img src="~assets/img/navbar/quit.svg" alt="" slot="item-icon" />
        <span slot="item-text">退出</span>
      </tab-bar-item>
    </tab-bar>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import TabBar from 'components/common/navbar/NavBar'
import TabBarItem from 'components/common/navbar/NavBarItem'
export default {
  name: 'File',
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    itemClick (operation) {
      this.dialogFormVisible = true
      switch (operation) {
        case 'new':
          console.log('new23')
          break
        case 'save':
          console.log('save23')
          break
        default :
          break
      }
    }
  }
}
</script>
<style scoped>
</style>
