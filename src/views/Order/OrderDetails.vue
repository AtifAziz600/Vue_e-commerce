<template>
  <AppLayout>
    <Container>
      <main class="mt-10 w-full max-w-3xl mx-auto">
        <!-- Product Section -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="p-6">
            <h2 class="text-3xl font-semibold text-gray-900 mb-2">
              {{ order?.title }}
            </h2>
            <p class="text-sm text-gray-500 mb-4">
              Ordered on {{ new Date(order?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) }}
            </p>

            <img
              :src="order?.cover_image_url"
              alt="Product Image"
              class="w-full h-72 object-contain rounded-xl border"
            />

            <div class="mt-6 text-gray-700 leading-relaxed text-base border-t pt-4">
              <div v-html="order?.content"></div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import useAxios from "@/composables/useAxios";
import { onMounted, ref } from "vue";

const { sendRequest } = useAxios();
const authStore = useAuthStore();

const customerLoading = ref(false);
const customer = ref(null);
const order = ref(null);

const getCustomer = async () => {
  customerLoading.value = true;
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
    const orderDetail =
      response.data.combine_orders?.[0]?.orders?.[0]?.order_details?.[0];

    if (orderDetail) {
      order.value = {
        title: orderDetail.product.title,
        cover_image_url: orderDetail.product.cover_image_url,
        created_at: response.data.combine_orders[0].created_at,
        content: `
          <p>This item is part of your Stripe order.</p>
          <p>Shipping soon to: <strong>${response.data.addresses?.[0]?.street_address || "your address"}</strong></p>
          <p>Payment Status: <strong>${response.data.combine_orders?.[0]?.payment_status}</strong></p>
        `,
      };
    }

    customerLoading.value = false;
  }
};

onMounted(async () => {
  window.scrollTo(0, 0);
  await getCustomer();
});
</script>

<style scoped>

body {
  background-color: #f5f6f7;
}

main {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    sans-serif;
}
</style>
