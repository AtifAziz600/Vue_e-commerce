<template>
  <AppLayout>
    <!-- Header -->
    <div class="pt-14 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-sm">
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
          <div class="text-sm text-gray-600">zł0 – zł2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input type="range" min="0" max="100" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight text-start">
                  Phone
                </h2>
                <p class="text-sm font-thin text-gray-900 tracking-tight text-start mb-1">
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
                              class="absolute top-3 left-3 bg-discountColor text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
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
    {{ item.inStock ? 'In Stock' : 'Out Stock' }}
  </span>
                            </div>
                            <button
                              @click="handleAddToCart(item)"
                              class="flex items-center gap-2 bg-primarysButton hover:bg-secondysButton border text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
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
import Phone1 from '../../assets/img/x200.png';
import Phone2 from '../../assets/img/Phone.png';
import Phone3 from '../../assets/img/Phone1.png';
import Phone4 from '../../assets/img/Phone2.png';
import Phone5 from '../../assets/img/Phone3.png';
import Phone6 from '../../assets/img/Phone4.png';
import Phone7 from '../../assets/img/Phone5.png';
import Phone8 from '../../assets/img/Phone6.png';
import Icon from '@/components/Icon.vue';
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
const toast = useToast();

const products = [
  {
    id: 1,
    products: [
      {
        id: 1,
        title: "Smartphone X200",
        slug: "smartphone-x200",
        category: "Smartphones",
        inStock: true,
        subtitle: "Powerful smartphone with advanced camera and display.",
        image: Phone1, 
        oldPrice: 799.00,
        newPrice: 649.99,
        discount: 19,
        tag: "phone",
        reviews: 1050,
        rating: 4.6,
        features: [
          "6.5-inch AMOLED display",
          "Triple 64MP camera",
          "128GB storage",
          "Fast charging"
        ],
        sizes: ["128GB", "256GB"]
      },
      {
        id: 2,
        title: "Galaxy Note Air",
        slug: "galaxy-note-air",
        category: "Smartphones",
        inStock: true,
        subtitle: "Stylus-supported productivity phone with big display.",
        image: Phone2,
        oldPrice: 999.00,
        newPrice: 799.00,
        discount: 20,
        tag: "phone",
        reviews: 860,
        rating: 4.7,
        features: [
          "6.9-inch Dynamic AMOLED",
          "S-Pen support",
          "Snapdragon 8 Gen 2",
          "5000mAh battery"
        ],
        sizes: ["256GB", "512GB"]
      },
      {
        id: 3,
        title: "Pixel Vision Pro",
        slug: "pixel-vision-pro",
        category: "Smartphones",
        inStock: true,
        subtitle: "AI-optimized camera phone from Google.",
        image: Phone3,
        oldPrice: 899.00,
        newPrice: 749.99,
        discount: 17,
        tag: "phone",
        reviews: 980,
        rating: 4.8,
        features: [
          "Dual 50MP camera with AI",
          "Stock Android 14",
          "Face unlock",
          "Titan M2 security chip"
        ],
        sizes: ["128GB", "256GB", "512GB"]
      },
      {
        id: 4,
        title: "iPhone 15 Pro",
        slug: "iphone-15-pro",
        category: "Smartphones",
        inStock: false,
        subtitle: "Premium Apple device with titanium build.",
        image: Phone4,
        oldPrice: 1099.00,
        newPrice: 999.00,
        discount: 9,
        tag: "phone",
        reviews: 1320,
        rating: 4.9,
        features: [
          "A17 Pro chip",
          "USB-C port",
          "ProMotion 120Hz display",
          "LiDAR scanner"
        ],
        sizes: ["128GB", "256GB", "512GB", "1TB"]
      }
    ]
  },
  {
    id: 2,
    products: [
      {
        id: 5,
        title: "OnePlus 12 Turbo",
        slug: "oneplus-12-turbo",
        category: "Smartphones",
        inStock: true,
        subtitle: "Fast performance with AMOLED and flagship SoC.",
        image: Phone5,
        oldPrice: 699.00,
        newPrice: 599.00,
        discount: 14,
        tag: "phone",
        reviews: 610,
        rating: 4.5,
        features: [
          "Snapdragon 8 Gen 2",
          "120Hz AMOLED",
          "80W SUPERVOOC charging",
          "Dual stereo speakers"
        ],
        sizes: ["256GB", "512GB"]
      },
      {
        id: 6,
        title: "Xiaomi Mi Ultra 13",
        slug: "xiaomi-mi-ultra-13",
        category: "Smartphones",
        inStock: true,
        subtitle: "Flagship phone with Leica-powered cameras.",
        image: Phone6,
        oldPrice: 899.00,
        newPrice: 729.00,
        discount: 18,
        tag: "phone",
        reviews: 740,
        rating: 4.6,
        features: [
          "1-inch Sony sensor",
          "Snapdragon 8 Gen 3",
          "90W wired / 50W wireless charging",
          "IP68 water resistance"
        ],
        sizes: ["256GB", "512GB"]
      },
      {
        id: 7,
        title: "Nothing Phone 2",
        slug: "nothing-phone-2",
        category: "Smartphones",
        inStock: true,
        subtitle: "Stylish smartphone with Glyph interface and clean UI.",
        image: Phone7,
        oldPrice: 599.00,
        newPrice: 499.00,
        discount: 16,
        tag: "phone",
        reviews: 420,
        rating: 4.4,
        features: [
          "Glyph LED notifications",
          "Snapdragon 8+ Gen 1",
          "Dual rear cameras",
          "Nothing OS"
        ],
        sizes: ["128GB", "256GB"]
      },
      {
        id: 8,
        title: "Asus ROG Phone 7",
        slug: "asus-rog-phone-7",
        category: "Smartphones",
        inStock: false,
        subtitle: "Gaming phone with extreme performance and cooling.",
        image: Phone8,
        oldPrice: 999.00,
        newPrice: 849.00,
        discount: 15,
        tag: "phone",
        reviews: 300,
        rating: 4.7,
        features: [
          "165Hz AMOLED",
          "AirTrigger buttons",
          "6000mAh battery",
          "Snapdragon 8 Gen 2"
        ],
        sizes: ["256GB", "512GB"]
      }
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