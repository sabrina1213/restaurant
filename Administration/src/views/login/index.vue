<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormsss"
      label-width="60px"
    >
      <el-form-item label="用户" prop="username">
        <el-input
          v-model="ruleForm.phone"
          style="width: 300px"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          style="width: 300px"
          type="password"
        ></el-input>
      </el-form-item>
      <div class="btn-box">
        <el-button
          type="primary"
          size="medium"
          @click="submitForm"
          style="width: 200px"
          >登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "../../api/index.js";
import { reg_tel_phone } from '@/utils/regex.js'
export default {
  setup() {
    const router = useRouter();
    const { ctx }: any = getCurrentInstance();
    const ruleFormsss = ref<any>(null);
    // 定义变量
    const ruleForm = reactive({
      phone: "17391963670",
      password: "syt981125",
    });
    // 定义验证规则
    const rules = {
      phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        {pattern:reg_tel_phone, min: 6, max: 20,message: "请输入正确的手机号", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度不能小于6位", trigger: "blur" },
      ],
    };
    // 确认
    const submitForm = () => {
      try {
        (ruleFormsss.value as any).validate((valid: boolean) => {
          if (valid) {
            console.log(ruleForm);
            const { phone, password } = ruleForm;

            login({ phone: phone, password: password }, function (data: any) {
              if (data.err === false) {
                alert("登录成功了~");
                console.log("login.response", data);
                sessionStorage.setItem('isadmin','true');
                router.push("/home/manageMenu");
              }
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    return {
      ruleForm,
      rules,
      submitForm,
      ruleFormsss,
    };
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #2f3447;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-box {
  display: flex;
  justify-content: center;
  padding: 0 30px;
  box-sizing: border-box;
}
</style>
