<template>
    <div class="relative max-w-screen-full mx-auto mt-6 overflow-hidden rounded-3xl shadow-2xl border border-gray-300/30">
    <swiper
      :spaceBetween="0"
      :effect="'fade'"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :modules="modules"
      class="modern-swiper"
    > 
      <!-- Slide 1 -->
       <swiper-slide class="relative">
        <img
          src="../assets/img/png-1.png"
          class="w-full h-[75vh] object-fit cover brightness-75"
          alt="Slide 1"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 space-y-5">
          <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow">
            Big Deals on Electronics
          </h2>
          <p class="text-white text-lg md:text-xl text-center max-w-2xl">
            Shop the latest gadgets and tech with up to <span class="font-semibold text-yellow-400">70% off</span> today.
          </p>
        </div>
      </swiper-slide> 

      <!-- Slide 2 -->
       <swiper-slide class="relative">
        <img
          src="../assets//img/bgAzNiK7sVcCvUPltURoK845dgqKZTh4vGAujK4p.jpeg"
          class="w-full h-[75vh] object-fit cover brightness-75"
          alt="Slide 2"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 space-y-5">
          <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight">
            Discover Smart Living
          </h2>
          <p class="text-white text-lg md:text-xl text-start max-w-2xl">
            Explore our curated collection of smart home tech and automation gear.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Icon } from '@iconify/vue'; 

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
