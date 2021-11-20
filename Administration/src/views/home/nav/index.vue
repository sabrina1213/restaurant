<template>
  <div>
     <!-- default-active="/home/manageMenu" 
      @select="handleSelect"
    -->
    <el-menu
      :default-active='$route.path'
      class="el-menu-vertical-demo menu-box"
      :router="true"

    >
      <el-menu-item index="/home/manageMenu" >菜单管理</el-menu-item>
      <el-menu-item index="/home/manageBill" > 账单管理 </el-menu-item>
      <el-menu-item index="/home/QRcode" > 桌号二维码生成 </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent ,ref} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    let activeIndex = ref('/home/manageMenu')
    function handleSelect(index: any) {
      console.log(index);
      activeIndex.value = index;
      router.push(index);
    }
    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>
<style scoped>
.menu-box {
  text-align: left;
}
.menu-item {
  padding-right: 0px !important;
  width: 138px !important;
}
</style>

