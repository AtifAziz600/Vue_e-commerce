<template>
  <AppLayout>
    <section class="relative z-10 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-16 font-sans">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div class="col-span-1 xl:col-span-8 space-y-6">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-gray-300">
              <h2 class="text-3xl font-semibold text-gray-900">
                Shopping Cart
              </h2>
              <span class="text-lg font-medium text-gray-500">{{ cartItems.length }} Items</span>
            </div>
            <div class="hidden md:grid grid-cols-12 pb-4 border-b border-gray-200 text-sm text-gray-500 font-medium">
              <div class="col-span-7">Product Details</div>
              <div class="col-span-5 grid grid-cols-6">
                <div class="col-span-2 text-center">Price</div>
                <div class="col-span-1 text-center">Quantity</div>
                <div class="col-span-1 text-center">Total</div>
                <div class="col-span-1 text-center">Action</div>
              </div>
            </div>
            <div v-for="item in cartItems" :key="item.id"
              class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4">
              <div class="flex-shrink-0 flex items-center justify-center md:w-28 w-full">
                <img :src="item.image" :alt="item.title"
                  class="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover border border-gray-200" />
              </div>
              <div class="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                <div class="flex-1 text-center md:text-left">
                  <h6 class="text-base font-semibold text-gray-900 line-clamp-2">
                    {{ item.title }}
                  </h6>
                  <span class="text-sm text-gray-500">{{ item.category }}</span>
                </div>

                <div class="text-center">
                  <span class="text-gray-600 font-medium">zł{{ item.price }}</span>
                </div>

                <div class="flex items-center justify-center">
                  <div class="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                    <button @click="decrement(item)"
                      class="px-3 py-1 bg-white border-r border-gray-200 hover:bg-gray-50">
                      <Icon icon="mdi:minus" class="w-4 h-4" />
                    </button>
                    <input type="text" :value="item.quantity" readonly
                      class="w-10 text-center bg-transparent text-base font-semibold" />
                    <button @click="increment(item)"
                      class="px-3 py-1 bg-white border-l border-gray-200 hover:bg-gray-50">
                      <Icon icon="mdi:plus" class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div class="text-right font-bold text-gray-700">
                  zł{{ item.total }}
                </div>
              </div>

              <div class="flex items-center justify-end">
                <button @click="removeItem(item)" class="text-red-500 hover:text-red-700 transition">
                  <Icon icon="mdi:trash" class="w-6 h-6" />
                </button>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 class="text-xl font-semibold text-gray-800 border-b pb-2">
                Shipping Information
              </h3>
              <div>
                <label for="street" class="block text-sm font-medium text-gray-600">Street Address</label>
                <input v-model="form.street_address" type="text" id="street" placeholder="Enter Street Address"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="city" class="block text-sm font-medium text-gray-600">City</label>
                  <input v-model="form.city" type="text" id="city" placeholder="Enter City"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>

                <div>
                  <label for="state" class="block text-sm font-medium text-gray-600">State/Province</label>
                  <input v-model="form.state" type="text" id="state" placeholder="Enter Division"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="zip_code" class="block text-sm font-medium text-gray-600">ZIP/Postal Code</label>
                  <input v-model="form.zip_code" type="text" id="zip_code" placeholder="Enter Zip Code"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>

                <div>
                  <label for="country" class="block text-sm font-medium text-gray-600">Country</label>
                  <input v-model="form.country" type="text" id="country" placeholder="Enter Country Name"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400" />
                </div>
              </div>
            </div>

            
          </div>
          <div class="col-span-1 xl:col-span-4 bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900 border-b pb-4">
              Order Summary
            </h2>

            <div class="flex justify-between text-gray-700">
              <span>{{ cartItems.length }} Items</span>
              <span class="font-medium">zł{{ subtotal }}</span>
            </div>

            <div>
              <label class="block mb-1 text-sm text-gray-600">Shipping</label>
              <select v-model="selectedShipping"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-rose-400">
                <option value="">Select Delivery</option>
                <option value="standard">Standard Delivery - zł{{ vendorShippingCharge }}</option>
                <option value="express">Express Delivery - zł{{ vendorShippingCharge2 }}</option>
              </select>
            </div>

            <div>
              <label class="block mb-1 text-sm text-gray-600">Promo Code</label>
              <div class="flex gap-2">
                <input v-model="grand_total_coupon" type="text" placeholder="xxxx xxxx xxxx"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                <button @click="applyPromo"
                  class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                  Apply
                </button>
              </div>
            </div>
            <RouterLink to="/add-coupon-code" class="flex justify-center">
              <button class="w-full bg-gray-800 hover:bg-black text-white py-2 rounded-md text-sm font-semibold">
                Add Coupon Code
              </button>
            </RouterLink>
            <div>
              <label class="block mb-1 text-sm text-gray-600">Payment Method</label>
              <select v-model="selectedMethod"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-rose-400">
                <option disabled value="">Choose</option>
                <option value="Card">Stripe</option>
              </select>
            </div>

            <div class="space-y-2 border-t pt-4 text-sm text-gray-700">
              <div class="flex justify-between">
                <span>Coupon</span>
                <span class="font-bold text-green-500">#{{ couponStore.appliedCoupon || "None" }}</span>
              </div>
              <div class="flex justify-between">
                <span>Discount</span>
                <span>zł {{ discount.toFixed(2) }}</span>
              </div>
            </div>
            <button @click="methodPay"
              class="w-full bg-gray-800 hover:bg-black text-white py-2 rounded-md text-sm font-semibold">
              Apply
            </button>
            <div class="flex justify-between text-lg font-semibold text-gray-900 border-t pt-6">
              <span>Total</span>
              <span class="text-deepMaroon">zł{{ total.toFixed(2) }}</span>
            </div>
            <button @click="paymentAndPlaceOrder"
              class="w-full bg-primarysButton hover:bg-secondysButton text-white py-3 rounded-xl font-semibold text-base transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useToast } from "vue-toastification";
