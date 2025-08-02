<script setup>
import useAxios from "@/composables/useAxios.js";
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

const { loading, error, sendRequest } = useAxios();
const shops = ref(null);

const getShops = async () => {
  const response = await sendRequest({
    url: "/public/shop",
    method: "GET",
  });
  if (response) {
    shops.value = response.data;
  }
};

onMounted(() => {
  getShops();
});
</script>

<template>
  <AppLayout>
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold text-gray-900">Featured Shops</h1>
      </div>

      <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="i in 5" :key="i" class="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
          <div class="bg-gray-200 h-48 w-full"></div>
          <div class="p-4 space-y-2">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>


      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <RouterLink
          :to="`/shop/${shop.slug}`"
          class="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          v-for="shop in shops?.data"
          :key="shop.id"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="shop?.logo_url" 
              :alt="shop.name"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between">
              <h3 class="text-lg font-semibold text-gray-900 line-clamp-1">{{ shop?.name }}</h3>
              <Icon 
                icon="heroicons:arrow-up-right-20-solid" 
                class="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition"
              />
            </div>
            <p class="mt-1 text-sm text-gray-500 line-clamp-2">{{ shop?.bio }}</p>
          </div>
        </RouterLink>
      </div>
    </section>
  </AppLayout>
</template>