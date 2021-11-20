<template>
  <!-- <div class="message-info iconfont icon-prompt-info" v-if="isshow">{{ info }}</div> -->
  <transition name="haha">
        <div class="bug iconfont icon-prompt-info" v-if="isshow">{{ info }}</div>
      </transition>

</template>

<script>
import { computed, inject, ref, toRef ,watch} from "vue";
export default {
  name: "message",
  props: {
    message: String,
   
  },


  setup(props) {
    
    let info = computed(()=>{
        console.log('messageprops',props);
        return props.message;
    })

    // let info = inject('message')
    // console.log(info);

    // let info = ref(props.message)
    // console.log(info);
    // let isshow = computed(()=>{
    //     // if(props.message){
    //     //     return true;
    //     // }
    //     // return false;
    //     return Boolean(props.message)
    // })
    let isshow = ref()
    // let info = ref();
    watch(props,(newProps,oldProps) => {
        console.log('newProps',newProps,oldProps);
        // info.value  = newProps.message
        isshow.value = true;
    })
    return {
      info,
      isshow
    };
  },
};
</script>

<style>
@keyframes fade-out {
  0% {
    opacity: 1;
  } /*初始状态 透明度为1*/
  40% {
    opacity: 1;
  } /*过渡状态 透明度为1*/
  100% {
    opacity: 0;
  } /*结束状态 透明度为0*/
}
.message-info {
  border-radius: 0.2rem;
  position: absolute;
  top: 1rem;
  left: 50%;
  height: 0.8rem;
  line-height: 0.8rem;
  z-index: 10;
  padding: 0.1rem 0.4rem;
  background-color: #deeaf1;
  transform: translate(-50%, -50%);
  color: black;
   animation: fade-out; /*动画名称 */
   animation-duration: 3s; /*动画持续时间 */
  opacity: 0;
}

@font-face {
  font-family: "iconfont"; /* Project id 2937157 */
  src: url("//at.alicdn.com/t/font_2937157_advjmoxtot.woff2?t=1636986101415")
      format("woff2"),
    url("//at.alicdn.com/t/font_2937157_advjmoxtot.woff?t=1636986101415")
      format("woff"),
    url("//at.alicdn.com/t/font_2937157_advjmoxtot.ttf?t=1636986101415")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-prompt-info:before {
  content: "\e7b7";
}

/**test */
.haha-leave-active {
  transition: opacity 0.5s;
}
.haha-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bug{
          position: relative;
          opacity: 1 important;
        }
</style>