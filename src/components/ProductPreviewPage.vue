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
                                style="min-width:320px;min-height:320px;"
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
                                    ${{ product.newPrice }}
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
                                    <span class="inline-block w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                                    <span class="font-normal text-base text-gray-900">{{ feature }}</span>
                                </li>
                            </ul>
                            <p class="text-gray-900 text-lg leading-8 font-medium mb-4">Size</p>
                            <div class="w-full pb-8 border-b border-gray-100 flex-wrap">
                                <div class="flex gap-3 max-w-md">
                                    <button
                                        v-for="size in product.sizes"
                                        :key="size"
                                        :class="[
                                            'py-1.5 px-6 font-semibold text-lg rounded-full border transition-all duration-200',
                                            selectedSize === size
                                                ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                                                : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
                                        ]"
                                        @click="selectedSize = size"
                                    >
                                        {{ size }}
                                    </button>
                                </div>
                            </div>
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
                                    class="py-3 px-5 rounded-full bg-red-600 text-white font-semibold text-lg w-full flex items-center justify-center gap-2 shadow transition-all duration-300 hover:bg-red-700"
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
                                    <Icon icon="mdi:heart" class="h-6 w-6 text-gray-500 hover:text-indigo-600" />
                                </button>
                                <button class="text-center w-full px-5 py-4 rounded-xl bg-blue-500 hover:bg-blue-800 flex items-center justify-center font-semibold text-lg text-white shadow transition-all duration-300">
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
        </section>
    </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import Watch from '../assets/img/download (5).jfif';
const product =  {
    id: 1,
    title: "Watch",
    category: "Watches / Luxury",
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    discount: 19,
    tag: "watch",
    reviews: 1248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'Stainless steel case',
        '2-year warranty'
    ],
    sizes: ['Small', 'Medium', 'Large']
}


const selectedSize = ref(product.sizes[0])
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
