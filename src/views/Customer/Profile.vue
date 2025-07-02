<template>
    <AppLayout>
        <section class="bg-gray-200/80 lg:py-20 ">
            <RouterLink to="/dashboard" class="flex items-center max-w-2xl mx-auto">
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
               </span>
              <h2 class="text-2xl">Edit Profile</h2>
            </RouterLink>

            <div class="items-center max-w-2xl mx-auto leading-8 bg-white p-10">
              <form action="">
                <div class="text-primary">
                  <label for="name" class="block pb-1" >Name</label>
                  <input type="text" name="name" id="name" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2" placeholder="Your Name">
                </div>
                <div class="text-primary">
                  <label for="email" class="block pb-1" >Email</label>
                  <input type="email" name="email" id="email" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2" placeholder="Your Email">
                </div>
                <div class="text-primary">
                  <label for="number" class="block pb-1" >Phone Number</label>
                  <input type="number" name="number" id="number" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2" placeholder="Your Phone Number">
                </div>
                <RouterLink to="/" class="font-semibold text-white bg-primary hover:bg-gray-600 py-2 px-4 inline-block mt-7">Edit Profile
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