<template>
    <AppLayout>
    <section class="py-24 bg-gradient-to-br from-gray-100 to-white min-h-screen">
        <div class="w-full max-w-8xl mx-auto px-4 md:px-8">
            <div class="p-4 sm:p-10 md:p-16 bg-white/90 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] border border-gray-200 ring-1 ring-gray-100 transition-all duration-500">
                <!-- Profile Card -->
                <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
                    <img
                        src="../assets/img/dog.png"
                        alt="user-avatar-image"
                        class="border-4 border-white rounded-2xl object-cover h-24 w-24 sm:h-36 sm:w-36 shadow-xl transition-all"
                    />
                    <div class="flex-1 text-center sm:text-left">
                        <h3 class="font-manrope font-bold text-2xl sm:text-4xl text-gray-900 mb-1">Doggy Boy</h3>
                        <p class="font-normal text-base text-gray-500 mb-2">Malibhagh<br>New York, United States</p>
                        <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
                            <span class="rounded-full py-1.5 px-4 bg-gray-100 text-gray-700 font-medium text-xs shadow hover:bg-gray-200 transition">Profile</span>
                            <span class="rounded-full py-1.5 px-4 bg-gray-100 text-gray-700 font-medium text-xs shadow hover:bg-gray-200 transition">Edit Order</span>
                            <span class="rounded-full py-1.5 px-4 bg-gray-100 text-gray-700 font-medium text-xs shadow hover:bg-gray-200 transition">View Details</span>
                        </div>
                    </div>
                    <button
                        class="mt-4 sm:mt-0 py-3 px-6 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 shadow-lg text-white font-semibold text-base transition-all duration-300 hover:from-indigo-600 hover:to-blue-600 active:scale-95"
                    >
                        <span class="flex items-center gap-2">
                            <Icon class="h-5 w-5" icon="mdi:invoice-text"/>
                            Invoice
                        </span>
                    </button>
                </div>
                <!-- Order History -->
                <h2 class="font-semibold text-2xl sm:text-3xl text-gray-900 tracking-tight mb-6 sm:mb-8">Order History</h2>
                <!-- Table Header (hidden on mobile) -->
                <div class="hidden lg:grid grid-cols-10 pb-6 border-b border-gray-200 mb-2">
                    <div class="col-span-1 flex items-center justify-center"></div>
                    <div class="col-span-3">
                        <p class="font-medium text-lg text-indigo-600">Product</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Price</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Qty</p>
                    </div>
                    <div class="col-span-2 text-center">
                        <p class="font-medium text-lg text-gray-600">Payment</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Delivery Date</p>
                    </div>
                    <div class="col-span-1 text-center">
                        <p class="font-medium text-lg text-gray-600">Status</p>
                    </div>
                </div>
                <!-- Order Cards -->
                <div
                    v-for="order in orderHistorys"
                    :key="order.product + order.deliveryDate"
                    class="group box p-4 sm:p-6 rounded-2xl bg-white/80 shadow-xl mb-6 border border-gray-100 hover:shadow-2xl hover:bg-white/100 transition-all duration-300 ring-1 ring-gray-50
                        grid grid-cols-1 lg:grid-cols-10 gap-y-4 lg:gap-0 items-center"
                >
                    <!-- Mobile Card Layout -->
                    <div class="flex flex-col gap-3 lg:hidden">
                        <div class="flex items-center gap-4">
                            <img
                                :src="order.image"
                                alt="product image"
                                class="w-16 h-16 rounded-xl object-cover shadow border border-gray-200 transition-all duration-300 group-hover:scale-105"
                            />
                            <div>
                                <h5 class="font-manrope font-semibold text-lg text-gray-900 mb-0.5">{{ order.product }}</h5>
                                <p class="font-normal text-sm text-gray-500">{{ order.color }}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 text-sm mt-2">
                            <div class="flex-1">
                                <span class="font-semibold text-gray-700">Price:</span>
                                <span class="text-gray-900">{{ order.price }}</span>
                            </div>
                            <div class="flex-1">
                                <span class="font-semibold text-gray-700">Qty:</span>
                                <span class="text-indigo-600">{{ order.quantity }}</span>
                            </div>
                            <div class="flex-1">
                                <span class="font-semibold text-gray-700">Payment:</span>
                                <span class="text-gray-900">{{ order.paymentMethod }}</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 text-sm">
                            <div class="flex-1">
                                <span class="font-semibold text-gray-700">Delivery:</span>
                                <span class="text-gray-900">{{ order.deliveryDate }}</span>
                            </div>
                            <div class="flex-1">
                                <span class="font-semibold text-gray-700">Status:</span>
                                <span
                                    class="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs shadow transition-all duration-300"
                                    :class="{
                                        'bg-green-100 text-green-700': order.status === 'Success',
                                        'bg-yellow-100 text-yellow-700': order.status === 'Pending',
                                        'bg-red-100 text-red-700': order.status === 'Failed'
                                    }"
                                >
                                    <span
                                        class="w-2 h-2 rounded-full mr-2"
                                        :class="{
                                            'bg-green-500': order.status === 'Success',
                                            'bg-yellow-400': order.status === 'Pending',
                                            'bg-red-500': order.status === 'Failed'
                                        }"
                                    ></span>
                                    {{ order.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- Desktop Table Layout -->
                    <template v-if="false"></template>
                    <div class="hidden lg:flex col-span-1 items-center justify-center">
                        <img
                            :src="order.image"
                            alt="product image"
                            class="w-16 h-16 rounded-xl object-cover shadow border border-gray-200 transition-all duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div class="hidden lg:flex col-span-3 flex-col justify-center pl-0 lg:pl-4 items-center lg:items-start text-center lg:text-left">
                        <h5 class="font-manrope font-semibold text-xl text-gray-900 mb-0.5">{{ order.product }}</h5>
                        <p class="font-normal text-sm text-gray-500">{{ order.color }}</p>
                    </div>
                    <div class="hidden lg:flex col-span-1 items-center justify-center">
                        <p class="font-semibold text-lg text-gray-900">{{ order.price }}</p>
                    </div>
                    <div class="hidden lg:flex col-span-1 items-center justify-center">
                        <p class="font-semibold text-lg text-indigo-600">{{ order.quantity }}</p>
                    </div>
                    <div class="hidden lg:flex col-span-2 items-center justify-center">
                        <p class="font-semibold text-base text-gray-900">{{ order.paymentMethod }}</p>
                    </div>
                    <div class="hidden lg:flex col-span-1 items-center justify-center">
                        <p class="font-semibold text-base text-gray-900">{{ order.deliveryDate }}</p>
                    </div>
                    <div class="hidden lg:flex col-span-1 items-center justify-center">
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs shadow transition-all duration-300"
                            :class="{
                                'bg-green-100 text-green-700': order.status === 'Success',
                                'bg-yellow-100 text-yellow-700': order.status === 'Pending',
                                'bg-red-100 text-red-700': order.status === 'Failed'
                            }"
                        >
                            <span
                                class="w-2 h-2 rounded-full mr-2"
                                :class="{
                                    'bg-green-500': order.status === 'Success',
                                    'bg-yellow-400': order.status === 'Pending',
                                    'bg-red-500': order.status === 'Failed'
                                }"
                            ></span>
                            {{ order.status }}
                        </span>
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
                quantity: 2,
                paymentMethod: 'Bkash',
                deliveryDate: '23-03-2023',
                image: image,
                status: 'Success'
        },
        {
                product: 'Samsung Galaxy Buds',
                color: 'Black',
                price: '$199.99',
                quantity: 1,
                paymentMethod: 'Card',
                deliveryDate: '23-03-2023',
                image: image,
                status: 'Pending'
        },
        {
                product: 'Sony WH-1000XM4',
                color: 'Silver',
                price: '$349.99',
                quantity: 3,
                paymentMethod: 'Cash on Delivery',
                deliveryDate: '23-03-2023',
                image: image,
                status: 'Failed'
        }
]);
</script>

<style scoped>
@media (max-width: 1023px) {
  .box + .box {
    margin-top: 1.5rem;
  }
}
</style>