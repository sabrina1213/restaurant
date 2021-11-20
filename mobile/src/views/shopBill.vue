<template>
  <div class="bill-container">
    <div class="bill-body">
      <div class="bill-text">
        <div
          style="font-size: 0.45rem; display: flex; justify-content: flex-start;margin-bottom:0.1rem;"
        >
          已接单
        </div>
        <div style="display: flex; justify-content: flex-start">
          后厨正在制作,您的菜马上就到
        </div>
      </div>
      <div class="bill-list">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          class="bill-list-child"
        >
          <img :src="item.picture" class="bill-list-child-img" />
          <div class="bill-list-child-middle">
            <div style="font-size: 0.375rem;font-weight:550;">
              {{ item.name }}
            </div>
            <div style="font-size: 0.375rem;">数量:{{ item.count }}</div>
          </div>
          <div class="bill-list-child-right" >
            ¥{{ item.price * item.count }}
          </div>
        </div>
      </div>
       <div class="bill-totalPrice">¥ {{ totalPrice }}</div>
      <div class="bill-info">
        <div style="display: flex; justify-content: flex-start;margin-bottom:0.1rem;">
          订单编号: {{ billNumber }}
        </div>
        <div style="display: flex; justify-content: flex-start">
          下单时间: {{ submissionTime }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    // let billNumber = route.query.billNumber; //订单编号
    // let submissionTime = route.query.submissionTime; //下单时间
    let billNumber = sessionStorage.getItem("billNumber");
    let submissionTime = sessionStorage.getItem("submissionTime");
    //filter筛选menulist生成购物车列表
    let menuList = computed(() => {
      console.log("列表更新");
      // 筛选list
      return store.state.menuList.filter((item) => {
        return item.count != 0;
      });
    });
    // 总钱数
    let totalPrice = computed(() => {
      let price = 0;
      menuList.value.forEach((item) => {
        price += item.count * item.price;
      });
      return price;
    });
    return {
      menuList,
      totalPrice,
      billNumber,
      submissionTime,
    };
  },
};
</script>

<style scoped>
.bill-container{
  height: 100%;
}

.bill-body {
  width: 100%;
  overflow: scroll;
  margin-bottom: 1.25rem;
  background-color: rgb(228, 228, 228);
}
.bill-bottom {
  height: 1.25rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: rgb(214, 210, 210);
  display: flex;
  
}
.bill-text {
  height: 50;
  border: 1px solid rgb(197, 197, 197);
  margin: 10px;
  background-color: #fff;
  padding: 0.2rem;
  /* width: 100%; */
}
.bill-list {
  /* width: 100%; */
  margin: 0 10px 0 10px;
  background-color: #fff;
}
.bill-list-child {
  /* width: 100%; */
  border-bottom: 1px solid rgb(202, 202, 202);
  display: flex;
  height: 55px;
  padding: 5px;
}
.bill-list-child-img {
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 0.1rem;
}
.bill-list-child-middle {
  flex: 1;
  font-size:0.6rem;
}
.bill-list-child-right {
  width: 1.45rem;
  font-size:0.4rem;
}
.bill-info {
  border: 1px solid rgb(189, 189, 189);
  margin: 10px;
  background-color: #fff;
  padding: 0.2rem;
}

.bill-totalPrice {
  margin: 0.3rem;
  justify-content:flex-end;
  display: flex;
  font-size:0.46rem;
  font-weight: 600;
}


</style>