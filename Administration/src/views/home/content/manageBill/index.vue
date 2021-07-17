<template>
  <div>
    <div v-if="isStatue">
      <Statue @statueEmit="commit" />
    </div>
    <div v-if="isStatue == false">
      <Detail :value="{ list: bill1, value: info }" />
    </div>
  </div>
</template>

<script>
import Statue from "./billstatue.vue";
import Detail from "./billdetail.vue";
import { reactive, ref } from "vue";
export default {
  components: {
    Statue,
    Detail,
  },
  setup() {
    let isStatue = ref(true);
    let info = ref();
    let bill1 = reactive([]);
    const commit = (e) => {
      info.value = e.billInfo;
      
      e.billList.forEach(element => {
        bill1.push(element)
      });
      console.log("info", typeof info, typeof bill1, bill1);
      isStatue.value = false;
    };
    return {
      isStatue,
      commit,
      info,
      bill1,
    };
  },
};
</script>

<style>
</style>