<template>
  <div>
      <div @click="toInfo" >
       <i class="iconfont icon-xiaoxi"></i>
      </div>
  </div>
</template>

<script>

import {defineComponent} from 'vue'
import {
    useRouter
} from 'vue-router'

export default defineComponent({
    setup(){
        const router = useRouter();
        const toInfo = ()=>{
            router.push('/info');
            console.log(' to infomtion');
        }
        return {
            toInfo
            };
    }
})
</script>

<style>

</style>