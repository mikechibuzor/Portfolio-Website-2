<template>
  <div class="wrapper flex items-center justify-between pl-16 pr-20 py-4">

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