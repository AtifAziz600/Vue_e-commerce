<script setup>
import { Icon } from "@iconify/vue";
import { computed, inject } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/useCartStore";
import { useWishlistStore } from "@/stores/useWishlistStore.js";
const cart = useCartStore();
const alldata = inject("data");
const wishlistStore = useWishlistStore();
const props = defineProps({
  data: Object | null,
});

const truncatedTitle = computed(() => {
  return props.data?.title?.length > 30
    ? props.data.title.substring(0, 30) + "..."
    : props.data.title;
});
const discountPercentage = computed(() => {
  if (!props.data?.discount_price || !props.data?.price) return 0;
  return Math.round(((props.data.price - props.data.discount_price) / props.data.price) * 100);
});
</script>

<template>
  <RouterLink
    :to="`/product/${data?.slug}`"
    class="group relative block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
  >
    <div 
      v-if="data?.discount_price > 0"
      class="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10"
    >
      -{{ discountPercentage }}%
    </div>

    <div class="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
      <img 
        class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
        :src="data?.cover_image_url" 
        :alt="data?.title"
        loading="lazy"
      />

    </div>

    <div class="space-y-1">
      <h3 class="text-gray-900 font-medium text-sm line-clamp-2 h-10">
        {{ truncatedTitle }}
      </h3>
      
      <div class="flex items-center">
        <div class="flex">
          <svg 
            v-for="i in 5" 
            :key="i" 
            class="h-4 w-4" 
            :class="i <= (data?.rating || 0) ? 'text-yellow-400' : 'text-gray-300'" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-xs text-gray-500 ml-1">({{ data?.reviews || 0 }})</span>
      </div>

      <div class="flex items-center gap-2 mt-1">
        <p class="text-lg font-bold text-gray-900">
          {{ alldata?.currency_symbol }}{{ data?.discount_price || data?.price }}
        </p>
        <p 
          v-if="data?.discount_price > 0"
          class="text-sm text-gray-500 line-through"
        >
          {{ alldata?.currency_symbol }}{{ data?.price }}
        </p>
      </div>

    </div>
  </RouterLink>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all {
  transition-property: all;
}

.duration-300 {
  transition-duration: 300ms;
}

.group:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>