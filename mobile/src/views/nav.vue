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
import { defineComponent, onMounted, ref } from "vue";
import { getTpyeList, getMenuList } from "../api/index.js";

import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    let typelist = ref(); //类型列表
    let box1 = ref(0); //设置高亮

    onMounted(() => {
      //获取菜单类型列表
      getTpyeList().then((res) => {
        console.log("getTpyeList", res);
        if (res.err == false) {
          typelist.value = res.list;
          console.log("typelist upgrade", typelist.value);
          getMenuList({ key: typelist.value[0].type }).then((res) => {
            store.commit("menuListChanged", {
              list: res.list,
            });
          });
        }
      });
    });
    const mouseclick = (index) => {
      console.log("mouseclick", index, typelist.value[index].type);
      //设置高亮
      box1.value = index;

      // 获取对应类别下菜单列表;
      getMenuList({ key: typelist.value[index].type }).then((res) => {
        store.commit("menuListChanged", {
          list: res.list,
        });
      });
    };
    return {
      typelist,
      mouseclick,
      box1,
    };
  },
});
</script>

<style>
/* 利用行高（line-height）让文字垂直居中 设置line-height和height的值一样*/
.box {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.box1 {
  background: crimson;
}
</style>