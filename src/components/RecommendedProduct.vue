<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <div class="mb-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
        Featured Products
      </h2>
      <p class="text-sm md:text-md text-gray-600 font-light">
        Discover our top picks, hand-selected for you.
      </p>
    </div>

    <!-- Sections -->
    <div v-for="section in products" :key="section.id" class="gap-12">
      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in section.products"
          :key="item.title"
          class="bg-white shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
        >
          <!-- Image -->
          <div class="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
            <img :src="item.image" alt="product" class="w-3/4 h-full object-contain transform group-hover:scale-105 transition-transform duration-300" />
          </div>
          <!-- Info -->
          <div class="p-5 flex-1 flex flex-col">
            <h4 class="text-lg font-semibold text-gray-900 truncate">{{ item.title }}</h4>
            <p class="text-xs text-gray-500 mt-1 mb-2 line-clamp-2">{{ item.subtitle }}</p>
            <!-- Price -->
            <div class="flex items-center space-x-2 mt-2">
              <span v-if="item.oldPrice" class="text-xs line-through text-gray-400">${{ item.oldPrice }}</span>
              <span class="text-lg text-red-600 font-bold">${{ item.newPrice }}</span>
              <span v-if="item.discount" class="text-white bg-green-500 px-2 py-0.5 text-xs rounded-full font-medium">-{{ item.discount }}%</span>
            </div>
            <!-- Rating & Cart -->
            <div class="mt-auto flex justify-between items-center pt-4">
              <div class="flex items-center space-x-1 text-yellow-500">
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star-outline" />
                <span class="text-gray-400 text-xs ml-1">(4.5)</span>
              </div>
              <button @click="handleAddToCart(item)" class="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow hover:bg-red-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     <RouterLink to="/all-products" class="flex items-center justify-center mt-6">
        <button class="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition">
          See More
          <Icon icon="mdi:arrow-right" class="w-4 h-4" />
        </button>
      </RouterLink>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Watch from '../assets/img/download (5).jfif';
import Fashion from '../assets/img/download (4).jfif';
import Laptop from '../assets/img/images.jfif';
import Phone from '../assets/img/download (1).jfif';
import { useToast } from 'vue-toastification';
const toast = useToast();

const products = [
  {
    id: 1,
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
        image: Watch,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        tag: "fashion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        tag: "laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Watch,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        tag: "fashion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        tag: "laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
      },
    ]
  }
];
import { useCartStore } from '../stores/useCartStore'
const cart = useCartStore()

function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    name: item.title,
    image: item.image,
    price: item.newPrice,
    quantity: 1,
    total: item.newPrice,
    category: item.tag
  })
  toast.success(`${item.title} added to cart`)
}

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
