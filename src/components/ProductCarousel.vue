<template>
  <div class="bg-white p-3">
    <h2 class="text-lg font-semibold p-4 text-secondary">{{ category.name }}</h2>

    <swiper
      v-if="category.products.length"
      :slides-per-group="5"
      :breakpoints="{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 40 }
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="product in category.products"
        :key="product.id"
        class="w-full h-56"
      >
        <RouterLink to="/single-product" class="block w-full h-full">
          <img
          :src="product.photo"
            v-lazy="product.photo"
            alt="Product Image"
            class="w-full h-full object-cover rounded"
          />
        </RouterLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const modules = [EffectFade, Navigation, Pagination, Autoplay];
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import ElectronicsIcon from '../assets/img/download.jfif';
import ComputerIcons from '../assets/img/images.jfif';
import PhonesIcon from '../assets/img/download (1).jfif';
import TabletsIcon from '../assets/img/download (2).jfif';
import AccessoriesIcon from '../assets/img/download (3).jfif';
import FashionIcon from '../assets/img/download (4).jfif';

// const props = defineProps({
//   category:Object
// })
const category = ref({
  name: 'Category',
  slug: 'Category',
  children_recursive: [
    {
      id: 1,
      name: 'Electronics',
      slug: 'ElectronicsIcon',
      photo: ElectronicsIcon,
    },
    {
      id: 2,
      name: 'Phones',
      slug: 'phones',
      photo: PhonesIcon,
    },
    {
      id: 3,
      name: 'Tablets',
      slug: 'tablets',
      photo: TabletsIcon,
    },
    {
      id: 4,
      name: 'Accessories',
      slug: 'accessories',
      photo: AccessoriesIcon,
    },
    {
      id: 5,
      name: 'Computers',
      slug: 'computers',
      photo: ComputerIcons,
    },
    {
      id: 6,
      name: 'Fashion',
      slug: 'fashion',
      photo: FashionIcon
    }
  ]
});


</script>