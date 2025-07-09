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
    <div v-for="section in products" :key="section.id" class="gap-12 rounded-xl">
      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-6">
        <div
          v-for="item in section.products"
          :key="item.title"
          class="bg-white shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
        >
          <!-- Image -->
          <RouterLink :to="`/product/${item.slug}`" class="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
            <img :src="item.image" alt="product" class="w-3/4 h-full object-contain transform group-hover:scale-105 transition-transform duration-300" />
          </RouterLink>
          <!-- Info -->
          <div class="p-5 flex-1 flex flex-col">
            <h4 class="text-lg font-semibold text-gray-900 truncate">{{ item.title }}</h4>
            <p class="text-xs text-gray-500 mt-1 mb-2 line-clamp-2">{{ item.subtitle }}</p>
            <!-- Price -->
            <div class="flex items-center space-x-2 mt-2">
              <span v-if="item.oldPrice" class="text-xs line-through text-gray-400">${{ item.oldPrice }}</span>
              <span class="text-lg text-red-600 font-bold">${{ item.newPrice }}</span>
              <span v-if="item.discount" class="text-white bg-green-500 px-2 py-0.5 text-xs rounded-full font-medium">-{{ item.discount }}%</span>
               <span
    :class="[
      'text-xs font-semibold px-2 rounded-full items-end justify-end',
      item.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
    ]"
  >
    {{ item.inStock ? 'In Stock' : 'Out Stock' }}
  </span>
            </div>
            <!-- Rating & Cart -->
            <div class="mt-auto flex justify-between items-center pt-4">
              <div class="flex items-center space-x-1 text-yellow-500">
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star" />
                <Icon icon="mdi:star-outline" />
                <RouterLink class="text-sm text-gray-700 font-normal hover:underline ml-1 px-4">({{ item.reviews }})</RouterLink>
              </div>
              <button @click="handleAddToCart(item)" class="bg-deepMaroon text-white text-xs font-semibold px-4 py-2 rounded-full shadow hover:bg-[#7a3b49] transition">
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
import Watch from '../assets/img/watch.png';
import Fashion from '../assets/img/shirt.jfif';
import Laptop from '../assets/img/laptop.jfif';
import Phone from '../assets/img/xiaomi.jfif';
import Watch2 from '../assets/img/watch2.png';
import Fashion2 from '../assets/img/pants.jfif';
import Laptop2 from '../assets/img/laptop.jfif';
import Phone2 from '../assets/img/Oppo.jfif';
import { useToast } from 'vue-toastification';
const toast = useToast();

const products = [
  {
    id: 1,
    products: [
     {
    id: 1,
    title: "Watch",
    slug: "luxury-watch",
    category: "Watches / Luxury",
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    discount: 19,
    tag: "watch",
    reviews: 148,
    inStock: true,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'Stainless steel case',
        '2-year warranty'
    ],
    sizes: ['Small', 'Medium', 'Large']
},
      {
        id: 2,
        title: "Fashion",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        inStock: false,
        tag: "fashion",
         reviews: 124,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 3,
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        inStock: true,
        tag: "laptop",
        reviews: 248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 4,
        title: "Phone",
        slug: "phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        inStock: true,
        tag: "phone",
        reviews: 128,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        title: "Watch",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Watch2,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        inStock: true,
        tag: "watch",
        reviews: 481,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 2,
        title: "Fashion",
        slug: "sustainable-fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Fashion2,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        inStock: true,
        tag: "fashion",
        reviews: 842,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 3,
        title: "Laptop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        inStock: true,
        tag: "laptop",
        reviews: 48,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 4,
        title: "Phone",
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone2,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        inStock: false,
        tag: "phone",
        reviews: 24,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
    ]
  }
];
import { useCartStore } from '../stores/useCartStore'
const cart = useCartStore()

function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    title: item.title,
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
