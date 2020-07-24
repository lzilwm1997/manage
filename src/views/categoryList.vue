<template>
  <div>
    <div class="addbtn">
      <el-button type="primary" @click="dialogFormVisible = true"
        >添加类别</el-button
      >
    </div>
    <!-- 表格列表 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      highlight-current-row
      :header-cell-style="{ background: '#64657b', color: '#fff' }"
      border
    >
      <el-table-column type="index" width="80"></el-table-column>
      <el-table-column prop="categoryName" label="类名"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="medium"
            @click="handleEdit(scope.$index, scope.row)"
            class="editorBtn"
            type="success"
            >编辑</el-button
          >
          <el-button
            size="medium"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加弹框 -->
    <el-dialog
      title="添加类别"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      width="30%"
    >
      <el-form :model="form" ref="form">
        <el-form-item
          label="类别名称"
          prop="categoryName"
          :rules="[{ required: true, message: '类别不能为空' }]"
        >
          <el-input v-model="form.categoryName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCategory">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑弹框 -->
    <el-dialog
      title="修改类别"
      :visible.sync="dialogEditor"
      :modal-append-to-body="false"
      width="30%"
    >
      <el-form :model="form" ref="form">
        <el-form-item
          label="类别名称"
          prop="categoryName"
          :rules="[{ required: true, message: '类别不能为空' }]"
        >
          <el-input v-model="form.categoryName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditor = false">取 消</el-button>
        <el-button type="primary" @click="editCategory">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      form: {
        categoryName: ''
      },
      dialogFormVisible: false,
      dialogEditor: false
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    // 获取类别
    async getCategory() {
      const { data: res } = await this.$axios.get('/category')
      console.log(res.data)
      this.tableData = res.data
    },
    // 点击编辑
    handleEdit(ind, row) {
      this.dialogEditor = true
      console.log(ind)
      console.log(row)
    },
    // 确定编辑
    editCategory() {
      console.log('ok')
      this.dialogEditor = false
    },
    // 点击删除
    async handleDelete(ind, row) {
      console.log(ind)
      console.log(row)
      const { data: res } = await this.$axios.post('/deleteCategory', ind)
      console.log(res)
      this.getCategory()
    },
    // 添加类别
    submitCategory() {
      console.log(this.form.categoryName)
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$axios
            .post('/addCategory', this.form)
            .then(res => {
              console.log(res)
              this.dialogFormVisible = false
              this.$refs.form.resetFields()
              this.getCategory()
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          this.$message({
            type: 'error',
            message: '请输入正确的类名'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addbtn {
  .el-button {
    margin-bottom: 10px;
    float: right;
  }
}
</style>
