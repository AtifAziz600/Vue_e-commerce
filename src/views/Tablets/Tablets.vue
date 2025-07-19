<template>
  <AppLayout>
    <!-- Header -->
    <div
      class="md:pt-10 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-sm"
    >
      <div class="text-gray-700 text-base font-medium">
        <p class="text-center">900 results</p>
      </div>
      <div class="flex items-center gap-3">
        <label for="sort-by" class="text-gray-700 text-base font-normal"
          >Sort by:</label
        >
        <div class="relative w-40">
          <select
            class="block w-full px-3 py-2 text-sm md:text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 cursor-pointer"
          >
            <option value="price_low_to_high">Price: Low to High</option>
            <option value="price_high_to_low">Price: High to Low</option>
            <option value="avg_customer_review">Avg. Customer Review</option>
            <option value="newest_arrival">Newest Arrivals</option>
            <option value="best_seller">Best Seller</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <section class="md:flex md:justify-between md:items-start px-4 md:px-0">
      <div class="lg:hidden flex items-end justify-end">
        <button
          @click="isSidebarOpen = !isSidebarOpen"
          class="p-2 rounded hover:bg-gray-200 focus:outline-none"
        >
          <Icon icon="mdi:filter" class="h-6 w-6" />
        </button>
      </div>
      <transition name="fade" class="overflow-auto">
        <div
          v-if="isSidebarOpen"
          class="fixed inset-0 z-50 bg-black bg-opacity-40 flex"
        >
          <aside
            class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 pb-6"
          >
            <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="department"
                    value="all"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                    checked
                  />
                  All
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="department"
                    value="amazon"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                  />
                  Devices & Accessories
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="department"
                    value="appliances"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                  />
                  Appliances
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="department"
                    value="apps"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                  />
                  Apps & Games
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="department"
                    value="crafts"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                  />
                  Arts, Crafts & Sewing
                </label>
                <button class="text-blue-500 text-xs mt-1 hover:underline">
                  See more
                </button>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    class="form-checkbox text-blue-500 focus:ring-blue-500"
                  />
                  Garmin
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    class="form-checkbox text-blue-500 focus:ring-blue-500"
                  />
                  Shark
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    class="form-checkbox text-blue-500 focus:ring-blue-500"
                  />
                  Crest
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    class="form-checkbox text-blue-500 focus:ring-blue-500"
                  />
                  ECOVACS
                </label>
                <button class="text-blue-500 text-xs mt-1 hover:underline">
                  See more
                </button>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="reviews"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                    checked
                  />
                  All
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="reviews"
                    class="form-radio text-blue-500 focus:ring-blue-500"
                  />
                  <span class="flex items-center">
                    <Icon
                      icon="mdi:star"
                      class="w-4 h-4 text-yellow-500 hover:scale-125"
                    />
                    <Icon
                      icon="mdi:star"
                      class="w-4 h-4 text-yellow-500 hover:scale-125"
                    />
                    <Icon
                      icon="mdi:star"
                      class="w-4 h-4 text-yellow-500 hover:scale-125"
                    />
                    <Icon
                      icon="mdi:star"
                      class="w-4 h-4 text-yellow-500 hover:scale-125"
                    />
                    <Icon
                      icon="mdi:star-outline"
                      class="w-4 h-4 text-yellow-500 hover:scale-125"
                    />
                  </span>
                </label>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="2500"
                class="w-full accent-blue-500"
              />
              <div class="text-sm text-gray-600">zł0 – zł2,500</div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
              <input
                type="range"
                min="0"
                max="100"
                class="w-full accent-blue-500"
              />
              <div class="text-sm text-gray-600">0% – 100%</div>
            </div>
          </aside>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
      <!-- Main Content -->
      <aside
        class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 md:block hidden"
      >
        <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="department"
                value="all"
                class="form-radio text-blue-500 focus:ring-blue-500"
                checked
              />
              All
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="department"
                value="amazon"
                class="form-radio text-blue-500 focus:ring-blue-500"
              />
              Devices & Accessories
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="department"
                value="appliances"
                class="form-radio text-blue-500 focus:ring-blue-500"
              />
              Appliances
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="department"
                value="apps"
                class="form-radio text-blue-500 focus:ring-blue-500"
              />
              Apps & Games
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="department"
                value="crafts"
                class="form-radio text-blue-500 focus:ring-blue-500"
              />
              Arts, Crafts & Sewing
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">
              See more
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox text-blue-500 focus:ring-blue-500"
              />
              Garmin
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox text-blue-500 focus:ring-blue-500"
              />
              Shark
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox text-blue-500 focus:ring-blue-500"
              />
              Crest
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox text-blue-500 focus:ring-blue-500"
              />
              ECOVACS
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">
              See more
            </button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="reviews"
                class="form-radio text-blue-500 focus:ring-blue-500"
                checked
              />
              All
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="reviews"
                class="form-radio text-blue-500 focus:ring-blue-500"
              />
              <span class="flex items-center">
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 text-yellow-500 hover:scale-125"
                />
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 text-yellow-500 hover:scale-125"
                />
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 text-yellow-500 hover:scale-125"
                />
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 text-yellow-500 hover:scale-125"
                />
                <Icon
                  icon="mdi:star-outline"
                  class="w-4 h-4 text-yellow-500 hover:scale-125"
                />
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="2500"
            class="w-full accent-blue-500"
          />
          <div class="text-sm text-gray-600">zł0 – zł2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input
            type="range"
            min="0"
            max="100"
            class="w-full accent-blue-500"
          />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <h2
          class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight text-start"
        >
          Tablets
        </h2>
        <p
          class="text-sm font-thin text-gray-900 tracking-tight text-start mb-1"
        >
          Check All the products here
        </p>
        <div v-for="section in products" :key="section.id" class="mb-12">
          <div class="grid grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-2">
            <div
              v-for="item in section.products"
              :key="item.title"
              class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <RouterLink
                :to="`/product/${item.slug}`"
                class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-48 flex items-center justify-center rounded-t-xl overflow-hidden"
              >
                <img
                  :src="item.image"
                  alt="product"
                  class="w-full h-full object-fit aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
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
                <div class="flex items-baseline gap-2 mb-3 sm:mb-4 flex-wrap">
                  <span
                    v-if="item.oldPrice"
                    class="text-xs sm:text-sm line-through text-gray-400"
                  >
                    zł{{ item.oldPrice }}
                  </span>
                  <span class="text-base sm:text-xl text-red-700 font-bold">
                    zł{{ item.newPrice }}
                  </span>
                </div>
                <div
                  class="flex md:flex-col gap-1 mb-4 flex-wrap text-xs sm:text-sm"
                >
                  <div class="flex items-center space-x-1">
                    <Icon icon="mdi:star" class="text-yellow-500 text-base" />
                    <span class="text-xs font-medium text-gray-700">{{
                      item.rating
                    }}</span>
                    <RouterLink
                      :to="`/review`"
                      class="text-xs ml-1 text-blue-600 hover:underline whitespace-nowrap font-semibold"
                    >
                      ({{ item.reviews }}) Reviews
                    </RouterLink>
                  </div>
                </div>
                <div
                  class="border-gray-100 mt-auto pt-3 border-t flex justify-center items-center gap-4 flex-col sm:flex-row"
                >
                  <button
                    @click="handleAddToCart(item)"
                    class="flex items-center justify-center gap-2 bg-black text-white text-xs font-semibold px-2 py-1.5 rounded-lg shadow hover:bg-blue-950 hover:border-blue-950 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-950"
                  >
                    <Icon icon="mdi:credit-card-check" class="h-5 w-5" />
                    <span>Buy Now</span>
                  </button>
                  <button
                    @click="handleAddToCart(item)"
                    class="flex items-center justify-center gap-2 bg-primarysButton hover:bg-secondysButton text-white text-xs font-semibold px-2 py-1.5 rounded-lg shadow hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <Icon icon="mdi:cart" class="h-5 w-5" />
                    <span>Add Cart</span>
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
import Tablet1 from "../../assets/img/tablets1.png";
import Tablet2 from "../../assets/img/tablets2.png";
import Tablet3 from "../../assets/img/tablets3.png";
import Tablet4 from "../../assets/img/tablets4.png";
import Tablet5 from "../../assets/img/tablets5.png";
import Tablet6 from "../../assets/img/tablets6.png";
import Tablet7 from "../../assets/img/tablets7.png";
import Tablet8 from "../../assets/img/tablets8.png";
import Icon from "@/components/Icon.vue";
import { useToast } from "vue-toastification";
import { ref } from "vue";
const toast = useToast();

