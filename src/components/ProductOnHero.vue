<template>
<section class="bg-transparent mx-auto px-4 py-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Fashion trends like</h2>
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
        <RouterLink to="/best-seller" class="text-blue-500 hover:underline hover:text-blue-700 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Get your game on</h2>
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
        <RouterLink to="/best-seller" class="text-blue-500 hover:underline hover:text-blue-700 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Gaming merchandise</h2>
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
        <RouterLink to="/best-seller" class="text-blue-500 hover:underline hover:text-blue-700 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>
    <div class="bg-white/60 backdrop-blur-xl p-2 shadow-md border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Beauty and wellness</h2>
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
        <RouterLink to="/best-seller" class="text-blue-500 hover:underline hover:text-blue-700 text-sm cursor-pointer">See More</RouterLink>
      </div>
    </div>

  </div>
</section>
</template>

<script setup>
import FirstItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg'
import SecondItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg'
import ThirdItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg'
import FourthItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg'
import FifthItem from '../assets/img/gameon.jpg'
import sixthItem from '../assets/img/monitor.jpg'
import seventhItem from '../assets/img/pc.jpg'
import eighthItem from '../assets/img/headphones.jpg'
import ninthItem from '../assets/img/t-shirt.jpg'
import tenthItem from '../assets/img/poster.jpg'
import eleventhItem from '../assets/img/mug.jpg'
import tweuthItem from '../assets/img/sticker.jpg';
import thridthItem from '../assets/img/dinning.jpg';
import fourithItem from '../assets/img/home.jpg';
import fifthineItem from '../assets/img/Kitchen.jpg';
import sixthineItem from '../assets/img/Beauty.jpg';

// Fashion category items
const fashionItems = [
  { title: 'Jewellary', image: FirstItem },
  { title: 'Dress', image: SecondItem },
  { title: 'Kits', image: ThirdItem },
  { title: 'Jacket', image: FourthItem }
]

// Game category items
const gameItems = [
  { title: 'Gamepad', image: FifthItem },
  { title: 'VR Headset', image: sixthItem},
  { title: 'Keyboard', image: seventhItem},
  { title: 'Mouse', image: eighthItem}
]

// Merchandise items
const merchandiseItems = [
  { title: 'T-shirt', image: ninthItem},
  { title: 'Poster', image: tenthItem},
  { title: 'Mug', image: eleventhItem},
  { title: 'Stickers', image: tweuthItem}
];

const beatyItems = [
  {title: 'Home', image: fourithItem},
   {title: 'Kitchen', image: fifthineItem},
    {title: 'Dinning',image: sixthineItem},
     {title: 'Beaty', image: thridthItem },
  
]

</script>