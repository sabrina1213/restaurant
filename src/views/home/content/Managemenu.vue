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
        <el-divider></el-divider>
    <el-row class="add-row">
      <el-button type="primary" >新增 </el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="图片" width="150">
        </el-table-column>
        <el-table-column prop="name" label="菜名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="价格" width="120">
        </el-table-column>
        <el-table-column prop="address" label="详细说明" width="600">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const inputvalue: any = ref();
    // 查询菜单
    const searchmenu = () => {
      console.log(inputvalue);
      if (inputvalue) {
        axios
          .get(
            "http://localhost:3000/manager/searchmenu?" + "key=" + inputvalue
          )
          .then((res) => {
            console.log(res);
          });
      } else {
        console.log("input is null");
      }
    };
    // 
    const tableData = reactive({
      
    })
    return {
      inputvalue,
      searchmenu,
    };
  },
});
</script>


<style scoped>
.el-input {
  width: 260px;
}
.add-row{
  padding: 0px 0px 10px 10px;
}
</style>