<template>
    <AppLayout>
        <section class="relative py-12 bg-[#f5f5f7] min-h-screen">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                    <!-- Product Image -->
                    <div class="img flex items-center justify-center">
                        <div class="h-full max-lg:mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                            <img
                                :src="product.image"
                                :alt="product.title"
                                class="max-lg:mx-auto lg:ml-auto h-full object-cover transition-transform duration-300 hover:scale-105"
                              
                            />
                        </div>
                    </div>
                    <!-- Product Data -->
                    <div class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div class="data w-full max-w-xl">
                            <p class="text-base font-medium leading-8 text-gray-500 mb-2 tracking-wide uppercase">
                                {{ product.category }}
                            </p>
                            <h2 class="font-sans font-bold text-4xl leading-tight text-gray-900 mb-3 capitalize tracking-tight">
                                {{ product.title }}
                            </h2>
                            <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                                <h6 class="font-semibold text-3xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                    zł {{ product.newPrice }}
                                </h6>
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center gap-1">
                                        <div v-for="i in 5" :key="i">
                                            <svg v-if="i <= product.rating" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#ffcc00"
                                                />
                                            </svg>
                                            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                    fill="#e5e7eb"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <span class="pl-2 font-normal leading-7 text-gray-500 text-sm">
                                        {{ product.reviews }} reviews
                                    </span>
                                </div>
                            </div>
                            <p class="text-gray-700 text-lg font-normal mb-5 leading-relaxed">
                                {{ product.subtitle }}
                            </p>
                            <ul class="grid gap-y-3 mb-8">
                                <li v-for="(feature, i) in product.features" :key="i" class="flex items-center gap-3">
                                    <span class="inline-block w-2.5 h-2.5 rounded-full bg-deepMaroon"></span>
                                    <span class="font-normal text-base text-gray-900">{{ feature }}</span>
                                </li>
                            </ul>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                                <div class="flex sm:items-center sm:justify-center w-full">
                                    <button
                                        class="py-3 px-5 border border-gray-300 rounded-l-full bg-white hover:bg-gray-100"
                                        @click="decrement"
                                    >
                                        <span class="text-xl font-bold text-gray-700">-</span>
                                    </button>
                                    <input
                                        type="text"
                                        class="font-semibold text-gray-900 text-lg py-2 px-6 w-20 text-center border-y border-gray-300 bg-transparent outline-none"
                                        :value="quantity"
                                        readonly
                                    />
                                    <button
                                        class="py-3 px-5 border border-gray-300 rounded-r-full bg-white hover:bg-gray-100"
                                        @click="increment"
                                    >
                                        <span class="text-xl font-bold text-gray-700">+</span>
                                    </button>
                                </div>
                                <button
                                @click="handleAddToCart(product)"
                                    class="py-3 px-5 rounded-full bg-deepMaroon hover:bg-[#7a3b49] text-white font-semibold text-lg w-full flex items-center justify-center gap-2 shadow transition-all duration-300"
                                >
                                    <Icon icon="mdi:cart" class="h-6 w-6" />
                                    Add to cart
                                </button>
                            </div>
                            <div class="flex items-center gap-3">
                                <button
                                    class="transition-all duration-300 p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-100"
                                    :class="{ 'ring-2 ring-indigo-400': wishlisted }"
                                    @click="wishlisted = !wishlisted"
                                >
                                    <Icon icon="mdi:heart" class="h-6 w-6 text-gray-500 hover:text-[#7a3b49]" />
                                </button>
                                <button class="text-center w-full px-5 py-4 rounded-xl bg-rose-800 hover:bg-rose-900 flex items-center justify-center font-semibold text-lg text-white shadow transition-all duration-300">
                                    Buy Now
                                </button>
                            </div>
                            <div class="mt-8 flex justify-center gap-2 opacity-70">
                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto py-24 relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl">
  <h2 class="font-sans font-semibold text-3xl sm:text-4xl text-gray-800 mb-10 text-center">Customer Reviews & Ratings</h2>
  <div class="grid grid-cols-12 gap-8 mb-14">
    <div class="col-span-12 xl:col-span-4 flex items-center">
      <div class="space-y-4 w-full max-w-xl mx-auto">
        <div class="flex items-center w-full space-x-3">
          <p class="text-gray-700 font-medium w-6 text-right">5</p>
          <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
          <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
            <div class="absolute top-0 left-0 h-full bg-pink-900 rounded-full" style="width: 30%;"></div>
          </div>
          <p class="text-gray-600 font-medium w-10 text-right">30</p>
        </div>
       <div class="flex items-center w-full space-x-3">
          <p class="text-gray-700 font-medium w-6 text-right">4</p>
          <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
          <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
            <div class="absolute top-0 left-0 h-full bg-pink-900 rounded-full" style="width: 65%;"></div>
          </div>
          <p class="text-gray-600 font-medium w-10 text-right">78</p>
        </div>
        <div class="flex items-center w-full space-x-3">
          <p class="text-gray-700 font-medium w-6 text-right">3</p>
          <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
          <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
            <div class="absolute top-0 left-0 h-full bg-pink-900 rounded-full" style="width: 25%;"></div>
          </div>
          <p class="text-gray-600 font-medium w-10 text-right">60</p>
        </div>
        <div class="flex items-center w-full space-x-3">
          <p class="text-gray-700 font-medium w-6 text-right">2</p>
          <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
          <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
            <div class="absolute top-0 left-0 h-full bg-pink-900 rounded-full" style="width: 20%;"></div>
          </div>
          <p class="text-gray-600 font-medium w-10 text-right">23</p>
        </div>
        <div class="flex items-center w-full space-x-3">
          <p class="text-gray-700 font-medium w-6 text-right">1</p>
          <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
          <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
            <div class="absolute top-0 left-0 h-full bg-pink-900 rounded-full" style="width: 10%;"></div>
          </div>
          <p class="text-gray-600 font-medium w-10 text-right">3</p>
        </div>
      </div>
    </div>
    <div class="col-span-12 xl:col-span-8 space-y-6 xl:pl-8">
      <div class="grid grid-cols-12 gap-4 bg-white/50 border border-gray-200 backdrop-blur-xl shadow-md rounded-2xl p-6">
        <div class="col-span-12 md:col-span-8 flex items-center justify-center">
          <div class="flex flex-col sm:flex-row justify-center w-full">
            <div class="border-r border-gray-300 pr-6 text-center">
              <h2 class="text-5xl font-bold text-gray-800 mb-2">4.3</h2>
              <div class="flex justify-center mb-2">
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star-outline" class="w-5 h-5 text-yellow-500" />
              </div>
              <p class="text-gray-500 text-sm">{{ product.ratting }} Ratings</p>
            </div>
            <div class="pl-6 text-center">
              <h2 class="text-5xl font-bold text-gray-800 mb-2">{{ product.reviews }}</h2>
              <div class="flex justify-center mb-2">
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                <Icon icon="mdi:star-outline" class="w-5 h-5 text-yellow-500" />
              </div>
              <p class="text-gray-500 text-sm">Last Month</p>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 flex flex-col justify-center items-center space-y-3 mt-6 md:mt-0">
          <fwb-button @click="showModal" class="w-full py-3 px-6 rounded-full bg-pink-900 text-white font-semibold shadow hover:bg-pink-800 transition-all">Write A Review</fwb-button>
          <fwb-modal
  v-if="isShowModal"
  @close="closeModal"
  class="!p-0 !bg-white/80 backdrop-blur-xl border border-gray-300 shadow-2xl rounded-2xl overflow-hidden max-w-lg w-full transition-all duration-300 z-[9999]"
