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
                    Pharmacy Products
                </h2>
                <p class="text-sm font-thin text-gray-900 tracking-tight text-start mb-1">
                    Check All the products here
                </p>
          <div
              v-for="section in products"
              :key="section.id"
              class="mb-12"
          >
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      'text-xs font-semibold px-2 py-2 rounded-2xl whitespace-nowrap',
      item.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100 inline-block'
    ]"
  >
    {{ item.inStock ? 'In Stock' : 'Stock Out' }}
  </span>
                            </div>
                            <button
                              @click="handleAddToCart(item)"
                              class="flex items-center gap-2 whitespace-nowrap bg-deepMaroon border text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow hover:bg-[#7a3b49] hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
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
import Pharmacy1 from '../../assets/img/para.png'
import Pharmacy2 from '../../assets/img/Ibuprofen200mgTablets.png';
import Pharmacy3 from '../../assets/img/CetirizineAllergyTablets.png';
import Pharmacy4 from '../../assets/img/VitaminC1000mgTablets.png';
import Pharmacy5 from '../../assets/img/Loratadine10mgTablets.png';
import Pharmacy6 from '../../assets/img/Aspirin75mgTablets.png';
import Pharmacy7 from '../../assets/img/MultivitaminTablets.png';
import Pharmacy8 from '../../assets/img/Omeprazole20mgCapsules.png'
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
        title: "Paracetamol 500mg Tablets",
        slug: "paracetamol-500mg",
        subtitle: "Effective pain relief and fever reducer.",
        image: Pharmacy1,
        inStock: true,
        oldPrice: 5.99,
        newPrice: 3.99,
        discount: 33,
        tag: "pain-relief",
        reviews: 320,
        rating: 4.8,
        features: [
          "Reduces fever",
          "Relieves mild to moderate pain",
          "Suitable for adults and children",
          "Fast acting",
          "Easy to swallow"
        ],
        sizes: ["Pack of 16", "Pack of 32"]
      },
      {
        id: 2,
        title: "Ibuprofen 200mg Tablets",
        slug: "ibuprofen-200mg",
        subtitle: "Anti-inflammatory for pain and swelling.",
        image: Pharmacy2,
        inStock: true,
        oldPrice: 6.49,
        newPrice: 4.49,
        discount: 31,
        tag: "anti-inflammatory",
        reviews: 210,
        rating: 4.7,
        features: [
          "Reduces inflammation",
          "Relieves pain and swelling",
          "Suitable for headaches and muscle pain",
          "Non-drowsy formula",
          "Fast relief"
        ],
        sizes: ["Pack of 16", "Pack of 32"]
      },
      {
        id: 3,
        title: "Cetirizine Allergy Tablets",
        slug: "cetirizine-allergy",
        subtitle: "24-hour allergy relief for hayfever and allergies.",
        image: Pharmacy3,
        inStock: false,
        oldPrice: 7.99,
        newPrice: 5.99,
        discount: 25,
        tag: "allergy",
        reviews: 180,
        rating: 4.6,
        features: [
          "Non-drowsy",
          "Relieves sneezing and itchy eyes",
          "Effective for hayfever",
          "Once daily",
          "Suitable for adults and children"
        ],
        sizes: ["Pack of 7", "Pack of 14"]
      },
      {
        id: 4,
        title: "Vitamin C 1000mg Tablets",
        slug: "vitamin-c-1000mg",
        subtitle: "Boosts immune system and overall health.",
        image: Pharmacy4,
        inStock: true,
        oldPrice: 9.99,
        newPrice: 7.49,
        discount: 25,
        tag: "vitamins",
        reviews: 150,
        rating: 4.9,
        features: [
          "Supports immune health",
          "High strength",
          "Antioxidant support",
          "Easy to swallow",
          "Suitable for daily use"
        ],
        sizes: ["Pack of 30", "Pack of 60"]
      }
    ]
  },
  {
    id: 2,
    products: [
      {
        id: 5,
        title: "Loratadine 10mg Tablets",
        slug: "loratadine-10mg",
        subtitle: "Non-drowsy antihistamine for allergies.",
        image: Pharmacy5,
        inStock: true,
        oldPrice: 6.99,
        newPrice: 4.99,
        discount: 29,
        tag: "allergy",
        reviews: 140,
        rating: 4.7,
        features: [
          "24-hour relief",
          "Non-drowsy",
          "Effective for hayfever",
          "Suitable for adults and children",
          "Easy to swallow"
        ],
        sizes: ["Pack of 7", "Pack of 14"]
      },
      {
        id: 6,
        title: "Aspirin 75mg Tablets",
        slug: "aspirin-75mg",
        subtitle: "Low dose for heart health and blood thinning.",
        image: Pharmacy6,
        inStock: true,
        oldPrice: 5.49,
        newPrice: 3.99,
        discount: 27,
        tag: "heart-health",
        reviews: 110,
        rating: 4.5,
        features: [
          "Supports heart health",
          "Low dose",
          "Easy to swallow",
          "Suitable for long-term use",
          "Trusted formula"
        ],
        sizes: ["Pack of 28", "Pack of 56"]
      },
      {
        id: 7,
        title: "Multivitamin Tablets",
        slug: "multivitamin",
        subtitle: "Daily essential vitamins and minerals.",
        image: Pharmacy7,
        inStock: true,
        oldPrice: 8.99,
        newPrice: 6.99,
        discount: 22,
        tag: "vitamins",
        reviews: 170,
        rating: 4.8,
        features: [
          "Supports overall health",
          "Contains 12 vitamins and minerals",
          "Suitable for adults",
          "One-a-day formula",
          "Easy to swallow"
        ],
        sizes: ["Pack of 30", "Pack of 60"]
      },
      {
        id: 8,
        title: "Omeprazole 20mg Capsules",
        slug: "omeprazole-20mg",
        subtitle: "Relieves heartburn and acid reflux.",
        image: Pharmacy8,
        inStock: true,
        oldPrice: 10.99,
        newPrice: 8.49,
        discount: 23,
        tag: "digestive-health",
        reviews: 130,
        rating: 4.6,
        features: [
          "Reduces stomach acid",
          "Effective for heartburn",
          "Once daily",
          "Easy to swallow",
          "Suitable for adults"
        ],
        sizes: ["Pack of 14", "Pack of 28"]
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