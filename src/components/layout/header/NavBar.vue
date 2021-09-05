<template>
    <div class="house  w-full">
        <div @click="toggleNav" class="pl-4   toggleMenu xl:hidden w-full xl:mt-6 flex justify-end  items-center">
            <div class="menu-icon">
                <hamburger-button></hamburger-button>
            </div>
        </div>
        <nav ref="nav" class="w-full  xl:block ">
            <ul  class=" hidden w-full xl:bg-transparent static xl:flex xl:items-center xl:justify-between flex-col xl:flex-row xl:w-full justify-start  ">
                <li class=" xl:mt-8  text-gray-500"><router-link to='/home'>Home</router-link></li>
                <li class=" xl:mt-8  text-gray-500"><router-link to='/about-me'>About me</router-link></li>
                <li class=" xl:mt-8  text-gray-500"><router-link to='/my-blog'>Blog</router-link></li>
                <li class=" xl:mt-8  text-gray-500"><router-link to='/my-works'>Works</router-link></li>
                <li class=" xl:mt-8  text-gray-500"><router-link to='/contact-me'>Contact me</router-link></li>
            </ul>
        <transition name="nav-list">
            <ul ref="ul" class=" absolute resp out xl:hidden resp left-0 shadow xl:shadow-none  dark:bg-green-500 rounded bg-gray-300 xl:bg-transparent xl:static flex flex-col xl:flex-row xl:w-full justify-start  ">
                <li class=" mb-4 text-gray-400 dark:text-yellow-300"><router-link to='/home'>Home</router-link></li>
                <li class=" mb-4 text-gray-400 dark:text-yellow-300"><router-link to='/about-me'>About me</router-link></li>
                <li class=" mb-4 text-gray-400 dark:text-yellow-300"><router-link to='/my-blog'>Blog</router-link></li>
                <li class=" mb-4 text-gray-400 dark:text-yellow-300"><router-link to='/my-works'>Works</router-link></li>
                <li class=" mb-4 text-gray-400 dark:text-yellow-300"><router-link to='/contact-me'>Contact me</router-link></li>
            </ul>
        </transition>
        </nav>
   </div>
   
</template>

<script>
import HamburgerButton from '../header/HamburgerButton.vue';
import { ref } from 'vue';
export default {
    components:{
        HamburgerButton,
    },

    setup(){
        const ul = ref(null);


        // methods
        const toggleNav = ()=>{
            ul.value.classList.toggle('in');
            ul.value.classList.toggle('out');
        }

        return{
            ul,
            toggleNav,
        }
    }
   
}
</script>

<style scoped>
    nav{
        flex: 0 0 35%;
    }
    .house{
        flex: 0 0 33.33%;
    }
    a {
        position: relative;
    }
    html.dark a{
        color: rgba(252, 211, 77, var(--tw-text-opacity));
    }
    a::before {
        position: absolute;
        content: "";
        height: 0.25rem;
        width: 0;
        left: 30%;
        right: 30%;
        border-radius: 50%;
        bottom: -.2rem;
        background: #000103;
        transition: all 0.3s ease-in-out;
    }
    a:hover::before {
        left: 0;
        right: 0;
        width: 100%;
    }
    nav  a:hover {
        color: black;
    }
    html.dark a:hover{
        color: #FBBF24;
    }
     html.dark nav  a.router-link-active::before {
        width: 100%;
        background: #FBBF24;
    }
     nav  a.router-link-active::before {
        width: 10%;
        left: 40%;
        right: 40%;
        background: #000;
    }
    html.dark nav a:hover::before{
        background: #FBBF24;
    }
    nav  a.router-link-active {
        color: #000;
        font-weight: bold;
    }
    html.dark nav  a.router-link-active {
        color: #FFF;
        font-weight: bold;
    }
    nav  a::before {
        background: #000;
    }
    .resp{
        top: 4rem;
        padding: 2rem;
        width: 50%;
        z-index: 30;
        background-color: #191970
    }

    @media screen and (max-width: 768px) {
        
        nav  a.router-link-active {
            color: white;
        }  
        a::before {
            background: white;
        }
         nav  a.router-link-active::before{
             background: white;
         }
    }
  
  /* Animation for menu bar */
    .out{
     
       animation: slideOut .3s ease-in forwards;
       
        border-radius: 10% 40% 50% 50%;
     }
    .in{
        
        animation: slideIn .3s ease-in forwards;
        
    }
    @keyframes slideIn{
        0%{
            transform: translateY(-100%) translateX(-100%);
            opacity: 0;
        }
        70%{
            transform: translateY(10%) translateX(10%);         
            opacity: .7;
        }
        100%{
            transform: translateY(0%) translateX(0%);
            
            border-radius: 5% 50% 50% 50%;
            box-shadow: 1px 1px 1px #191970;
            opacity: 1;
        }
    }
    @keyframes slideOut{
        from{
            transform: translateX(0%) translateY(0%);
            opacity: 1;
        }
        to{
                 transform: translateY(-100%) translateX(-100%);
               box-shadow: 1px 1px 1px #191970;
               opacity: 0;
        }
    }
    </style>