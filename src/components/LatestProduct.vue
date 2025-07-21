<template>
  <div class="w-full mx-auto px-1 sm:px-1 lg:px-2 py-4 bg-gray-100">
    <div class="mb-8 text-center">
      <h2
        class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight"
      >
        Latest Product
      </h2>
      <p class="text-md md:text-lg text-gray-600 font-light">
        Discover our top picks, and all the the prodcuts that were featured
      </p>
    </div>
    <div v-for="section in products" :key="section.id" class="gap-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-2">
        <div
          v-for="item in section.products"
          :key="item.id"
          class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white group border border-gray-100 hover:border-red-200"
        >
          <RouterLink
            :to="`/product/${item.slug}`"
            class="block w-full aspect-[16/9] bg-gray-50 flex items-center justify-center overflow-hidden"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-fit transform group-hover:scale-105 transition-transform duration-300 p-2"
            />
            <span
              v-if="item.discount"
              class="absolute top-3 left-3 bg-discountColor text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
              >-{{ item.discount }}%
            </span>
          </RouterLink>
          <div class="p-4 sm:p-5 flex flex-col justify-between h-auto">
            <div>
              <h3
                class="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2"
                :title="item.title"
              >
                {{ item.title }}
              </h3>
              <p
                class="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2"
                :title="item.subtitle"
              >
                {{ item.subtitle }}
              </p>

              <div class="flex items-baseline space-x-2 mt-3 sm:mt-4">
                <div class="md:flex flex-col">
                  <span class="text-sm line-through text-gray-400 gap-2"
                    >zł {{ item.oldPrice.toFixed(2) }}</span
                  >
                  <span class="text-base sm:text-lg text-red-600 font-bold"
                    >zł {{ item.newPrice.toFixed(2) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex justify-between flex-col sm:flex-row">
              <div
                class="mt-4 flex items-center justify-between text-sm text-gray-500"
              >
                <div class="flex items-center space-x-1">
                  <Icon icon="mdi:star" class="text-yellow-500 text-base" />
                  <span class="text-sm font-medium text-gray-700">{{
                    item.rating
                  }}</span>
                  <RouterLink
                    :to="`/review`"
                    class="text-sm ml-1 text-blue-600 hover:underline whitespace-nowrap font-semibold"
                  >
                    ({{ item.reviews }}) Reviews
                  </RouterLink>
                </div>
              </div>
              <div class="flex items-center py-1">
                <button
                  @click="handleAddToCart(item)"
                  class="flex items-center justify-center bg-primarysButton hover:bg-secondysButton text-white text-sm font-medium px-4 py-2 rounded-2xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-4"
                >
                  <Icon icon="mdi:cart-plus" class="w-5 h-5 mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import Watch from "../assets/img/watch.png";
import Fashion from "../assets/img/shirt.jfif";
import Laptop from "../assets/img/laptop.jfif";
import Phone from "../assets/img/xiaomi.jfif";
import Watch2 from "../assets/img/watch2.png";
import Fashion2 from "../assets/img/pants.jfif";
import Laptop2 from "../assets/img/laptop.jfif";
import Phone2 from "../assets/img/Oppo.jfif";
import { useToast } from "vue-toastification";
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
        subtitle:
          "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
        image: Watch,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
        reviews: 148,
        inStock: true,
        rating: 5,
        features: [
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "Stainless steel case",
          "2-year warranty",
        ],
        sizes: ["Small", "Medium", "Large"],
      },
      {
        id: 2,
        title: "Fashion",
        slug: "fashion-show",
        subtitle:
          "Latest trends in fashion. Elevate your style with our exclusive collection.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        inStock: false,
        tag: "fashion",
        reviews: 124,
        rating: 5,
        features: [
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
      },
      {
        id: 3,
        title: "Laptop",
        slug: "computer-laptop",
        subtitle:
          "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.9,
        discount: 41,
        inStock: true,
        tag: "laptop",
        reviews: 248,
        rating: 5,
        features: [
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
      },
      {
        id: 4,
        title: "Phone",
        slug: "phone",
        subtitle:
          "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        inStock: true,
        tag: "phone",
        reviews: 128,
        rating: 5,
        features: [
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
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
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
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
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
      },
      {
        id: 3,
        title: "Laptop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
        oldPrice: 3.27,
        newPrice: 1.9,
        discount: 41,
        inStock: true,
        tag: "laptop",
        reviews: 48,
        rating: 5,
        features: [
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
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
          "Swiss movement",
          "Sapphire crystal glass",
          "Water resistant up to 50m",
          "cotton blend fabric",
          "Breathable and lightweight",
        ],
        sizes: ["M", "XL", "XXL"],
      },
    ],
  },
];
import { useCartStore } from "../stores/useCartStore";
const cart = useCartStore();

function handleAddToCart(item) {
  cart.addToCart({
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: 1,
    shop_id: item.shop_id,             
    category_id: item.category_id,     
    total: item.price,
    category: item.tag,
  });
  toast.success(`${item.title} added to cart`);
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
