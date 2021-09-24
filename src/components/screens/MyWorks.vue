<template>
  <div class="wrapper">
    <main class="relative" >
      <side-navigation></side-navigation>
      <div class="main-content border bg-red-50 w-4/5 h-height100">
        <router-view>
        
        </router-view>
      </div>
      
    </main>
  </div>
</template>

<script>
import SideNavigation from '../layout/works/SideNavigation.vue';
export default {
  components:{
    SideNavigation,
  }
}
</script>

<style scoped>

.side-navigation{
  position: fixed;
  width: 14.5%;

}
  .main-content{
    width: 83%;
    margin-left: 16%;
    height: 150vh;
    
  }
</style>