<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormsss"
      label-width="60px"
    >
      <el-form-item label="用户" prop="username">
        <el-input v-model="ruleForm.phone" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" style="width: 300px"></el-input>
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
import { getCurrentInstance, ref, reactive, toRefs, unref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

interface ModelRef {
  phone: string;
  password: string;
}

export default {
  setup() {
    const router = useRouter();
    const { ctx }: any = getCurrentInstance();
    console.log("ctx", ctx);
    const ruleFormsss = ref<any>(null);
    // 定义变量
    const ruleForm: ModelRef = reactive<ModelRef>({
      phone: "17391963670",
      password: "syt981125",
    });
    // 定义验证规则
    const rules = {
      phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" },
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
            axios.get("http://localhost:3000/manager/login?"+"phone="+phone+"&password="+password).then((response) => {
              console.log(response.data.err);
              if(response.data.err === false){
                ctx.$message.success('登录成功了~');
                router.push('/home');
                console.log("success.....");
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

    // const data: DataProps = reactive({
    //   girls: ["a", "b", "c"],
    //   girl: "",
    //   selectfun: (index: number) => {
    //     data.girl = data.girls[index];
    //     axios.get("http://localhost:3000/login").then((response) => {
    //       console.log(response.data);
    //     });
    //   },
    // });
    // const refData = toRefs(data);
    // return {
    //   ...refData,
    // };
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
