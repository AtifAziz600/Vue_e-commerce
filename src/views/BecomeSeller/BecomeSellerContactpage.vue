<template>
  <div class="w-full max-w-7xl px-6 mx-auto">
    <div
      class="bg-white/80 border border-gray-200 backdrop-blur-2xl transition-all duration-500 p-10 gap-10 py-2 shadow-md rounded-2xl"
    >
      <div class="py-2">
        <h3 class="text-4xl text-start text-gray-700 font-bold">Contact Us</h3>
        <p class="text-sm text-start text-gray-700">
          Have questions about APAGOR business offerings? Contact us! Our
          experts will tell you about the opportunities APAGOR has prepared for
          your business.
        </p>
      </div>
      <form class="space-y-8 py-12" @submit.prevent="handleSubmitApplication">
        <div class="">
          <div class="gap-3">
            <label class="block text-gray-700 font-medium mb-1">
              Company Name <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="companyName"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              placeholder="Company Name"
            />
          </div>
          <div class="gap-3">
            <label class="block text-gray-700 font-medium mb-1">
              Tax Identification Number <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="tin"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              placeholder="Tax Identification Number"
            />
          </div>
          <div class="gap-3">
            <label class="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              v-model="name"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="gap-3">
            <label class="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="text"
              v-model="phone"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              placeholder="Enter Phone Number"
            />
          </div>
          <div class="gap-3 md:col-span-2">
            <label class="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              v-model="email"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              placeholder="Email Address"
            />
          </div>
          <div class="md:col-span-2">
            <label for="country" class="block text-gray-700 font-medium mb-1"
              >Country</label
            >
            <select
              id="country"
              name="country"
              class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primarysButton transition"
            >
              <option class="text-gray-400" value="Poland" selected>
                Poland
              </option>
              <option class="text-gray-400" value="Germany">Germany</option>
              <option class="text-gray-400" value="France">France</option>
              <option class="text-gray-400" value="United Kingdom">
                United Kingdom
              </option>
              <option class="text-gray-400" value="Italy">Italy</option>
              <option class="text-gray-400" value="Spain">Spain</option>
              <option class="text-gray-400" value="Netherlands">
                Netherlands
              </option>
              <option class="text-gray-400" value="Canada">Canada</option>
              <option class="text-gray-400" value="United States">
                United States
              </option>
              <option class="text-gray-400" value="Australia">Australia</option>
              <option class="text-gray-400" value="India">India</option>
              <option class="text-gray-400" value="Japan">Japan</option>
              <option class="text-gray-400" value="Bangladesh">
                Bangladesh
              </option>
            </select>
          </div>
        </div>
        <div class="gap-3">
          <label class="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            rows="4"
            class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            placeholder="Enter your message here..."
            v-model="message"
            ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <div class="md:col-span-2 flex items-start space-x-2">
            <input
              id="agree"
              type="checkbox"
              v-model="agreedToTerms"
              class="mt-1 accent-primarysButton focus:ring-2 focus:ring-primarysButton w-3 h-3 rounded border-gray-300"
            />
            <label for="agree" class="text-sm text-gray-700 select-none">
              I agree to the
              <a
                href="/terms"
                target="_blank"
                class="text-primarysButton font-medium hover:underline"
              >
                Terms & Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="px-6 py-2 bg-primarysButton hover:bg-secondysButton text-white font-semibold rounded-2xl shadow-lg transition text-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const companyName = ref("");
const tin = ref("");
const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
const country = ref("Poland");
const agreedToTerms = ref(false);

const handleSubmitApplication = () => {
  if (!companyName.value || !tin.value) {
    toast.error("Please fill in all required fields marked with *");
    return;
  }
  if (!agreedToTerms.value) {
    toast.error("You must agree to the Terms & Conditions.");
    return;
  }

  toast.success("Your application has been submitted successfully!");
};
</script>
