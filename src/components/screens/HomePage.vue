<template>
  <div class="wrapper xl:h-height90 w-screen">
      <main class="grid grid-cols-2 w-full h-full  ">
          <text-effects></text-effects>
          <profile-photo></profile-photo>
      </main>
  </div>
</template>

<script>
import TextEffects from '../layout/HomePage/TextEffects.vue';
import ProfilePhoto from '../layout/HomePage/ProfilePhoto.vue';
export default {
    components:{
        TextEffects,
        ProfilePhoto,
    }

}
</script>

<style scoped>

</style>