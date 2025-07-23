<script setup>
// import Container from "@/components/Container.vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Navigation, Pagination, Autoplay];

const props = defineProps({
  data: Array,
  averageRating: String,
  totalReviews: Number,
});
</script>
<template>
  <section id="client_reviews" class="mb-5 py-10">
      <div>
        <h3 class="text-xl lg:text-3xl font-medium mb-3 text-black pb-2">
          Client Reviews
        </h3>

        <div>
          <div class="flex items-center gap-2">
            <h4 class="text-4xl font-medium text-black pb-2">
              {{ averageRating }}
            </h4>
            <ul class="flex items-center gap-2">
              <li class="flex items-center gap-2 text-primary">
                <Icon
                  :name="
                    averageRating < star ? 'carbon:star' : 'carbon:star-filled'
                  "
                  v-for="star in 5"
                  :key="star"
                />
              </li>
            </ul>
          </div>
          <p class="text-black text-sm lg:text-lg">
            ( {{ totalReviews }} ) Reviews
          </p>
        </div>
        <div>
          <Swiper
            :breakpoints="{
              '320': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '1024': {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }"
            :scrollbar="{ hide: true }"
            :navigation="true"
            :modules="modules"
            class="mySwiper py-10"
          >
            <SwiperSlide v-for="item in data">
              <div class="bg-white text-justify p-4 shadow h-full">
                <div class="flex items-center gap-2 mb-3">
                  <h3 class="text-base font-bold">{{ item?.name }}</h3>
                  <div>
                    <span class="flex items-center gap-2 text-lg text-primary">
                      <Icon
                        :name="
                          item?.rating < star
                            ? 'carbon:star'
                            : 'carbon:star-filled'
                        "
                        v-for="star in 5"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  {{ item?.review }}
                </div>
                <div class="mt-5">
                  <p class="text-end text-sm text-gray-600">
                    <span>{{
                      new Date(item?.created_at).toISOString().split("T")[0]
                    }}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  </section>
</template>
<style scoped>
.swiper-slide {
  height: unset !important;
  min-height: 100% !important;
}
</style>
