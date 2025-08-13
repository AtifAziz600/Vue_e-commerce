<template>
  <div>
    <Swiper
      :style="{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#000',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <InnerImageZoom
          class="w-full h-full"
          :src="image?.full_url"
          zoomType="hover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <InnerImageZoom
          class="w-full h-auto"
          :src="coverImg"
          zoomType="hover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <InnerImageZoom
          class="w-full h-auto"
          :src="hoverImg"
          zoomType="hover"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image?.full_url" />
      </SwiperSlide>
      <SwiperSlide>
        <img :src="coverImg" />
      </SwiperSlide>
      <SwiperSlide>
        <img :src="hoverImg" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import "@websitebeaver/vue-magnifier/styles.css";
import { ref } from "vue";
import InnerImageZoom from "vue-inner-image-zoom";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const props = defineProps({
  images: {
    type: Array,
  },
  coverImg: {
    type: String,
  },
  hoverImg: {
    type: String,
  },
});
</script>