<template>
  <div class="body-box">
      <div class="search-box" @click="toSearch">
          <searchInput/>
      </div>
    <div class="body-detial">
      <div class="body-nav">
        <Nav @navEmit="whichType" />
      </div>
      <div class="body-menu">
        <Menu :type="whichtype" />
      </div>
    </div>

    <div class="body-footer">
      <!-- <div class="mengceng" v-if="isshowMengCeng"></div> -->
      <Car />
    </div>
  </div>
</template>
<script>
import Nav from "./nav.vue";
import Menu from "./menu.vue";
import { ref } from "vue";
import Car from "./shoppingCar.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Nav,
    Menu,
    Car,
  },
  setup() {
      const router = useRouter();

    //接收Nav组件的菜单类型切换
    let whichtype = ref();
    const whichType = (e) => {
      whichtype.value = e;
    };

    let toSearch= ()=>{
        router.push('/menu/search')
    }
    return {
      whichType,
      whichtype,
      toSearch
    };
  },
};
</script>

<style lang="less" scoped>
.body-box{
    height: 100%;
    display: flex;
    flex-direction:column;
    overflow: auto;
}
.body-detial {
    flex: 1;
  display: flex;
  overflow: auto;
}
.body-footer {
  height: 1.38889rem;
  background: #f5f4f4;
}
.body-nav {
  width: 2.4rem;
  background: #f1f1f1;
}

.body-menu {
  flex: 1;
  overflow-y: scroll;
}

.search-box{
     background: #f7f8f5;

}
</style>