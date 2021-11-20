<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index" class="menu-box">
      <div  class="menu-item-name">
        {{ item.name }} 
        </div>
        <div class="menu-item-info">
          <div class="menu-item-img">
            <img
          :src="item.picture"
          class="menu-item-cover"
        />
          </div>
          
        <div class="menu-item-rightbox">
          <div class="menu-item-price">
            ¥{{ item.price }}
          </div>
          <div class="menu-item-select">
            <div style="display: inline" @click="numSub(index,item)" v-if="item.count>0">
              <i class="iconfont icon-iconset0187"></i>
            </div>
            <div style="display: inline-block;font-size: 0.6rem;width:0.9rem;" v-if="item.count>0"> {{ item.count }}</div>
           
            <!-- <div style="display: inline" @click="numAdd(index)"> -->
            <div style="display: inline" @click="numAdd(index,item)">
              <i class="iconfont icon-iconset0186"></i>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from "vue";
import { toRaw } from "@vue/reactivity";
import { useStore } from "vuex";
import sessionFun from "../utils/sessionFun"
export default defineComponent({
  name: "Menu",
  props: {
    type: String,
  },
  setup(props) {
    const store = useStore();
    
    
    
    //菜单列表
    let menuList = computed(() => {
      // 筛选list
      return store.state.menuList.filter((item) => {
        return item.type == props.type;
      });
    });
    

    //添加数量
    const numAdd = (index,item) => {
      
      sessionFun('add',item);
      menuList.value[index].count++;
      
      
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    }



    //减少数量
    const numSub = (index,item) => {
      // console.log('---sub goods -----',item);
      sessionFun('sub',item);
      // 商品数量减一
      menuList.value[index].count--;
      // console.log("new menulist", menuList);
      store.commit("menuListAddCount", {
        name: menuList.value[index].name,
        count: menuList.value[index].count,
      });
    };
    return {
      menuList,
      numAdd,
      numSub,
    };
  },
});
</script>

<style lang="less" scoped>


.menu-box {
  display: flex;
  flex-direction:column;
  background:  #f7f8f5;;
  padding-bottom: 0.19rem;
}
.menu-item-name{
  display: block;
  color: #333;
  font-size: 0.44444rem;
  font-weight: 700;
  text-align: right;
  padding-right: 0.33333rem;
}
.menu-item-info{
  display: flex;

}
.menu-item-img{
  width: 3.5rem;
}
img {
    border-style: none;
}
.menu-item-cover{
  width: 3.3rem;
  height: 3.22rem;
  border-radius: 0.19444rem;
  box-shadow: 0.11111rem 0.08333rem 0.19444rem #adadad;

  background-color: white;

}
.menu-item-rightbox{
  flex: 1;
  display: flex;
  flex-direction:column;
}

.menu-item-price{
  flex: 1;
  color: #f23030;
  font-size: 0.4844rem;
  font-weight: 500;
  text-align: right;
  padding-right: 0.33333rem;
}

.menu-item-select{
  height: 0.74rem;
  // color: #f23030;
  display: flex;
  justify-content:flex-end;
  padding-right: 0.33333rem;
  font-size: 0.74rem;
}

.icon-iconset0186{
  color: #f00;
  font-size: 0.74rem;
  //  padding-left: 0.43333rem;
}

.icon-iconset0187{
  font-size: 0.74rem;
  //  padding-right: 0.43333rem;
}


</style>