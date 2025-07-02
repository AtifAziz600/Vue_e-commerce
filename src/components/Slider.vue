<template>
  <RouterLink :to="'/productS-listing-page'">
    <div class="cursor-pointer flex flex-col gap-2 h-full w-fit md:min-w-[190px] max-w-[190px] xs:max-w-[250px]">
      <div class="p-2 h-48">
        <img class="mx-auto object-center object-contain max-h-full" src="https://m.media-amazon.com/images/I/31sIEzlmGTL._AC_SY200_.jpg" alt="product" />
      </div>
      <p v-if="off" class="text-red-700 space-x-2 text-[10px] xs:text-xs">
        <span class="text-white bg-red-700 px-1.5 py-1">
          Up to 100 % off
        </span>
        <span class="capitalize font-bold">Ofset Name</span>
      </p>
      <p class="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
        Product Title
      </p>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  image: String,
  off: Number,
  offerName: String,
  productTitle: String,
});
</script>

<style scoped>

</style>
