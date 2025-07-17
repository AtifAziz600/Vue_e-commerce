<template>
<div class="bg-white shadow-2xl overflow-hidden border border-gray-200">
  <div class="text-start text-4xl font-semibold ml-3">Category</div>
    <div v-if="category.children_recursive.length" class="p-1">
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
          v-for="child in category.children_recursive"
          :key="child.id"
        >
          <RouterLink
            :to="child.slug"
            class="flex flex-col items-center group border border-gray-200 rounded-2xl p-4 bg-gradient-to-b from-white to-[#f5f6fa] hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <div class="w-30 h-full rounded-full bg-gray-50 overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center mb-2">
              <img
                :src="child.photo"
                :alt="child.name"
                class="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span class="mt-2 text-base font-medium text-gray-700 group-hover:text-black transition">
              {{ child.name }}
            </span>
          </RouterLink>
        </SwiperSlide>
      </Swiper>
    </div>
    <div v-else class="relative p-8">
      <ProductSlider :products="category.products" />
      <div class="relative w-full aspect-[3/1] mt-6 rounded-full overflow-hidden shadow-md">
        <img
          :src="category.photo"
          alt="Category"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-3xl"
        />
        <div
          class="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 shadow rounded-full"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ElectronicsIcon from '../../assets/img/electorcis.jfif';
import ComputerIcons from '../../assets/img/images.jfif';
import PhonesIcon from '../../assets/img/phone.jfif';
import TabletsIcon from '../../assets/img/download (2).jfif';
import AccessoriesIcon from '../../assets/img/download (3).jfif';
import FashionIcon from '../../assets/img/images (2).jfif';
import Health from '../../assets/img/health.jpg';
import Pharmacy from '../../assets/img/Aspirin75mgTablets.png';
import ToyGameIcon from '../../assets/img/LEGOClassicBricks.png'
import ProductSlider from '@/components/ProductSlider.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const category = ref({
  slug: 'Category',
  children_recursive: [
    {
      id: 1,
      name: 'Electronics',
      slug: 'electronics',
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
      slug: 'computer',
      photo: ComputerIcons,
    },
    {
      id: 6,
      name: 'Fashion',
      slug: 'fashion',
      photo: FashionIcon
    },
    {
      id: 7,
      name: 'Health',
      slug: 'health',
      photo: Health
    },
    {
      id: 8,
      name: 'Pharmacy',
      slug: 'pharmacy',
      photo: Pharmacy
    },
    {
      id: 9,
      name: 'Toys And Game',
      slug: 'toysgames',
      photo: ToyGameIcon
    }
  ]
});

</script>
