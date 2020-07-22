<template>
  <div class="asidePage">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324057"
      text-color="#BFCBD9"
      active-text-color="#20A0FF"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">数据管理</el-menu-item>
      <el-menu-item index="3">添加数据</el-menu-item>
      <el-menu-item index="4">图表</el-menu-item>
      <el-menu-item index="5">编辑</el-menu-item>
      <el-menu-item index="5">设置</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.asidePage {
  height: 100%;
  .el-menu{
      height: 100%;
  }
}
</style>
