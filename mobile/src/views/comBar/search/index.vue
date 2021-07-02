<template>
  <div>
      <div @click="toSearch" >
      <i class="iconfont icon-sousuo "></i>
      </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup(){
        const router = useRouter();
        const toSearch = ()=>{
            console.log('toSearch');
            router.push('/search');
        }
        return {
            toSearch,
        }
    }
})
</script>

<style>

</style>