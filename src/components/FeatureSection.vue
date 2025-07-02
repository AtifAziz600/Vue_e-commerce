<template>
  <section class="py-24 bg-[#f5f5f7]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Feature Section
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Simplify your life with these elegant features built to be intuitive, fast, and powerful.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-3xl bg-white hover:bg-black hover:text-white transition-all duration-300 p-6 shadow-xl"
        >
          <div class="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-full bg-gray-100">
            <Icon :mdi="shield" class="w-6 h-6 text-indigo-600" />
            <Icon :mdi="lightning-bolt" class="w-6 h-6 text-indigo-600" />
            <Icon :mdi="clock" class="w-6 h-6 text-indigo-600" />
            <Icon :mdi="credit-card" class="w-6 h-6 text-indigo-600" />
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
// import { ShieldCheck, CreditCard, Clock3, Zap } from 'lucide-vue-next' 
import { Icon } from '@iconify/vue';

const features = ref([
  {
    title: 'Secure Payment',
    description: 'State-of-the-art encryption keeps your money safe.',
  },
  {
    title: 'Fast Transactions',
    description: 'Lightning-fast speed ensures your payments go through instantly.',
  },
  {
    title: '24/7 Support',
    description: 'Our team is ready around the clock to help you.',
  },
  {
    title: 'Simple Interface',
    description: 'Designed to be beautiful, clean, and intuitive.',
  }
])
</script>
