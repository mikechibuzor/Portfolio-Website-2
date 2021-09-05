<template>
  <div class="wrapper flex items-center justify-between pl-0 pr-4  xl:pl-16 xl:pr-20 pt-2">

      <the-logo></the-logo>
      <nav-bar></nav-bar>

  </div>
</template>

<script>

import TheLogo from './TheLogo.vue';
import NavBar from './NavBar.vue';


export default {
    components:{
        TheLogo,
        NavBar,
    },
}
</script>

<style>

</style>