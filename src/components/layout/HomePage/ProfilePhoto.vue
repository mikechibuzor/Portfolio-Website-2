<template>
  <div class=" flex items-end justify-end">
    <div class="wrap xl:mr-20 relative xl:mb-5 flex flex-col items-center justify-center">
        <div class="photo shadow-xl overflow-hidden   border   col-span-1">
            <img src="../../../assets/images/profile-photo.jpg" alt="my-photo">
        </div>
        <p class="font-bold text-lg mt-2 ">Creative Writer</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
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
        z-index: 2000;
        background: white;
        display: flex;
        box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, .2);
    }

     .photo::after{
        position: absolute;
        left: .5rem;
        top: .5rem;
        content: '';
        width: 102.5%;
        height: 102.5%;
        background: black;
        opacity: .1;
        z-index: 2;
        border-radius: 50%;
    }
    /* .photo::before{
        position: absolute;
        left: .4rem;
        top: .2rem;
        content: '';
        width: 102.5%;
        height: 102.5%;
        background: white;
        z-index: -14;
        border-radius: 50%;
    }  */
</style>