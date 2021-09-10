<template>
  <div @click="toggleShow" class="wrapper cursor-pointer  z-50 fixed credit bottom-2 block    ">
      <div class="relative">
        <p class="tansition-all duration-350 text-xs text-center text-gray-400  flex items-center justify-center" >Made with love by Chibuzor 
          <span class="">
              <svg class="h-6 w-6 transition-all duration-350 " :fill="fillRed" viewBox="0 0 24 24" stroke="currentColor">
                <path class="transition-all duration-350 " :stroke="fillRed" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
        </p>
        <transition name="contact-me">
           <div v-show="show"  class="contact-me absolute bg-midNightBlue px-2 py-1 rounded shadow-2xl  left-0 -top-16">
            <ul class="text-gray-300 text-sm">
              <li class="flex">
                <span class="mr-2">
                    
                  <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <path d="M27.32 6.44C27.3912 6.38086 27.4445 6.30313 27.4741 6.21546C27.5037 6.1278 27.5084 6.03364 27.4877 5.94346C27.467 5.85329 27.4216 5.77063 27.3567 5.7047C27.2918 5.63876 27.2099 5.59214 27.12 5.57L26.33 5.37C26.2582 5.35202 26.1912 5.3183 26.134 5.2713C26.0768 5.22429 26.0308 5.16516 25.9992 5.09818C25.9676 5.0312 25.9513 4.95805 25.9514 4.884C25.9516 4.80995 25.9682 4.73686 26 4.67L26.44 3.78C26.4816 3.69376 26.4975 3.5974 26.4859 3.50236C26.4743 3.40733 26.4357 3.31763 26.3746 3.24391C26.3135 3.17019 26.2326 3.11556 26.1413 3.0865C26.0501 3.05745 25.9525 3.05519 25.86 3.08L23.86 3.64C23.7855 3.66174 23.7069 3.66582 23.6306 3.65194C23.5542 3.63805 23.4821 3.60657 23.42 3.56C22.5545 2.91089 21.5019 2.56 20.42 2.56C19.0939 2.56 17.8222 3.08679 16.8845 4.02447C15.9468 4.96215 15.42 6.23392 15.42 7.56V7.92C15.4205 7.98142 15.3983 8.04085 15.3577 8.08696C15.3171 8.13307 15.261 8.16263 15.2 8.17C12.39 8.5 9.70001 7.07 6.80001 3.73C6.73701 3.66052 6.65608 3.60976 6.5661 3.5833C6.47612 3.55683 6.38059 3.55569 6.29001 3.58C6.20841 3.61751 6.13841 3.67631 6.08738 3.75021C6.03635 3.82412 6.00617 3.9104 6.00001 4C5.59947 5.64534 5.76141 7.37743 6.46001 8.92C6.48068 8.96092 6.4897 9.00673 6.48609 9.05242C6.48248 9.09812 6.46638 9.14194 6.43954 9.17911C6.4127 9.21627 6.37616 9.24533 6.33392 9.26313C6.29167 9.28092 6.24535 9.28676 6.20001 9.28L5.08001 9.06C5.00047 9.04721 4.91902 9.05383 4.84259 9.0793C4.76616 9.10476 4.69702 9.14832 4.64105 9.20626C4.58507 9.26419 4.54393 9.3348 4.52111 9.41206C4.4983 9.48932 4.49449 9.57095 4.51001 9.65C4.59635 10.4174 4.85418 11.1557 5.26443 11.81C5.67468 12.4643 6.22683 13.018 6.88001 13.43C6.92228 13.4505 6.95792 13.4824 6.98287 13.5222C7.00781 13.562 7.02104 13.608 7.02104 13.655C7.02104 13.702 7.00781 13.748 6.98287 13.7878C6.95792 13.8276 6.92228 13.8595 6.88001 13.88L6.35001 14.09C6.28565 14.1158 6.22735 14.1547 6.17883 14.2043C6.13032 14.2538 6.09263 14.3129 6.06818 14.3778C6.04373 14.4427 6.03304 14.5119 6.0368 14.5812C6.04056 14.6504 6.05868 14.7181 6.09001 14.78C6.3831 15.4213 6.82737 15.982 7.38471 16.4139C7.94205 16.8459 8.59584 17.1362 9.29001 17.26C9.33827 17.2775 9.37997 17.3095 9.40944 17.3515C9.43891 17.3936 9.45472 17.4437 9.45472 17.495C9.45472 17.5463 9.43891 17.5964 9.40944 17.6385C9.37997 17.6805 9.33827 17.7125 9.29001 17.73C7.93037 18.2923 6.47127 18.5746 5.00001 18.56C4.8674 18.5335 4.72969 18.5607 4.61717 18.6357C4.50465 18.7108 4.42653 18.8274 4.40001 18.96C4.37349 19.0926 4.40073 19.2303 4.47575 19.3428C4.55076 19.4554 4.6674 19.5335 4.80001 19.56C7.34755 20.7682 10.1212 21.4259 12.94 21.49C15.4195 21.5278 17.8548 20.832 19.94 19.49C21.6552 18.345 23.0605 16.7935 24.0306 14.9737C25.0007 13.1538 25.5055 11.1223 25.5 9.06V8.19C25.5006 8.11739 25.517 8.04578 25.5481 7.98016C25.5792 7.91454 25.6242 7.85647 25.68 7.81L27.32 6.44Z" fill="#1B45DC"/>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                  </defs>
                  </svg>

                </span>
                  <span>@faceOfALion1</span>
              </li>
              <li class="flex">
                <a class="flex" href="mailto:iwuagwuchibuzor@gmail.com">
                  <span class="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill=" rgb(25, 25, 112)" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke="#eeeee" fill="#1B45DC" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        <defs>
                          <filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                          </filter>
                        </defs>
                    </svg>
                  </span>
                  <span>iwuagwuchibuzor@gmail.com</span>
                </a>
              </li>
            </ul>
           </div>
        </transition>
      </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup(){
    const show = ref(false);

    // methods
    const toggleShow = ()=>{
      show.value = !show.value;
    }

    // computed
    const fillRed = computed( ()=>  show.value ? 'red' : ''  );

    return{
      show,
      toggleShow,
      fillRed,
    }
  }
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
.credit{
  left: 32%;
  transform: translateX(-32%);
}

.contact-me{
  left: 50%;
    /* transform: translateX(-50%); */
}

/* animation */
.contact-me-enter-active{
  animation: slideUp .3s ease-in forwards;
}

.contact-me-leave-active{
  animation: slideIn .3s ease-in-out forwards;
}

@keyframes slideUp{
  0%{
    opacity: 0;  
    transform: translateY(100%);
  }
  70%{
    opacity: .7;
    transform: translateY(-25%)  ;
  }
  100%{
    opacity: 1;
    transform: translateY(0%)  ;
  }
}
@keyframes slideIn{
  0%{
     opacity: 1;
    transform: translateY(0%);
   
  }
  100%{
    opacity: 0;
    transform: translateY(100%);
  }
}

@media screen and (max-width: 768px){
  .credit{
    left: 50%;
    transform: translateX(-50%);
  }
  .contact-me{
  left: 50%;
    transform: translateX(-50%);
}
}
  
</style>