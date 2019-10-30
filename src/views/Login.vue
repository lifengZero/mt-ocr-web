<template>
  <div class="Login">
    <h3>登录</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              form: {
                  username: '',
                  password: ''
              }
          }
      },
      methods: {
          submit() {

          }
      },
      created() {
      },
      mounted() {
      }
  }
</script>

<style scoped>
.Login{width: 500px;margin: 0 auto 0;}
</style>
