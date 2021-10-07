<template>
  <div class="transition-all duration-300 single-book border overflow-hidden rounded h-height40 cursor-pointer">
      <div class="book-image h-2/4">
        <div class="img rounded w-full h-full">
          <img class="w-full h-full" src="../../../../assets/images/background-tunmise-portfolio.jpg" alt="books">
        </div>
      </div>
      <div class="details it h-1/4 flex flex-col items-center justify-centers   px-1">
        <h3 class="text-xs mb-1 mt-2 text-center">The anatomy of female sexuality<br/> -- Sheri WinstonThe anatomy of female sexuality -- Sheri Winston</h3>
        <button class="mt-0.5 bg-red-700 text-white rounded shadow-md transition-all duration-300 hover:bg-red-600 text-sm px-6 py-0.5">Buy</button>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.single-book{
    border: 1px solid #eee;
    padding: 1rem 2rem 0rem 2rem
  }

  .single-book:hover{
    box-shadow: 5px 2px 12px 2px rgba(25, 25, 112, .5);
  }

  .book-image{
    height: 65%;
  }
</style>