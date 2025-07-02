<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { EffectFade, Navigation, Pagination as SwiperPagination, Autoplay } from 'swiper/modules';
const modules = [EffectFade, Navigation, SwiperPagination, Autoplay];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import ProductCard from "@/components/ProductCard.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import useAxios from "@/composables/useAxios.js";
import Pagination from "@/components/Pagination.vue";
const {sendRequest, loading} = useAxios();

const data = ref([])

const allCustomer = async (url) => {
  const route = useRoute();
  const response = await sendRequest({
    url: url ?? `/product-filter`,
    params: {
      category: route.query?.category,
    }
  })
  data.value = response?.data
}

onMounted(async () => {
  await allCustomer()
})

</script>

<template>
   <AppLayout>
<!--        <section>
            <div>
                <swiper
                    :slidesPerGroup="3"
                    :breakpoints="{
                                '640': {
                                  slidesPerView:4,
                                  spaceBetween: 10,
                                },
                                '768': {
                                  slidesPerView: 3,
                                  spaceBetween: 40,
                                },
                                '1024': {
                                  slidesPerView:9,
                                  spaceBetween: 1,
                                },
                              }"
                    :autoplay="{
                      delay: 2500,
                        disableOnInteraction: false,
                      }"

                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >

                  &lt;!&ndash;              1st picture banner &ndash;&gt;
                    <swiper-slide v-for="slide in 20">
                        <RouterLink to="/product" class=" bg-white block text-center" >
                          <img class="w-24 h-24" src="https://static-01.daraz.com.bd/p/d07f6ad99028af6555010560268369fa.jpg" alt="">
                          <p class="text-sm font-normal p-1">Sports Sandals</p>
                        </RouterLink>
                    </swiper-slide>
                </swiper>
            </div>
        </section>-->
       <section class="p-0">
           <div class="flex flex-col">
<!--               <div class="w-full lg:w-1/5">
                  <div>
                      <h2>Department</h2>
                      <form action="#">
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test1" name="radio-group" checked>
                            <label for="test1">All</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test2" name="radio-group">
                            <label for="test2">Amazon Device & Accessories</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Appliances</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Art, Crafts & Sewing</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Automotive</label>
                          </p>

                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test2" name="radio-group">
                            <label for="test2">Baby Products</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Beauty & Personal Care</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Books</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Cell Phones & Accessories</label>
                          </p>
                            <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test2" name="radio-group">
                            <label for="test2">Clothing, Shoes & Jewelry</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Electronics</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Grocery & Gourmet Food</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Health & Household</label>
                          </p>

                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test2" name="radio-group">
                            <label for="test2">Home & Kitchen</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Industrial & Scientific</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Kindle Store</label>
                          </p>
                          <p class="text-sm font-normal leading-8">
                            <input type="radio" class="mx-2" id="test3" name="radio-group">
                            <label for="test3">Movies & TV</label>
                          </p>
                      </form>
                  </div>
               </div>-->

             <div class="border-b border-orange-400 items-center w-full h-10 flex justify-between">
               <h2 class="text-xs font-normal md:text-lg md:font-semibold">
                 <span v-if="data?.products?.from && data?.products?.to">
                   {{ data?.products?.from }} - {{ data?.products?.to }}
                    of over
                 </span>{{ data?.products?.total }}
                 results for
                 <span class="text-orange-400">"{{ data?.category?.name }}"</span>
               </h2>
<!--               <select class="border-2 rounded border-orange-300" name="" id="">-->
<!--                 <option value="null">Sort By</option>-->
<!--               </select>-->
             </div>

             <div class="w-full mt-5 px-6">
               <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div :v-for="i in 12" class="col-span-1 animate-pulse rtl:space-x-reverse md:flex md:items-center">
                   <div class="flex items-center justify-center w-full h-64 bg-white rounded sm:w-96 dark:bg-white">
                     <svg class="w-40 h-40 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                       <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                     </svg>
                   </div>
                 </div>
               </div>
                <div v-else-if="data?.products?.data?.length" class="grid grid-cols-2 lg:grid-cols-5 gap-3">
                    <ProductCard :v-if="data?.products?.data?.length" :v-for="product in data?.products?.data" :product="product"/>
                </div>
               <div v-else class="w-full h-full min-h-[70vh] grid place-items-center">
                 <div class="flex items-center justify-center flex-col">
                   <h1 class="text-4xl font-bold text-gray-400 mb-2">Product Not Found</h1>
                   <p class="text-gray-600 mb-4">We're sorry, but the product you're looking for is not available.</p>
                   <RouterLink to="/" class="bg-orange-400 text-white px-3 py-1 rounded-full mt-3 text-xs">Back To Home</RouterLink>
                 </div>
               </div>

                <div>
                  <Pagination @some-event="allCustomer"
                              :links="data?.products?.links"
                              :from="data?.products?.from"
                              :to="data?.products?.to"
                              :total="data?.products?.total"
                              :notShowNumber="false"/>
                </div>
             </div>
           </div>
       </section>
   </AppLayout>
</template>

<style  scoped>

</style>