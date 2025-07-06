<template>
    <AppLayout>
    <section class="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12">
        <div class="w-full max-w-7xl px-2 sm:px-4 md:px-8 mx-auto relative z-10">
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-8">
                <!-- Cart Items -->
                <div class="col-span-1 xl:col-span-8 pt-8 pb-6 md:py-16 w-full max-xl:max-w-8xl max-xl:mx-auto sm:px-4 px-2">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-200 gap-2">
                        <h2 class="font-semibold text-2xl sm:text-3xl text-gray-900 tracking-tight">Shopping Cart</h2>
                        <h2 class="font-medium text-lg sm:text-xl text-gray-500">{{ cartItems.length }} Items</h2>
                    </div>
                    <div class="hidden md:grid grid-cols-12 mt-8 pb-6 border-b border-gray-100">
  <div class="col-span-12 md:col-span-7">
    <p class="font-normal text-lg text-gray-600">Product Details</p>
  </div>
  <div class="col-span-12 md:col-span-5">
    <div class="grid grid-cols-5">
        <div class="col-span-2">
          <p class="font-normal text-lg text-gray-600 text-center">Price</p>
        </div>
      <div class="col-span-2">
        <p class="font-normal text-lg text-gray-600 text-center">Quantity</p>
      </div>
      <div class="col-span-1">
        <p class="font-normal text-lg text-gray-600 text-center">Total</p>
      </div>
    </div>
  </div>
</div>

                    <div
                        v-for="item in cartItems"
                        :key="item.id"
                        class="flex flex-col md:flex-row items-stretch gap-4 py-4 border-b border-gray-100 group bg-white/90 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 mb-3"
                    >
                        <!-- Image -->
                        <div class="flex-shrink-0 flex items-center justify-center md:w-28 w-full">
                            <img
                                :src="item.image"
                                :alt="item.title"
                                class="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover border border-gray-200 shadow"
                            />
                        </div>
                        <!-- Details -->
                        <div class="flex flex-1 flex-col md:flex-row md:items-center w-full max-w-8xl gap-2">
                            <div class="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left">
                                <!--why item.title is not showing-->
                                <h6 class="font-semibold text-lg text-gray-900 truncate">{{ item.title }}</h6>
                                <span class="text-sm text-gray-500 mt-1">{{ item.category }}</span>
                            </div>
                            <!-- Price -->
                            <div class="flex items-center justify-center px-8 mt-2 md:mt-0">
                                <h6 class="font-medium text-base text-gray-600 group-hover:text-indigo-600 transition-all">${{ item.price.toFixed(2) }}</h6>
                                </div>
                            <!-- Quantity Controls -->
                            <div class="flex items-center justify-center md:justify-start mt-2 md:mt-0">
                                <div class="flex items-center h-9 bg-gray-100 rounded-lg shadow-inner">
                                    <button
                                        @click="decrement(item)"
                                        class="rounded-l-lg px-3 py-1 border-r border-gray-200 bg-white hover:bg-gray-50 transition"
                                    >
                                        <Icon icon="mdi:minus" width="10" height="18"/>
                                    </button>
                                    <input
                                        type="text"
                                        class="bg-transparent w-10 text-center font-semibold text-base outline-none"
                                        :value="item.quantity"
                                        readonly
                                    />
                                    <button
                                        @click="increment(item)"
                                        class="rounded-r-lg px-3 py-1 border-l border-gray-200 bg-white hover:bg-gray-50 transition"
                                    >
                                        <Icon icon="mdi:plus" width="10" height="18"/>
                                    </button>
                                </div>
                            </div>
                            <!-- Total Price -->
                            <div class="flex items-center justify-center md:justify-end mt-2 md:mt-0 min-w-[80px]">
                                <p class="font-bold text-base md:text-lg text-gray-700 group-hover:text-indigo-600 transition">${{ item.total.toFixed(2) }}</p>
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/add-coupon-code" class="flex flex-col sm:flex-row items-center justify-end mt-6">
                        <button
                            class="flex items-center px-4 py-2 rounded-full gap-2 border-none outline-0 font-semibold text-base sm:text-lg text-indigo-600 bg-white shadow hover:bg-indigo-50 transition"
                        >
                            Add Coupon Code
                            <Icon icon="mdi:arrow-right" class="w-6 h-6"/>
                        </button>
                    </RouterLink>
                </div>
                <!-- Order Summary -->
                <div class="col-span-1 xl:col-span-4 bg-white/90 rounded-2xl shadow-lg mx-auto py-8 px-3 sm:px-6 max-w-full sm:max-w-md w-full">
                    <h2 class="font-semibold text-2xl sm:text-3xl text-gray-900 pb-6 border-b border-gray-200">Order Summary</h2>
                    <div class="mt-6">
                        <div class="flex items-center justify-between pb-4">
                            <p class="font-normal text-base sm:text-lg text-gray-700">{{ cartItems.length }} Items</p>
                            <p class="font-medium text-base sm:text-lg text-gray-900">${{ subtotal.toFixed(2) }}</p>
                        </div>
                        <form @submit.prevent>
                            <!-- Shipping -->
                            <label class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium">Shipping</label>
                            <div class="flex pb-4">
                                <div class="relative w-full">
                                    <select
                                        v-model="selectedShipping"
                                        class="block w-full h-10 px-3 text-base font-normal text-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-indigo-400 shadow"
                                    >
                                        <option value="">Select Delivery</option>
                                        <option value="standard">Standard Delivery - $5.00</option>
                                        <option value="express">Express Delivery - $10.00</option>
                                    </select>
                                </div>
                            </div>
                            <!-- Promo Code -->
                            <label class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium">Promo Code</label>
                            <div class="flex pb-3 w-full gap-2">
                                <input
                                    type="text"
                                    v-model="promoCode"
                                    class="block w-full h-10 px-3 text-base font-normal text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-indigo-400 shadow"
                                    placeholder="xxxx xxxx xxxx"
                                />
                                <button
                                    type="button"
                                    @click="applyPromo"
                                    class="px-3 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition text-sm"
                                >Apply</button>
                            </div>
                            <!-- Payment Method -->
                            <label class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium">Payment Method</label>
                            <div class="flex pb-3 w-full">
                                <div class="relative w-full">
                                    <select
                                        v-model="selectedMethod"
                                        class="block w-full h-10 px-3 text-base font-normal text-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-indigo-400 shadow"
                                    >
                                        <option disabled value="">Choose</option>
                                        <option value="Bkash">Bkash</option>
                                        <option value="Nagad">Nagad</option>
                                        <option value="Cash on Hand">Cash on Delivery</option>
                                        <option value="Card">Card</option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex items-center border-b border-gray-200 pb-6">
                                <button
                                    @click="methodPay"
                                    class="rounded-lg w-full bg-black py-2 px-3 text-white text-sm font-semibold text-center transition hover:bg-gray-900"
                                    type="button"
                                >Apply</button>
                            </div>
                            <div class="flex items-center justify-between py-6">
                                <p class="font-medium text-lg sm:text-xl text-gray-900">{{ cartItems.length }} Items</p>
                                <p class="font-semibold text-lg sm:text-xl text-indigo-600">${{ total.toFixed(2) }}</p>
                            </div>
                            <RouterLink to="/order-confirm">
                                <button
                                @click="handleCheckout"
                                    class="w-full text-center bg-indigo-600 rounded-xl py-3 px-4 font-semibold text-base sm:text-lg text-white shadow hover:bg-indigo-700 transition"
                                    type="button"
                                >Checkout</button>
                            </RouterLink>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useToast } from 'vue-toastification';
