<template>
  <div class="wrapper fixed credit bottom-2 flex items-end justify-center   left-96 ">
      <p class="cursor-pointer transition-all duration-350 text-xs text-center text-gray-400  flex items-center justify-center" >Made with love by Chibuzor 
          <span class="">
              <svg class="h-6 w-6 transition-all duration-350 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path class="transition-all duration-350 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
          </span>
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

p:hover svg
{
  fill: red;
}
p:hover path{
  stroke: red;
}
  /* .credit{
    transform: rotateZ(180deg);
    writing-mode: vertical-rl;
  }

  span{
    transform: rotateZ(90deg);
  } */
</style>