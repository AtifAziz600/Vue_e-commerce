<template>
    <AppLayout>
<div class="w-full max-w-4xl px-6 mx-auto py-12">
    <div class="bg-white/90 shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-xl transition-all duration-500 p-10">
      <div class="flex flex-col items-center gap-2 mb-10">
        <h2 class="text-center text-gray-900 text-4xl font-bold tracking-tight">Become a Seller</h2>
        <p class="max-w-2xl text-center text-gray-500 text-base leading-relaxed">
          Join our growing marketplace and grow your business. Submit the form below to get started.
        </p>
      </div>

      <form class="space-y-8" @submit.prevent="handleSubmitApplication">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-medium mb-1">Your Name <span class="text-red-500">*</span></label>
            <input v-model="yourName" type="text" class="form-input" placeholder="Enter Your Name" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Email <span class="text-red-500">*</span></label>
            <input v-model="email" type="email" class="form-input" placeholder="your@example.com" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Phone Number <span class="text-red-500">*</span></label>
            <input v-model="phone" type="tel" class="form-input" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Store/Brand Name <span class="text-red-500">*</span></label>
            <input v-model="storeBrand" type="text" class="form-input" placeholder="Your Brand" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Address <span class="text-red-500">*</span></label>
            <input v-model="address" type="text" class="form-input" placeholder="123 Market Street, NY" />
          </div>
          <div>
            <label class="block text-gray-700 font-medium mb-1">Work Experience</label>
            <input v-model="workExperience" type="text" class="form-input" placeholder="e.g. 3 years" />
          </div>
          <div class="md:col-span-2">
            <label class="block text-gray-700 font-medium mb-1">Business Type</label>
            <select class="form-input" v-model="businessType">
              <option disabled value="">Select Business Type</option>
              <option>Individual Seller</option>
              <option>Small Business</option>
              <option>Manufacturer</option>
              <option>Retail Store</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-2">Portfolio / Business License</label>
          <label for="file-upload" class="upload-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primarysButton mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
            </svg>
            <span class="text-gray-500 text-sm mb-1">PDF, JPG, PNG, DOCX up to 15MB</span>
            <span class="text-primarysButton font-medium">Click to upload or drag file here</span>
            <input id="file-upload" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" class="hidden" />
          </label>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-1">Tell us about your business</label>
          <textarea rows="4" class="form-input resize-none" placeholder="Describe what you sell, your niche, or your experience."></textarea>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="px-10 py-3 bg-primarysButton hover:bg-secondysButton text-white font-semibold rounded-2xl shadow-lg transition text-lg">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
  </AppLayout>
</template>

<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import AppLayout from '@/components/Layouts/AppLayout.vue';

const toast = useToast();

const yourName = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const workExperience = ref('');
const storeBrand = ref('');
const businessType = ref('');

const handleSubmitApplication = () => {
  if (!yourName.value || !email.value || !phone.value || !address.value || !storeBrand.value) {
    toast.error('Please fill out all required fields.');
    return;
  }

  toast.success('Your application has been submitted successfully!');
};
</script>

<style scoped>
.form-input {
  @apply w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primarysButton transition;
}

.upload-box {
  @apply flex flex-col items-center justify-center py-8 w-full border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition;
}
</style>