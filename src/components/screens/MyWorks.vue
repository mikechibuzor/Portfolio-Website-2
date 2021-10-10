<template>
  <div class="wrapper">
    <main class="relative" >
      <side-navigation></side-navigation>
      <div class="main-content  w-4/5 ">
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
  width: 14.5%;
}
  .main-content{
    width: 83%;
    margin-left: 16%;
    height: auto;
    /* height: 150vh; */
    
  }

  @media screen and (max-width: 768px){
    .side-navigation{
      width: 100%;
    }

    .main-content{
      width: 100%;
      margin: 0;
    }
  }
</style>