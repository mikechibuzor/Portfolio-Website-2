<template>
  <div class="wrapper fixed bottom-2 md:bottom-16 xl:bottom-14 cursor-pointer">
      <div @click="darkModeToggler"  class="container-box h-full w-full relative flex justify-between bg-midNightBlue shadow-md drop-shadow-md px-1 rounded-full py-.5">
           <span class="light mr-1 ">
            <svg class="h-6 w-6 " fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke="white" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </span>
        <span class="">
            <svg class="h-6 w-6 " viewBox="0 0 20 20" fill="gold">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </span>
     
        
        <p :class="moveToggleSwitch" class="toggler duration-150 transition-all absolute  bg-white"></p>
      </div>
  </div>
</template>

<script>

import { computed  } from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        
        const store = useStore();
     
        // computed
        const darkMode = computed(()=>store.getters.getTheme);

        const moveToggleSwitch = computed(()=> {
            return{
                'toggle-move-left': darkMode.value === 'light',
                'toggle-move-right': darkMode.value === 'dark'
            }
        });

        // methods
        const darkModeToggler = ()=>{
            store.dispatch('toggleTheme');
            return darkMode.value;
        }

        return{
            darkMode,
            moveToggleSwitch,
            darkModeToggler,
        }
    }
}
</script>

<style scoped>
    .wrapper .container-box{
        box-shadow: 0px 2px 12px #191970;
    }
    .toggler{
        height: 1.7rem;
        width: 1.7rem;
        top: -.1rem;
        right: 0;
        border-radius: 50%;
    }

    

    /* animations for darkmode */
    .toggle-move-left{
        animation: toggleMoveLeft .2s ease-in-out forwards;
        
    }
    .toggle-move-right{
        animation: toggleMoveRight .2s ease-in-out forwards;
       
    }

    @keyframes toggleMoveLeft{
       0%{
           transform: translateX(-125%);
        }
        70%{
            transform: translateX(20%);
           
            opacity: .7;
        }
        100%{
            transform: translateX(0%);
        
            opacity: 1;
        }
    }

    @keyframes toggleMoveRight{
       0%{
            transform: translateX(0%);

            opacity: 1;
        }
        70%{
            transform: translateX(-145%);
            opacity: .7;
        }
        100%{
            transform: translateX(-125%);
            opacity: 1;
        }
    }

    
</style>