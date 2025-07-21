<template>
  <AppLayout>
    <section
      class="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12"
    >
      <div class="w-full max-w-7xl px-2 sm:px-4 md:px-8 mx-auto relative z-10">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-8">
          <div
            class="col-span-1 xl:col-span-8 pt-8 pb-6 md:py-16 w-full max-xl:max-w-8xl max-xl:mx-auto sm:px-4 px-2"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-200 gap-2"
            >
              <h2
                class="font-semibold text-2xl sm:text-3xl text-gray-900 tracking-tight"
              >
                Shopping Cart
              </h2>
              <h2 class="font-medium text-lg sm:text-xl text-gray-500">
                {{ cartItems.length }} Items
              </h2>
            </div>
            <div
              class="hidden md:grid grid-cols-12 mt-8 pb-6 border-b border-gray-100"
            >
              <div class="col-span-12 md:col-span-7">
                <p class="font-normal text-lg text-gray-600">Product Details</p>
              </div>
              <div class="col-span-12 md:col-span-5">
                <div class="grid grid-cols-5">
                  <div class="col-span-2">
                    <p class="font-normal text-lg text-gray-600 text-center">
                      Price
                    </p>
                  </div>
                  <div class="col-span-2">
                    <p class="font-normal text-lg text-gray-600 text-center">
                      Quantity
                    </p>
                  </div>
                  <div class="col-span-1">
                    <p class="font-normal text-lg text-gray-600 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex flex-col md:flex-row items-stretch px-8 gap-4 py-4 border-b border-gray-100 group bg-white/90 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 mb-3"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center md:w-28 w-full"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover border border-gray-200 shadow"
                />
              </div>
              <div
                class="flex flex-1 flex-col md:flex-row md:items-center w-full max-w-8xl gap-2"
              >
                <div
                  class="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left"
                >
                  <h6 class="font-semibold text-sm text-gray-900 line-clamp-2">
                    {{ item.title }}
                  </h6>
                  <span class="text-sm text-gray-500 mt-1">{{
                    item.category
                  }}</span>
                </div>
                <div class="flex items-center justify-center px-8 mt-2 md:mt-0">
                  <h6
                    class="font-medium text-base text-gray-600 group-hover:text-rose-900 transition-all"
                  >
                    zł{{ item.price }}
                  </h6>
                </div>
                <div
                  class="flex items-center justify-center md:justify-start mt-2 md:mt-0"
                >
                  <div
                    class="flex items-center h-9 bg-gray-100 rounded-lg shadow-inner"
                  >
                    <button
                      @click="decrement(item)"
                      class="rounded-l-lg px-3 py-1 border-r border-gray-200 bg-white hover:bg-gray-50 transition"
                    >
                      <Icon icon="mdi:minus" width="10" height="18" />
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
                      <Icon icon="mdi:plus" width="10" height="18" />
                    </button>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center md:justify-end mt-2 md:mt-0 min-w-[80px]"
                >
                  <p
                    class="font-bold text-base md:text-lg text-gray-700 group-hover:text-rose-600 transition"
                  >
                    zł{{ item.total }}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-center mt-2 md:mt-0">
                <button
                  @click="removeItem(item)"
                  class="text-sm text-red-500 hover:text-red-700 font-medium transition"
                >
                  <Icon icon="mdi:trash" class="w-8 h-8" />
                </button>
              </div>
            </div>

            <RouterLink
              to="/add-coupon-code"
              class="flex flex-col sm:flex-row items-center justify-end mt-6"
            >
              <button
                class="flex items-center px-4 py-2 rounded-full gap-2 border-none outline-0 font-semibold text-base sm:text-lg text-red-600 hover:text-white bg-white shadow hover:bg-secondysButton transition"
              >
                Add Coupon Code
                <Icon icon="mdi:arrow-right" class="w-6 h-6" />
              </button>
            </RouterLink>
          </div>
          <div
            class="col-span-1 xl:col-span-4 bg-white/90 rounded-2xl shadow-lg mx-auto py-8 px-3 sm:px-6 max-w-full sm:max-w-md w-full"
          >
            <h2
              class="font-semibold text-2xl sm:text-3xl text-gray-900 pb-6 border-b border-gray-200"
            >
              Order Summary
            </h2>
            <div class="mt-6">
              <div class="flex items-center justify-between pb-4">
                <p class="font-normal text-base sm:text-lg text-gray-700">
                  {{ cartItems.length }} Items
                </p>
                <p class="font-medium text-base sm:text-lg text-gray-900">
                  zł{{ subtotal }}
                </p>
              </div>
              <form @submit.prevent>
                <label
                  class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium"
                  >Shipping</label
                >
                <div class="flex pb-4">
                  <div class="relative w-full">
                    <select
                      v-model="selectedShipping"
                      class="block w-full h-10 px-3 text-base font-normal text-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-rose-400 shadow"
                    >
                      <option value="">Select Delivery</option>
                      <option value="standard">
                        Standard Delivery - zł5.00
                      </option>
                      <option value="express">
                        Express Delivery - zł10.00
                      </option>
                    </select>
                  </div>
                </div>
                <label
                  class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium"
                  >Promo Code</label
                >
                <div class="flex pb-3 w-full gap-2">
                  <input
                    type="text"
                    v-model="grand_total_coupon"
                    class="block w-full h-10 px-3 text-base font-normal text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-rose-400 shadow"
                    placeholder="xxxx xxxx xxxx"
                  />
                  <button
                    type="button"
                    @click="applyPromo"
                    class="px-3 py-2 rounded-lg bg-primarysButton hover:bg-secondysButton text-white font-semibold transition text-sm"
                  >
                    Apply
                  </button>
                </div>
                <label
                  class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium"
                  >Payment Method</label
                >
                <div class="flex pb-3 w-full">
                  <div class="relative w-full">
                    <select
                      v-model="selectedMethod"
                      class="block w-full h-10 px-3 text-base font-normal text-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-rose-400 shadow"
                    >
                      <option disabled value="">Choose</option>
                      <option value="Paypal">Paypal</option>
                      <option value="American Express">American Express</option>
                      <option value="Card">Card</option>
                      <option value="Paypal">PayPal</option>
                    </select>
                  </div>
                </div>
                <label
                  class="flex items-center mb-1.5 text-gray-600 text-xs sm:text-sm font-medium"
                  >Coupon Code</label
                >
                <div class="flex items-center justify-between">
                  <p
                    class="text-gray-600 py-1.5 text-xs sm:text-sm font-normal"
                  >
                    Code
                  </p>
                  <p class="py-1.5 text-sm sm:text-sm font-bold text-green-500">
                    #{{ couponStore.appliedCoupon || "None" }}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <p
                    class="text-gray-600 py-1.5 text-xs sm:text-sm font-normal"
                  >
                    Discount
                  </p>
                  <p class="text-gray-900 py-1.5 text-xs sm:text-sm font-thin">
                    zł {{ discount.toFixed(2) }}
                  </p>
                </div>
                <div class="flex items-center border-b border-gray-200 pb-6">
                  <button
                    @click="methodPay"
                    class="rounded-lg w-full bg-slate-700 py-2 px-3 text-white text-sm font-semibold text-center transition hover:bg-slate-900"
                    type="button"
                  >
                    Apply
                  </button>
                </div>
                <div class="flex items-center justify-between py-6">
                  <p class="font-medium text-lg sm:text-xl text-gray-900">
                    {{ cartItems.length }} Items
                  </p>
                  <p class="font-semibold text-lg sm:text-xl text-deepMaroon">
                    zł{{ total.toFixed(2) }}
                  </p>
                </div>
                <RouterLink>
                  <button
                    @click="paymentAndPlaceOrder"
                    class="w-full text-center bg-primarysButton hover:bg-secondysButton rounded-xl py-3 px-4 font-semibold text-base sm:text-lg text-white shadow transition"
                    type="button"
                  >
                    Checkout
                  </button>
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
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { useToast } from "vue-toastification";
import { useCartStore } from "../../stores/useCartStore";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { useOrderStore } from "../../stores/useStoreOrder";
import { useCouponCode } from "../../stores/useCouponCode";
import axios from "axios";
const toast = useToast();
const cart = useCartStore();
const authStore = useAuthStore();
const cartItems = computed(() => cart.cartItems);
const couponStore = useCouponCode();
const selectedMethod = ref("");
const selectedShipping = ref("");
const grand_total_coupon = ref("");
const couponCode = ref("");
const shippingCost = computed(() =>
  selectedShipping.value === "express" ? 10 : 5
);
const subtotal = computed(() => cart.subtotal);
const total = computed(
  () => cart.subtotal + shippingCost.value - discount.value
);
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
    cart.removeItem(item);
    toast.error(`Removed "${item.title}" from cart`);
  }
}

