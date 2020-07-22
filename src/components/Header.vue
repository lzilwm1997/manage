<template>
  <div class="headerTop">
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $router.meta" :key="index"
          ><a href="/">{{ item }}</a></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <div class="avater">
      <el-dropdown @command="handleCommand">
        <img :src="baseImg" alt="头像" class="avaImg" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home">首页</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      avaImg: ''
    }
  },
  name: 'Header',
  created() {
    if (!this.userID) {
      this.getUser()
    }
  },
  computed: {
    ...mapState({
      userID: state => state.userLogin.userInfo.userID,
      baseImg: state => state.userLogin.userInfo.baseImg
    })
  },
  methods: {
    ...mapActions('userLogin', {
      getUser: 'getUserinfo'
    }),
    handleCommand(command) {
      console.log(command)
      if (command == 'home') {
        this.$router.push('/home')
        console.log(this.userID)
      } else if (command == 'exit') {
        this.$store.dispatch('userLogin/loginOut')
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/mixin.scss';
.headerTop {
  background-color: #fff;
  height: 60px;
  border-top: 1px solid #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  .nav {
    float: left;
  }
  .avater {
    float: right;
    .avaImg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
