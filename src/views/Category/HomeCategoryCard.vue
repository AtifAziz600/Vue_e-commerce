<template>
<div class="bg-white shadow-2xl overflow-hidden border border-gray-200">
  <div class="text-start text-4xl font-semibold ml-3">Category</div>

    <div v-if="categories?.length > 0" class="p-1">
      <Swiper
        :slides-per-view="2"
        :space-between="20"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }"
        class="!px-2"
      >
        <SwiperSlide
          v-for="category in categories"
          :key="category?.id"
        >
          <RouterLink
            :to="`/category/${category?.slug}`"
            class="flex flex-col items-center group border border-gray-200 rounded-2xl p-4 bg-gradient-to-b from-white to-[#f5f6fa] hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <div class="w-30 h-full rounded-full bg-gray-50 overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center mb-2">
              <img
                :src="category?.icon_url"
                :alt="category?.name"
                class="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span class="mt-2 text-base font-medium text-gray-700 group-hover:text-black transition">
              {{ category?.name }}
            </span>
          </RouterLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

const categories = ref(null);

const getCategory = async() => {
  const res = await axios.get('http://localhost:8000/api/public/get-all-category-list')
  if(res){
    categories.value = res.data
  }
}

onMounted(() => getCategory())

</script>
