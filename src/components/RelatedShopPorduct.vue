<script setup>
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import ShopCard from "./Layouts/ShopCard.vue";

const modules = [Navigation, Pagination, Autoplay];

const props = defineProps({
  data: Array,
});
</script>

<template>
  <section class="py-5">
    <Swiper
      :modules="modules"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="mySwiper3"
      :breakpoints="{
        320: { slidesPerView: 2, spaceBetween: 5 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
      }"
    >
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>

      <SwiperSlide v-for="item in data" :key="item.id">
        <ShopCard :data="item" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>