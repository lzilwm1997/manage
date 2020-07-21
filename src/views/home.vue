<template>
  <div class="homePage">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  // mounted: {

  // },
  components: { Header },
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
}
</style>
