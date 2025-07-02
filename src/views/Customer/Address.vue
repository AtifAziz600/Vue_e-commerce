<template>
  <AppLayout>
    <section class="bg-gray-200/80 lg:py-20 ">
        <div class="flex justify-between">
            <RouterLink to="/dashboard" class="flex items-center max-w-4xl mx-auto">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
               </span>
              <h2 class="text-2xl">Address Book</h2>
            </RouterLink>
          <RouterLink to="/address-book" class="flex text-xl font-normal mx-auto max-w-4xl text-white bg-primary hover:bg-gray-600 py-1 px-2 my-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg>
            Add New Address
          </RouterLink>
        </div>

      <div class="items-center max-w-4xl mx-auto leading-8 p-5">
        <div class="flex flex-wrap">
          <div class="w-1/2 p-3" :v-for="item in 3">
            <div class="bg-white shadow p-5">
              <h2>Offer Address</h2>
              <p>Dhaka, mains</p>
              <p>mail@email.com</p>
              <p>01244444456</p>
              <p>Area: Dhaka & Delivery Charge: 60 ৳</p>
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

<style  scoped>

</style>