<template>
    <section class="bg-transparent max-w-8xl mx-auto px-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center max-w-7xl">
    <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-md">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>
    <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
 <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

   <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

  <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

   <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-8xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

   <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
 <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

   <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>

   <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-7xl border border-gray-200 rounded-md bg-white p-4 shadow-sm">
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Gaming merchandise</h2>

    <!-- Grid 2x2 -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-24 object-contain"
        />
        <span class="mt-2 text-sm text-gray-700">{{ item.title }}</span>
      </div>
    </div>
  <div class="text-center justify-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center items-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
        </div>
        
    </section>
</template>

<script setup>
import { ref } from 'vue';
import FirstItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg'
import SecondItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg'
import ThirdItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg'
import FourthItem from '../assets/img/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg'
const items = [
  {
    title: 'Apparel',
    image: FirstItem
  },
  {
    title: 'Hats',
    image: SecondItem
  },
  {
    title: 'Action figures',
    image: ThirdItem
  },
  {
    title: 'Mugs',
    image: FourthItem
  }
]
</script>