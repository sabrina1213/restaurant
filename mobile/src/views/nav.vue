<template>
  <div>
    <div
      v-for="(item, index) in typelist"
      :key="index"
      :class="{ box: true, box1: box1 == index }"
      @click="mouseclick(index)"
    >
      {{ item.type }}
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { getTpyeList, getMenuList } from "../api/index.js";
import { useStore } from "vuex";
import sessionFun from "../utils/sessionFun"
export default defineComponent({
  name: "Nav",
  setup(props, { emit }) {
    const store = useStore();
    // let typelist = ref(); //类型列表
    let box1 = ref(0); //设置高亮

     let typelist = computed(() => {
       
       if( store.state.typeList.length){
         emit("navEmit", store.state.typeList[0].type);
       }
       return store.state.typeList
     })
    

      
    const mouseclick = (index) => {
      
      //设置高亮
      box1.value = index;

      //获取对应类别下菜单列表;
      // getMenuList({ key: typelist.value[index].type }).then((res) => {
      //   store.commit("menuListChanged", {
      //     list: res.list,
      //   });
      // });
      emit("navEmit", typelist.value[index].type);
    };
    return {
      typelist,
      mouseclick,
      box1,
    };
  },
});
</script>

<style lang="less" scoped>
/* 利用行高（line-height）让文字垂直居中 设置line-height和height的值一样*/

.box {
  font-weight: 700;
  font-size: 0.375rem;
  height: 1.1rem;
  vertical-align: middle;
  line-height: 1.1rem;
  box-sizing: border-box;
  border-left: 0.18rem solid transparent;
  cursor: pointer;
}
.box1 {
  // background: rgb(213, 227, 255);
  border-left: 0.18rem solid;
  border-left-color: #f23030;
  color: #f23030;
  background: #fff;
  box-sizing: border-box;
 
}
</style>