<template>
  <div>
    <el-row :gutter="3">
      <el-col :span="20">
        <el-input v-model="input" placeholder="请输入要生成的桌号"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" round @click="createQRcode()"
          >生成二维码</el-button
        >
      </el-col>
    </el-row>
    <div id="qrcode" class="qrcode"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import QRCode from 'qrcodejs2'
export default defineComponent({
  setup() {
    let input = ref("");
    const createQRcode = () => {
      console.log(input.value);
      if(process.env.NODE_ENV !== 'development'&&process.env.NODE_ENV=='production'){
        new QRCode(document.getElementById("qrcode"), "http://101.34.51.116/mobile/#/menu/detial?desk="+input.value);  // 设置要生成二维码的链接
      }
      else{
        new QRCode(document.getElementById("qrcode"), "http://localhost:8081/menu/detial?desk="+input.value);  // 设置要生成二维码的链接
      }

    };
    return {
      input,
      createQRcode,
    };
  },
});
</script>

<style>
.qrcode{
height:300px;
width:300px;
background:white;
margin: auto;
padding-top: 30px;
}
</style>