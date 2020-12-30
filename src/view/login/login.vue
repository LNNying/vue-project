<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit (loginInfo) {
      localStorage.token = 'token'
      localStorage.socket_token = 'token'
      sessionStorage.socket_token = 'token'
      this.$router.push({
        name: 'home'
      })
      // this.$auth.login({
      //   data: {
      //     'username': loginInfo.userName,
      //     'password': loginInfo.password,
      //     'rememberMe': true
      //   },
      //   success: function (result) {
      //     if (result.data.returnCode === 200) {
      //       localStorage.socket_token = result.data.returnData.socketToken
      //       sessionStorage.socket_token = result.data.returnData.socketToken
      //     } else {
      //       if (result.data.returnMsg && result.data.returnMsg !== 'Bad credentials') {
      //         this.$Message.error(result.data.returnMsg)
      //       } else {
      //         this.$Message.error('用户名或密码错误！请重试！')
      //       }
      //       throw new Error('登录发生错误')
      //     }
      //   },
      //   error: function (result) {
      //     this.$Message.error('用户名或密码错误！请重试！')
      //   },
      //   rememberMe: true,
      //   redirect: '/',
      //   fetchUser: true
      // })
    }
  }
}
</script>

<style>

</style>
