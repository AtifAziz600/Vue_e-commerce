<template>
  <RouterLink :to="`/single-product/${item?.id}`" class="flex gap-2 hover:bg-gray-300 p-3 rounded">
    <div class="w-20 h-20 p-3 rounded bg-white border border-gray-200">
      <img class="w-full h-full" v-lazy="item?.images[0]?.url" alt="">
    </div>
    <div class="flex flex-col">
      <p class="font-semibold text-xs lg:text-xl">{{ item?.title }}</p>
      <p class="text-xs lg:text-sm">{{ showpiece }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({ item:Object })
  const showpiece = computed(()=>{
    const prices = props.item.stocks?.map(product => product?.price);
    return Math.min(...prices)+' BDT'+' - '+Math.max(...prices)+' BDT';
  })
</script>