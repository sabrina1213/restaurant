<template>
  <div>
    <el-row :gutter="20">
     
        <el-col :span="20">
          <el-input
            v-model="inputvalue"
            placeholder="请输入想要查询的菜名"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="searchmenu">查询</el-button>
        </el-col>
      
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";

import { useStore } from 'vuex';
import {searchMenuApi} from "@/api/index.js";
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const inputvalue: any = ref(); //搜索框的值
    // 查询菜单
    const searchmenu = () => {
      console.log('searchmenu',inputvalue);
        inputvalue?.value ?searchFuc(inputvalue?.value):searchFuc('all');
    };
    const searchFuc = (params:String)=>{
      console.log('searchFuc',params);
       searchMenuApi({key:params},function(data :any){
            store.commit("menuListChanged", {
              list:data.list
            });
        });
       
    }

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
