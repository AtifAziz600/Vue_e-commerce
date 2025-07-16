<template>
  <div class="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 py-10 text-gray-900">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-black">Recommended Brands</h2>
      </div>

      <swiper
        :slides-per-view="2"
        :space-between="12"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }"
        :navigation="true"
        class="py-4"
        :modules="modules"
      >
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center justify-center h-32 p-4 bg-white">
            <img
              :src="product.image"
              alt="Brand Logo"
              class="max-h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import Pucci from '../assets/img/Puccini.jfif'
import Moral from '../assets/img/moraj.png'
import Loven from '../assets/img/lovrin.png'
import Stich from '../assets/img/stitch.png'
import Gerben from '../assets/img/geben.png'
import Philips from '../assets/img/philips.png'
import hp from '../assets/img/hp.png'
import rebel from '../assets/img/rebel.png'
import agro from '../assets/img/agor.png'
import barum from '../assets/img/bfgoodrich.png'
import contian from '../assets/img/continatal.png'
import olip from '../assets/img/olimp.png'

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]

const products = [
  { image: Pucci },
  { image: Moral },
  { image: Loven },
  { image: Stich },
  { image: Gerben },
  { image: Philips },
  { image: hp },
  { image: rebel },
  { image: agro },
  { image: barum },
  { image: contian },
  { image: olip }
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
