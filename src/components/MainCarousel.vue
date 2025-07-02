<template>
  <div class="relative overflow-hidden">
    <swiper
      :spaceBetween="0"
      :effect="'fade'"
      :navigation="{
        nextEl: '.swiper-button-next-custom', 
        prevEl: '.swiper-button-prev-custom', 
      }"
      :pagination="{ clickable: true, el: '.swiper-pagination-custom' }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :modules="modules"
      class="amazon-style-swiper"
    >
      <swiper-slide class="relative bg-purple-600 flex items-center justify-center p-8 md:p-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
          <div class="text-white text-left md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col gap-2 md:gap-4 md:ml-10 z-50">
           <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Big Deals on Electronics
          </h2>
          <p class="text-white text-lg md:text-xl max-w-2xl">
            Shop the latest gadgets and tech with up to <span class="font-semibold text-yellow-400">70% off</span> today.
          </p>
            </div>

          <div class="md:w-1/2 lg:w-3/5 xl:w-2/3 h-full overflow-hidden">
            <img
              src="../assets/img/bgAzNiK7sVcCvUPltURoK845dgqKZTh4vGAujK4p.jpeg"
              alt="Kitchen Essentials"
              class="absolute right-0 top-1/2 -translate-y-1/2 h-[450px] md:h-[550px] lg:h-[650px] object-contain"
              style="width: auto; max-width: none; filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));"
              aria-hidden="true"
            />
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="relative bg-teal-600 flex items-center justify-center p-6 md:p-12">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
          <div class="text-white text-left md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col gap-2 md:gap-4 md:ml-10 z-50">
            <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Discover Smart Living
          </h2>
          <p class="text-white text-lg md:text-xl text-center max-w-2xl">
            Explore our curated collection of <span class="font-semibold text-yellow-400">smart home</span> tech and automation gear.
          </p>
          </div>
          <div class="md:w-1/2 lg:w-3/5 xl:w-2/3 h-full overflow-hidden">
            <img
              src="../assets/img/ECOM.jpg"
              alt="Gaming PC"
              class="absolute right-0 top-1/2 -translate-y-1/2 h-[450px] md:h-[550px] lg:h-[650px] object-contain"
              style="width: auto; max-width: none; filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));"
              aria-hidden="true"
            />
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev-custom absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 z-20 cursor-pointer">
        <Icon icon="ic:round-arrow-back-ios" class="text-white text-3xl p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors duration-300" />
      </div>
      <div class="swiper-button-next-custom absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 z-20 cursor-pointer">
        <Icon icon="ic:round-arrow-forward-ios" class="text-white text-3xl p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors duration-300" />
      </div>
      <div class="swiper-pagination-custom absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"></div>

    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/vue'; 

const modules = [EffectFade, Navigation, Pagination, Autoplay];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

</script>

<style scoped>

.amazon-style-swiper {
 
  height: 500px; 
  
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.7s ease forwards;
}
.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}
.animate-fadeIn.delay-400 {
  animation-delay: 0.4s;
}
.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}

.swiper-pagination-custom.swiper-pagination-bullets .swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.7);
  opacity: 1; 
  width: 8px; 
  height: 8px;
  margin: 0 4px; 
  transition: all 0.3s ease;
}

.swiper-pagination-custom.swiper-pagination-bullets .swiper-pagination-bullet-active {
  background-color: #fff; 
  transform: scale(1.4); 
}



.swiper-slide > div.container {
    height: 100%; 
}


@media (max-width: 768px) {
  .amazon-style-swiper {
    height: 400px; 
  }
  .container.flex-col { 
    justify-content: center; 
    text-align: center;
  }
  .container.flex-col .text-left { 
      text-align: center;
      margin-left: 0;
  }
  .container.flex-col .text-left button { 
      align-self: center;
  }
  .swiper-slide img {
    height: 300px; 
    position: relative; 
    transform: none;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px; 
  }

  
  .swiper-button-next-custom,
  .swiper-button-prev-custom {
    
    padding: 6px;
    font-size: 20px;
  }
}
</style>
<!-- <template>
  <div class="relative max-w-screen-xl mx-auto mt-6 overflow-hidden rounded-3xl shadow-2xl border border-gray-300/30">
    <swiper
      :spaceBetween="0"
      :effect="'fade'"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :modules="modules"
      class="modern-swiper"
    > -->
      <!-- Slide 1 -->
      <!-- <swiper-slide class="relative">
        <img
          src="../assets/img/png-1.png"
          class="w-full h-[75vh] object-fit cover brightness-75"
          alt="Slide 1"
        />
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:px-12 space-y-5">
          <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow">
            Big Deals on Electronics
          </h2>
          <p class="text-white text-lg md:text-xl text-center max-w-2xl">
            Shop the latest gadgets and tech with up to <span class="font-semibold text-yellow-400">70% off</span> today.
          </p>
          <button
            class="bg-white text-gray-900 hover:bg-gray-200 transition px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 duration-300"
          >
            Shop Now
          </button>
        </div>
      </swiper-slide> -->

      <!-- Slide 2 -->
      <!-- <swiper-slide class="relative">
        <img
          src="../assets//img/bgAzNiK7sVcCvUPltURoK845dgqKZTh4vGAujK4p.jpeg"
          class="w-full h-[75vh] object-fit cover brightness-75"
          alt="Slide 2"
        />
        <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 md:px-12 space-y-5">
          <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight">
            Discover Smart Living
          </h2>
          <p class="text-white text-lg md:text-xl text-center max-w-2xl">
            Explore our curated collection of smart home tech and automation gear.
          </p>
          <button
            class="bg-white text-gray-900 hover:bg-gray-200 transition px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 duration-300"
          >
            Explore Now
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template> -->

<!-- <script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const modules = [EffectFade, Navigation, Pagination, Autoplay];

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script> -->

<!-- <style scoped>
.modern-swiper {
  --swiper-navigation-color: #ffffff;
  --swiper-pagination-color: #ffffff;
  --swiper-pagination-bullet-inactive-color: #aaa;
  --swiper-pagination-bullet-inactive-opacity: 0.7;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-bullet-horizontal-gap: 8px;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  color: #111;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

.swiper-pagination-bullet {
  transition: transform 0.3s ease;
}
.swiper-pagination-bullet-active {
  transform: scale(1.3);
  background-color: white !important;
}
</style> -->