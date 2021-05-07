<template>
  <div>
     <el-menu
      default-active="/home/manageMenu"
      class="el-menu-vertical-demo menu-box"
      @select="handleSelect">
      <el-menu-item index="/home/manageMenu" >菜单管理</el-menu-item>
    
      <el-menu-item index="2">
        账单管理
      </el-menu-item>
      <el-menu-item index="3">
       桌号二维码生成
      </el-menu-item>
    </el-menu>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function handleSelect(index:any){
      console.log(index);
      router.push(index);
    }
    return{
      handleSelect
    }
  },
})
</script>
<style scoped>
.menu-box{
  text-align: left;
}
.menu-item{
  padding-right: 0px !important;
  width: 138px  !important;
}
</style>

