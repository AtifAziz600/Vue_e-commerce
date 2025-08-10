<template>
  <AppLayout>
    <section class="bg-gray-100 py-8 antialiased md:py-16 min-h-screen">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mx-auto max-w-full">
          <div class="gap-4 sm:flex sm:items-center sm:justify-between mb-8">
            <h2 class="text-3xl font-extrabold sm:text-4xl flex items-center gap-2">
              My Orders
            </h2>
            <div class="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                <label for="order-type" class="sr-only mb-2 block text-sm font-medium text-gray-900">Select order
                  type</label>
                <select id="order-type"
                  class="block w-full min-w-[8rem] rounded-lg border bg-white p-2.5 text-sm shadow">
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <span class="inline-block font-semibold"> from </span>
              <div>
                <label for="duration" class="sr-only mb-2 block text-sm font-medium text-gray-900">Select
                  duration</label>
                <select id="duration" class="block w-full rounded-lg border bg-white p-2.5 text-sm shadow">
                  <option selected>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="last 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mt-6 flow-root sm:mt-8">
            <div class="divide-y rounded-xl bg-white shadow-lg overflow-hidden">
              <div v-for="order in data?.combine_orders" :key="order.id"
                class="flex flex-wrap items-center gap-y-4 py-8 px-6 transition">
                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt class="text-base font-medium text-gray-600">Order ID:</dt>
                  <dd class="mt-1.5 text-base font-semibold text-gray-900">
                    <a href="#" class="hover:underline">{{ order.id }}</a>
                  </dd>
                </dl>
                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt class="text-base font-medium text-gray-600">Date:</dt>
                  <dd class="mt-1.5 text-base font-semibold text-gray-900">

                    {{ new Date(order.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) }}
                  </dd>
                </dl>
                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt class="text-base font-medium text-gray-600">Price:</dt>
                  <dd class="mt-1.5 text-base font-semibold text-gray-900">
                    {{ order.grand_total }}
                  </dd>
                </dl>
                <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt class="text-base font-medium text-gray-600">Status:</dt>
                  <dd class="me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium"
                    :class="statusClass(order.order_status)">
                    <span class="mr-1">
                      <Icon :icon="statusIcons[order.order_status.toLowerCase()]" class="w-4 h-4" />
                    </span>
                    {{ order.order_status }}
                  </dd>
                </dl>
                <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-96 lg:items-center lg:justify-end gap-4">
                  <button v-if="
                    order.order_status === 'Pre-order' ||
                    order.order_status === 'In transit'
                  " type="button" @click="handleCancel"
                    class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 transition">
                    Cancel Order
                  </button>
                  <RouterLink type="button" @click="handleOrder"
                    class="w-full rounded-lg border border-green-700 px-3 py-2 text-center text-sm font-medium text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition">
                    Order Again
                  </RouterLink>
                  <RouterLink :to="`/order-detail/${id}`"  @click="handleViewDetails"
                    class="w-full rounded-lg border border-blue-700 px-3 py-2 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition">
                    View Details
                  </RouterLink>
                  <RouterLink @click="handleRefunds" :to="{
                    path: '/refund-order',
                    query: {
                      orderId: order.order_code,
                      orderDate: order.created_at,
                      orderItem: order.item,
                      orderTitle: order.title,
                      orderImage: order.cover_image_url,
                      orderQty: order.quantity,
                    },
                  }"
                    class="w-full rounded-lg border border-slate-700 px-3 py-2 text-center text-sm font-medium text-primarysButton hover:bg-secondysButton hover:text-white focus:outline-none focus:ring-4 focus:ring-secondysButton transition">
                    Refund Order
                  </RouterLink>
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
import { Icon } from "@iconify/vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { onMounted, ref } from "vue";
// import axios from "axios";
import useAxios from "@/composables/useAxios";

const toast = useToast();
const route = useRouter();
const authStore = useAuthStore();
const { sendRequest } = useAxios();
const statusIcons = {
  "pre-order": "mdi:clock-outline",
  "in transit": "mdi:truck-delivery-outline",
  confirmed: "mdi:check-circle-outline",
  cancelled: "mdi:close-circle-outline",
};

const data = ref();

onMounted(async () => {
  if (!authStore?.user?.token) {
    toast.error("Please login first!");
    return route.push("/login?redirect=/order-history");
  }
  try {
    const response = await sendRequest({
      url: `/customer/${authStore.user?.user?.id}`,
      method: 'GET',
      header: {
        Authorization: `Bearer ${authStore.user.token}`,
        Accept: "application/json",
      }
    })
    data.value = response.data;
  } catch (error) {
    toast.error("Failed to fetch orders.");
  }
});

function statusClass(status) {
  const normalizedStatus = status.toLowerCase();
  switch (normalizedStatus) {
    case "pre-order":
      return "bg-blue-100 text-blue-800";
    case "in transit":
      return "bg-yellow-100 text-yellow-800";
    case "confirmed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function handleCancel() {
  toast.error("Order Have Been Cancel");
}

function handleOrder() {
  toast.success("Order Place again");
}

function handleViewDetails() {
  toast.warning("This is the order details");
  route(`/order-detail/${id}`);
}

function handleRefunds() {
  toast.success("Navigate to Refund Page");
  route("/refund-order");
}
</script>

<style scoped>
@media (max-width: 1023px) {
  .box+.box {
    margin-top: 1.5rem;
  }
}
</style>
