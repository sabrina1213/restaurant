<template>
  <div class="page">
    <div class="top">妖精的店铺</div>
    <div class="title">
      <div class="table">
        <Table/>
      </div>
      <div class="bar"> 
        <Bar/>
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
      <Car />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./nav.vue";
import Menu from "./menu.vue";
import Car from "./shoppingCar.vue";
import Table from "./tableNumber.vue"
import Bar from "./comBar/index.vue"
export default defineComponent({
  components: {
    Nav,
    Menu,
    Car,
    Table,
    Bar
  },
  setup() {},
});
</script>
<style scoped>
/* 这里没有使用flex布局需要review的时候改正*/
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
  align-items:flex-end;
}
.table{
   width: 50%;
   height: 100%;
   /* text-align: left ; */
   display: inline-block;
   display: flex;
  justify-content: flex-start;
  align-items:flex-end;
}

.bar{
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items:flex-end;
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
  overflow:scroll;
}
.bottom {
  background: rgb(7, 100, 35);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
}
</style>

