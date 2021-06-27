<template>
  <div>
    <div v-for="(item, index) in typelist" :key="index" :class="{box:true,box1:box1==index}" @click="mouseclick(index)">
        {{ item.type }}</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    let typelist = ref(['a','b']);
    let box1 = ref(0);
    onMounted(() => {
        axios.get("http://localhost:3000/client/getTpyeList").then((res)=>{
            console.log("getTpyeList",res);
            if(res.data.err==false){
                typelist.value = res.data.list;
                console.log('typelist upgrade',typelist.value);
            }
        })
    });
    const mouseclick=(index)=>{
        console.log('mouseclick',index);
        box1.value = index;
    }
    return {
      typelist,
      mouseclick,
      box1
    };
  },
});
</script>

<style>
/* 利用行高（line-height）让文字垂直居中 设置line-height和height的值一样*/
.box {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.box1{
    background: crimson;
}
</style>