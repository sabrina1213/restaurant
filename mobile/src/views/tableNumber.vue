<template>
  <div>
      <i class="iconfont icon-canting ">桌号{{number}}

      </i>
  </div>
</template>

<script>
import {defineComponent, onMounted,ref} from 'vue'
export default defineComponent({
    setup(){
        let number = ref('')
        onMounted(()=>{
            var params = window.location.search ;
            number.value = params.slice(6);
            console.log(number,"number");
        })
        return{
            number
        }
    }
})
</script>

<style>

</style>