<template>
  <div>
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="图片" width="200">
          <template #default="scope">
            <img :src="scope.row.picture" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="菜名" width="200">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="150">
        </el-table-column>
        <el-table-column prop="detail" label="详细说明" width="600">
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click="handelmenu(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="deletemenu(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {

    

    //菜单列表
    const tableData = [
      {
        picture: "../assets/logo.png",
        name: "羊肉",
        price: "65",
        detail: "味道鲜美",
      },
      {
        picture: "../assets/logo.png",
        name: "羊肉",
        price: "65",
        detail: "味道鲜美",
      },
    ];

    
    // 编辑菜单
    const handelmenu = (index: any, row: any) => {
      console.log(index, row);
    };
    // 删除菜单
    const deletemenu = (index: any, row: any) => {
      console.log(index, row);
    };


    return {
      tableData,
      handelmenu,
      deletemenu,
    };
  },
});
</script>


<style scoped>

.add-row {
  padding: 0px 0px 10px 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>