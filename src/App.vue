<template>
 <div>
    <the-header></the-header>
    <main class=" overflow-hidden" >
      <router-view v-slot="slotProps">
        <transition name="route" mode="in-out">
          <component class="px-4 xl:px-16 mb-8 xl:mb-0" :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
    <dark-mode-toggler></dark-mode-toggler>
    <iwuagwu-chibuzor></iwuagwu-chibuzor>
 </div>
</template>

<script >

import { onBeforeMount, computed, watch } from 'vue';
import { useStore } from 'vuex';

import TheHeader from './components/layout/header/TheHeader.vue';


 export default{
   components:{
     TheHeader,
   },
    setup(){
      
      const store = useStore();
      console.log(store);

      // computed
      const theme = computed(()=> store.getters.getTheme);

      // watchers
      watch(theme, (newTheme)=>{ newTheme === "light"
          ? document.querySelector("html").classList.remove("dark")
          : document.querySelector("html").classList.add("dark")
      });

      // lifecycle hooks
      onBeforeMount(()=>{
        store.dispatch("initTheme")
      })

  }
 }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
body {
  font-family: "Quicksand", sans-serif;
}


route-enter-from{
  opacity: 0;
  transform: translateY(-.4rem);
}
.route-leave-to{
  opacity: 0;
  transform: translateY(4rem);
}
.route-enter-active{
  transition: all .3s ease-out;
}
.route-leave-active{
    transition: all .3s ease-in;
}
.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}

</style>
