<template>
  <AppLayout>
    <div class="max-w-6xl bg-gray-50 rounded-md mx-auto my-20">
      <div class="h-full min-h-screen">
        <h2 class="capitalize p-5">{{ page?.title }}</h2>
        <div class="h-full p-5" v-html="page?.summery"/>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import useAxios from "@/composables/useAxios.js";
const { sendRequest } = useAxios()
const page = ref({})
onMounted(async () => {
  const route = useRoute()
  const pageData = await sendRequest(`/pages/${route.params?.slug}`)
  page.value = pageData?.data

})
</script>