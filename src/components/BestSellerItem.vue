<template>
  <div class="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 py-10 text-gray-900">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl sm:text-2xl font-bold text-black">Best Seller Items</h2>
      </div>
      <swiper
        :slides-per-view="2"
        :space-between="1"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }"
        :navigation="true"
        class="py-2"
        :modules="modules"
      >
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <img :src="product.image" alt="Product" class="w-full h-44" />
          
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';
import Watch from '../assets/img/watch.png';
import Fashion from '../assets/img/shirt.jfif';
import Laptop from '../assets/img/laptop.jfif';
import Phone from '../assets/img/xiaomi.jfif';
import Watch2 from '../assets/img/watch2.png';
import Fashion2 from '../assets/img/pants.jfif';
import Laptop2 from '../assets/img/laptop.jfif';
import Phone2 from '../assets/img/Oppo.jfif';

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]

const products = [
  {
    image: Watch,
  },
  {
    image: Fashion,

  },
  {
    image: Laptop,
  },
  {
    image: Phone,
  },
  {
    image: Watch2,
  },
  {
    image: Fashion2,
  },
  {
    image: Laptop2,
  },
  {
    image: Phone2,
  }
]
</script>
