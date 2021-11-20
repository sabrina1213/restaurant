<template>
    <div class="title-box">
        <!-- <img src="http://localhost:3000/public/images/title.jpg" class="title-img"> -->
        <i class="iconfont icon-maomi"></i>
        <span class="title-name">妖精的店铺</span>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="less" scoped>
.title-box{
    text-align: left;
    padding: 0.3rem;
    display: flex;
}
.title-img{
    height: 1.2rem;
    width: 1.2rem;
}
.title-name{
    flex: 1;
    font-size: 0.5rem;
    font-weight: 540;
    padding:0.1rem;
}
.icon-maomi{
    font-size: 0.95rem;
    color: #f10c0cb0;
    font-weight: bolder;

}
</style>

