<template>
  <div class="login-container">
    <div>
      <h2>后台管理系统</h2>
      <el-form :model="login_model" ref="login_model">
        <el-form-item>
          <el-input type="text" prefix-icon="el-icon-user" v-model="login_model.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="text" prefix-icon="el-icon-reading" v-model="login_model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleForm()">sign in</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi } from "../../api/request";
export default {
  data() {
    return {
      login_model: {
        username: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    async handleForm() {
      let data = await loginApi(this.login_model);
      if (data.code == 200) {
        this.$message({
          message: "登陆成功",
          type: "success",
          onClose:()=>{
            this.$store.commit("handle",data.data.authToken)
            this.$router.push("/home")
          }
        });
      } else {
        this.$message({
          message: data.data.info,
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background: #384156;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container > div {
  width: 420px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.login-container > div h2 {
  font-size: 26px;
  // color: #fff;
  text-align: center;
  margin-bottom: 16px;
}
.login-container .el-button {
  width: 100%;
}
</style>