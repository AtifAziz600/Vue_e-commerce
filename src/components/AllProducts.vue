<template>
  <AppLayout>
    <!-- Section Title -->
     <div class="py-12 items-center text-center justify-center">
        <h1 class="font-bold text-xl md:text-2xl">All Products</h1>
        <p class="text-sm font-light">
            Here Get All Products and Their Categories
        </p>
     </div>
    <div v-for="section in products" :key="section.id" class="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl shadow-2xl mb-14">
    
    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in section.products"
        :key="item.title"
        class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group"
      >
        <!-- Image -->
        <div class="bg-gray-100 h-48 flex items-center justify-center">
          <img :src="item.image" alt="product" class="w-3/4 h-full object-contain transform group-hover:scale-105 transition-transform duration-300" />
        </div>

        <!-- Info -->
        <div class="p-5">
          <h3 class="text-lg font-semibold text-gray-900 truncate">{{ item.title }}</h3>
          <p class="text-xs text-gray-500 mt-1 truncate">{{ item.subtitle }}</p>

          <!-- Price -->
          <div class="flex items-center space-x-2 mt-4">
            <span class="text-xs line-through text-gray-400">{{ item.oldPrice }}</span>
            <span class="text-lg text-red-600 font-bold">{{ item.newPrice }}</span>
            <span class="text-white bg-green-500 px-2 py-0.5 text-xs rounded-full font-medium">-{{ item.discount }}%</span>
          </div>

          <!-- Tag -->
          <div class="mt-3">
            <span class="text-xs uppercase bg-red-500 text-white px-2 py-0.5 rounded-full tracking-wide">{{ item.tag }}</span>
          </div>

          <!-- Footer -->
          <div class="mt-4 flex justify-between text-xs text-gray-500">
              <div class="flex items-center bg-gray-300 rounded-xl">
                <p>Price incl. VAT</p>
              <span class="bg-green-100 text-green-700 px-2 rounded-full">Pro Price</span>
              </div>
            
            <div class="flex items-center space-x-3">
              <button class="bg-red-500 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-red-800 transition-all duration-200 focus:outline-none">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </AppLayout>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Watch from '../assets/img/download (5).jfif';
import Fashion from '../assets/img/download (4).jfif';
import Laptop from '../assets/img/images.jfif';
import Phone from '../assets/img/download (1).jfif';

const products = [
     {
    id: 1,
    Top: 'New Release',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
  {
    id: 2,
    Top: 'Electronics',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
  {
    id: 3,
    Top: 'Organic',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ]
  },
   {
    id: 4,
    Top: 'Fahsion',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
   {
    id: 5,
    Top: 'Books',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
   {
    id: 6,
    Top: 'Computer',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
   {
    id: 7,
    Top: 'Health',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
   {
    id: 8,
    Top: 'Pharmacy',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
   {
    id: 9,
    Top: 'Toys & Games',
    products: [
      {
        id: 1,
        title: "Watch",
        subtitle: "from Switzerland/Germany/Austria...",
        image: Watch,
        oldPrice: "48.54",
        newPrice: "38.89",
        discount: 19,
        tag: "watch",
      },
      {
        id: 2,
        title: "Fashion",
        subtitle: "from Fahsion",
        image: Fashion,
        oldPrice: "39.96",
        newPrice: "22.91",
        discount: 42,
        tag: "fahsion",
      },
      {
        id: 3,
        title: "Laptop",
        subtitle: "Laptop for high performance",
        image: Laptop,
        oldPrice: "3.27",
        newPrice: "1.90",
        discount: 41,
        tag: "Laptop",
      },
      {
        id: 4,
        title: "Phone",
        subtitle: "Phone for daily use",
        image: Phone,
        oldPrice: "20.21",
        newPrice: "17.88",
        discount: 32,
        tag: "Phone",
      },
    ],
  },
];
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