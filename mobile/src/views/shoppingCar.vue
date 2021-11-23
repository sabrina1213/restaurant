<template>
  <div class="shoppingCar">
   
    <div class="drawer">
      <div
        :class="{ maskShow: isshow, maskHide: !isshow }"
        @click="closeByMask()"
      ></div>
      <div :class="{ slider: true, sliderShow: isshow, sliderHide: !isshow }">
        <div class="drawer-title">已选商品</div>
        <ul class="drawer-goods-container">
          <li
            v-for="(item, index) in billList"
            :key="index"
            class="drawer-goods-content"
          >
            <div class="drawer-goods-item">
              <div class="goods-name">{{ item.name }}</div>
              <div class="goods-price">¥{{ item.price }}</div>
              <div class="goods-process">
                <div style="display: inline" @click="numSub(index, item)">
                  <i class="iconfont icon-iconset0187"></i>
                </div>
                <span
                  style="
                    display: inline-block;
                    font-size: 0.4rem;
                    width: 0.9rem;
                  "
                >
                  {{ item.count }}
                </span>

                <div style="display: inline" @click="numAdd(index, item)">
                  <i class="iconfont icon-iconset0186"></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopping-car-layout">
      <div class="shopping-car-layout-left" @click="showbill()">
        <i class="iconfont icon-iconset0308"></i>
      </div>
      <div class="shopping-car-layout-middle">¥ {{ totalPrice }}</div>
      <div class="shopping-car-layout-right" @click="toEnsureBill">去下单</div>
    </div>
    <!-- <dialog :message="dialogMessage" :isshow="isdialogshow"></dialog> -->

    <div >
      <div :class="{diamask:true, diamaskShow: isdialogshow, diamaskHide: !isdialogshow }"></div>
      <div  :class="{ dialogBox: true, dialogBoxShow: isdialogshow, dialogBoxHide: !isdialogshow }">
        <div class="dialog-info">
          <span>{{dialogMessage}}</span>
        </div>
        <div class="button-com">
          <div class="button-cancle" @click="cancleUpload">
            取消
          </div>
          <div class="button-confirm" @click="Upload">
            确定
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { postBillList } from "@/api/index";
import sessionFun from "../utils/sessionFun";
import Toast from "../componets/toast"; 
export default {
  name: "Car",
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
   
    //filter筛选menulist生成购物车列表
    let billList = computed(() => {
      // 筛选list
      return store.state.menuList.filter((item) => {
        return item.count != 0;
      });
    });
    // 总钱数
    let totalPrice = computed(() => {
      let price = 0;
      billList.value.forEach((item) => {
        price += item.count * item.price;
      });
      return price;
    });

    let isshow = ref(false); //展示账单框

    //展示账单框
    const showbill = () => {
      if (billList.value.length > 0) {
        isshow.value = true;
      } else {
       const toast = Toast({
          value: "请添加商品",
          duration: 0, // 如果大于0则不必使用destory方法
          background: "#303030ad",
          color: "#fff",
        });
        setTimeout(() => {
          toast.destory && toast.destory();
        }, 3000);
      }

      // emit("carEmit", isshow.value);
    };

    //关闭账单框
    const closeByMask = () => {
      isshow.value = false;
    };

    //减少数量
    const numSub = (index, item) => {
      console.log("numsub");

      sessionFun("sub", item);
      // 商品数量减一
      billList.value[index].count--;

      store.commit("menuListAddCount", {
        name: billList.value[index].name,
        count: billList.value[index].count,
      });
    };
    //添加数量
    const numAdd = (index, item) => {
      console.log("numadd");
      sessionFun("add", item);
      // 商品数量加一
      billList.value[index].count++;

      store.commit("menuListAddCount", {
        name: billList.value[index].name,
        count: billList.value[index].count,
      });
    };

    let dialogMessage = ref('确认下单吗？');
    let isdialogshow = ref(false);
    const cancleUpload = ()=>{
      isdialogshow.value  = false;
    }
    const Upload = ()=>{
      isdialogshow.value  = false;
      console.log("postBillList---------", billList);
        sessionStorage.setItem("isEnsureBill", "true");
        var params = window.location.hash;
    
        var number = params.slice(19);
       
        postBillList({
          list: billList.value,
          money: totalPrice.value,
          table: number,
        }).then((res) => {
          if (res.err == false) {
            console.log(res.billNumber, res.submissionTime);
            sessionStorage.setItem("billNumber", res.billNumber);
            sessionStorage.setItem("submissionTime", res.submissionTime);

            router.push({
              path: "/menu/bill",
              query: {
                billNumber: res.billNumber,
                submissionTime: res.submissionTime,
              },
            });
          }
        });
    }
    //跳转到账单页面
    const toEnsureBill = () => {
      if (billList.value.length > 0) {
        isdialogshow.value = true;
      } else {
         const toast = Toast({
          value: "请添加商品",
          duration: 0, // 如果大于0则不必使用destory方法
          background: "#303030ad",
          color: "#fff",
        });
        setTimeout(() => {
          toast.destory && toast.destory();
        }, 3000);
        
      }
    };

    return {
      isdialogshow,
      dialogMessage,
      totalPrice,
      isshow,
      billList,
      showbill,
      closeByMask,
      toEnsureBill,
      numSub,
      numAdd,
      cancleUpload,
      Upload

    };
  },
};
</script>

