<template>
  <main class="grid grid-cols-1 xl:grid-cols-3 gap-8 px-4 xl:px-8  py-8">
    <single-book
      v-for="x in 30"
      :key="x" 
    >
    </single-book>
  </main>
</template>

<script>
import SingleBook from './SingleBook.vue';
export default {
  components:{
    SingleBook
  }

}
</script>

<style scoped>
  
</style>