<template>
  <div>
    <el-row>
      <el-table :data="tableData" border style="width: 100%; overflow: auto">
        <el-table-column label="图片" width="80">
          <template #default="scope">
            <img style="height: 50px; width: 50px" :src="scope.row.picture" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="菜名" width="150">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="80">
        </el-table-column>
        <!-- <el-table-column prop="unit" label="单位" width="60"> </el-table-column> -->
        <el-table-column prop="type" label="类型" width="100">
        </el-table-column>
        <el-table-column prop="detail" label="详细说明" width="300">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="100">
          <template #default="scope">
            <!-- <el-button
              type="text"
              size="small"
              @click="handelmenu(scope.$index, scope.row)"
              >编辑</el-button
            > -->
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
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  computed,
  getCurrentInstance,
} from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
import { deleteMenu } from "@/api/index.js";
export default defineComponent({
  setup() {
    const store = useStore();
    const { ctx }: any = getCurrentInstance();
    //菜单列表
    let tableData = computed(() => {
      // return toRaw(store.state.menuList);
      console.log("列表更新");
      return store.state.menuList;
    });

    console.log("tableData", tableData);
    // 编辑菜单
    const handelmenu = (index: any, row: any) => {
      console.log(index, row);
    };
    // 删除菜单
    const deletemenu = (index: any, row: any) => {
      console.log(index, row.name);
      deleteMenu({ key: row.name }, function (res: any) {
        if (res.err == false) {
          let list = store.state.menuList;
          list.splice(index, 1);
          console.log("after delete menulist ", list);
          store.commit("menuListChanged", {
            list: list,
          });
          alert("删除成功~");
        }
        else{
          alert('删除失败');
        }
      });
    };
    onMounted(() => {});

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