<template>
  <div class="w-full mx-auto px-1 sm:px-1 lg:px-2 py-4 bg-gray-100">
    <div class="mb-8 text-center">
      <h2
        class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight"
      >
        Latest Product
      </h2>
      <p class="text-md md:text-lg text-gray-600 font-light">
        Discover our top picks, and all the products that were featured
      </p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-2">
      <div
        v-for="item in productApiStore.products.slice(0, 8)"
        :key="item.id"
        class="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white group border border-gray-100 hover:border-red-200"
      >
        <RouterLink
          :to="`/product/${item.slug}`"
          class="block w-full aspect-[16/9] bg-gray-50 flex items-center justify-center overflow-hidden"
        >
          <img
            :src="item.cover_image_url"
            :alt="item.title"
            class="w-full h-full object-fit transform group-hover:scale-105 transition-transform duration-300 p-2"
          />
          <span
            v-if="item.discount_price"
            class="absolute top-3 left-3 bg-discountColor text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
          >
            -32%
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
                <span class="text-sm line-through text-gray-400 gap-2">
                  zł {{ item.price }}
                </span>
                <span class="text-base sm:text-lg text-red-600 font-bold">
                  zł {{ item.discount_price }}
                </span>
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
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import { useApiProductStore } from "../../stores/useApiProductStore";
import { useCartStore } from "../../stores/useCartStore";
import { useRouter, useRoute } from "vue-router";
// import axios from "axios";
const toast = useToast();
const cart = useCartStore();
// const products = ref([]);
const productApiStore = useApiProductStore();

onMounted(async () => {
  await productApiStore.fetchProducts();
});

function handleAddToCart(item) {
      const existingCartItems = cart.cartItems; 
  if (existingCartItems.length > 0) {
    const existingVendorId = existingCartItems[0].shop_id;
    if (existingVendorId !== item.shop_id) {
      toast.error("You can only order from one vendor at a time.");
      return;
    }
  }
  cart.addToCart({
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: item.quantity,
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
