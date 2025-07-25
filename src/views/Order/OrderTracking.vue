<template>
  <section class="py-24 relative bg-gray-100">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full flex-col justify-start items-start gap-12 inline-flex">
        <div
          class="w-full flex-col justify-center sm:items-start items-center gap-1 flex"
        >
          <h2
            class="text-gray-500 text-2xl font-semibold font-manrope leading-9"
          >
            Order <span class="text-indigo-600">{{ order_code }}</span>
          </h2>
          <span class="text-gray-500 text-base font-medium leading-relaxed">{{
            orderDate
          }}</span>
          <div class="flex justify-center items-center">
            <RouterLink
            to="/"
              class="bg-primarysButton hover:bg-secondysButton text-white px-5 py-2 rounded-xl shadow transition duration-300"
            >
              Continue Shopping
            </RouterLink>
          </div>
        </div>

        <div class="w-full bg-white p-8 rounded-xl flex-col gap-5 flex">
          <h2
            class="text-gray-900 text-2xl font-semibold font-manrope border-b pb-5"
          >
            Order Tracking
          </h2>
          <ol
            class="flex md:flex-row flex-col md:items-start items-center justify-between w-full md:gap-1 gap-4"
          >
            <li
              v-for="(item, index) in trackingSteps"
              :key="item.title"
              class="group flex relative justify-start"
            >
              <div
                class="w-full z-10 flex flex-col items-center justify-start gap-1"
              >
                <div class="flex items-center gap-1.5">
                  <h5 class="text-center text-gray-900 text-lg font-medium">
                    {{ item.title }}
                  </h5>
                  <svg
                    v-if="item.completed"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.833 10c0-4.51 3.656-8.167 8.167-8.167S18.167 5.49 18.167 10s-3.656 8.167-8.167 8.167S1.833 14.51 1.833 10zm12.53-2.073a.75.75 0 00-1.06-1.06l-3.591 3.59a2.41 2.41 0 01-.707.496l-.707-.707a.75.75 0 10-1.06 1.06l1.305 1.305a2.75 2.75 0 001.473.753 2.75 2.75 0 001.473-.753l3.874-3.874z"
                      fill="#047857"
                    />
                  </svg>
                </div>
                <h6 class="text-center text-gray-500 text-base font-normal">
                  {{ estimatedDelivery }}
                </h6>
              </div>
            </li>
          </ol>
        </div>

        <div class="w-full bg-white p-8 rounded-xl flex-col gap-5 flex">
          <h2
            class="text-gray-900 text-2xl font-semibold font-manrope border-b pb-5"
          >
            Order Items
          </h2>
          <div class="flex flex-col gap-5 border-b pb-5">
            <div
              v-for="item in orderItems"
              :key="item.title"
              class="grid md:grid-cols-12 grid-cols-1 gap-4 items-center"
            >
              <div class="md:col-span-8 flex items-center gap-4">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-24 h-24 rounded-md object-cover"
                />
                <div class="flex flex-col md:items-start items-center gap-2">
                  <h4 class="text-gray-900 text-xl font-medium">
                    {{ item.title }}
                  </h4>
                </div>
              </div>
              <div
                class="md:col-span-4 flex md:flex-row flex-col justify-between items-center gap-2"
              >
                <h4 class="text-gray-500 text-xl font-semibold">
                  zł {{ item.price }} x {{ item.qty }}
                </h4>
                <h4 class="text-gray-900 text-xl font-semibold">
                  zł {{ item.total }}
                </h4>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div
              class="flex justify-between text-gray-500 text-base font-medium"
            >
              <span>Subtotal</span>
              <span>zł {{ subtotal }}</span>
            </div>
            <div
              class="flex justify-between text-gray-500 text-base font-medium"
            >
              <span>Shipping Charge</span>
              <span>zł {{ shipping }}</span>
            </div>
            <div
              class="flex justify-between text-gray-900 text-lg font-semibold"
            >
              <span>Total</span>
              <span>zł {{ total }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <h6 class="text-gray-900 text-base font-medium">Order Note:</h6>
          <p class="text-gray-500 text-sm">
            Thank You {{ customerName }}. Make sure to ship all the ordered
            items together by Friday. I've emailed you the details, so please
            check and review them.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useOrderStore } from "../../stores/useStoreOrder";
import useAxios from "@/composables/useAxios";

const { sendRequest } = useAxios();
const route = useRoute();
const order = useOrderStore();
const itemsFromQuery = ref([]);
if (route.query.items) {
  try {
    itemsFromQuery.value = JSON.parse(decodeURIComponent(route.query.items));
  } catch (e) {
    console.error("Failed to parse items from query", e);
  }
}
const getCustomer = async () => {
  // const response = await axios.get(
  //   `${import.meta.env.VITE_APP_URL}customer/orders/${route.params.slug}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${authStore.user?.token}`,
  //       Accept: "application/json",
  //     },
  //   }
  // );
  const response = await sendRequest({
    url: `customer/orders/${route.params.slug}`,
    method: 'GET',
    header: {
      Authorization: `Bearer ${authStore.user?.token}`,
      Accept: "application/json",
    },
  })
  if (response) {
    order.value = response.data;
  }
};

onMounted(async () => {
  window.scrollTo(0, 0);
  await getCustomer();
});

const customerName = computed(
  () => order.customerName || route.query.customer_name
);
const orderItems = computed(() =>
  order.orderItems?.length ? order.orderItems : itemsFromQuery.value
);
const subtotal = computed(
  () => order.subtotal || Number(route.query.subtotal) || 0
);
const shipping = computed(
  () => order.shipping || Number(route.query.shipping) || 0
);
const total = computed(
  () =>
    order.total || Number(route.query.total) || subtotal.value + shipping.value
);

const estimatedDelivery = new Date(
  Date.now() + 5 * 24 * 60 * 60 * 1000
).toLocaleDateString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "short",
  year: "numeric",
});

const trackingSteps = [
  { title: "Order Placed", completed: true },
  { title: "Processing", completed: true },
  { title: "Shipped", completed: false },
  { title: "Delivered", completed: false },
];
</script>
