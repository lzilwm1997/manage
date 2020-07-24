<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      highlight-current-row
      :header-cell-style="{ background: '#64657b', color: '#fff' }"
    >
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="city" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="15"
      :total="count"
      :pager-count="11"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      count: 0,
      pageNum: 30,
      params: {
        pageIndex: 0,
        pageSize: 15
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$axios.post('/userInfo', this.params)
      console.log(res)
      this.tableData = res.data
      this.count = res.lenghth
      // console.log(this.pageNum)
      console.log(this.params)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.params.pageIndex = val - 1
      this.getUserList()
      console.log(this.pageIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  background-color: #fff;
  padding: 10px;
}
</style>
