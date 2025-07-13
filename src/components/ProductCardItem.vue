<template>
<section class="bg-transparent mx-auto px-4 py-8">
  <div class="flex justify-center items-center py-2">
    <h3 class="text-2xl text-center justify-center items-center">
      <span class="text-gray-700 font-semibold py-4">Check all Type Of Treads</span>
    </h3>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Shop Fashion for less</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          v-for="item in fashionItems"
          :key="item.title"
          class="flex flex-col items-center text-center"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain rounded-md" />
          <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
        </div>
      </div>
      <div class="flex justify-center">
        <RouterLink to="/fashion" class="text-blue-800 hover:underline hover:text-blue-900 text-cneter text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">New home arrivals under $50</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          v-for="item in gameItems"
          :key="item.title"
          class="flex flex-col items-center text-center"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain rounded-md" />
          <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
        </div>
      </div>
      <div class="flex justify-center">
        <RouterLink to="/fashion" class="text-blue-800 hover:underline hover:text-blue-900 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Sticker And Other Merchandise</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          v-for="item in merchandiseItems"
          :key="item.title"
          class="flex flex-col items-center text-center"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain rounded-md" />
          <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
        </div>
      </div>
      <div class="flex justify-center">
        <RouterLink to="/all-products" class="text-blue-800 hover:underline hover:text-blue-900 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-4 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Refresh your space</h2>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          v-for="item in beatyItems"
          :key="item.title"
          class="flex flex-col items-center text-center"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain rounded-md" />
          <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
        </div>
      </div>
      <div class="flex justify-center">
        <RouterLink to="/all-products" class="text-blue-800 hover:underline hover:text-blue-900 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>

  </div>
</section>
</template>

<script setup>
import FirstItem from '../assets/img/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg'
import SecondItem from '../assets/img/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg'
import ThirdItem from '../assets/img/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg'
import FourthItem from '../assets/img/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg'
import FifthItem from '../assets/img/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg'
import sixthItem from '../assets/img/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg'
import seventhItem from '../assets/img/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg'
import eighthItem from '../assets/img/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg'
import ninthItem from '../assets/img/t-shirt.jpg'
import tenthItem from '../assets/img/poster.jpg'
import eleventhItem from '../assets/img/mug.jpg'
import tweuthItem from '../assets/img/sticker.jpg';
import thridthItem from '../assets/img/dinning.jpg';
import fourithItem from '../assets/img/home.jpg';
import fifthineItem from '../assets/img/Kitchen.jpg';
import sixthineItem from '../assets/img/Beauty.jpg';
import { RouterLink } from 'vue-router'

const fashionItems = [
  { title: 'Jewellary', image: FirstItem },
  { title: 'Dress', image: SecondItem },
  { title: 'Kits', image: ThirdItem },
  { title: 'Jacket', image: FourthItem }
]

const gameItems = [
  { title: 'Gamepad', image: FifthItem },
  { title: 'VR Headset', image: sixthItem},
  { title: 'Keyboard', image: seventhItem},
  { title: 'Mouse', image: eighthItem}
]

const beatyItems = [
  {title: 'Home', image: fourithItem},
   {title: 'Kitchen', image: fifthineItem},
    {title: 'Dinning',image: sixthineItem},
     {title: 'Beaty', image: thridthItem },
  
]
const merchandiseItems = [
  { title: 'T-shirt', image: ninthItem},
  { title: 'Poster', image: tenthItem},
  { title: 'Mug', image: eleventhItem},
  { title: 'Stickers', image: tweuthItem}
];


</script>