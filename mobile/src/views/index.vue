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
        <Nav @navEmit="whichType"/>
      </div>
      <div class="middle-right">
        <Menu :type="whichtype"/>
      </div>
    </div>
    <div class="bottom">
      <div class="mengceng" v-if="isshowMengCeng"></div>
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
    //从Car组件获取是否添加遮罩(蒙层)
    let isshowMengCeng = ref(false);
    const isMengCeng = (e:boolean)=>{
      isshowMengCeng.value = e;
      console.log('showmengceng',e);
    };
    //接收Nav组件的菜单类型切换
    let whichtype = ref();
    const whichType = (e:string)=>{
        whichtype.value = e;
        console.log('----------index get type------------',whichtype.value,e);
    };
    return{
      isshowMengCeng,
      isMengCeng,
      whichType,
      whichtype,
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

