<template>
  <AppLayout>
    <!-- Header -->
    <div class="pt-12 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-sm">
      <div class="text-gray-700 text-base font-medium">
        <p class="text-center">900 results</p>
      </div>
      <div class="flex items-center gap-3">
        <label for="sort-by" class="text-gray-700 text-base font-normal">Sort by:</label>
        <div class="relative w-40">
          <select
          class="block w-full px-3 py-2 text-sm md:text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm
                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 cursor-pointer"
        >
          <option value="price_low_to_high">Price: Low to High</option>
          <option value="price_high_to_low">Price: High to Low</option>
          <option value="avg_customer_review">Avg. Customer Review</option>
          <option value="newest_arrival">Newest Arrivals</option>
          <option value="best_seller">Best Seller</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <section class="md:flex md:justify-between md:items-start px-4 md:px-0">
      <div class="lg:hidden flex items-end justify-end">
        <button @click="isSidebarOpen = !isSidebarOpen" class="p-2 rounded hover:bg-gray-200 focus:outline-none">
          <Icon icon="mdi:filter" class="h-6 w-6" />
        </button>
      </div>
      <transition name="fade" class="overflow-auto">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <aside class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 pb-6">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="all" class="form-radio text-blue-500 focus:ring-blue-500" checked />
              All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="amazon" class="form-radio text-blue-500 focus:ring-blue-500" />
            Devices & Accessories
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="appliances" class="form-radio text-blue-500 focus:ring-blue-500" />
              Appliances
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="apps" class="form-radio text-blue-500 focus:ring-blue-500" />
              Apps & Games
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="crafts" class="form-radio text-blue-500 focus:ring-blue-500" />
              Arts, Crafts & Sewing
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Garmin
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Shark
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Crest
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> ECOVACS
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" checked /> All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" />
              <span class="flex items-center">
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star-outline" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
          <input type="range" min="0" max="2500" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">zł0 – zł2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input type="range" min="0" max="100" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
      <!-- Main Content -->
       <aside class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 md:block hidden">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="all" class="form-radio text-blue-500 focus:ring-blue-500" checked />
              All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="amazon" class="form-radio text-blue-500 focus:ring-blue-500" />
            Devices & Accessories
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="appliances" class="form-radio text-blue-500 focus:ring-blue-500" />
              Appliances
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="apps" class="form-radio text-blue-500 focus:ring-blue-500" />
              Apps & Games
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="crafts" class="form-radio text-blue-500 focus:ring-blue-500" />
              Arts, Crafts & Sewing
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Garmin
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Shark
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Crest
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> ECOVACS
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" checked /> All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" />
              <span class="flex items-center">
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star-outline" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
          <input type="range" min="0" max="2500" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">zł 0 – zł 2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input type="range" min="0" max="100" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div class=" items-start justify-start">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight text-start">
                    Best Seller
                </h2>
                <p class="text-sm font-thin text-gray-900 tracking-tight text-start mb-1">
                    Check All the products here
                </p>
          </div>
          <div
              v-for="section in products"
              :key="section.id"
              class="mb-12"
          >
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div
                      v-for="item in section.products"
                      :key="item.title"
                      class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
                  >
                      <!-- Image -->
                      <RouterLink :to="`/product/${item.slug}`" class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-48 flex items-center justify-center rounded-t-xl overflow-hidden">
                          <img
                              :src="item.image"
                              alt="product"
                              class="w-full h-full object-fit transition-transform duration-300 group-hover:scale-105"
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
                              <span class="text-sm line-through text-gray-400">zł {{ item.oldPrice }}</span>
                              <span class="text-xl text-blue-600 font-bold">zł {{ item.newPrice }}</span>
                          </div>
                          
                          <div class="flex items-center mb-4">
                              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                              <span class="text-xs text-gray-500">4.8 | </span>
                              <RouterLink class="text-xs text-blue-600 hover:underline ml-1">
                                  ({{ item.reviews }} reviews)
                                  </RouterLink>
                          </div>
                            <!-- Footer -->
                            <div class="mt-auto flex flex-row justify-between items-center gap-2 pt-3 border-t border-gray-100">
                            <div class="flex flex-col items-start">
                              
                              <span
    :class="[
      'text-xs font-semibold px-2 py-2 rounded-2xl',
      item.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
    ]"
  >
    {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
  </span>
                            </div>
                            <button
                              @click="handleAddToCart(item)"
                              class="flex items-center gap-2 bg-deepMaroon border text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow hover:bg-[#7a3b49] hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
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
import Watch from '../../assets/img/watch.png';
import Fashion from '../../assets/img/shirt.jfif';
import Laptop from '../../assets/img/laptop.jfif';
import Phone from '../../assets/img/xiaomi.jfif';
import Watch2 from '../../assets/img/watch2.png';
import Fashion2 from '../../assets/img/pants.jfif';
import Laptop2 from '../../assets/img/laptop.jfif';
import Phone2 from '../../assets/img/Oppo.jfif';
import Icon from '@/components/Icon.vue';
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
const toast = useToast();

const  products = [
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
    inStock: true,
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
        title: "Shirt",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
          inStock: false,
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
    products: [
      {
        id: 1,
        title: "Pants",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Fashion2,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
        reviews: 1248,
        inStock: true,
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
        title: "Desktop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
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
        title: "Oppo",
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone2,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
        reviews: 1248,
    inStock: true,
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

const isSidebarOpen = ref(false);


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