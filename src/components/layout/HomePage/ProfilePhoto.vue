<template>
  <div class="col-span-2 xl:col-span-1 flex items-center justify-center xl:items-end xl:justify-end order-1 xl:order-2">
    <div class="wrap  xl:mr-20 relative xl:mb-5 flex flex-col items-center justify-center">
        <div class="photo bg-midNightBlue dark:bg-yellow-500 shadow-xl overflow-hidden   border   col-span-1">
            <img src="../../../assets/images/profile-photo.jpg" alt="my-photo">
        </div>
        <p class="font-bold text-lg md:text-3xl xl:text-xl  mt-2 dark:text-gray-400">Creative Writer</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    width: 95%;
    border-radius: 50%;
    height: 95%;
    object-fit: cover;
}
p{
    text-shadow: 4px 2px 2px rgba(0, 0, 0, .2);
    letter-spacing: .15rem;
}
    .photo{
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        position: relative;
        z-index: 5;
       
        display: flex;
        box-shadow: 1px 0px 10px 1px #19197081;
    }

    html.dark .photo{
        
         box-shadow: 1px 0px 10px 1px goldenrod;
    }

     .photo::after{
        position: absolute;
        left: .5rem;
        top: .5rem;
        content: '';
        width: 102.5%;
        height: 102.5%;
        background: black;
        opacity: .12;
        z-index: 2;
        border-radius: 50%;
    }
    
    /* responsive */
   
    @media screen and (max-width: 767px){
        .photo{
            height: 18.5rem;
            width: 18.5em;
        }

        
    }
</style>