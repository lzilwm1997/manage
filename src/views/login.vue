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
              <el-button type="success" @click="loginBtn('loginInfo')"
                >登录</el-button
              >
              <el-button
                type="warning"
                class="rsetBtn"
                @click="resetForm('loginInfo')"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
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
    // 登录验证
    loginBtn(val) {
      this.$refs.loginInfo.validate(valid => {
        console.log(valid)
        if (valid) {
          this.$store
            .dispatch('userLogin/loginIn', this.loginInfo)
            .then(res => {
              if (res.code === 0) {
                this.$message({ type: 'success', message: res.message })
                this.$router.push('/home')
              } else {
                this.$message({ type: 'error', message: res.message })
              }
            })
        } else {
          this.$message({ type: 'error', message: '请输入正确的用户名及密码' })
        }
      })
    },
    // 重置表单
    resetForm(val) {
      this.$refs[val].resetFields()
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
    width: 400px;
    margin: 100px auto;
    .el-button {
      width: 45%;
    }
    .rsetBtn {
      position: absolute;
      right: 0;
    }
  }
}
</style>
