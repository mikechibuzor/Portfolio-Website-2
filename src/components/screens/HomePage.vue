<template>
  <div class="wrapper xl:h-height90 w-screen">
      <main class="grid grid-cols-2 w-full h-full py-10 ">
          <text-effects></text-effects>
          <profile-photo></profile-photo>
          <!-- <dark-mode-toggler></dark-mode-toggler> -->
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