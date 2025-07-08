<template>
    <section class="bg-transparent py-12">
         <!-- Header -->
      <div class="flex items-center justify-center">
        <h2 class="text-2xl sm:text-2xl font-bold text-black">Merchandiese</h2>
      </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
            <!-- Product Box Card-->
             <div class="w-full max-w-xs border border-gray-200 rounded-md bg-white p-4 shadow-sm">
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
 <div class="text-center justify-center items-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
 <div class="w-full max-w-xs border border-gray-200 rounded-md bg-white p-4 shadow-sm">
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

    <div class="text-center justify-center items-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-xs border border-gray-200 rounded-md bg-white p-4 shadow-sm">
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
    <div class="text-center justify-center items-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center justify-center"
    >
      See more
    </a>
    </div>
  </div>
  <div class="w-full max-w-xs border border-gray-200 rounded-md bg-white p-4 shadow-sm">
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
    <div class="text-center justify-center items-center">
      <a
      href="#"
      class="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium text-center justify-center"
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
import FirstItem from '../assets/img/download (1).jfif'
import SecondItem from '../assets/img/download (2).jfif'
import ThirdItem from '../assets/img/download (3).jfif'
import FourthItem from '../assets/img/download (4).jfif'
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