import { useCartStore } from "../../stores/useCartStore";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { useOrderStore } from "../../stores/useStoreOrder";
import { useCouponCode } from "../../stores/useCouponCode";
import useAxios from "@/composables/useAxios";
const toast = useToast();
const cart = useCartStore();
const authStore = useAuthStore();
const cartItems = computed(() => cart.cartItems);
const { sendRequest } = useAxios();
const couponStore = useCouponCode();
const selectedMethod = ref("");
const selectedShipping = ref("");
const grand_total_coupon = ref("");
const couponCode = ref("");
const vendorShippingCharge = computed(() =>
  cartItems.value.length > 0 ? Number(cartItems.value[0].shipping_charge) : 0
);
const vendorShippingCharge2 = computed(() =>
  cartItems.value.length > 0 ? Number(cartItems.value[0].shipping_charge2) : 0
);

const shippingCost = computed(() => {
  if (selectedShipping.value === "express") {
    return vendorShippingCharge2.value;
  } else if (selectedShipping.value === "standard") {
    return vendorShippingCharge.value;
  }
  return 0;
});

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
  country: authStore?.user?.country ?? "",
  state: "",
  city: "",
  zip_code: "",
  street_address: "",
  sub_total: subtotal.value,
  order_items: cartItems.value.map((item) => ({
    id: item.id,
    product_id: item.id,
    product_name: item.title,
    category_id: item.category_id,
    shop_id: item.shop_id,
    quantity: item.quantity,
    price: item.price,
    total: item.total,
  })),
  payment_method: "stripe",
  payment_status: "pending",
  grand_total_coupon: parseFloat(grand_total_coupon.value) || 0,
  coupon_code: couponStore.appliedCoupon,
  delivery_charge: shippingCost.value,
  total: total.value,
});


const paymentAndPlaceOrder = async () => {
  if (!authStore?.user?.token) {
    toast.error("Please login first!");
    router.push("/login");
    return;
  }
  if (
    !selectedShipping.value ||
    !selectedMethod.value 
  ) {
    toast.error(
      "Please fill all required fields: shipping, payment method."
    );
    return;
  }

  try {
    const response = await sendRequest({
      url: 'customer/order',
      method: 'POST',
      data: form.value
    })
    if (response?.data) {
      toast.success("Checkout successful!");
      if (response.data?.url) {
        window.location.href = response.data.url;
      } else {
        router.push("/order-confirm");
      }
    } else {
      toast.error("Something went wrong with the payment.");
    }
  } catch (error) {
    toast.error("Payment failed. Please try again.");
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