<style scoped>
.shoppingCar {
  height: 100%;
}

.maskShow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;

}
.maskHide {
 
  transition: 0.5s;
  display: none;
}
.slider {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: #fff;
  max-width: 750px;
  /* transition: all 0.5s; */
  /* transition: all 5s ease 0s; */
}
.sliderShow {
  opacity: 1;
}
.sliderHide {
  /* opacity: 0; */
  display: none;
}

.drawer-title {
  display: flex;
  justify-content: flex-start;
  height: 0.43556rem;
  margin: 0.43889rem;
  padding-left: 0.13889rem;
  border-left: 0.12rem solid;
  border-left-color: #f23030;
  font-size:0.37rem;
  font-weight: 600;
}

.drawer-goods-container {
  padding-left: 0.23889rem;
  max-height: 4rem;
  overflow: scroll;
  font-size:0.37rem;
  margin-bottom: 0.43889rem;
}
ul {
  list-style: none;
}

.drawer-goods-content:not(:last-child) {
  border-bottom: dashed 0.02778rem #e8e8e8;
}
.drawer-goods-item {
  display: flex;
  flex-direction: row;
  padding: 0.23889rem;
}

.goods-name {
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  font-size:0.37rem;
  font-weight: 600;
}
.goods-price {
  flex: 0.3;
  font-size:0.37rem;
}
.goods-process {
  flex: 0.4;
  font-size:0.37rem;
}

.iconfont{
  color: #f23030;
}

.shopping-car-layout {
  display: flex;
  width: 100%;
  height: 100%;
}
.shopping-car-layout-left {
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff302f;
}
.icon-iconset0308 {
  font-size: 1rem;
}
.shopping-car-layout-middle {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 0.44444rem;
  justify-content: center;
  color: #ff302f;
}
.shopping-car-layout-right {
  width: 3.33333rem;
  background: #ff302f;
  color: white;
  display: flex;
  align-items: center;
  font-size: 0.44444rem;
  justify-content: center;
}


.diamask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.diamaskShow {
  opacity: 1;
}
.diamaskHide {
  display: none;
}
.dialogBox {
  position: fixed;
  z-index: 10;
  top: 50%;
    width: 45%;
    height: 3.2rem;
    left: 50%;
    transform: translateX(-50%);
  background: #fff;
  max-width: 750px;
  display: flex;
  flex-direction: column;
}
.dialogBoxShow {
  opacity: 1;
}
.dialogBoxHide {
 
  display: none;
}
.dialog-info{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-com{
  height: 1rem;
  display: flex;
  flex-direction: row;
}
.button-cancle{
  flex: 1;
  cursor: pointer;
}
.button-confirm{
  flex: 1;
  cursor: pointer;
}
.button-cancle:hover{
  color: blue;
}
.button-confirm:hover{
  color: blue;
}
</style>