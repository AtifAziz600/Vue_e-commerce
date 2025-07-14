<template>
  <div v-for="section in products" :key="section.id" class="bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-md mb-14">
    <!-- Section Title -->
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-800 tracking-tight">{{ section.Top }}</h2>
    </div>
    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-2">
      <div
        v-for="item in section.products"
        :key="item.title"
        class="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group"
      >
        <!-- Image -->
        <RouterLink :to="`/product/${item.slug}`" class="bg-gray-100 h-48 flex items-center justify-center">
          <img :src="item.image" alt="product" class="w-full h-full transform group-hover:scale-105 transition-transform duration-300" />
        </RouterLink>

        <div class="p-5">
          <h3 class="text-lg font-semibold text-gray-900 truncate">{{ item.title }}</h3>
          <p class="text-xs text-gray-500 mt-1 truncate">{{ item.subtitle }}</p>

          <div class="flex items-center space-x-2 mt-4">
            <span class="text-xs line-through text-gray-400">{{ item.oldPrice }}</span>
            <span class="text-lg text-red-600 font-bold">{{ item.newPrice }}</span>
            <span class="text-white bg-green-500 px-2 py-0.5 text-xs rounded-full font-medium">-{{ item.discount }}%</span>
          </div>

          <div class="mt-4 flex justify-between text-xs text-gray-500">
            <div class="flex items-center space-x-1">
              <Icon icon="mdi:star" class="text-yellow-500 text-lg" />
              <span class="text-md">{{ item.rating }}</span>
              <RouterLink to="/review" class="text-sm ml-5 hover:text-blue-700 hover:underline">({{ item.reviews }}) reviews</RouterLink>
              </div>
            
            <div class="flex items-center space-x-3">
              <button @click="handleAddToCart(item)" class="bg-primarysButton hover:bg-secondysButton text-white text-sm font-medium px-5 py-2 rounded-2xl shadow-sm transition-all duration-200 focus:outline-none">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Watch from '../../assets/img/watch.png';
import Fashion from '../../assets/img/shirt.jfif';
import Laptop from '../../assets/img/laptop.jfif';
import Phone from '../../assets/img/xiaomi.jfif';
import Watch2 from '../../assets/img/watch2.png';
import Fashion2 from '../../assets/img/pants.jfif';
import Laptop2 from '../../assets/img/laptop.jfif';
import Phone2 from '../../assets/img/Oppo.jfif';

const products = [
  {
    id: 1,
    Top: "Electronics",
    products: [
     {
    id: 1,
    orderId: '#FWB127364372',
    title: "Watch",
    slug: "luxury-watch",
    category: "Watches / Luxury",
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    discount: 19,
    tag: "watch",
    inStock: true,
    reviews: 1248,
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
        orderId: '#FWB127364373',
        title: "Shirt",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        tag: "fashion",
         reviews: 1248,
    inStock: false,
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
        orderId: '#FWB127364234',
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        inStock: true,
        tag: "laptop",
        reviews: 1248,
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
        orderId: '#FWB1273644356',
        title: "Xiaomi",
        slug: "phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        inStock: true,
        tag: "phone",
        reviews: 1248,
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
    Top: "Morden",
    products: [
      {
        id: 1,
        orderId: '#FWB127364432',
        title: "Pants",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Fashion2,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
        inStock: true,
        reviews: 1248,
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
        orderId: '#FWB1273643452',
        title: "Watch",
        slug: "sustainable-fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Watch2,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        inStock: true,
        tag: "fashion",
        reviews: 1248,
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
        orderId: '#FWB1273643252',
        title: "Desktop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        tag: "laptop",
        inStock: true,
        reviews: 1248,
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
        title: "Oppo",
        orderId: '#FWB1273643234',
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone2,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
        inStock: true,
        reviews: 1248,
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
import { useCartStore } from '../../stores/useCartStore'
const cart = useCartStore()
import { useToast } from 'vue-toastification';
const toast = useToast();

function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    title: item.title,
    orderId: item.orderId,
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