<template>
  <AppLayout>
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto mt-8">
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-3xl font-semibold text-gray-900">Your Wishlist</h1>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-500">{{ wishlistStore.getWishlistLength }} items</span>
            <button 
              @click="clearWishlist"
              class="text-sm text-deepMaroon hover:text-secondysButton transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <div 
          v-if="wishlistStore.getWishlistLength === 0"
          class="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100"
        >
        <Icon class="h-16 w-16 mx-auto text-gray-300" icon="mdi:basket"/>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Your wishlist is empty</h3>
          <p class="mt-1 text-gray-500">Start adding items you love</p>
          <button 
            @click="$router.push('/')"
            class="mt-6 px-4 py-2 bg-deepMaroon text-white rounded-full text-sm font-medium hover:bg-secondysButton transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        <div v-else class="grid grid-cols-1 gap-6">
          <div 
            v-for="item in wishlistStore.getWishlistItems"
            :key="item?.id"
            class="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/4 p-4 flex items-center justify-center bg-gray-50">
                <img 
                  :src="item?.cover_image_url" 
                  :alt="item?.title"
                  class="h-48 w-full object-contain hover:scale-105 transition-transform"
                />
              </div>

              <div class="md:w-2/4 p-6 flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">{{ item?.title }}</h3>
                  <div class="flex items-center mb-2">
                    <div class="flex items-center">
                      <svg v-for="i in 5" :key="i" class="h-4 w-4" :class="i <= item?.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-xs text-gray-500 ml-1">({{ item?.reviews || 0 }} reviews)</span>
                  </div>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ item?.description }}</p>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-lg font-bold text-gray-900">${{ item?.price }}</span>
                    <span v-if="item?.discount_price" class="ml-2 text-sm text-gray-500 line-through">${{ item?.discount_price }}</span>
                  </div>
                </div>
              </div>

              <div class="md:w-1/4 p-6 border-l border-gray-100 flex flex-col justify-between">
                <div class="flex justify-end">
                  <button 
                    @click="wishlistStore.removeFromWishlist(item?.id)"
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div class="space-y-3">
                  <button
                    @click="handleAddToCart(item)"
                    class="w-full flex items-center justify-center px-4 py-2 bg-deepMaroon text-white rounded-full text-sm font-medium hover:bg-secondysButton transition-colors"
                  >
                  <Icon icon="mdi:basket" class="h-4 w-4 mr-2 text-white"/>
                    Add to Cart
                  </button>
                  <button
                    @click="handleBuyNow(item)"
                    class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import { useWishlistStore } from "@/stores/useWishlistStore.js";
import { useCartStore } from '@/stores/useCartStore.js';
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import { Icon } from "@iconify/vue";
import { useApiProductStore } from "../../stores/useApiProductStore";
import { useSingleProductStore } from "../../stores/useSingleProductStore";
import RelatedProduct from "@/components/RelatedProduct.vue";
import { computed } from "vue";
const singleProductStore = useSingleProductStore();
const router = useRouter();
const wishlistStore = useWishlistStore();
const productApiStore = useApiProductStore();
const toast = useToast();
const cart = useCartStore();
const product = computed(() => singleProductStore.product);
const relatedProducts = computed(() => {
  return productApiStore.products
    .filter(p => p.category_id === product.value?.category_id && p.id !== product.value?.id)
    .slice(0, 4);
});
function clearWishlist() {
  wishlistStore.clearWishlist();
}

function handleAddToCart(item) {
  if (!item) {
    toast.error("Product not found");
    return;
  }

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
    quantity: 1,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: item.price,
    category: item.tag,
  });
  
  toast.success(`${item.title} added to cart`);
}

function handleBuyNow(item) {
  if (!item) {
    toast.error("Product not found");
    return;
  }

  const checkoutProduct = {
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: 1,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: item.price,
    category: item.tag,
  };
  
  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  router.push("/checkout");
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-shadow {
  transition: box-shadow 0.2s ease-in-out;
}

.transition-transform {
  transition: transform 0.2s ease-in-out;
}

.rounded-xl {
  border-radius: 12px;
}
</style>