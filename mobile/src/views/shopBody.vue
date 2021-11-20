<template>
  <div class="shopbody-box">
    
    <!-- <message /> -->
    <div class="shopbody-nav">
      <div class="nav-to-detial" @click="toShowMenu">
        <span :class="{ currentNav: isMenu,navfont:true }">点餐</span>
      </div>
      <div class="nav-to-bill" @click="toShowBill">
        <span :class="{ currentNav: !isMenu ,navfont:true}">订单</span>
      </div>
    </div>
    <div class="shopbody-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import { ref, computed, provide } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Toast from "../componets/toast"; 
export default {
  components: {},
  setup() {
    const router = useRouter();
    const store = useStore();
    let isMenu = ref(true);
   

    let toShowMenu = () => {
      isMenu.value = true;
      let menu = JSON.parse(sessionStorage.getItem("bill"));
      router.push("/menu/detial");

      console.log("........router push .........", menu);

      store.commit("menuListChanged", {
        list: menu,
      });
     
    };
    let toShowBill = () => {
     
      let isEnsureBill = sessionStorage.getItem("isEnsureBill");
      if (isEnsureBill == "true") {
        isMenu.value = false;
        //   console.log('currentNav',isMenu);
        router.push("/menu/bill");
        let menu = JSON.parse(sessionStorage.getItem("bill"));
        store.commit("menuListChanged", {
          list: menu,
        });
      } else {
        

        const toast = Toast({
          value: "您还未确认订单哦～",
          duration: 0, // 如果大于0则不必使用destory方法
          background: "#303030ad",
          color: "#fff",
        });
        setTimeout(() => {
          toast.destory && toast.destory();
        }, 3000);
      }
    };

    return {
      isMenu,
      toShowMenu,
      toShowBill,
    };
  },
};
</script>

<style lang="less" scoped>
.shopbody-box {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.shopbody-nav {
  height: 1rem;
  display: flex;
  // font-size: 0.43rem;
}
.nav-to-detial {
  flex: 1;
  cursor: pointer;
}
.nav-to-bill {
  flex: 1;
  cursor: pointer;
}
.shopbody-content {
  flex: 1;
  overflow: hidden;
}

.currentNav {
  color: #f23030;
  border-bottom: 0.1rem solid #f23030;
}
.navfont{
  font-size: 0.4rem;
}
</style>

