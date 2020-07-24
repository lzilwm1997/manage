<template>
  <div class="asidePage">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324057"
      text-color="#BFCBD9"
      active-text-color="#20A0FF"
      router
    >
      <el-menu-item index="home"
        ><i class="el-icon-menu"></i><span>首页</span></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="usersList">用户列表</el-menu-item>
           <el-menu-item index="categoryList">分类列表</el-menu-item>
          <el-menu-item index="2-2">食品列表</el-menu-item>
          <el-menu-item index="2-3">订单列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">添加食品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">当月图表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5"
        ><i class="el-icon-edit"></i><span>编辑</span></el-menu-item
      >
      <el-menu-item index="6"
        ><i class="el-icon-setting"></i><span>设置</span></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  computed: {
    defaultActive: function() {
      return this.$route.path.replace('/', '')
    }
  },
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
  .el-menu {
    height: 100%;
  }
}
</style>
