<template>
  <AppLayout>
    <section class="max-w-4xl mx-auto py-16 px-6">
      <h1 class="text-3xl font-semibold text-gray-900 mb-10 text-center">Review & Confirm</h1>

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
          <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ product.title }}</h2>
          <p class="text-base text-gray-600 mb-1">Quantity: <strong>{{ product.quantity }}</strong></p>
          <p class="text-xl font-semibold text-gray-800 mt-2">
            Total: <span class="text-deepMaroon">zł{{ product.total }}</span>
          </p>

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
import axios from "axios";
import { useToast } from "vue-toastification";
import { useAuthStore } from "../../stores/useAuthStore";
import { useRouter } from 'vue-router';
const router = useRouter();
const toast = useToast();
const product = ref(null);
const authStore = useAuthStore();

const userId = computed(() => authStore?.user?.user?.id);
const name = computed(() => authStore?.user?.user?.name);
const email = computed(() => authStore?.user?.user?.email);
const phone = computed(() => authStore?.user?.user?.phone);
const country = computed(() => authStore?.user?.country ?? "Bangladesh");
const delivery_charge = 5;
const sub_total = computed(() => product.value?.price * quantity.value || 0);
const total_price = computed(() => sub_total.value + delivery_charge);
const payment_method = "stripe";
const state = "Dhaka";
const city = "Dhaka";
const zip_code = "1212";
const street_address = "Dhaka";
const quantity = computed(() => product.value?.quantity || 1);

onMounted(() => {
  const stored = localStorage.getItem("checkoutProduct");
  if (stored) {
    product.value = JSON.parse(stored);
  }
});

const placeOrder = async () => {

  try {
 const payload = {
  user_id: userId.value,
  name: name.value,
  email: email.value,
  phone: phone.value,
  country: country.value,
  state,
  city,
  zip_code,
  street_address,
  delivery_charge,
  quantity: quantity.value,
  payment_method,
  sub_total: sub_total.value,
  order_items: [
    {
      product_id: product.value.id,
      product_name: product.value.title,
      category_id: product.value.category_id,
      shop_id: 1,
      quantity: quantity.value,
      price: product.value.price,
      total: sub_total.value,
    },
  ],
};

    const response = await axios.post("http://localhost:8000/api/customer/order", payload);

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

<style scoped>

</style>
