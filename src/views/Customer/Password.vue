<template>
  <AppLayout>
    <section class="bg-gray-200/80 lg:py-20 ">
      <RouterLink to="/dashboard" class="flex items-center max-w-2xl mx-auto">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
               </span>
        <h2 class="text-2xl">Update Password</h2>
      </RouterLink>

      <div class="items-center max-w-2xl mx-auto leading-8 bg-white p-10">
        <form action="">
          <div class="text-primary">
            <label for="name" class="block pb-1" >Current Password</label>
            <input type="password" name="name" id="name" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 pl-5">
          </div>
          <div class="text-primary">
            <label for="email" class="block pb-1" >New Password</label>
            <input type="password" name="email" id="email" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 pl-5">
          </div>
          <div class="text-primary">
            <label for="number" class="block pb-1" >Confirmed Password</label>
            <input type="password" name="number" id="number" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 pl-5">
          </div>
          <RouterLink to="/" class="font-semibold text-white bg-primary hover:bg-gray-600 py-2 px-4 inline-block mt-7">Update Password
          </RouterLink>
        </form>
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