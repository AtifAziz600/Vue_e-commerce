<template>
  <section class="py-12 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2 class="text-4xl font-manrope font-bold text-gray-900 leading-tight">
          Frequently Asked Questions
        </h2>
        <p class="mt-2 text-base text-gray-600">
          Got questions? We’ve got answers about orders, shipping, and more.
        </p>
      </div>

      <div class="accordion-group space-y-6">
        <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
          <button
            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
            @click="toggle(0)"
          >
            <span>How can I track my order?</span>
            <svg
              :class="isOpen(0) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div v-show="activeIndex === 0" class="mt-3 text-base text-gray-700 leading-relaxed">
            Once your order is shipped, you'll receive a tracking number via email. You can use it
            on our tracking page to follow your package.
          </div>
        </div>
        <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
          <button
            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
            @click="toggle(1)"
          >
            <span>What is your return policy?</span>
            <svg
              :class="isOpen(1) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div v-show="activeIndex === 1" class="mt-3 text-base text-gray-700 leading-relaxed">
            We accept returns within 14 days of delivery. Items must be unused and in original
            packaging. Visit our Returns page to start a return.
          </div>
        </div>
        <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
          <button
            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
            @click="toggle(2)"
          >
            <span>Do you offer international shipping?</span>
            <svg
              :class="isOpen(2) ? 'rotate-180 text-primarysButton' : 'text-gray-400'"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div v-show="activeIndex === 2" class="mt-3 text-base text-gray-700 leading-relaxed">
            Yes, we ship to over 50 countries worldwide. Shipping costs and delivery time may vary.
            See our shipping policy for details.
          </div>
        </div>
        <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
          <button
            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
            @click="toggle(3)"
          >
            <span>How do I cancel or modify my order?</span>
            <svg
              :class="isOpen(3) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div v-show="activeIndex === 3" class="mt-3 text-base text-gray-700 leading-relaxed">
            You can request changes within 1 hour of placing the order by contacting our support.
            After that, we may not be able to make changes.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

function isOpen(index) {
  return activeIndex.value === index
}
</script>
