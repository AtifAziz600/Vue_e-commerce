<template>
  <AppLayout>
    <section class="py-24 relative bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div
        class="w-full max-w-full px-6 mx-auto rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-gray-200">
        <div class="flex flex-col items-center gap-10 py-10">
          <div class="flex flex-col items-center gap-2">
            <Icon class="w-16 h-16 text-green-500 mb-2" icon="material-symbols:check-rounded"/>
            <h2 class="text-center text-gray-900 text-3xl font-bold font-sans tracking-tight">
              {{ customerName }}, Thank You for Your Order!
            </h2>
            <p class="max-w-xl text-center text-gray-500 text-lg font-normal leading-8">
              Your order has been successfully placed. You will receive an email
              with the details of your order.
            </p>
          </div>
          <div class="w-full flex flex-col gap-8">
            <div class="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div class="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 class="text-gray-900 text-xl font-semibold">Item</h3>
                <h3 class="text-right text-gray-900 text-xl font-semibold">
                  Total
                </h3>
              </div>
              <div>
                <div v-for="item in orderItems" :key="item.id"
                  class="flex justify-between items-center gap-6 px-6 py-4 border-b last:border-b-0 border-gray-100 hover:bg-gray-50 transition">
                  <div class="flex items-center gap-4">
                    <img class="object-cover w-16 h-16 rounded-lg border border-gray-200 shadow" :src="item.image"
                      :alt="item.alt" />
                    <div>
                      <h5 class="text-gray-900 text-lg font-semibold">
                        {{ item.title }}
                      </h5>
                      <h6 class="text-gray-500 text-base font-normal">
                        QTY: {{ item.qty }}
                      </h6>
                    </div>
                  </div>
                  <h4 class="text-right text-gray-900 text-lg font-semibold">
                    zł {{ item.total }}
                  </h4>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1 rounded-xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col gap-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 font-medium">Estimated Delivery</span>
                  <span class="text-gray-700 font-semibold">{{
                    estimatedDelivery
                  }}</span>
                </div>
                <div class="flex justify-between items-center border-y border-gray-100 py-4">
                  <span class="text-gray-500 font-medium">Delivery Address</span>
                  <span class="text-gray-700 font-semibold">{{
                    deliveryAddress
                  }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 font-medium">Payment Method</span>
                  <span class="text-gray-700 font-semibold">{{
                    paymentMethod
                  }}</span>
                </div>
              </div>
              <div class="flex-1 rounded-xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col gap-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 font-medium">Subtotal</span>
                  <span class="text-gray-900 font-semibold">zł {{ subtotal }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-500 font-medium">Shipping</span>
                  <span class="text-gray-900 font-semibold">zł {{ shipping }}</span>
                </div>

                <div class="border-t border-gray-100 my-2"></div>
                <div class="flex justify-between items-center">
                  <span class="text-deepMaroon text-lg font-bold">Total</span>
                  <span class="text-deepMaroon text-lg font-bold">zł {{ total }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex justify-center gap-4 mt-4">
              <RouterLink to="/"
                class="px-6 py-2.5 rounded-xl bg-white border border-deepMaroon text-deepMaroon hover:text-white font-semibold shadow hover:bg-red-800 transition">
                Return To Shopping
              </RouterLink>
              <RouterLink :to="{
                path: `/order-tracking/${route.query.order_code}`,
              }" class="px-6 py-2.5 rounded-xl bg-deepMaroon hover:bg-red-800 text-white font-semibold shadow transition">
                Track My Order
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useOrderStore } from "../../stores/useStoreOrder";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
const orderStore = useOrderStore();
const orderItems = ref([]);

if (route.query.items) {
  try {
    orderItems.value = JSON.parse(decodeURIComponent(route.query.items));
  } catch (e) {
    console.error("Failed to parse order items:", e);
  }
}

const customerName = ref(route.query.customer_name || "Customer");
const estimatedDelivery = ref("3-5 Business Days");
const deliveryAddress = ref(route.query.customer_address || "N/A");
const paymentMethod = ref(orderStore.paymentMethod || "Credit Card");

const subtotal = ref(route.query.subtotal);
const shipping = ref(route.query.shipping);
const total = ref(route.query.total);
</script>
