<template>
   <AppLayout>
       <section class="bg-gray-200/80 lg:py-20 ">
           <RouterLink to="/dashboard" class="flex items-center max-w-4xl mx-auto">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
               </span>
               <h2 class="text-2xl">Order History</h2>
           </RouterLink>

           <div class="flex flex-col lg:flex-row gap-5 max-w-4xl mx-auto">
               <div class="w-full lg:w-4/5">
                   <div class="bg-white my-5" :v-for="item in 4">
                       <div class="flex justify-between">
                           <div>
                             <h3 class="text-md lg:text-2xl font-semibold p-5">Order #1</h3>
                             <p class="px-5 pb-3">Order Date: 2024-06-01</p>
                           </div>
                           <div class="flex gap-3 items-end p-2 text-green-800">
                             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z" fill="currentColor"/></svg>
                             <p class="text-md font-medium">Pending</p>
                           </div>
                       </div>
                       <div class="flex flex-col lg:flex-row gap-3 p-5 border-y border-gray-300 mb-5">
                           <div>
                             <img src="https://m.media-amazon.com/images/I/81KFdYGPo+L._AC_AA180_.jpg" alt="">
                           </div>
                           <div class="w-full order-last lg:order-none lg:w-3/5">
                             <h3 class="font-medium">Melissa & Doug K's Kids Itsy-Bitsy Spider 8-Page Soft Activity Book for Babies and Toddlers
                             </h3>
                             <p class="text-xs py-3"> +1 Item(s)</p>
                             <h3 class="font-medium">Variation : <span class="font-normal">blue/</span></h3>
                           </div>

                           <div class="w-full lg:w-1/5">
                             <p class="text-sm font-medium lg:text-right">$14.79</p>
                           </div>
                           <RouterLink to="#" class="border-l border-gray-300 text-sm text-cyan-700 hover:underline px-5 h-5">View</RouterLink>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   </AppLayout>
</template>

<script setup>

import AppLayout from "@/components/Layouts/AppLayout.vue";
import {RouterLink} from "vue-router";
</script>

<style scoped>

</style>