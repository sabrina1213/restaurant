<template>
  <div class="page">
    <div class="top">妖精的店铺</div>
    <div class="title">
      <div class="table">
        <Table />
      </div>
      <div class="bar">
        <Bar />
      </div>
    </div>
    <div class="middle">
      <div class="middle-left">
        <Nav />
      </div>
      <div class="middle-right">
        <Menu />
      </div>
    </div>
    <div class="bottom">
      <div class="mengceng" v-if="isshowMengCeng">蒙层</div>
      <Car @carEmit="isMengCeng" :value="isshowMengCeng"/>
    </div>
  </div>
</template>
<script lang="ts">
import {ref,} from 'vue'
import Nav from "./nav.vue";
import Menu from "./menu.vue";
import Car from "./shoppingCar.vue";
import Table from "./tableNumber.vue";
import Bar from "./comBar/index.vue";
export default {
  components: {
    Nav,
    Menu,
    Car,
    Table,
    Bar,
  },
  setup() {
    
    let isshowMengCeng = ref(false);
    const isMengCeng = (e:boolean)=>{
      isshowMengCeng.value = e;
      console.log('showmengceng',e);
    }
    return{
      isshowMengCeng,
      isMengCeng
    }
  },
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  top: 0;
  position: fixed;
  text-align: center;
  background: rgb(163, 123, 160);
}
.title {
  margin-top: 50px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.table {
  width: 50%;
  height: 100%;
  /* text-align: left ; */
  display: inline-block;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.bar {
  flex: 1;
  height: 100%;
}
.middle {
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 80px;
  /* display: block; */
}
.middle-left {
  width: 24%;
  height: 100%;
  background: rgb(4, 129, 129);
  overflow: scroll;
}
.middle-right {
  flex: 1;
  height: 100%;
  background: coral;
  overflow: scroll;
}
.bottom {
  background: rgb(7, 100, 35);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
}
.mengceng {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  top: 0;
  z-index: -10;
  opacity: 0.5;
}
</style>

