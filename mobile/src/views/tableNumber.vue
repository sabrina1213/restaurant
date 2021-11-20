<template>
  <div class="table">
    <i class="iconfont icon-canting">桌号{{ number }} </i>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  setup() {
    let number = ref("");
    onMounted(() => {
      // var params = window.location.search ;
      var params = window.location.hash;
      console.log('window.location.hash;',params);
      number.value = params.slice(8);
      console.log(number, "number");
    });
    return {
      number,
    };
  },
});
</script>

<style scoped>
.table {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 20px;
}
</style>