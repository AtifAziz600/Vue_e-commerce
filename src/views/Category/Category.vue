<template>
  <section class="py-12 max-w-7xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6 capitalize text-gray-800">
      Category: {{ categorySlug }}
    </h1>

    <div v-if="filteredCategory">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <RouterLink
          v-for="(child, index) in filteredCategory.children"
          :key="index"
          :to="`/product?category=${child.slug}`"
          class="group border rounded-xl p-4 bg-white shadow hover:shadow-xl transition transform hover:scale-105"
        >
          <img
            :src="child.photo"
            :alt="child.name"
            class="w-20 h-20 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
          />
          <p class="mt-2 text-center font-medium text-gray-700 group-hover:text-black">
            {{ child.name }}
          </p>
        </RouterLink>
      </div>
    </div>

    <div v-else class="text-gray-500 text-lg mt-10">
      No subcategories found for "<span class="font-semibold">{{ categorySlug }}</span>".
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()
const categorySlug = route.params.slug

import ElectronicsIcon from '../../assets/img/electorcis.jfif'
import ComputerIcons from '../../assets/img/images.jfif'
import PhonesIcon from '../../assets/img/phone.jfif'
import TabletsIcon from '../../assets/img/download (2).jfif'
import AccessoriesIcon from '../../assets/img/download (3).jfif'
import FashionIcon from '../../assets/img/images (2).jfif'

const categories = ref([
  {
    slug: 'electronics',
    children: [
      { name: 'Phones', slug: 'phones', photo: PhonesIcon },
      { name: 'Tablets', slug: 'tablets', photo: TabletsIcon },
      { name: 'Accessories', slug: 'accessories', photo: AccessoriesIcon },
      { name: 'Computers', slug: 'computers', photo: ComputerIcons }
    ]
  },
  {
    slug: 'fashion',
    children: [
      { name: 'Men', slug: 'men-fashion', photo: FashionIcon },
      { name: 'Women', slug: 'women-fashion', photo: FashionIcon }
    ]
  },
  {
    slug: 'computers',
    children: [
      { name: 'Laptops', slug: 'laptops', photo:  ElectronicsIcon},
      { name: 'Desktops', slug: 'desktops', photo: ComputerIcons }
    ]
  }
])

const filteredCategory = computed(() => {
  return categories.value.find(cat => cat.slug === categorySlug)
})
</script>
