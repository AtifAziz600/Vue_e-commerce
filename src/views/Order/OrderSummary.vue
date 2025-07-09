<template>
    <AppLayout>
    <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <div class="flex items-start flex-col gap-6 xl:flex-row ">
                
                <div class="w-full max-w-full md:max-w-full xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
                    <div class="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
                            Order Summary
                        </h2>
                        <div class="data py-6 border-b border-gray-200">
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Product Cost</p>
                                <p class="font-medium text-lg leading-8 text-gray-900">${{ total.toFixed(2) }}</p>
                            </div>
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Shipping</p>
                                <p class="font-medium text-lg leading-8 text-gray-600">${{ shippingCost.toFixed(2) }}</p>
                            </div>
                            <div class="flex items-center justify-between gap-4 ">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">Coupon Code</p>
                                <p class="font-normal text-lg leading-8 text-blue-400 transition-all duration-500 group-hover:text-blue-700">{{ promoCode }}</p>
                                <p class="font-medium text-lg leading-8 text-emerald-500">{{ couponCode?.value }}</p>
                            </div>
                        </div>
                        <div class="total flex items-center justify-between pt-6">
                            <p class="font-normal text-xl leading-8 text-black ">Subtotal</p>
                            <h5 class="font-manrope font-bold text-2xl leading-9 text-indigo-600">${{ subtotal.toFixed(2) }}</h5>
                        </div>
                    </div>
                </div>
              
                <div v-for="product in products" :key="product.id">
  <div class="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 max-w-full md:max-w-3xl mx-auto">
    <div class="img-box">
      <img :src="product.image" :alt="product.title" class="w-full md:max-w-[122px] rounded-lg object-cover" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
      <div>
        <h2 class="font-medium text-xl leading-8 text-black mb-3">{{ product.title }}</h2>
        <p class="font-normal text-lg leading-8 text-gray-500">Quantity: {{ product.qty }}</p>
      </div>
      <div class="flex items-center justify-between gap-8">
        <h6 class="font-medium text-xl leading-8 text-indigo-600">zł {{ product.total.toFixed(2) }}</h6>
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
import { useOrderStore } from '../../stores/useStoreOrder';
import { computed } from 'vue';

const order = useOrderStore();

const shippingCost = computed(() => order.shipping);
const subtotal = computed(() => order.subtotal);
const products = computed(() => order.orderItems);
const promoCode = computed(() => order.promoCode);
const couponCode = computed(() => order.couponCode);
const total = computed(() => order.total);

</script>

