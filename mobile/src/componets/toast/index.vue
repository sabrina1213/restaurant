<template>
  <div class="toast-box">
    <p class="toast-value" :style="{ background: background, color: color }">
      {{ value }}
    </p>
  </div>
</template>    
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Toast",
  props: {
    value: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 3000,
    },
    background: {
      type: String,
      default: "#000",
    },
    color: {
      type: String,
      default: "#fff",
    },
  },
});
</script>

<style>
.toast-box {
  border-radius: 0.2rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  height: 0.8rem;
  line-height: 0.8rem;
  z-index: 10;
  padding: 0.1rem 0.4rem;
  transform: translate(-50%, -50%);
  /* position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0; */
  /* display: flex;
    align-items: center;
    justify-content: center; */
}
.toast-value {
  max-width: 3rem;
  background: rgb(8, 8, 8);
  padding: 8px 10px;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  animation: anim 0.5s;
}
@keyframes anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast-value.reomve {
  animation: reomve 0.5s;
}
@keyframes reomve {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>