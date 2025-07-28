<template>
  <section class="py-24 relative bg-gray-100">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full flex-col justify-start items-start gap-12 inline-flex">
        <div class="w-full flex-col justify-center sm:items-start items-center gap-1 flex">
          <h2 class="text-gray-500 text-2xl font-semibold font-manrope leading-9">
            Order <span class="text-indigo-600">{{ order_code }}</span>
          </h2>
          <span class="text-gray-500 text-base font-medium leading-relaxed">{{
            orderDate
          }}</span>
        </div>
        <div class="w-full bg-white p-8 rounded-xl flex-col gap-5 flex">
          <h2 class="text-gray-900 text-2xl font-semibold font-manrope border-b pb-5">
            Order Tracking
          </h2>
          <div
            class="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border border-gray-200">
            <div class="flex items-center gap-4 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="text-gray-700 font-medium">Tracking #:</span>
                <span class="text-blue-600 font-semibold">{{ order_code }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 font-medium">Status:</span>
                <span class="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
                  Order Placed
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 font-medium">Order Status:</span>
                <span class="px-3 py-1 text-sm font-semibold rounded-full"
                  :class="orderStatus === 'shipped' ? 'bg-green-100 text-green-700' : 'delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'">
                  {{ orderStatus }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700 font-medium">Delivery Status:</span>
                <span class="px-3 py-1 text-sm font-semibold rounded-full"
                  :class="orderStatus === 'delivered' ? 'bg-green-100 text-green-700' : 'shipped' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'">
                  {{ orderStatus }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-white p-8 rounded-xl flex-col gap-5 flex">
          <h2 class="text-gray-900 text-2xl font-semibold font-manrope border-b pb-5">
            Order Items
          </h2>
          <div class="flex flex-col gap-5 border-b pb-5">
            <div v-for="shopOrder in order.value?.orders" :key="shopOrder.id" class="flex flex-col gap-4">
              <div v-for="item in shopOrder.order_details" :key="item.id"
                class="grid md:grid-cols-12 grid-cols-1 gap-4 items-center">
                <div class="md:col-span-8 flex items-center gap-4">
                  <img :src="item.product.cover_image_url" :alt="item.product.title"
                    class="w-24 h-24 rounded-md object-cover" />
                  <div class="flex flex-col md:items-start items-center gap-2">
                    <h4 class="text-gray-900 text-xl font-medium">
                      {{ item.product.title }}
                    </h4>
                  </div>
                </div>
                <div class="md:col-span-4 flex md:flex-row flex-col justify-between items-center gap-2">
                  <h4 class="text-gray-500 text-xl font-semibold">
                    zł {{ parseFloat(item.price) }} x {{ item.quantity }}
                  </h4>
                  <h4 class="text-gray-900 text-xl font-semibold">
                    zł {{ parseFloat(item.price) * item.quantity }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-between text-gray-500 text-base font-medium">
              <span>Subtotal</span>
              <span>zł {{ subtotal }}</span>
            </div>
            <div class="flex justify-between text-gray-500 text-base font-medium">
              <span>Shipping Charge</span>
              <span>zł {{ shipping }}</span>
            </div>
            <div class="flex justify-between text-gray-900 text-lg font-semibold">
              <span>Total</span>
              <span>zł {{ total }}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-4">
          <div class="flex justify-center m-5">
            <button @click="showModal = true"
              class="block text-white bg-deepMaroon hover:bg-secondysButton focus:ring-4 focus:outline-none focus:ring-deepMaroon font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button">
              Cancel Order
            </button>
          </div>
          <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
              <div class="flex justify-between items-center p-5 border-b rounded-t">
                <h3 class="text-xl font-semibold text-gray-900">Cancel Order</h3>
                <button @click="showModal = false"
                  class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                  <Icon class="w-5 h-5 text-black" icon="mdi:close" />
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <form @submit.prevent="submitCancellation">
                <div v-for="shopOrder in order.value?.orders" :key="shopOrder.id" class="p-6 space-y-4">
                  <div v-for="item in shopOrder.order_details" :key="item.id">
                    <img :src="item.product.cover_image_url" class="w-24 h-24 rounded-md object-fit" />
                    <label class="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
                    <p class="text-gray-900"> {{ item.product.title }}</p>
                  </div>
                  <div>
                    <label for="reason" class="block mb-2 text-sm font-medium text-gray-900">Reason</label>
                    <textarea id="reason" rows="4" v-model="cancelReason"
                      class="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-deepMaroon focus:border-deepMaroon"
                      placeholder="Enter your reason" required></textarea>
                  </div>
                </div>
                <div class="flex justify-end p-6 border-t">
                  <button type="button" @click="() => {
                    showModal = false;
                    toast.info('Order cancellation aborted.');
                  }" class="text-gray-600 bg-white border border-gray-300 hover:bg-secondysButton hover:text-white font-medium rounded-lg text-sm px-4 py-2 mr-3">
                    Cancel
                  </button>
                  <button type="submit"
                    class="text-white bg-deepMaroon hover:bg-secondysButton font-medium rounded-lg text-sm px-5 py-2.5">
                    Confirm
                  </button>
                </div>
              </form>
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
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useOrderStore } from "../../stores/useStoreOrder";
import useAxios from "@/composables/useAxios";
import { useAuthStore } from "@/stores/useAuthStore";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const toast = useToast();
const router = useRouter();
const showModal = ref(false);
const cancelReason = ref("");
const { sendRequest } = useAxios();
const authStore = useAuthStore();
const route = useRoute();
const orderId = route.params.id;
const order = useOrderStore();
const itemsFromQuery = ref([]);

const submitCancellation = async () => {
  if (!cancelReason.value.trim()) {
    return toast.warning("Please enter a reason for cancellation.");
  }

  try {
    const res = await sendRequest({
      method: "POST",
      url: `/customer/order/${order?.value?.id}/cancel`,
      data: {
        combined_order_id: order?.value?.id,
        message: cancelReason.value,
      },
      headers: {
        Authorization: `Bearer ${authStore?.user?.token}`,
      },
    });

    if (res && res.status === 200) {
      toast.success("Your cancellation request has been submitted.");
      showModal.value = false;
      cancelReason.value = "";
      router.push('/')
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to submit cancellation request.");
  }
};

if (route.query.items) {
  try {
    itemsFromQuery.value = JSON.parse(decodeURIComponent(route.query.items));
  } catch (e) {
    console.error("Failed to parse items from query", e);
  }
}
const getCustomer = async () => {
  const response = await sendRequest({
    url: `customer/order/${orderId}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authStore?.user?.token}`,
    },
  });
  if (response) {
    order.value = response.data;
  }
};
onMounted(async () => {
  window.scrollTo(0, 0);
  await getCustomer();
});

const order_code = computed(() => order.value?.order_code);
const customerName = computed(() => order.value?.customer?.name);
const subtotal = computed(() => order.value?.sub_total);
const shipping = computed(() => order.value?.delivery_charge);
const total = computed(() =>
  order.value?.grand_total
);
const orderStatus = computed(() => order.value?.order_status);
const orderDate = computed(() =>
  order.value?.created_at
    ? new Date(order.value.created_at).toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    : ""
);

</script>
