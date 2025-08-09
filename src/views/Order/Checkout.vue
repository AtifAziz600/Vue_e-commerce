<template>
  <AppLayout>
    <section class="max-w-full mx-auto py-16 px-6">
      <h1 class="text-3xl font-semibold text-gray-900 mb-10 text-center">
        Checkout
      </h1>

      <div
        v-if="product"
        class="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:flex items-start gap-8 transition-all duration-300"
      >
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full md:w-1/3 rounded-xl object-contain bg-gray-50 p-4 shadow-sm"
        />
        <div class="flex-1 mt-6 md:mt-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ product.title }}
          </h2>
          <p class="text-base text-gray-600 mb-1">
            Quantity: <strong>{{ product.quantity }}</strong>
          </p>
          <p class="text-xl font-semibold text-gray-800 mt-2">
            Total: <span class="text-deepMaroon">zł{{ product.total }}</span>
          </p>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 class="text-xl font-semibold text-gray-800 border-b pb-2">
              Shipping Information
            </h3>
            <div>
              <label
                for="street"
                class="block text-sm font-medium text-gray-600"
                >Street Address</label
              >
              <input
                v-model="form.street_address"
                type="text"
                id="street"
                placeholder="Enter Street Address"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-600"
                  >City</label
                >
                <input
                  v-model="form.city"
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label
                  for="state"
                  class="block text-sm font-medium text-gray-600"
                  >State/Province</label
                >
                <input
                  v-model="form.state"
                  type="text"
                  id="state"
                  placeholder="Enter Division"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="zip_code"
                  class="block text-sm font-medium text-gray-600"
                  >ZIP/Postal Code</label
                >
                <input
                  v-model="form.zip_code"
                  type="text"
                  id="zip_code"
                  placeholder="Enter Zip Code"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
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
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-600"
                  >Country</label
                >
                <input
                  v-model="form.country"
                  type="text"
                  id="country"
                  placeholder="Enter Country Name"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
            <div>
              <label class="block mb-1 text-sm text-gray-600">Payment Method</label>
              <select v-model="selectedMethod"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-rose-400">
                <option disabled value="">Choose</option>
                <option value="Card">Stripe</option>
              </select>
            </div>
            </div>
          </div>
          <button
            @click="placeOrder"
            class="mt-6 w-full md:w-auto bg-deepMaroon hover:bg-secondysButton text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
          >
            Confirm Order
          </button>
        </div>
      </div>

      <div
        v-else
        class="bg-white text-center p-6 rounded-lg shadow-md text-gray-500 mt-6 border border-gray-200"
      >
        No product found for checkout.
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import useAxios from "@/composables/useAxios";
import { useToast } from "vue-toastification";
import { useAuthStore } from "../../stores/useAuthStore";
import { useRouter } from "vue-router";

const router = useRouter();
const toast = useToast();
const product = ref(null);
const selectedShipping = ref("");
const authStore = useAuthStore();
const { sendRequest } = useAxios();
const selectedMethod = ref("");
const userId = computed(() => authStore?.user?.user?.id);
const name = computed(() => authStore?.user?.user?.name);
const email = computed(() => authStore?.user?.user?.email);
const phone = computed(() => authStore?.user?.user?.phone);

const quantity = computed(() => product.value?.quantity || 1);
const sub_total = computed(() => (product.value?.price || 0) * quantity.value);

const vendorShippingCharge = computed(() =>
  product.value?.shipping_charge ? Number(product.value.shipping_charge) : 0
);
const vendorShippingCharge2 = computed(() =>
  product.value?.shipping_charge2 ? Number(product.value.shipping_charge2) : 0
);

const shippingCost = computed(() => {
  if (selectedShipping.value === "express") {
    return vendorShippingCharge2.value;
  } else if (selectedShipping.value === "standard") {
    return vendorShippingCharge.value;
  }
  return 0;
});

const total_price = computed(() => sub_total.value + shippingCost.value);

const form = ref({
  street_address: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
});

const placeOrder = async () => {
  if (!authStore?.user?.token) {
    toast.error("Please login first!");
    router.push("/login");
    return;
  }

  if (!selectedShipping.value) {
    toast.error("Please select a shipping method");
    return;
  }

  try {
    const payload = {
      user_id: userId.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      country: form.value.country,
      state: form.value.state,
      city: form.value.city,
      zip_code: form.value.zip_code,
      street_address: form.value.street_address,
      delivery_charge: shippingCost.value,
      quantity: quantity.value,
      payment_method: "stripe",
      payment_status: "pending",
      sub_total: sub_total.value,
      total: total_price.value,
      order_items: [
        {
          product_id: product.value.id,
          product_name: product.value.title,
          category_id: product.value.category_id,
          shop_id: product.value.shop_id,
          quantity: quantity.value,
          price: product.value.price,
          total: sub_total.value,
        },
      ],
    };

    console.log("Order Payload:", payload);

    const response = await sendRequest({
      url: `customer/order`,
      method: "POST",
      data: payload,
    });

    if (response.data?.url) {
      window.location.href = response.data.url;
    } else {
      toast.success("Order placed successfully!");
    }
  } catch (error) {
    toast.error("Failed to place order.");
    console.error(error);
  }
};

onMounted(() => {
  if (!authStore?.user?.token) {
    toast.error("Please login first!");
    router.push("/login");
    return;
  }

  const stored = localStorage.getItem("checkoutProduct");
  if (stored) {
    product.value = JSON.parse(stored);
  }
});
</script>

<style scoped></style>
