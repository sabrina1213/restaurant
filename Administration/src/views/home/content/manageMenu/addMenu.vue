<template>
  <div>
    <el-row class="add-row">
      <el-button type="primary" @click="addmenu">新增 </el-button>
      <el-dialog title="新增菜品" v-model="addDialogTableVisible">
        <el-row>
          <el-col :span="12" class="add-Dialog-left">
            <div class="add-Dialog-left-box" @click="uploadImage()">
              <i class="iconfont icon-jia"></i>
              <input
                type="file"
                name="file"
                accept="image/*"
                class="input-style"
              />
            </div>
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
              <el-form-item label="类别" width="120">
                <el-input
                  v-model="newMenuData.type"
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
        <el-row :gutter="20">
          <el-col :span="12" class="cancel-button">
            <el-button
              @click="
                addDialogTableVisibl = false;
                cancelSubmit();
              "
            >
              取消
            </el-button>
          </el-col>
          <el-col :span="12" class="submit-button">
            <el-button
              @click="
                addDialogTableVisibl = false;
                confirmSubmit();
              "
            >
              提交
            </el-button>
          </el-col>
        </el-row>
      </el-dialog>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
import { addMenu } from "@/api/index.js";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
     const router = useRouter();

    let addDialogTableVisible = ref(false); //  新增菜单弹出框
    //新增菜单表单
    let newMenuData = reactive({
      picture: "",
      name: "",
      price: "",
      type: "",
      detail: "",
    });
    let img: any = new Image();

    // 弹出新增菜单框
    const addmenu = () => {
      newMenuData.name = "";
      newMenuData.price = "";
      newMenuData.type = "";
      newMenuData.detail = "";
      img.src = '';
      if(document.getElementById("imgPreview")){
         let  imgbox: any = document.querySelector(".add-Dialog-left-box");
            let imgPreview = document.getElementById("imgPreview");
            console.log(imgPreview);
            imgbox.removeChild(imgPreview);
      }     
      addDialogTableVisible.value = true;
    };

    //上传图片
    const uploadImage = () => {
      console.log("上传图片");
      let inputImg: any = document.querySelector(".input-style");
      // 压缩图片需要的一些元素和对象
      let reader = new FileReader();

      let file: any = null;

      // 文件base64化，以便获知图片原始尺寸
      inputImg.addEventListener("change", function (e: any) {
        file = e.target.files[0];
        // 选择的文件是图片
        if (file.type.indexOf("image") == 0) {
          reader.readAsDataURL(file);
        }
      });
      //reader.readAsDataURL(file);转码完毕执行
      reader.onload = function (e: any) {
        img.src = e.target.result;
        // 使本地图片在浏览器中预览
        var imgbox: any = document.querySelector(".add-Dialog-left-box");
        // imgbox.innerHTML =
          // '<img style="height:202px;width:202px" id="imgPreview" src="' +
          // img.src +
          // '">';
          var imgPreview = document.createElement("img");
         imgPreview.setAttribute('id','imgPreview');
         imgPreview.setAttribute('src',img.src);
         imgPreview.setAttribute('style',"height:202px;width:202px;z-index: 10;position: absolute;");
         imgbox.appendChild(imgPreview);
      };
    };

    //取消上传
    const cancelSubmit = () => {
      addDialogTableVisible.value = false;
    };
    //确认上传
    const confirmSubmit = () => {
      if (newMenuData.name && newMenuData.price && newMenuData.type) {
        console.log("新增数", img.src, newMenuData);
        newMenuData.picture = img.src;
        addMenu(newMenuData, function (res: any) {
          console.log("addMenu(newMenuData)", res);
          addDialogTableVisible.value = false;

          if (res.err == false) {
            alert("新增数据成功~");
            newMenuData.picture = res.newPicUrl;
            console.log("newMenuData changed ", toRaw(newMenuData), res);
            let tableData = toRaw(store.state.menuList);
            store.commit("menuListChanged", {
              list: [...tableData, ...[toRaw(newMenuData)]],
            });
            router.go(0);
          } else {
            alert("新增数据失败~");
          }
        });
      } else {
        alert("信息不完整");
      }
    };

    return {
      addDialogTableVisible,
      newMenuData,
      addmenu,
      uploadImage,
      cancelSubmit,
      confirmSubmit,
    };
  },
});
</script>
<style scoped>
.add-row {
  padding: 0px 0px 10px 10px;
}
.add-Dialog-left {
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-Dialog-left-box {
  width: 200px;
  height: 200px;
  /* background: #73b8fdfa ; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgb(187, 182, 182);
  position :absolute;
}
.add-Dialog-left-box:hover {
  border: 1px dashed #73b8fdfa;
}
.cancel-button {
  text-align: right;
}
.submit-button {
  text-align: left;
}
.input-style {
  width: 100px;
  height: 40px;
  position: absolute;
  opacity: 0;
}
#imgPreview{
  height:202px;
  width:202px;
  z-index: 10;
  
}
</style>