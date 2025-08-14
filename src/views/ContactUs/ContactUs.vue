<template>
    <AppLayout>
        <section class="max-w-screen-full mx-auto">
            <div class="relative max-w-screen-full mx-auto mt-6 overflow-hidden shadow-2xl">
                <div class="relative">
                    <img src="../../assets/img/make it clean and simple.jpg"
                        class="w-full h-[50vh] object-fit cover brightness-75" alt="">
                    <div class="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 space-y-5">
                        <h2 class="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow">
                            Contact US
                        </h2>
                        <p class="text-white text-lg md:text-xl text-center max-w-2xl">
                            We'd love to hear from you! Reach out with questions, feedback, or just to say hell
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-7xl px-6 mx-auto py-12">
                <div
                    class="bg-white/80 border border-gray-200 backdrop-blur-2xl transition-all duration-500 p-10 gap-10 py-2 shadow-md rounded-2xl">
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
                                <input type="text" v-model="companyName"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Company Name" />
                            </div>
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">
                                    Tax Identification Number <span class="text-red-500">*</span>
                                </label>
                                <input type="text" v-model="tin"
                                    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                    placeholder="Tax Identification Number" />
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
    </AppLayout>
</template>
<script setup>
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