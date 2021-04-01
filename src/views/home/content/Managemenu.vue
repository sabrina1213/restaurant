<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-col :span="20">
          <el-input v-model="inputvalue" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="searchmenu">查询</el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from "axios";

export default defineComponent({
    setup() {
        const inputvalue:any = ref();
        const searchmenu = ()=>{
            console.log(inputvalue);
            if(inputvalue){
                axios.get("http://localhost:3000/manager/searchmenu?"+"key="+inputvalue).then((res)=>{
                    console.log(res);
                })
            }
            else{
                console.log("input is null");
            }
        }
        return{
            inputvalue,
            searchmenu
        }
    },
})
</script>


<style scoped>
.el-input{
    width: 260px;
}
</style>