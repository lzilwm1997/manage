<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="2"
        ><div class="Ptext"><span>首页</span></div></el-col
      >
      <el-col :span="2"><div class="avater">头像</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.row-bg {
  background-color: #fff;
  height: 50px;
  border-top: 1px solid #f0f2f5;
  .Ptext{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
}
</style>
