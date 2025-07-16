<template>
  <section class="py-24 bg-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why APAGOR
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        <!--Apagor Description-->
        premium products at unbeatable prices. Whether you're looking for the latest in fashion, cutting-edge electronics, stylish home essentials, or everyday must-haves, we've got you covered.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-3xl bg-white hover:bg-red-700 hover:text-white transition-all duration-300 p-6 shadow-xl"
        >
          <div class="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-full bg-gray-100">
            <Icon :icon="feature.icon" class="w-8 h-8 text-gray-600" />
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

const features = ref([
  {
    title: 'Secure Payment',
    description: 'State-of-the-art encryption keeps your money safe.',
    icon: 'mdi:shield-check'
  },
  {
    title: 'Fast Transactions',
    description: 'Lightning-fast speed ensures your payments go through instantly.',
    icon: 'mdi:lightning-bolt'
  },
  {
    title: '24/7 Support',
    description: 'Our team is ready around the clock to help you.',
    icon: 'mdi:clock-outline'
  },
  {
    title: 'Delivery System',
    description: 'Fast and reliable shipping across the country',
    icon: 'mdi:truck-delivery'
  }
])
</script>
