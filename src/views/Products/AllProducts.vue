<template>
  <AppLayout>
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight text-center">
                    All Products
                </h2>
                <p class="text-sm font-thin text-gray-900 mb-6 tracking-tight text-center">
                    Check All the products here
                </p>
          <div
              v-for="section in products"
              :key="section.id"
              class="mb-12"
          >
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div
                      v-for="item in section.products"
                      :key="item.title"
                      class="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
                  >
                      <!-- Image -->
                      <RouterLink :to="`/product/${item.slug}`" class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-56 flex items-center justify-center overflow-hidden">
                          <img
                              :src="item.image"
                              alt="product"
                              class="w-4/5 h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <span
                              v-if="item.discount"
                              class="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
                          >
                              -{{ item.discount }}%
                          </span>
                      </RouterLink>
                      <!-- Info -->
                      <div class="flex-1 flex flex-col p-5">
                          <h3 class="text-lg font-semibold text-gray-900 truncate mb-1">
                              {{ item.title }}
                          </h3>
                          <p class="text-xs text-gray-500 mb-2 truncate">
                              {{ item.subtitle }}
                          </p>
                          <!-- Price -->
                          <div class="flex items-end space-x-2 mb-4">
                              <span class="text-sm line-through text-gray-400">zł{{ item.oldPrice }}</span>
                              <span class="text-xl text-blue-600 font-bold">zł{{ item.newPrice }}</span>
                          </div>
                          
                          <div class="flex items-center mb-4">
                              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                              <span class="text-xs text-gray-500">4.8 | Free Delivery</span>
                          </div>
                            <!-- Footer -->
                            <div class="mt-auto flex flex-row justify-between items-center gap-2 pt-3 border-t border-gray-100">
                            <div class="flex flex-col items-start">
                              <span class="text-xs text-gray-400">Price incl. VAT</span>
                              <span
    :class="[
      'text-xs font-semibold px-2 rounded-full',
      item.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
    ]"
  >
    {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
  </span>
                            </div>
                            <button
                              @click="handleAddToCart(item)"
                              class="flex items-center gap-2 bg-red-600 border text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow hover:bg-red-700 hover:border-red-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                            <Icon icon="mdi:cart" class="h-5 w-5 text-white" />
                              Add to Cart
                            </button>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useToast } from 'vue-toastification';
import Watch from '../../assets/img/watch.png';
import Fashion from '../../assets/img/shirt.jfif';
import Laptop from '../../assets/img/laptop.jfif';
import Phone from '../../assets/img/xiaomi.jfif';
import Watch2 from '../../assets/img/watch2.png';
import Fashion2 from '../../assets/img/pants.jfif';
import Laptop2 from '../../assets/img/laptop.jfif';
import Phone2 from '../../assets/img/Oppo.jfif';

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
    inStock: true,
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    discount: 19,
    tag: "watch",
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
        title: "Fashion",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion2,
        inStock: false,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
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
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop2,
        inStock: true,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
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
        title: "Phone",
        slug: "phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        inStock: true,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
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
    products: [
      {
        id: 1,
        title: "Watch",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Watch2,
        inStock: true,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
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
        title: "Fashion",
        slug: "sustainable-fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Fashion,
        inStock: false,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
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
        title: "Laptop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop,
        inStock: true,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
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
        title: "Phone",
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone2,
        inStock: true,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
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
    ]
  }
];
import { useCartStore } from '../../stores/useCartStore'
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