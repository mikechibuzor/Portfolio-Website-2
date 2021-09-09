<template>
  <div class="wrapper 2xl:pt-5 col-span-2 xl:col-span-1 mt-10 order-2 xl:order-1 ">
    <div class="greeting  ">
        <h3 class=" italic mb-0.5 md:text-2xl xl:text-base 2xl:text-3xl  xl:mb-2 text-center xl:text-left dark:text-gray-400">Hello!</h3>
        <h1 class="font-bold text-4xl md:text-6xl 2xl:text-8xl tracking-wide mb-3 text-center xl:text-left dark:text-gray-400">I am <span class="text-midNightBlue dark:text-yellow-500 ">Tunmise.</span></h1>
    </div>
    <div class="job-description flex items-center justify-center  xl:w-4/5">
        <p class="text-gray-600 md:text-xl xl:text-base  md:mt-2 text-justify dark:text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corporis quae reiciendis distinctio sapiente adipisci
             sequi esse eius illum nemo, omnis, consequatur assumenda! Minima perspiciatis natus at, atque consequatur 
             exercitationem.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corporis quae reiciendis distinctio sapiente adipisci
        </p>
    </div>
  </div>
</template>

<script>

// import { onMounted, ref } from 'vue';
// import { TypeWriterEffect } from "../../../HelperFunctions/TypewriterEffect.js";

export default {

    // setup(){
        
    //     const jobDescriptionText = ref(null);
        
      
    //     // // lifecycle hooks
    //     // onMounted(()=>{ 
            
    //     //     const typeEffect = new TypeWriterEffect(jobDescriptionText.value);
    //     //     typeEffect.typingEffect();
    //     //     });
    //     // return{
    //     //     jobDescriptionText,
    //     // }

         
    // }
}
</script>

<style scoped>
    h1{
        text-shadow: 4px 2px 2px rgba(0, 0, 0, .2);
    }

   
</style>