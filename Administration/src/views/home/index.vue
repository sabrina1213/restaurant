<template>
  <el-row class="main-box">
    <el-row
      class="title"
      >妖精的店铺
    </el-row>
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
.main-box{
  /* margin: 0 50px; */
  overflow: auto;
}
.title{
    width: 100%;
    height: 100px;
    background: #729dc996;
    margin-bottom: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    font-weight: 500;
    font-size: larger;
}
.box {
  display: flex;
  width: 100%;
}
.nav {
  width: 130px;
}
.content {
  flex: 1;
  padding: 10px;
  overflow: auto;
}
</style>

