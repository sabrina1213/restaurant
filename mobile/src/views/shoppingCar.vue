<template>
  <div class="shoppingCar">
    <div class="bill-box" v-if="isshow" :key="isshow">
    {{isshow}}
    </div>
      <div class="box">
        <div class="left" @click="showbill">
          <i class="iconfont icon-iconset0308" style="font-size:30px;"></i>
        </div>
        <div class="middle">
          ¥ middle 
        </div>
        <div class="right" @click="toEnsureBill">
          点击下单
        </div>
      </div>
  </div>
</template>

<script>
import { ref} from "vue";
import { useRouter } from 'vue-router'
export default {
  name:'Car',
  props: {
    value: Boolean
  },
    setup(props,{ emit }) {
      const router = useRouter();
        let isshow = ref(false);
        //展示账单框
        const showbill = ()=>{
          console.log('isshow',isshow)
          console.log('from father value',props.value);
          isshow.value = !isshow.value;
          emit("carEmit",isshow.value)
        }
        //跳转到账单页面
        const toEnsureBill = ()=>{
          router.push('/bill');
        }
        return{
          showbill,
          toEnsureBill,
          isshow
        }
    },
}
</script>

<style scoped>
.shoppingCar{
  z-index: 20;
}
.bill-box{
  width: 100%;
  height: 50px;
  position: absolute;
  top: -50px ;
  background: fuchsia;
}
.box{
  display: flex;
  width: 100%;
  height: 100%;
  background: greenyellow;
}
.left{
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.middle{
  flex: 1;
}
.right{
  width: 100px;
  background: goldenrod;
}
</style>