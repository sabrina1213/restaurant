<template>
  <div>
    <div class="bill-title">
      订单详情
    </div>
    <div class="">

    </div>
    <div class="bill-body">
      {{menuList}}
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore();
    //filter筛选menulist生成购物车列表
    let menuList = computed(() => {
      console.log("列表更新");
      // 筛选list
      return store.state.menuList.filter((item) => {
        return item.count != 0;
      });
    });
    return {
      menuList,
    };
  },
};
</script>

<style scoped>
.bill-title{
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}
.bill-body{

}
</style>