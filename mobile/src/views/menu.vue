<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index" class="menu-box">
      <div class="left">
        <img
          :src="item.picture"
          style="width: 80px; height: 80px; border-radius: 10px"
        />
        <!-- {{ item.pic }} -->
      </div>
      <div class="right">
        <div class="right-top">{{ item.name }}</div>
        <div class="right-bottom">
          <div class="price">{{ item.price }}</div>
          <div class="add-botton">
            <div style="display: inline" @click="numSub(index)">
              <i class="iconfont icon-iconset0187"></i>
            </div>
            {{ item.count }}
            <div style="display: inline" @click="numAdd(index)">
              <i class="iconfont icon-iconset0186"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
export default defineComponent({
  name: "Menu",
  props: {
    type: String,
  },
  setup(props) {
    const store = useStore();
    //菜单列表
    let menuList = computed(() => {
      console.log("列表更新");
      // 筛选list
      return store.state.menuList.filter((item) => {
        return item.type == props.type;
      });
    });
    //账单列表
    let billList = [];

    //添加数量
    const numAdd = (index) => {
      console.log("numadd", billList);
      // 商品数量加一
      menuList.value[index].count++;
      console.log("new menulist", menuList);
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    };
    //减少数量
    const numSub = (index) => {
      console.log("numsub", billList);
      // 商品数量减一
      menuList.value[index].count--;
      console.log("new menulist", menuList);
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    };
    return {
      menuList,
      numAdd,
      numSub,
    };
  },
});
</script>

<style scoped>
.menu-box {
  height: 100px;
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  padding-bottom: 20px;
}
.left {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  /* background: silver; */
}
.right {
  flex: 1;
}
.right-top {
  text-align: left;
  height: 60px;
}
.right-bottom {
  display: flex;
  justify-content: flex-start;
  height: 20px;
}
.price {
  width: 20px;
  height: 100%;
}
.add-botton {
  flex: 1;
}
</style>