<script setup>
import ProductCard from "@/components/Layouts/ProductCard.vue";
import useAxios from "@/composables/useAxios.js";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const { loading, error, sendRequest } = useAxios();
const shop = ref(null);

const getShop = async () => {
  const response = await sendRequest({
    url: `/public/shop/${route?.params?.slug}`,
  });
  if (response) {
    shop.value = response.data;
  }
};

onMounted(() => {
  getShop();
});
</script>
<template>
  <AppLayout>
    <section class="py-5">
      <div class="relative w-full h-72 rounded-md overflow-hidden mb-5">
        <div
          class="absolute bg-boxColor flex gap-2 p-4 top-1/2 -translate-y-1/2 left-20 w-1/3 shadow-lg rounded"
        >
          <img class="w-20 h-auto" :src="shop?.logo_url" />
          <div>
            <h3 class="text-lg font-semibold leading-tight">
              {{ shop?.name }}
            </h3>
            <p class="text-sm text-gray-600">{{ shop?.bio }}</p>
          </div>
        </div>
        <img :src="shop?.banner_url" class="w-full h-full" />
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <ProductCard :data="product" v-for="product in shop?.products" />
      </div>
    </section>
  </AppLayout>
</template>