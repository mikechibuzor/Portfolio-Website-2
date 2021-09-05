<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="in-out">
        <component class="px-4 xl:px-16 " :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script >

import TheHeader from './components/layout/header/TheHeader.vue';

import { ref } from 'vue';

 export default{
   components:{
     TheHeader
   },
    setup(){
    const counter = ref(0);
 

    // increase counter handler
    const increaseCounter = ()=>{
      counter.value++;
    }
    
    return{
      counter,
      increaseCounter,
    }
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
