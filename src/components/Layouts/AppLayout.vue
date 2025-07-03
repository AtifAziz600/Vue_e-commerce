<template>
  <div class="max-w-screen-2xl mx-auto">
    <Header class="sticky top-0 z-50"/>
    <slot />
    <Footer/>
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

