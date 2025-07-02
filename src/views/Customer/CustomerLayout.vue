<template>
  <AppLayout>
    <section class="bg-gray-200/80 lg:py-20 ">
      <div class="max-w-4xl mx-auto bg-white shadow-md p-10 ">
        <div class="flex gap-3 mb-5">
          <span class="flex items-center justify-center rounded-full bg-gray-200 w-16 h-16 shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
          </span>
          <div class="flex flex-col justify-center px-4">
            <p class="text-sm font-medium">Hello,</p>
            <h3 class="text-lg font-semibold capitalize">{{ authStore?.user?.full_name }}</h3>
          </div>
        </div>
        <slot/>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import { useAuthStore } from "@/stores/useAuthStore";
const authStore = useAuthStore();
</script>

<style scoped>

</style>