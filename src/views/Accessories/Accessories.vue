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
          Devices & Accessories
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
              <!-- Image -->
              <RouterLink
                :to="`/product/${item.slug}`"
                class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-48 flex items-center justify-center rounded-t-xl overflow-hidden"
              >
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

                <!-- Rating -->
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
                <!-- Footer -->
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
import Accessory0 from "../../assets/img/acc1.png";
import Accessory1 from "../../assets/img/acc2.png";
import Accessory2 from "../../assets/img/acc3.png";
import Accessory3 from "../../assets/img/acc4.png";
import Accessory4 from "../../assets/img/acc5.png";
import Accessory5 from "../../assets/img/acc6.png";
import Accessory6 from "../../assets/img/acc7.png";
import Accessory7 from "../../assets/img/acc8.png";
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
        title: "Logitech MX Master 3S",
        slug: "logitech-mx-master-3s",
        category: "Accessories / Mouse",
        inStock: true,
        subtitle:
          "Advanced wireless mouse with ergonomic design and fast scrolling.",
        image: Accessory0,
        oldPrice: 119.99,
        newPrice: 99.99,
        discount: 17,
        tag: "accessory",
        reviews: 1241,
        rating: 5,
        features: [
          "Ergonomic Design",
          "MagSpeed Scrolling",
          "4000 DPI Sensor",
          "USB-C Rechargeable",
          "Bluetooth & USB Receiver",
        ],
        sizes: [],
      },
      {
        id: 2,
        title: "Sony WH-1000XM5",
        slug: "sony-wh-1000xm5",
        category: "Accessories / Headphones",
        inStock: true,
        subtitle:
          "Wireless Noise-Canceling Over-Ear Headphones with premium sound.",
        image: Accessory1,
        oldPrice: 399.99,
        newPrice: 349.99,
        discount: 13,
        tag: "accessory",
        reviews: 942,
        rating: 5,
        features: [
          "Industry-leading Noise Cancellation",
          "30-hour Battery Life",
          "Touch Controls",
          "Bluetooth 5.2",
          "Hi-Res Audio Certified",
        ],
        sizes: [],
      },
      {
        id: 3,
        title: "Razer BlackWidow V4 Pro",
        slug: "razer-blackwidow-v4-pro",
        category: "Accessories / Keyboard",
        inStock: false,
        subtitle: "Mechanical gaming keyboard with RGB and macro keys.",
        image: Accessory2,
        oldPrice: 229.99,
        newPrice: 199.99,
        discount: 13,
        tag: "accessory",
        reviews: 283,
        rating: 4,
        features: [
          "Mechanical Switches (Green)",
          "Dedicated Macro Keys",
          "Magnetic Wrist Rest",
          "Chroma RGB Lighting",
          "USB Passthrough",
        ],
        sizes: [],
      },
      {
        id: 4,
        title: "Elgato Stream Deck XL",
        slug: "elgato-stream-deck-xl",
        category: "Accessories / Streaming",
        inStock: true,
        subtitle:
          "32 customizable LCD keys for productivity and streaming control.",
        image: Accessory3,
        oldPrice: 249.99,
        newPrice: 219.99,
        discount: 12,
        tag: "accessory",
        reviews: 389,
        rating: 5,
        features: [
          "32 LCD Keys",
          "Custom Icons & Functions",
          "Integration with OBS, Twitch, YouTube",
          "Detachable Stand",
          "USB-C Connection",
        ],
        sizes: [],
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        title: "Anker 737 Power Bank",
        slug: "anker-737-power-bank",
        category: "Accessories / Power",
        inStock: true,
        subtitle: "140W USB-C Portable Charger with 24,000mAh capacity.",
        image: Accessory4,
        oldPrice: 159.99,
        newPrice: 139.99,
        discount: 13,
        tag: "accessory",
        reviews: 478,
        rating: 5,
        features: [
          "140W Fast Charging",
          "24,000mAh Battery",
          "USB-C PD 3.1",
          "Smart Digital Display",
          "Multiple Device Charging",
        ],
        sizes: [],
      },
      {
        id: 2,
        title: "Logitech Brio 4K Webcam",
        slug: "logitech-brio-4k-webcam",
        category: "Accessories / Webcam",
        inStock: true,
        subtitle: "Ultra HD 4K webcam with HDR and Windows Hello support.",
        image: Accessory5,
        oldPrice: 199.99,
        newPrice: 169.99,
        discount: 15,
        tag: "accessory",
        reviews: 212,
        rating: 4,
        features: [
          "4K Ultra HD Resolution",
          "HDR and Auto Light Correction",
          "Windows Hello Facial Recognition",
          "Omni-directional Microphones",
          "Adjustable Field of View",
        ],
        sizes: [],
      },
      {
        id: 3,
        title: "Samsung T7 Shield SSD",
        slug: "samsung-t7-shield-ssd",
        category: "Accessories / Storage",
        inStock: false,
        subtitle:
          "1TB rugged portable SSD with USB 3.2 and IP65 water resistance.",
        image: Accessory6,
        oldPrice: 139.99,
        newPrice: 119.99,
        discount: 14,
        tag: "accessory",
        reviews: 341,
        rating: 4,
        features: [
          "1TB NVMe SSD",
          "USB 3.2 Gen 2",
          "Up to 1050MB/s Read Speed",
          "Shock & Water Resistant (IP65)",
          "Secure AES 256-bit Encryption",
        ],
        sizes: [],
      },
      {
        id: 4,
        title: "HyperX Cloud II",
        slug: "hyperx-cloud-ii",
        category: "Accessories / Gaming Headset",
        inStock: true,
        subtitle:
          "Gaming headset with 7.1 virtual surround and detachable mic.",
        image: Accessory7,
        oldPrice: 99.99,
        newPrice: 79.99,
        discount: 20,
        tag: "accessory",
        reviews: 1920,
        rating: 5,
        features: [
          "7.1 Virtual Surround Sound",
          "Memory Foam Ear Cushions",
          "Detachable Noise-Canceling Mic",
          "USB Audio Control Box",
          "Multi-Platform Compatibility",
        ],
        sizes: [],
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