const discount = computed(() => {
  const amount = couponStore.discountAmount;
  return typeof amount === "number"
    ? amount < 1
      ? subtotal.value * amount
      : amount
    : 0;
});
function applyPromo() {
  if (grand_total_coupon.value) {
    toast.success("Promo code applied: " + grand_total_coupon.value);
  } else {
    toast.error("Please enter a promo code");
  }
}

function methodPay() {
  if (selectedShipping.value && selectedMethod.value) {
    toast.success("Shipping and payment method applied successfully!");
  } else {
    toast.error(
      "Please fill all required fields: shipping and payment method."
    );
  }
}
const router = useRouter();




const form = ref({
  user_id: computed(() => authStore?.user?.user?.id),
  name: computed(() => authStore?.user?.user?.name),
  email: computed(() => authStore?.user?.user?.email),
  phone: computed(() => authStore?.user?.user?.phone),
  country: authStore?.user?.country ?? "Bangladesh",
  state: "Dhaka",
  city: "Dhaka",
  zip_code: "1212",
  street_address: "Dhaka",
  sub_total: subtotal.value,
  order_items: cartItems.value.map((item) => ({
    id: item.id,
    product_id: item.id,
    product_name: item.title,
    category_id: item.category_id,
    shop_id: 1,
    quantity: item.quantity,
    price: item.price,
    total: item.total,
  })),
  payment_method: 'stripe',
  payment_status:'pending',
  grand_total_coupon: parseFloat(grand_total_coupon.value) || 0,
  coupon_code: couponStore.appliedCoupon,
  delivery_charge: shippingCost.value,
  total: total.value,
});

const paymentAndPlaceOrder = async () => {
  if (
    !selectedShipping.value ||
    !selectedMethod.value ||
    !grand_total_coupon.value
  ) {
    toast.error(
      "Please fill all required fields: shipping, payment method and promo code."
    );
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8000/api/customer/order", form.value);

    if (response?.data) {
      // cart.clearCart();
      toast.success("Checkout successful!");
      router.push("/order-confirm")
      if (response.data?.url) {
        window.location.href = response.data.url;
      }
    } else {
      toast.error("Something went wrong with the payment.");
    }
  } catch (error) {
    toast.error("Payment failed. Please try again.");
    console.error("Stripe checkout error:", error);
  }
};

function removeItem(item) {
  cart.removeItem(item);
  toast.error(`Removed "${item.title}" from cart`);
}
</script>

<style scoped>
input,
select,
button {
  font-family: "San Francisco", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  outline: none;
}
@media (max-width: 640px) {
  .max-w-8xl,
  .max-w-md {
    max-width: 100% !important;
  }
  .rounded-2xl {
    border-radius: 1rem !important;
  }
  .shadow-lg,
  .shadow,
  .shadow-sm {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06) !important;
  }
}
</style>
