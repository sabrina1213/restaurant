<template>
  <div class="box"> 
      <div class="left">
        <Information/>
      </div>
      <div class="middle">
        <Search/>
      </div>
      <div class="right">
        <Bill/>
      </div>
  </div>
</template>

<script>
import Bill from './bill/index.vue'
import Information from './infomation/index.vue'
import Search from './search/index.vue'
import { defineComponent } from "vue";
export default defineComponent({
  components:{
    Bill,
    Information,
    Search
  }
})
</script>

<style scoped>
.box{
  display: flex;
  
  justify-content:flex-start;
  align-items:flex-end;
}
.left{
  width: 50px;
}
.middle{
  width: 50px;
}
.right{
  width: 50px;
}
</style>