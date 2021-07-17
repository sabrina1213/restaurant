<template>
  <div>
    <div class="bill-title">订单详情</div>
    <div class="bill-body">
      <div class="bill-text">
        <div
          style="font-size: 20px; display: flex; justify-content: flex-start"
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
          <img :src="item.picture" class="bill-list-child-left" />
          <div class="bill-list-child-middle">
            <div>
              {{ item.name }}
            </div>
            <div>数量:{{ item.count }}</div>
          </div>
          <div class="bill-list-child-right">
            ¥{{ item.price * item.count }}
          </div>
        </div>
      </div>
      <div class="bill-info">
        <div style="display: flex; justify-content: flex-start">订单信息</div>
        <div style="display: flex; justify-content: flex-start">
          订单编号{{ billNumber }}
        </div>
        <div style="display: flex; justify-content: flex-start">
          下单时间{{ submissionTime }}
        </div>
      </div>
    </div>
    <div class="bill-bottom">
      <div class="bill-bottom-left">¥ {{ totalPrice }}</div>
      <div class="bill-bottom-right">
        <div class="bill-pay">我要买单</div>
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
    let billNumber = route.query.billNumber; //订单编号
    let submissionTime = route.query.submissionTime; //下单时间
    console.log(
      "router.query.submissionTime",
      route.query.billNumber,
      route.query.submissionTime
    );
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
.bill-title {
  height: 30px;
  width: 100%;
  line-height: 30px;
  text-align: center;
  position: fixed;
  top: 0;
  background-color: #fff;
}
.bill-body {
  width: 100%;
  overflow: scroll;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: rgb(228, 228, 228);
}
.bill-bottom {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: red;
  display: flex;
}
.bill-text {
  height: 50;
  border: 1px solid rgb(197, 197, 197);
  margin: 10px;
  background-color: #fff;
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
.bill-list-child-left {
  width: 55px;
  height: 55px;
  border-radius: 10px;
}
.bill-list-child-middle {
  flex: 1;
}
.bill-list-child-right {
  width: 50px;
}
.bill-info {
  border: 1px solid rgb(189, 189, 189);
  margin: 10px;
  background-color: #fff;
}
.bill-bottom {
  display: flex;
}
.bill-bottom-left {
  padding: 10px;
  font-size: 1rem;
  width: 50px;
  display: flex;
  align-items: center;
}
.bill-bottom-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.bill-pay {
  width: 90px;
  font-size: 1rem;
  background: hotpink;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>