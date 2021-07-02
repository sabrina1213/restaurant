<template>
  <div>
    <div v-for="(item, index) in menulist" :key="index" class="menu-box">
      <div class="left">
        {{ item.pic }}
      </div>
      <div class="right">
        <div class="right-top">{{ item.name }}</div>
        <div class="right-bottom">
            <div class="price">{{item.price}}</div>
            <div class="add-botton">jiaaaaaa
                <i class="iconfont icon-iconset0186"></i>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent ,computed, onMounted} from "vue";

import {useStore} from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore();
    const menu = [
      {
        pic: "dd",
        name: "tianbao",
        price: "50",
      },
    ];
    let menulist = computed(()=>{
      console.log('列表更新');
      return store.state.menuList;
      
    })
    
    console.log('list menu.vue ',menulist);
   
    return {
      menu,
      menulist
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
  background: silver;
}
.right {
  flex: 1;
}
.right-top{
    text-align: left;
    height: 60px;
}
.right-bottom{
  display: flex;
  justify-content: flex-start;
  height: 20px;
}
.price{
    width:20px;
    height: 100%;
}
.add-botton{
    flex: 1;

}
</style>