import {useCartStore} from '../stores/useCartStore';
import { useRouter } from 'vue-router';
import { useOrderStore} from '../stores/useStoreOrder';
// import Watch from '../assets/img/download (5).jfif';
// import Fashion from '../assets/img/download (4).jfif';
// import Laptop from '../assets/img/images.jfif';
// import Phone from '../assets/img/download (1).jfif';
const toast = useToast()
const cart = useCartStore();
const cartItems = computed(() => cart.cartItems)

const selectedMethod = ref('');
const selectedShipping = ref('');
const promoCode = ref('');

const shippingCost = computed(() => (selectedShipping.value === 'express' ? 10 : 5));
const subtotal = computed(() => cart.subtotal)
const total = computed(() => cart.subtotal + shippingCost.value)
const order = useOrderStore();
function increment(item) {
    item.quantity++;
    item.total = item.price * item.quantity;
}
function decrement(item) {
    if (item.quantity > 1) {
        item.quantity--;
        item.total = item.price * item.quantity;
    } else {
        cartItems.removeCart(item);
        toast.error(`Removed "${item.title}" from cart`);
    }
}

function applyPromo() {
  if (promoCode.value) {
    toast.success('Promo code applied: ' + promoCode.value)
  } else {
    toast.error('Please enter a promo code')
  }
};

function methodPay() {
    if (selectedShipping.value && selectedMethod.value) {
        toast.success('Shipping and payment method applied successfully!')
    } else {
        toast.error('Please fill all required fields: shipping and payment method.')
    }
    }
const router = useRouter();

function handleCheckout() {
  if (!selectedShipping.value || !selectedMethod.value || !promoCode.value) {
    toast.error('Please fill all required fields: shipping, payment method and promo code.');
    return;
  }

  toast.success('Checkout successful!');

  order.setOrder({
    customerName: 'John',
    orderItems: cartItems.value.map(item => ({
      id: item.id,
      title: item.title,
      qty: item.quantity,
      image: item.image,
      total: item.total
    })),
    paymentMethod: selectedMethod.value,
    shippingMethod: selectedShipping.value,
    promoCode: promoCode.value,
    shipping: shippingCost.value,
    subtotal: subtotal.value,
  });

  router.push({ name: 'order-confirm' });
}


</script>

<style scoped>
input,
select,
button {
    font-family: 'San Francisco', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    outline: none;
}
@media (max-width: 640px) {
    .max-w-8xl, .max-w-md {
        max-width: 100% !important;
    }
    .rounded-2xl {
        border-radius: 1rem !important;
    }
    .shadow-lg, .shadow, .shadow-sm {
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06) !important;
    }
}
</style>