<template>
  <div class="shoppingCar">
    <div class="bill-box" v-if="isshow" :key="isshow">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="bill-box-child"
      >
        <div class="bill-box-child-left">{{ item.name }}</div>
        <div class="bill-box-child-middle">¥{{ item.price }}</div>
        <div class="bill-box-child-right">
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
    <div class="box">
      <div class="left" @click="showbill">
        <i class="iconfont icon-iconset0308" style="font-size: 30px"></i>
      </div>
      <div class="middle">¥ {{ totalPrice }}</div>
      <div class="right" @click="toEnsureBill">点击下单</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {postBillList} from "@/api/index"
export default {
  name: "Car",
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

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

    let isshow = ref(false); //展示账单框

    //展示账单框
    const showbill = () => {
      console.log("isshow", isshow, "from father value", props.value);
      isshow.value = !isshow.value;
      emit("carEmit", isshow.value);
    };

    //减少数量
    const numSub = (index) => {
      console.log("numsub");
      // 商品数量减一
      menuList.value[index].count--;
      console.log("new menulist", menuList);
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    };
    //添加数量
    const numAdd = (index) => {
      console.log("numadd");
      // 商品数量加一
      menuList.value[index].count++;
      console.log("new menulist", menuList);
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    };
    //跳转到账单页面
    const toEnsureBill = () => {
      console.log('postBillList',menuList);
      var params = window.location.search ;
      var number = params.slice(6);
      postBillList({list:menuList.value,money:totalPrice.value,table:number}).then((res)=>{
        if(res.err ==false){
          console.log(res.billNumber,res.submissionTime);
          router.push({
            path:"/bill",
            query:{
              billNumber:res.billNumber,
              submissionTime:res.submissionTime
            }
            });
        }
      })
      
    };
    return {
      totalPrice,
      isshow,
      menuList,
      showbill,
      toEnsureBill,
      numSub,
      numAdd,
    };
  },
};
</script>

<style scoped>
.shoppingCar {
  z-index: 20;
}
.bill-box {
  width: 100%;
  height: 130px;
  position: absolute;
  top: -130px;
  background: fuchsia;
  overflow: scroll;
}
.bill-box-child {
  display: flex;
  padding: 20px;
}
.bill-box-child-left {
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  align-self: center;
}
.bill-box-child-middle {
  flex: 0.3;
}
.bill-box-child-right {
  flex: 0.3;
}
.box {
  display: flex;
  width: 100%;
  height: 100%;
  background: greenyellow;
}
.left {
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.middle {
  flex: 1;
}
.right {
  width: 100px;
  background: goldenrod;
}
</style>