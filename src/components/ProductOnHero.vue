<template>
    <section class="bg-transparent max-w-8xl mx-auto px-1">
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center max-w-7xl">
          <div class="bg-gray-200">
             <!-- Example 1 -->
<h2 class="text-lg font-semibold text-gray-900 mb-4">Fashion trends you like</h2>
<div class="grid grid-cols-2 gap-4 mb-4">
  <div v-for="item in fashionItems" :key="item.title" class="flex flex-col items-center text-center">
    <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain" />
    <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
  </div>
</div>
          </div>
          <div>
         <div class="bg-gray-200">
             <!-- Example 2 -->
<h2 class="text-lg font-semibold text-gray-900 mb-4">Get your game on</h2>
<div class="grid grid-cols-2 gap-4 mb-4">
  <div v-for="item in gameItems" :key="item.title" class="flex flex-col items-center text-center">
    <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain" />
    <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
  </div>
</div>
         </div>
          </div>

<div class="bg-gray-200">
  <!-- Example 3 -->
<h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>
<div class="grid grid-cols-2 gap-4 mb-4">
  <div v-for="item in merchandiseItems" :key="item.title" class="flex flex-col items-center text-center">
    <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain" />
    <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
  </div>
</div>
</div>
<div>
 <div class="bg-gray-200">
   <!-- Example 4-->
<h2 class="text-lg font-semibold text-gray-900 mb-4">Beaty and wellness</h2>
<div class="grid grid-cols-2 gap-4 mb-4">
  <div v-for="item in merchandiseItems" :key="item.title" class="flex flex-col items-center text-center">
    <img :src="item.image" :alt="item.title" class="w-full h-24 object-contain" />
    <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
  </div>
</div>
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