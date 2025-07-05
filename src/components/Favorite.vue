<template>
    <AppLayout>
    <section class="py-16 sm:py-24 bg-gradient-to-br from-gray-100 to-white min-h-screen">
        <div class="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <div class="p-4 sm:p-10 md:p-16 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-2xl sm:rounded-[2.5rem] border border-gray-200 ring-1 ring-gray-100 transition-all duration-500">
                <!-- Order History -->
                <h2 class="font-semibold text-2xl sm:text-3xl text-gray-900 tracking-tight mb-4 sm:mb-8 text-center">Your Favorites</h2>
                <p class="font-base text-sm text-gray-900 tracking-tight mb-6 sm:mb-8 text-center">These are the products you wish to purchase</p>
                <!-- Table Header (hidden on mobile) -->
                <div class="hidden lg:grid grid-cols-8 pb-6 border-b border-gray-200 mb-2">
                    <div class="col-span-4">
                        <p class="font-medium text-lg text-indigo-600">Product</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Price</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Stock Status</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Action</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Remove</p>
                    </div>
                </div>
                <!-- Card/List for mobile -->
                <div
                    v-for="order in orderHistorys"
                    :key="order.product + order.deliveryDate"
                    class="group box p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/80 shadow-xl grid grid-cols-1 lg:grid-cols-8 items-center mb-4 sm:mb-6 border border-gray-100 hover:shadow-2xl hover:bg-white/100 transition-all duration-300 ring-1 ring-gray-50"
                >
                    <!-- Product Image -->
                    <div class="flex items-center justify-center mb-3 lg:mb-0 col-span-1 lg:col-span-1">
                        <img
                            :src="order.image"
                            alt="product image"
                            class="w-20 h-20 sm:w-16 sm:h-16 rounded-xl object-cover shadow border border-gray-200 transition-all duration-300 group-hover:scale-105"
                        />
                    </div>
                    <!-- Product Info -->
                    <div class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-2 lg:mb-0 col-span-1 lg:col-span-3">
                        <h5 class="font-manrope font-semibold text-lg sm:text-xl text-gray-900 mb-0.5">{{ order.product }}</h5>
                        <p class="font-normal text-xs sm:text-sm text-gray-500">{{ order.color }}</p>
                    </div>
                    <!-- Price, Status, Action, Remove (mobile: stacked, desktop: grid) -->
                    <div class="flex flex-col gap-2 w-full lg:contents">
                        <!-- Price -->
                        <div class="flex items-center justify-between lg:justify-center col-span-1 lg:col-span-1">
                            <span class="block lg:hidden font-medium text-gray-500 text-xs mr-2">Price:</span>
                            <p class="font-semibold text-base sm:text-lg text-gray-900">{{ order.price }}</p>
                        </div>
                        <!-- Status -->
                        <div class="flex items-center justify-between lg:justify-center col-span-1 lg:col-span-1">
                            <span class="block lg:hidden font-medium text-gray-500 text-xs mr-2">Status:</span>
                            <span
                                class="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold text-xs shadow transition-all duration-300"
                                :class="{
                                    'bg-green-100 text-green-700': order.status === 'In Stock',
                                    'bg-red-100 text-red-700': order.status === 'Stock Out'
                                }"
                            >
                                <span
                                    class="w-2 h-2 rounded-full mr-1 sm:mr-2"
                                    :class="{
                                        'bg-green-500': order.status === 'In Stock',
                                        'bg-red-500': order.status === 'Stock Out'
                                    }"
                                ></span>
                                {{ order.status }}
                            </span>
                        </div>
                        <!-- Action -->
                        <div class="flex items-center justify-between lg:justify-center col-span-1 lg:col-span-1">
                            <span class="block lg:hidden font-medium text-gray-500 text-xs mr-2">Action:</span>
                            <button
                                class="font-semibold text-xs sm:text-sm rounded-full px-4 py-1 sm:p-2 text-gray-100"
                                :class="order.button === 'Add to Cart' ? 'bg-blue-600 hover:bg-blue-800' : 'bg-gray-700 hover:bg-gray-900'"
                            >
                                {{ order.button }}
                            </button>
                        </div>
                        <!-- Remove -->
                        <div class="flex items-center justify-between lg:justify-center col-span-1 lg:col-span-1 cursor-pointer">
                            <span class="block lg:hidden font-medium text-gray-500 text-xs mr-2">Remove:</span>
                            <Icon icon="mdi:delete" class="font-semibold text-base text-gray-700 hover:text-gray-900 h-5 w-5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </AppLayout>
</template>

<script setup>
import { ref } from 'vue';
import image from '../assets/img/1705474950.png'
import { Icon } from '@iconify/vue';
const orderHistorys = ref([
        {
                product: 'Apple Airpods Pro',
                color: 'White',
                price: '$249.99',
                button: 'Add to Cart',
                image: image,
                status: 'In Stock'
        },
        {
                product: 'Samsung Galaxy Buds',
                color: 'Black',
                price: '$199.99',
                button: 'Add to Cart',
                image: image,
                status: 'In Stock'
        },
        {
                product: 'Sony WH-1000XM4',
                color: 'Silver',
                price: '$349.99',
                button: 'Contact Us',
                image: image,
                status: 'Stock Out'
        }
]);
</script>

<style scoped>
@media (max-width: 639px) {
  .box {
    margin-bottom: 1.5rem;
  }
}
</style>