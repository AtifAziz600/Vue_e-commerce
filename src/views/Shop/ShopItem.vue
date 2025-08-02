<template>
  <AppLayout>
    <div class="pt-4">
      <div class="md:pt-10 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-sm">
        <div class="text-gray-700 text-base font-medium">
          <p class="text-center">{{ products?.length }} results</p>
        </div>
        <div class="flex items-center gap-3">
          <label for="sort-by" class="text-gray-700 text-base font-normal">Sort by:</label>
          <div class="relative w-40">
            <select
              class="block w-full px-3 py-2 text-sm md:text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 cursor-pointer">
              <option value="price_low_to_high">Price: Low to High</option>
              <option value="price_high_to_low">Price: High to Low</option>
              <option value="avg_customer_review">Avg. Customer Review</option>
              <option value="newest_arrival">Newest Arrivals</option>
              <option value="best_seller">Best Seller</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-72 rounded-md overflow-hidden mb-5">

      <img :src="shop?.banner_url" class="w-full h-full" />
    </div>
    <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div v-for="i in 5" :key="i" class="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
        <div class="bg-gray-200 h-48 w-full"></div>
        <div class="p-4 space-y-2">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-3 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
    <section class="md:flex md:justify-between md:items-start px-4 md:px-0">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div class="flex items-center mb-4">
          <img :src="shop?.logo_url" alt="Shop logo" class="w-16 h-16 rounded-full mr-4">
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              {{ shop?.name }}
            </h2>
            <p class="text-sm text-gray-600">{{ shop?.bio }}</p>
          </div>
        </div>

        <div class="mb-12">
          <div v-if="products && products.length > 0" class="grid grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-2">
            <div v-for="item in products" :key="item.id"
              class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <RouterLink :to="`/product/${item?.slug}`"
                class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-48 flex items-center justify-center rounded-t-xl overflow-hidden">
                <img :src="item?.cover_image_url" alt="product"
                  class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                <span v-if="item.discount_price && item.price"
                  class="absolute top-3 left-3 bg-discountColor text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {{ calculateDiscountPercentage(item.price, item.discount_price) }}%
                </span>
              </RouterLink>
              <div class="flex-1 flex flex-col p-5">
                <h3 class="text-lg font-semibold text-gray-900 truncate mb-1">
                  {{ item?.title }}
                </h3>
                <div class="flex items-baseline gap-2 mb-3 sm:mb-4 flex-wrap">
                  <span v-if="item.price && item.discount_price" class="text-xs sm:text-sm line-through text-gray-400">
                    zł{{ item.price }}
                  </span>
                  <span class="text-base sm:text-xl text-red-700 font-bold">
                    zł{{ item.discount_price || item.price }}
                  </span>
                </div>

                <div
                  class="border-gray-100 mt-auto pt-3 border-t flex justify-center items-center gap-4 flex-col sm:flex-row">
                  <button @click="handleBuyNow(item)"
                    class="flex items-center justify-center gap-2 bg-black text-white text-xs font-semibold px-2 py-1.5 rounded-lg shadow hover:bg-blue-950 hover:border-blue-950 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-950">
                    <Icon icon="mdi:credit-card-check" class="h-5 w-5" />
                    <span>Buy Now</span>
                  </button>
                  <button @click="handleAddToCart(item)"
                    class="flex items-center justify-center gap-2 bg-primarysButton hover:bg-secondysButton text-white text-xs font-semibold px-2 py-1.5 rounded-lg shadow hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400">
                    <Icon icon="mdi:cart" class="h-5 w-5" />
                    <span>Add Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-10">
            <p class="text-gray-500">No products found in this shop.</p>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import Icon from "@/components/Icon.vue";
import { useToast } from "vue-toastification";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useAxios from "@/composables/useAxios.js";

const toast = useToast();
const router = useRouter();
const route = useRoute();
const shop = ref(null);
const products = ref([]);
const { loading, sendRequest } = useAxios();

async function fetchShopWithProducts() {
  try {
    const res = await sendRequest({
      url: `shop/${route.params.slug}`,
      method: "GET",
    });
    shop.value = res.data;
    products.value = res.data.products || [];
  } catch (error) {
    console.error("Error fetching shop data:", error);
    toast.error("Failed to load shop data");
  }
}

function calculateDiscountPercentage(originalPrice, discountedPrice) {
  if (!originalPrice || !discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

onMounted(() => {
  fetchShopWithProducts();
});

import { useCartStore } from "../../stores/useCartStore";
const cart = useCartStore();

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
    category_id: 1,
    total: item.price,
    category: item.tag,
  });
  toast.success(`${item.title} added to cart`);
}
function handleBuyNow(item) {
  const checkoutProduct = {
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
  };
  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  toast.success(`${item.title} is bought`)
  router.push("/checkout");
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