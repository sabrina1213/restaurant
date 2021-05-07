<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-col :span="20">
          <el-input
            v-model="inputvalue"
            placeholder="请输入查询内容"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="searchmenu">查询</el-button>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  setup() {
    const inputvalue: any = ref(); //搜索框的值
    // 查询菜单
    const searchmenu = () => {
      console.log(inputvalue.value);
      if (inputvalue) {
        axios
          .get(
            "http://localhost:3000/manager/searchmenu?" +
              "key=" +
              inputvalue.value
          )
          .then((res) => {
            console.log(res);
          });
      } else {
        console.log("input is null");
      }
    };
    onMounted(() => {
      searchmenu();
    });
    return {
      inputvalue,
      searchmenu,
    };
  },
});
</script>
<style scoped>

</style>
