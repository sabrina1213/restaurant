<template>
  <div class="box"> 
      <div class="left">
        Infor
      </div>
      <div class="right">
         Bill
      </div>
      <div class="middle">
        Search
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.box{
  display: flex;
  width: 1000px;
  justify-content:flex-start;
  align-items:flex-end;
  height: 500px;
}
.left{
  width: 50px;
  height: 100px;
  /* display: inline-block; */
}
.middle{
  width: 50px;
  height: 100px;
  /* display: inline-block; */
}
.right{
  width: 50px;
  height: 100px;
  /* display: inline-block; */
}
</style>