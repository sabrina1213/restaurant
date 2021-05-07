<template>
  <div>
    <el-row class="add-row">
      <el-button type="primary" @click="addmenu">新增 </el-button>
      <el-dialog title="新增菜品" v-model="addDialogTableVisible">
        <el-row>
          <el-col :span="12" class="add-Dialog-left">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/manager/addmenu"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="12" class="add-Dialog-right">
            <el-form :model="newMenuData">
              <el-form-item label="菜名" width="120">
                <el-input
                  v-model="newMenuData.name"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="价格" width="120">
                <el-input
                  v-model="newMenuData.price"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="详细说明" width="120">
                <el-input
                  v-model="newMenuData.detail"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-dialog>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, onMounted } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const addDialogTableVisible: any = ref(); //  新增菜单弹出框
    //新增菜单表单
    const newMenuData = reactive({
      picture: "",
      name: "",
      price: "",
      detail: "",
    });
    addDialogTableVisible.value = false;
    const imageUrl: any = ref();
    imageUrl.value = "";
    // const beforeAvatarUpload = (file:any) => {

    // }
    const handleAvatarSuccess = (res: any) => {
      console.log(res);
    };

    // 新增菜单
    const addmenu = () => {
      addDialogTableVisible.value = true;
    };
    return {
      addDialogTableVisible,
      addmenu,
      imageUrl,
      handleAvatarSuccess,
      newMenuData,
    };
  },
});
</script>
<style scoped>
.add-row {
  padding: 0px 0px 10px 10px;
}
</style>