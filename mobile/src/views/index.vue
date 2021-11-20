<template>
  <div class="page">
    <div class="header">
      <ShopHeader />
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";

import Car from "./shoppingCar.vue";
import ShopHeader from "./shopHeader.vue";
import ShopBody from "./shopBody.vue";

import { getTpyeList, getMenuList } from "../api/index.js";
import { useStore } from "vuex";
import sessionFun from "../utils/sessionFun.js";
export default {
  components: {
    // Nav,
    // Menu,
    // Car,
    ShopHeader,
    ShopBody,
  },
  setup() {
    const store = useStore();
    //获取菜单类型及菜单列表
    getTpyeList().then((res: any) => {
      if (res.err == false) {
        store.commit("typeListChanged", {
          list: res.list,
        });
        getMenuList().then((res: any) => {
          store.commit("menuListChanged", {
            list: res.list,
          });
          sessionFun("init", res.list);
        });
      }
    });

    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 1.3rem;
}

.body {
  flex: 1;
  overflow: hidden;
}




</style>

