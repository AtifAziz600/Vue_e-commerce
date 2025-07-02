<template>
  <div class="relative mx-auto">
    <div class="gradient-effect absolute h-[50%] w-full bottom-0 z-10 bg-gradient-to-t from-[#e3e6e6] md:via-[#e3e6e6]"></div>
    <Swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide class="cursor-pointer" v-for="img in sliders?.data" v-bind:key="img.id">
          <img class="h-[200px] xs:h-[320px] md:h-[400px] object-top object-cover w-full lg:h-auto md:w-full"
               :src="img?.image" />
      </swiper-slide>
    </Swiper>
    <div
        class="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-between px-4 md:px-8">
      <button
          class="absolute left-4 hover:scale-125 active:scale-50 duration-200"
          @click="swiperRef?.slidePrev()"
      >
         <Icon :mdi="chevron-left" class="h-2 w-2 text-white" />
      </button>
      <button
          class="absolute right-4 hover:scale-125 active:scale-50 duration-200"
          @click="swiperRef?.slideNext()"
      >
        <Icon :mdi="chevron-right" class="h-2 w-2 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { Icon } from '@iconify/vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import useAxios from "@/composables/useAxios.js";
const modules = [EffectFade, Navigation, Pagination, Autoplay];
const swiperRef = ref(null);

const {sendRequest, loading, error} = useAxios()
const sliders = ref([])
onMounted(async () => {
  sliders.value = await sendRequest('/sliders');
})

</script>
