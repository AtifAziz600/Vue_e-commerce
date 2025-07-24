<template>
  <AppLayout>
    <section
      class="w-full h-48 lg:h-64 bg-[url('https://img.freepik.com/premium-vector/3d-vector-set-online-shopping-items-floating-air-mobile-phone-coupons-bag-gift-credit-card-basket_624031-736.jpg?w=1800')] bg-no-repeat bg-cover bg-center relative"
    >
      <div class="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
    </section>
    <section class="px-6 lg:px-0 max-w-3xl mx-auto -mt-20 lg:-mt-32 pb-10">
      <div class="rounded-2xl bg-white shadow-lg p-6 relative z-10">
        <div class="flex items-center gap-5">
          <img
            class="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-md object-cover"
            src="https://cdn-icons-png.freepik.com/256/15232/15232242.png?uid=R102446229&ga=GA1.1.1386564851.1716744340&semt=ais_hybrid"
            alt="User"
          />
          <div>
            <h3 class="text-2xl lg:text-3xl font-semibold text-gray-900">
              {{ authStore?.user?.user?.name }}
            </h3>
            <p class="text-sm text-gray-500">
              Joined {{ moment(customer?.created_at).format("MMMM Do YYYY") }}
            </p>
            <div class="mt-2">
              <span
                class="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-medium text-xs px-2.5 py-1 rounded-md"
              >
                <Icon
                  name="mdi:check-decagram"
                  class="text-blue-600 text-base"
                />
                Verified Account
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div
          class="flex justify-between items-center mb-5 bg-white rounded-lg px-4 py-2 shadow-sm border"
        >
          <div class="flex gap-4">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="[
                'text-sm px-3 py-1 rounded-md font-medium transition',
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100',
              ]"
            >
              {{ tab }}
            </button>
          </div>
          <button
            @click="authStore?.logout"
            class="text-sm text-red-500 hover:underline flex items-center gap-1"
          >
            <Icon name="solar:logout-broken" />
            Logout
          </button>
        </div>
        <div v-if="activeTab === 0">
          <div v-if="customer?.combine_orders?.length" class="space-y-4">
            <div
              v-for="(order, i) in customer.combine_orders"
              :key="i"
              class="bg-white rounded-xl shadow border border-gray-200 flex gap-4 p-4"
            >
              <div class="w-28 h-28 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  :src="
                    order?.orders?.[0]?.order_details?.[0]?.product
                      ?.cover_image_url || 'https://via.placeholder.com/150'
                  "
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 relative">
                <RouterLink
                  :to="`/order-detail/${order?.id}`"
                  class="absolute top-0 right-0 text-xs text-blue-600 hover:underline"
                >
                  View Details
                </RouterLink>
                <h4 class="text-base font-semibold mb-1">
                  {{ order?.order_code }}
                </h4>
                <p class="text-sm text-gray-600">
                  Date: {{ order?.order_date || "N/A" }}
                </p>
                <p class="text-sm text-gray-600">
                  Total: {{ data?.currency_symbol }}{{ order?.grand_total }}
                </p>
                <p class="text-sm text-gray-600 capitalize">
                  Status:
                  <span class="font-medium">{{ order?.order_status }}</span>
                </p>
                <p class="text-sm text-gray-600 capitalize">
                  Payment:
                  <span class="font-medium">{{ order?.payment_status }}</span>
                </p>
              </div>
            </div>
          </div>
          <p v-else class="text-sm text-gray-500 text-center mt-10">
            No orders found.
          </p>
        </div>

        <div v-if="activeTab === 1" class="mt-4">
          <div
            v-if="customerLoading"
            class="w-full border bg-white border-gray-300 rounded-md p-4 animate-pulse"
          >
            <div class="h-6 w-48 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 w-32 bg-gray-200 rounded mb-1"></div>
            <div class="h-4 w-64 bg-gray-200 rounded"></div>
          </div>

          <div
            v-else
            class="bg-white p-5 rounded-xl shadow border border-gray-200"
          >
            <h3 class="text-lg font-semibold mb-3">{{ customer?.name }}</h3>
            <div class="space-y-2 text-sm text-gray-700">
              <div class="flex items-center gap-2">
                <Icon name="hugeicons:call" />
                <span>{{ customer?.phone }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="hugeicons:mail-01" />
                <span>{{ customer?.email }}</span>
              </div>
            </div>
          </div>
          <div v-if="customer?.addresses?.[0]" class="mt-5">
            <div
              class="bg-white border border-gray-200 rounded-lg shadow p-4 text-sm text-gray-800"
            >
              <h4 class="text-base font-medium mb-3">Address Info</h4>
              <ul class="space-y-1">
                <li>
                  <strong>Country:</strong> {{ customer.addresses[0].country }}
                </li>
                <li><strong>City:</strong> {{ customer.addresses[0].city }}</li>
                <li>
                  <strong>State:</strong> {{ customer.addresses[0].state }}
                </li>
                <li>
                  <strong>Street:</strong>
                  {{ customer.addresses[0].street_address }}
                </li>
                <li>
                  <strong>Post Code:</strong>
                  {{ customer.addresses[0].zip_code }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { useAuthStore } from "../../stores/useAuthStore.js";
import { ref, onMounted } from "vue";
import moment from "moment";
import { inject } from "vue";
// import axios from "axios";
import useAxios from "@/composables/useAxios";

const data = inject("data");
const authStore = useAuthStore();
const tabs = ["Order", "Profile"];
const { sendRequest } = useAxios();
const activeTab = ref(0);
const customer = ref(null);
const customerLoading = ref(false);
const getCustomer = async () => {
  customerLoading.value = true;
  // const response = await axios.get(
  //   `${import.meta.env.VITE_APP_URL}customer/customer/${authStore.user?.user?.id}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${authStore.user.token}`,
  //       Accept: "application/json",
  //     },
  //   }
  // );
  const response = await sendRequest({
    url: `customer/customer/${authStore.user?.user?.id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${authStore.user.token}`,
      Accept: "application/json",
    },
  });
  if (response) {
    customer.value = response.data;
    customerLoading.value = false;
  }
};

onMounted(async () => {
  window.scrollTo(0, 0);
  await getCustomer();
});
</script>
