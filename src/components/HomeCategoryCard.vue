<!-- <template>
  <div class="col-span-1 shadow-lg rounded-lg">
    <div class="bg-white w-full h-full overflow-hidden">
      <div class="flex justify-between items-center bg-gray-100 p-5">
        <h2>{{ category?.name }}</h2> -->
        <!-- <RouterLink class="p-3" :to="`/product?category=${category.slug}`">See more</RouterLink> -->
         <!-- <RouterLink to="/category" class="p-3 text-blue-500 hover:underline">See More</RouterLink>
                    
      </div> -->
      <!-- <div class="p-5" v-if="category?.children_recursive?.length"> -->
        <!-- <div class="p-5 grid grid-cols-2 gap-4" v-if="category.children_recursive.length">
        <div class="grid grid-cols-2 gap-4"> -->
          <!-- <RouterLink
            :to="`/product?category=${child.slug}`"
            class="flex flex-col h-full"
            v-for="child in category?.children_recursive"
            :key="child.id"
          > -->
          <!-- <RouterLink to="/category"
                 class="flex flex-col h-full"
                 v-for="child in category.children_recursive">
            <img v-lazy="child.photo"
                 class="h-full"
                 alt=""
            /> -->
            <!-- <RouterLink  :to="`/product?category=${child.slug}`">{{ child?.name }}</RouterLink> -->
             <!-- <RouterLink to="/product">{{ child.name }}</RouterLink>
          </RouterLink>
        </div>
      </div>
      <div class="p-5" v-else>
        <img class="w-full h-full" :src="category?.photo" alt="">
      </div>
    </div>
  </div>
</template> -->
<!-- 
<script setup>

const props = defineProps({
  category:Object
})

import {RouterLink} from "vue-router";
</script>


<style scoped>
.grid-rows-1 {
  grid-template-rows: repeat(1, 1fr);
}

.grid-rows-2 {
  grid-template-rows: repeat(2, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
</style> -->

<template>
  <div class="bg-white shadow-xl overflow-hidden border border-gray-200">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#f9f9fa]">
      <h2 class="text-2xl font-semibold text-gray-800 items-center justify-center">{{ category.name }}</h2>
      <RouterLink
        to="/category"
        class="text-sm text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
      >
        See More
      </RouterLink>
    </div>

    <!-- Subcategories Grid -->
    <div v-if="category.children_recursive.length" class="p-6">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <RouterLink
          v-for="child in category.children_recursive"
          :key="child.id"
          :to="`/product?category=${child.slug}`"
          class="flex flex-col items-center group"
        >
          <div class="w-full bg-gray-50 overflow-hidden border border-gray-200 shadow-sm">
            <img
              :src="child.photo"
              :alt="child.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span class="mt-2 text-sm font-medium text-gray-700 group-hover:text-black transition">
            {{ child.name }}
          </span>
        </RouterLink>
         <RouterLink
          v-for="child in category.children_recursive"
          :key="child.id"
          :to="`/product?category=${child.slug}`"
          class="flex flex-col items-center group border border-gray-200 rounded p-4 hover:bg-gray-50 transition"
        >
          <div class="w-full aspect-square rounded bg-gray-50 overflow-hidden border border-gray-200 shadow-sm">
            <img
              :src="child.photo"
              :alt="child.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span class="mt-2 text-sm font-medium text-gray-700 group-hover:text-black transition">
            {{ child.name }}
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Fallback: Show Banner Image with Product Slider -->
    <div v-else class="relative p-6">
      <ProductSlider :products="category.products" />
      <div class="relative w-full aspect-[3/1] mt-4 rounded-2xl overflow-hidden shadow-md">
        <img
          :src="category.photo"
          alt="Category"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div
          class="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 text-sm px-3 py-1 shadow"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ElectronicsIcon from '../assets/img/download.jfif';
import ComputerIcons from '../assets/img/images.jfif';
import PhonesIcon from '../assets/img/download (1).jfif';
import TabletsIcon from '../assets/img/download (2).jfif';
import AccessoriesIcon from '../assets/img/download (3).jfif';
import FashionIcon from '../assets/img/download (4).jfif';
import ProductSlider from '@/components/ProductSlider.vue'

// Props
// defineProps({
//   category: {
//     type: Object,
//     required: true
//   }
// })

const category = ref({
  name: 'Category',
  slug: 'Category',
  children_recursive: [
    {
      id: 1,
      name: 'Electronics',
      slug: 'ElectronicsIcon',
      photo: ElectronicsIcon,
    },
    {
      id: 2,
      name: 'Phones',
      slug: 'phones',
      photo: PhonesIcon,
    },
    {
      id: 3,
      name: 'Tablets',
      slug: 'tablets',
      photo: TabletsIcon,
    },
    {
      id: 4,
      name: 'Accessories',
      slug: 'accessories',
      photo: AccessoriesIcon,
    },
    {
      id: 5,
      name: 'Computers',
      slug: 'computers',
      photo: ComputerIcons,
    },
    {
      id: 6,
      name: 'Fashion',
      slug: 'fashion',
      photo: FashionIcon
    }
  ]
});
</script>
