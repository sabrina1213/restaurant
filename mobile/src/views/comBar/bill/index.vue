<template>
  <div>
      <div @click="toBill" >
      <i class="iconfont icon-dingdan "></i>
      </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
export default {
    setup(){
        const router = useRouter();
        const toBill = ()=>{
            // console.log('tobill');
            router.push('/bill');
        }
        return {
            toBill,
        }
    }
}
</script>

<style>

</style>