>
  <template #header>
    <div class="w-full px-6 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md flex justify-between items-center">
      <h3 class="text-gray-800 font-semibold text-lg">Write a Review</h3>
      <button @click="closeModal" class="text-gray-500 hover:text-gray-700 transition">
        <Icon icon="mdi:close" class="w-5 h-5" />
      </button>
    </div>
  </template>

  <template #body>
    <div class="px-6 py-5 text-gray-700 text-base space-y-3">
      <p class="leading-relaxed">
        Please share your experience with this product. Your feedback helps others make better choices.
      </p>
      <textarea
        class="w-full h-32 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-900 resize-none bg-white/90 backdrop-blur-sm"
        placeholder="Write your review..."
      ></textarea>
    </div>
  </template>

  <template #footer>
    <div class="flex justify-end gap-3 px-6 py-4 bg-white/70 backdrop-blur-md border-t border-gray-200">
      <fwb-button @click="closeModal" color="alternative" class="rounded-full px-6 py-2 text-gray-700 hover:text-black transition">
        Cancel
      </fwb-button>
      <fwb-button @click="closeModal" class="rounded-full bg-pink-900 hover:bg-pink-800 text-white px-6 py-2">
        Submit Review
      </fwb-button>
    </div>
  </template>
</fwb-modal>
         <RouterLink class="w-full py-3 px-1" to="/review">
             <button class="w-full py-3 px-6 rounded-full bg-white text-pink-900 border border-pink-900 font-semibold hover:bg-pink-900 hover:text-white transition-all">See All Reviews</button>
         </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-12 border-b border-gray-200 pb-8 max-w-3xl mx-auto">
    <h4 class="text-2xl font-semibold text-gray-800 mb-4">Most Helpful Positive Review</h4>
    <div class="flex justify-between flex-col sm:flex-row text-sm text-gray-600 mb-2">
      <div class="flex gap-1 items-center">
        <Icon icon="mdi:star" class="text-yellow-500" />
        <Icon icon="mdi:star" class="text-yellow-500" />
        <Icon icon="mdi:star" class="text-yellow-500" />
        <Icon icon="mdi:star" class="text-yellow-500" />
        <Icon icon="mdi:star-outline" class="text-yellow-500" />
      </div>
      <div class="flex gap-2 items-center">
        <span class="font-medium">john@gmail.com</span>
        <span>|</span>
        <span class="text-gray-400">Nov 01, 2023</span>
      </div>
    </div>
    <p class="text-gray-600 leading-7">
      I recently had the opportunity to explore Pagedone's UI design system, and it left a lasting impression on my workflow...
    </p>
  </div>
  <div class="space-y-8 max-w-3xl mx-auto">
    <div class="border-b border-gray-200 pb-6">
      <div class="flex justify-between flex-col sm:flex-row text-sm text-gray-600 mb-2">
        <div class="flex gap-1 items-center">
          <Icon icon="mdi:star" class="text-yellow-500" />
          <Icon icon="mdi:star" class="text-yellow-500" />
          <Icon icon="mdi:star" class="text-yellow-500" />
          <Icon icon="mdi:star" class="text-yellow-500" />
          <Icon icon="mdi:star-half-full" class="text-yellow-500" />
        </div>
        <div class="flex gap-2 items-center">
          <span class="font-medium">sara@live.com</span>
          <span>|</span>
          <span class="text-gray-400">Oct 18, 2023</span>
        </div>
      </div>
      <p class="text-gray-600">The design is intuitive and easy to use...</p>
    </div>
  </div>
</div>
    </section>
    </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/useProductStore'
import { useToast } from 'vue-toastification';
import { useCartStore } from '@/stores/useCartStore'
import { FwbButton, FwbModal } from 'flowbite-vue'

const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}
const route = useRoute();
const productStore = useProductStore()
const cart = useCartStore()
const toast  = useToast();
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
const product = computed(() => productStore.getProductBySlug(route.params.slug))

const quantity = ref(1)
const wishlisted = ref(false)

function increment() {
    quantity.value++
}
function decrement() {
    if (quantity.value > 1) quantity.value--
}
</script>

<style scoped>

input[readonly]::-webkit-input-placeholder {
    color: #111;
    opacity: 1;
}
</style>
