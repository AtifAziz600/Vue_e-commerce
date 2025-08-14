<template>
  <AppLayout>

    <section class="relative bg-gray-900">
      <div class="relative h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
             class="w-full h-full object-cover opacity-70" 
             alt="Apapgor customer service">
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Apapgor Support</h1>
          <p class="text-xl text-white max-w-2xl">We're here to help with your orders, returns, and any questions</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">How can we help you today?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-red-600 mb-4">
             <Icon icon="solar:notebook-line-duotone" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-bold mb-3">Order Assistance</h3>
            <p class="text-gray-600 mb-4">Track your order, check status, or get help with delivery issues.</p>
            <a href="#" class="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
              Order Help
              <Icon icon="solar:alt-arrow-right-outline" class="h-4 w-4 ml-1" />
            </a>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-red-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Returns & Exchanges</h3>
            <p class="text-gray-600 mb-4">Start a return or exchange for items you've purchased.</p>
            <a href="#" class="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
              Return Center
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

 
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-red-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Contact Customer Care</h3>
            <p class="text-gray-600 mb-4">Can't find what you need? Our team is ready to help.</p>
            <a href="#contact" class="text-red-600 font-medium hover:text-red-800 inline-flex items-center">
              Contact Options
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div class="mb-16 text-center">
                    <h2 class="text-4xl font-manrope font-bold text-gray-900 leading-tight">
                        Contact Support FAQs
                    </h2>
                    <p class="mt-2 text-base text-gray-600">
                        Common questions about reaching our team and getting help.
                    </p>
                </div>

                <div class="accordion-group space-y-6">
                    <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
                        <button
                            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
                            @click="toggle(0)">
                            <span>What's the best way to contact customer support?</span>
                            <svg :class="isOpen(0) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
                                class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.6">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <div v-show="activeIndex === 0" class="mt-3 text-base text-gray-700 leading-relaxed">
                            For fastest response, use our live chat during business hours (9am-5pm EST).
                            You can also email support@apagor.com or call (800) 123-4567. Response times
                            are typically under 2 hours for chat and email during business hours.
                        </div>
                    </div>
                    <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
                        <button
                            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
                            @click="toggle(1)">
                            <span>Do you have 24/7 customer support?</span>
                            <svg :class="isOpen(1) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
                                class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.6">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <div v-show="activeIndex === 1" class="mt-3 text-base text-gray-700 leading-relaxed">
                            Our support team is available Monday-Friday, 9am-5pm EST. For urgent
                            matters outside these hours, you can still email us and we'll respond
                            first thing when we reopen. Many answers can also be found in our
                            Help Center which is available 24/7.
                        </div>
                    </div>
                    <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
                        <button
                            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
                            @click="toggle(2)">
                            <span>What information should I include when contacting support?</span>
                            <svg :class="isOpen(2) ? 'rotate-180 text-primarysButton' : 'text-gray-400'
                                " class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="1.6">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <div v-show="activeIndex === 2" class="mt-3 text-base text-gray-700 leading-relaxed">
                            Please include: 1) Your order number (if applicable), 2) A clear
                            description of your issue, 3) Your preferred contact method. This helps us resolve your
                            inquiry faster.
                        </div>
                    </div>
                    <div class="accordion border border-gray-300 rounded-xl p-5 transition duration-300">
                        <button
                            class="accordion-toggle flex justify-between items-center w-full text-left text-lg text-gray-900 font-medium hover:text-primarysButton transition"
                            @click="toggle(3)">
                            <span>How long does it take to get a response?</span>
                            <svg :class="isOpen(3) ? 'rotate-180 text-gray-800' : 'text-gray-400'"
                                class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.6">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <div v-show="activeIndex === 3" class="mt-3 text-base text-gray-700 leading-relaxed">
                            During business hours, we typically respond within:
                            <ul class="list-disc pl-5 mt-2 space-y-1">
                                <li>Live Chat: Under 5 minutes</li>
                                <li>Email: Within 2 hours</li>
                                <li>Phone: Immediate during business hours</li>
                                <li>Social Media: Within 4 hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <section id="contact" class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <div class="md:w-1/2 bg-primarysButton p-8 text-white">
              <h2 class="text-2xl font-bold mb-4">Contact Apapgor Support</h2>
              <p class="mb-6">Our customer care team is available to assist you with any questions about your orders or our products.</p>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 class="font-bold">Phone Support</h3>
                    <p>+48634745721</p>
                    <p class="text-sm">Mon-Fri: 8am-8pm EST</p>
                    <p class="text-sm">Sat-Sun: 9am-6pm EST</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 class="font-bold">Email Support</h3>
                    <p>support@apapgor.com</p>
                    <p class="text-sm">Typically responds within 24 hours</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <div>
                    <h3 class="font-bold">Live Chat</h3>
                    <p>Available on our website</p>
                    <p class="text-sm">Mon-Fri: 9am-9pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="md:w-1/2">
                <div
                    class="bg-white/80 border border-gray-200 backdrop-blur-2xl transition-all duration-500 p-10 gap-10 py-2 shadow-md">
                    <div class="">
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
                                <input type="text" v-model="companyName"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Company Name" />
                            </div>
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">Name</label>
                                <input type="text" v-model="name"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">Phone</label>
                                <input type="text" v-model="phone"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Enter Phone Number" />
                            </div>
                            <div class="gap-3 md:col-span-2">
                                <label class="block text-gray-700 font-medium mb-1">Email</label>
                                <input type="email" v-model="email"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Email Address" />
                            </div>
                            <div class="md:col-span-2">
                                <label for="country" class="block text-gray-700 font-medium mb-1">Country</label>
                                <select id="country" name="country"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primarysButton transition">
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
                            <textarea rows="4"
                                class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                placeholder="Enter your message here..." v-model="message"></textarea>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="md:col-span-2 flex items-start space-x-2">
                                <input id="agree" type="checkbox" v-model="agreedToTerms"
                                    class="mt-1 accent-primarysButton focus:ring-2 focus:ring-primarysButton w-3 h-3 rounded border-gray-300" />
                                <label for="agree" class="text-sm text-gray-700 select-none">
                                    I agree to the
                                    <a href="/terms" target="_blank"
                                        class="text-primarysButton font-medium hover:underline">
                                        Terms & Conditions
                                    </a>
                                </label>
                            </div>
                            <button type="submit"
                                class="px-6 py-2 bg-primarysButton hover:bg-secondysButton text-white font-semibold rounded-2xl shadow-lg transition text-lg">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../../components/Layouts/AppLayout.vue";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const activeIndex = ref(null);

function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
}

function isOpen(index) {
    return activeIndex.value === index;
}
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