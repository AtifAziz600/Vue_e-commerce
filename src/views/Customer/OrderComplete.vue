<template>
  <AppLayout>
    <div class="container mx-auto p-6">
      <div class="bg-white shadow-md rounded-lg p-6 min-h-screen grid place-items-center">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-3xl font-bold text-green-600 mb-4">Order Complete</h1>
          <p class="text-lg mb-4">Thank you for your purchase! Your order has been successfully placed.</p>
          <router-link to="/dashboard" class="w-full py-1 bg-orange-400 text-white font-bold text-center rounded-lg my-2">Dashbaord</router-link>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>

import AppLayout from "@/components/Layouts/AppLayout.vue";
</script>