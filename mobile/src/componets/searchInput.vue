<template>
  <div class="search_bar">
     <i class="search-icon-bar iconfont  icon-sousuo " > </i>
    <input type="text" placeholder="搜索" class="search-empty"  onfocus=""  v-on:keydown="inputTargetValue">
  </div>
</template>
<script>

import {defineComponent} from 'vue'
export default defineComponent({
  name: 'searchInput',
  setup(props,{ emit }) {
    //获取input的值
    let inputTargetValue = function(e){
      if(e.keyCode == 13){
        emit('value',e.target.value);
      }
       
    }

    return {
      inputTargetValue
    }
  }
});
</script>

<style lang="less" scoped>
.search-empty{
  flex:1;
}
.search_bar{
  height: 0.7rem;
  margin: 0.2rem 0.345rem;
    overflow: hidden;
    background-color: white;
    border-radius: 0.4rem; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-icon-bar{
   height: 0.4rem;
   padding: 0.11rem; 
   line-height: 0.4rem;
}
input{
  background:none;  
	outline:none;  
	border:none;
}


</style>