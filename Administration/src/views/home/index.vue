<template>
  <el-row>
  <el-row style="width:100%;height:50px;background:pink;margin-bottom:10px;">妖精的店铺管理 </el-row>
    <div class="box">
      <div class="nav">
        <Nav />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
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
<style scoped>
.box{
  display: flex;
}
.nav{
  width: 200px;
}
.content{
  flex: 1;
}
</style>

