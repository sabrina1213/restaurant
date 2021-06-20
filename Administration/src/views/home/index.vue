<template>
  <el-row>
  <el-row style="width:100%;height:50px;background:pink;margin-bottom:10px;">妖精的店铺管理 </el-row>
    <el-row>
      <el-col :span="3">
        <Nav />
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./nav/index.vue";
export default defineComponent({
  components: {
    Nav,
  },
  setup() {},
});
</script>

