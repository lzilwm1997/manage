<template>
  <div class="homePage">
    <el-container>
      <el-aside><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/Header'
import Aside from '../components/Aside'
export default {
  // mounted: {

  // },
  components: { Header, Aside },
  methods: {
    loginOut() {
      this.$store.dispatch('userLogin/loginOut')
      this.$message({
        type: 'success',
        message: '退出成功'
      })
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/mixin.scss';
.homePage {
  @include pageBackground(#f0f2f5);
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
  }
}
</style>