const products = [
  {
    id: 1,
    products: [
      {
        id: 1,
        title: 'iPad Pro 12.9" (M4)',
        slug: "ipad-pro-12-9-m4",
        category: "Tablets",
        inStock: true,
        subtitle:
          "Apple's most powerful tablet with Liquid Retina XDR display.",
        image: Tablet1,
        oldPrice: 1399.0,
        newPrice: 1299.0,
        discount: 7,
        tag: "tablet",
        reviews: 1120,
        rating: 4.9,
        features: [
          "Apple M4 chip",
          "120Hz ProMotion",
          "Face ID",
          "USB-C Thunderbolt",
        ],
        sizes: ["256GB", "512GB", "1TB", "2TB"],
      },
      {
        id: 2,
        title: "Samsung Galaxy Tab S9 Ultra",
        slug: "galaxy-tab-s9-ultra",
        category: "Tablets",
        inStock: true,
        subtitle: "Premium Android tablet with S Pen and AMOLED screen.",
        image: Tablet2,
        oldPrice: 1199.0,
        newPrice: 1049.0,
        discount: 13,
        tag: "tablet",
        reviews: 890,
        rating: 4.8,
        features: [
          "14.6-inch AMOLED display",
          "Snapdragon 8 Gen 2",
          "Water resistant (IP68)",
          "S Pen included",
        ],
        sizes: ["256GB", "512GB", "1TB"],
      },
      {
        id: 3,
        title: "Microsoft Surface Pro 9",
        slug: "surface-pro-9",
        category: "Tablets",
        inStock: true,
        subtitle: "2-in-1 Windows tablet with built-in kickstand.",
        image: Tablet3,
        oldPrice: 1099.0,
        newPrice: 999.0,
        discount: 9,
        tag: "tablet",
        reviews: 760,
        rating: 4.6,
        features: [
          "Intel Evo i5/i7",
          "13-inch PixelSense touchscreen",
          "Windows 11",
          "Detachable keyboard (sold separately)",
        ],
        sizes: ["256GB", "512GB"],
      },
      {
        id: 4,
        title: "Lenovo Tab P12 Pro",
        slug: "lenovo-tab-p12-pro",
        category: "Tablets",
        inStock: false,
        subtitle: "Versatile Android tablet with vivid OLED display.",
        image: Tablet4,
        oldPrice: 799.0,
        newPrice: 649.0,
        discount: 18,
        tag: "tablet",
        reviews: 430,
        rating: 4.4,
        features: [
          "12.6-inch AMOLED display",
          "Snapdragon 870",
          "Dolby Vision",
          "4 JBL speakers",
        ],
        sizes: ["128GB", "256GB"],
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 5,
        title: "Xiaomi Pad 6 Pro",
        slug: "xiaomi-pad-6-pro",
        category: "Tablets",
        inStock: true,
        subtitle: "Performance-focused Android tablet with 144Hz screen.",
        image: Tablet5,
        oldPrice: 599.0,
        newPrice: 499.0,
        discount: 17,
        tag: "tablet",
        reviews: 310,
        rating: 4.5,
        features: [
          "Snapdragon 8+ Gen 1",
          "11-inch 144Hz LCD",
          "Quad speakers",
          "MIUI Pad OS",
        ],
        sizes: ["128GB", "256GB"],
      },
      {
        id: 6,
        title: "Amazon Fire Max 11",
        slug: "amazon-fire-max-11",
        category: "Tablets",
        inStock: true,
        subtitle: "Budget-friendly tablet with entertainment in mind.",
        image: Tablet6,
        oldPrice: 229.0,
        newPrice: 179.99,
        discount: 21,
        tag: "tablet",
        reviews: 580,
        rating: 4.3,
        features: [
          "11-inch FHD display",
          "MediaTek octa-core",
          "12-hour battery life",
          "Alexa support",
        ],
        sizes: ["64GB", "128GB"],
      },
      {
        id: 7,
        title: "Huawei MatePad Pro 11",
        slug: "huawei-matepad-pro-11",
        category: "Tablets",
        inStock: true,
        subtitle: "Slim design tablet with HarmonyOS and OLED display.",
        image: Tablet7,
        oldPrice: 699.0,
        newPrice: 599.0,
        discount: 14,
        tag: "tablet",
        reviews: 250,
        rating: 4.4,
        features: [
          "11-inch OLED 120Hz",
          "Snapdragon 888",
          "HarmonyOS 4",
          "Pen and keyboard support",
        ],
        sizes: ["128GB", "256GB"],
      },
      {
        id: 8,
        title: "Realme Pad 2",
        slug: "realme-pad-2",
        category: "Tablets",
        inStock: false,
        subtitle: "Affordable tablet for students and everyday use.",
        image: Tablet8,
        oldPrice: 299.0,
        newPrice: 229.0,
        discount: 23,
        tag: "tablet",
        reviews: 320,
        rating: 4.2,
        features: [
          "11.5-inch 2K display",
          "Helio G99",
          "8360mAh battery",
          "Realme UI for Pad",
        ],
        sizes: ["64GB", "128GB"],
      },
    ],
  },
];

import { useCartStore } from "../../stores/useCartStore";
const cart = useCartStore();

function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.newPrice,
    quantity: 1,
    total: item.newPrice,
    category: item.tag,
  });
  toast.success(`${item.title} added to cart`);
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
