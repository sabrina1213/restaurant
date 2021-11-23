<template>
  <div >
      <div :class="{mask:true, maskShow: isshow, maskHide: !isshow }"></div>
      <div  :class="{ dialogBox: true, dialogBoxShow: isshow, dialogBoxHide: !isshow }">
        <div class="dialog-info">
          <span>{{mes}}</span>
        </div>
        <div class="button-com">
          <div class="button-cancle" @click="cancleUpload">
            取消
          </div>
          <div class="button-confirm" @click="Upload">
            确定
          </div>
        </div>
      </div>
  </div>

</template>

<script>
import { computed, inject, ref,watch} from "vue";
export default {
  name: "message",
  props: {
   message : String,
   isshow :Boolean
  },


  setup(props) {
    let mes = props.message;
    let isshow = props.isshow;
    
    return {
     mes,
     isshow
    };
  },
};
</script>

<style>
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.maskShow {
  opacity: 1;
}
.maskHide {
  display: none;
}
.dialogBox {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: #fff;
  max-width: 750px;
}
.dialogBoxShow {
  opacity: 1;
}
.dialogBoxHide {
 
  display: none;
}
</style>