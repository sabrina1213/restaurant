<template>
  <div>
    <el-row :gutter="20">
      <!-- <el-col :span="12"> -->
        <el-col :span="20">
          <el-input
            v-model="inputvalue"
            placeholder="请输入想要查询的菜名"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="searchmenu">查询</el-button>
        </el-col>
      <!-- </el-col> -->
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from 'vuex';
import {searchMenuApi} from "@/api/index.js";
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const inputvalue: any = ref(); //搜索框的值
    // 查询菜单
    const searchmenu = () => {
      console.log(inputvalue.value,inputvalue);
      if (inputvalue.value) {
        // axios
        //   .get(
        //     "http://localhost:3000/manager/searchmenu?" +
        //       "key=" +
        //       inputvalue.value
        //   )
          searchMenuApi({key:inputvalue.value}).then((res:any) => {
            if(res.err == false){
              store.commit("menuListChanged", {
              list:res.list
            });
            }
          });
      } else {
        // axios
        //   .get(
        //     "http://localhost:3000/manager/searchmenu?" +
        //       "key=" +
        //       "all"
        //   )
           searchMenuApi({key:'all'}).then((res:any) => {
            console.log(res); 
            if(res.err == false){
              store.commit("menuListChanged", {
              list:res.list
            });
            }
            
          });
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
