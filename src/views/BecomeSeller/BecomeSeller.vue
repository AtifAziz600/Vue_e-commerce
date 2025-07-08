<template>
    <AppLayout>
        <section class="py-24 relative bg-gradient-to-br from-gray-50 to-white min-h-screen">
            <div class="w-full max-w-7xl px-6 mx-auto">
                <div class="bg-white/80 shadow-2xl rounded-3xl border border-gray-200 ring-1 ring-gray-100 backdrop-blur-2xl transition-all duration-500 p-10">
                    <!-- Header -->
                    <div class="flex flex-col items-center gap-2 mb-10">
                        <!-- <img src="../assets//img/app.png" class="w-16 h-16 mb-2 opacity-80" /> -->
                        <h2 class="text-center text-gray-900 text-4xl font-bold font-sans tracking-tight">Become a Seller</h2>
                        <p class="max-w-xl text-center text-gray-500 text-base font-normal leading-relaxed">
                            Join our marketplace and start selling your products or services. Fill out the application below and our team will review your submission.
                        </p>
                    </div>
                    <!-- Form -->
                    <form class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">First Name <span class="text-red-500">*</span></label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="John" />
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Last Name <span class="text-red-500">*</span></label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Doe" />
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Email <span class="text-red-500">*</span></label>
                                <input type="email" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="john@icloud.com" />
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Phone Number</label>
                                <input type="tel" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="(555) 123-4567" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-gray-700 font-medium mb-1">Address</label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="123 Apple Park Way, Cupertino, CA" />
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Work Experience</label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="e.g. 3 years" />
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Store/Brand Name</label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Your Brand" />
                            </div>
                        </div>
                    
                        <!-- File Upload -->
                        <div>
                            <label class="block text-gray-700 font-medium mb-2">Portfolio / Resume</label>
                            <label for="file-upload" class="flex flex-col items-center justify-center py-8 w-full border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                <span class="text-gray-500 text-sm mb-1">PNG, JPG, PDF, DOCX up to 15MB</span>
                                <span class="text-indigo-600 font-medium">Click to upload or drag file here</span>
                                <input id="file-upload" type="file" class="hidden" />
                            </label>
                        </div>
                        <!-- Additional Details -->
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Tell us about your business</label>
                            <textarea rows="3" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" placeholder="Describe your products, services, or experience..."></textarea>
                        </div>
                        <!-- Submit -->
                        <div class="flex justify-center">
                            <button type="submit" class="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl shadow-lg transition text-lg">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </AppLayout>
    </template>
<script setup>

</script>

