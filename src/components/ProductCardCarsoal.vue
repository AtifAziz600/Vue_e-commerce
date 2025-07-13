<template>
  <div class="bg-gradient-to-br from-red-900 via-red-500 to-red-900 py-4 text-gray-900">
    <div class="max-w-full mx-auto px-4">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-100">Up to 30% off Products brands</h2>
        <a href="/all-products" class="text-lg text-gray-100 font-semibold hover:text-gray-50">See more</a>
      </div>

      <!-- Swiper -->
      <swiper
        :slides-per-view="2"
        :space-between="16"
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
          class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-2xl"
        >
          <img :src="product.image" alt="Product" class="w-full h-44 object-contain p-2" />
          <div class="px-4 pb-4">
            <p class="text-xs font-medium text-gray-500 mb-1">
              <span class="inline-block bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-semibold mr-2">
                {{ product.discount }}
              </span>
              <span class="text-[11px]">With Discount</span>
            </p>
            <p class="text-base font-semibold">zł {{ product.price.toFixed(2) }}
              <span class="text-gray-400 font-normal text-sm line-through ml-1">zł {{ product.originalPrice.toFixed(2) }}</span>
            </p>
            <p class="text-sm mt-1 text-gray-700 leading-tight line-clamp-2">{{ product.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';
import Watch from '../assets/img/download (5).jfif';
import Fashion from '../assets/img/download (4).jfif';
import Laptop from '../assets/img/images.jfif';
import Phone from '../assets/img/download (1).jfif';

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]

const products = [
  {
    image: Watch,
    name: 'Amazon Basics 2-Ply Flex-Sheets Paper Towels',
    price: 3.85,
    originalPrice: 4.77,
    discount: '19% off'
  },
  {
    image: Fashion,
    name: 'Amazon Basics Wipes, Lemon & Fresh Scent',
    price: 9.58,
    originalPrice: 11.28,
    discount: '15% off'
  },
  {
    image: Laptop,
    name: 'Amazon Basics Ultra Paper Bowls, 20 oz',
    price: 3.63,
    originalPrice: 4.76,
    discount: '24% off'
  },
  {
    image: Phone,
    name: 'Amazon Basics Everyday Paper Plates',
    price: 12.19,
    originalPrice: 14.35,
    discount: '15% off'
  },
  {
    image: Watch,
    name: 'Amazon Basics Clear Plastic Forks',
    price: 5.4,
    originalPrice: 7.43,
    discount: '27% off'
  },
  {
    image: Fashion,
    name: 'Amazon Basics Heavy Duty Staple Gun',
    price: 6.79,
    originalPrice: 8.95,
    discount: '24% off'
  },
  {
    image: Laptop,
    name: 'Amazon Basics Heavy Duty Staple Gun',
    price: 6.79,
    originalPrice: 8.95,
    discount: '24% off'
  },
  {
    image: Phone,
    name: 'Amazon Basics Heavy Duty Staple Gun',
    price: 6.79,
    originalPrice: 8.95,
    discount: '24% off'
  }
]
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  width: 36px;
  height: 36px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 9999px;
}
</style>
