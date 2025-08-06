<template>
  <AppLayout>
    <section class="relative py-12 bg-gray-50 min-h-screen">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div class="space-y-4">
            <div class="relative rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 aspect-square">
              <img
                :src="product?.cover_image_url"
                :alt="product?.title"
                class="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
              <div v-if="product?.discount_percentage" class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                -{{ product.discount_percentage }}%
              </div>
            </div>
            <div class="grid grid-cols-4 gap-3">
              <div v-for="(image, index) in product?.images" :key="index" class="cursor-pointer border rounded-lg overflow-hidden bg-white aspect-square">
                <img :src="image" :alt="`${product?.title} thumbnail ${index}`" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="lg:sticky lg:top-24 self-start">
            <div class="space-y-6">
              <div>
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900">{{ product?.title }}</h1>
                <div class="flex items-center mt-2 space-x-4">
                  <div class="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-sm font-medium ml-1">{{ product?.rating }}</span>
                    <span class="text-gray-500 text-sm ml-1">({{ product?.reviews }} reviews)</span>
                  </div>
                  <span class="text-sm text-green-600 font-medium">In Stock</span>
                </div>
              </div>

              <div class="space-y-2">
                <p class="text-gray-700">{{ product?.description }}</p>
                <p class="text-gray-500 text-sm">SKU: {{ product?.sku || 'N/A' }}</p>
              </div>

              <div class="flex items-center space-x-4">
                <div class="text-3xl font-bold text-gray-900">zł {{ product?.discount_price }}</div>
                <div v-if="product?.price !== product?.discount_price" class="text-xl text-gray-500 line-through">zł {{ product?.price }}</div>
              </div>

                <div v-if="product?.key_features" class="border-t border-b border-gray-200 py-4">
                <h3 class="font-medium text-lg mb-2">Key Features</h3>
                <ul class="space-y-2">
                  <li v-for="(feature, i) in parseKeyFeatures(product.key_features)" :key="i" class="flex items-start">
                    <Icon icon="mdi:check-circle" class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ feature.name || 'N/A' }}</span>
                  </li>
                </ul>
              </div>

              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center border border-gray-300 rounded-full">
                    <button @click="decrement" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <input type="text" :value="quantity" readonly class="w-12 text-center border-t border-b border-gray-300 py-2 bg-transparent focus:outline-none" />
                    <button @click="increment" class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <button
                    @click="handleAddToCart(product)"
                    class="flex-1 bg-deepMaroon hover:bg-secondysButton text-white px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Icon icon="mdi:cart" class="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div class="flex space-x-4">
                  <button
                    @click="wishlistStore.addToWishlist(product)"
                    class="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    :class="{ 'bg-red-50 border-red-200': wishlisted }"
                  >
                    <Icon
                      icon="mdi:heart"
                      class="h-6 w-6"
                      :class="wishlisted ? 'text-red-500' : 'text-gray-500'"
                    />
                  </button>
                  <button
                    @click="handleBuyNow(product)"
                    class="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg">
                <div class="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h4 class="font-medium text-gray-900">Secure Payment</h4>
                    <p class="text-sm text-gray-600 mt-1">All transactions are secure and encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <div class="border-b border-gray-200">
            <nav class="flex space-x-8">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[activeTab === tab.id ? 'border-deepMaroon text-deepMaroon' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
              >
                {{ tab.name }}
              </button>
            </nav>
          </div>

          <div class="py-6">
            <div v-show="activeTab === 'description'">
              <div class="prose max-w-none" v-html="product?.description"></div>
            </div>

            <div v-show="activeTab === 'specifications'" class="space-y-4">
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(spec, key) in product?.specifications" :key="key">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">{{ key }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ spec }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-show="activeTab === 'reviews'" class="space-y-8">
              <GiveReview :product-id="product?.id" />
              <div v-if="product?.reviews && product.reviews.length > 0">
                <div v-for="review in product.reviews" :key="review.id" class="border-b border-gray-200 pb-6 last:border-0">
                  <div class="flex items-center space-x-3">
                    <div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span class="text-gray-600">{{ review.user_name.charAt(0).toUpperCase() }}</span>
                    </div>
                    <div>
                      <h4 class="font-medium">{{ review.user_name }}</h4>
                      <div class="flex items-center">
                        <div class="flex">
                          <svg v-for="i in 5" :key="i" class="h-4 w-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span class="text-xs text-gray-500 ml-2">{{ formatDate(review.created_at) }}</span>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2 text-gray-700">{{ review.comment }}</p>
                </div>
              </div>
              <div v-else class="text-center py-8 text-gray-500">
                No reviews yet. Be the first to review!
              </div>
            </div>

            <div v-show="activeTab === 'shipping'" class="prose max-w-none" v-html="product?.shipping_return"></div>
          </div>
        </div>


        <div class="mt-16">
          <h3 class="text-2xl font-bold mb-6">You may also like</h3>
          <div class="w-full h-full">
            <RelatedProduct :data="relatedProducts" />
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useCartStore } from "@/stores/useCartStore";
import { Icon } from "@iconify/vue";
import { useWishlistStore } from "@/stores/useWishlistStore.js";
import { useApiProductStore } from "../stores/useApiProductStore";
import { useSingleProductStore } from "../stores/useSingleProductStore";
import GiveReview from "@/views/Review/GiveReview.vue";
import RelatedProduct from "./RelatedProduct.vue";
const route = useRoute();
const router = useRouter();
const toast = useToast();
const cart = useCartStore();
const productApiStore = useApiProductStore();
const singleProductStore = useSingleProductStore();
const wishlistStore = useWishlistStore();
const quantity = ref(1);
const activeTab = ref('description');
const tabs = [
  { id: 'description', name: 'Description' },
  { id: 'specifications', name: 'Specifications' },
  { id: 'reviews', name: 'Reviews' },
  { id: 'shipping', name: 'Shipping & Returns' }
];

const product = computed(() => singleProductStore.product);
const relatedProducts = computed(() => {
  return productApiStore.products
    .filter(p => p.category_id === product.value?.category_id && p.id !== product.value?.id)
    .slice(0, 4);
});

function increment() {
  quantity.value++;
}

function decrement() {
  if (quantity.value > 1) quantity.value--;
}

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
    price: item.discount_price || item.price,
    quantity: quantity.value,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: (item.discount_price || item.price) * quantity.value,
    category: item.tag,
  shipping_charge: item.shop?.shipping_charge || 0,
  shipping_charge2: item.shop?.shipping_charge2 || 0,
  });
  
  toast.success(`${item.title} added to cart`);
}

function handleBuyNow(item) {
  const checkoutProduct = {
    id: item.id, 
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.discount_price || item.price,
    quantity: quantity.value,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: (item.discount_price || item.price) * quantity.value,
    category: item.tag,
      shipping_charge: item.shop?.shipping_charge || 0,
  shipping_charge2: item.shop?.shipping_charge2 || 0,
  };
  
  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  toast.success(`${item.title} is bought`);
  router.push("/checkout");
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

onMounted(async () => {
  await Promise.all([
    productApiStore.fetchProducts(),
    singleProductStore.fetchProductBySlug(route.params.slug)
  ]);
});
</script>

<style scoped>
.prose :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.prose :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.prose :deep(th) {
  background-color: #f3f4f6;
  text-align: left;
  padding: 0.75rem;
  font-weight: 600;
}

.prose :deep(td) {
  padding: 0.75rem;
  border-top: 1px solid #e5e7eb;
}
</style>