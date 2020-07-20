<template>
  <div class="login-page">
    <div class="loginCont">
      <div class="loginTitle">
        <h1>后台管理系统</h1>
      </div>
      <el-card class="card">
        <div>
          <el-form
            label-width="80px"
            label-position="top"
            :model="loginInfo"
            :rules="loginRules"
            ref="loginInfo"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="loginInfo.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                v-model="loginInfo.pass"
                placeholder="请输入密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item class="btn">
              <el-button type="success" @click="loginBtn(loginInfo)"
                >登录</el-button
              >
              <el-button type="warning" class="rsetBtn">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        pass: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginBtn(val) {
      this.$refs.loginInfo.validate(valid => {
        if (valid) {
          console.log(this.loginInfo)
        } else {
          console.log('err')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin center {
  display: flex;
  justify-content: center;
}
.login-page {
  position: fixed;
  background-color: cadetblue;
  height: 100%;
  width: 100%;
  .loginTitle {
    padding-top: 200px;
    font-size: 40px;
    color: #fff;
    @include center;
  }
  .el-card {
    width: 500px;
    margin: 100px auto;
    .el-button {
      width: 45%;
    }
    .rsetBtn {
      margin-left: 46px;
    }
  }
}
</style>
