<template>
  <AppLayout>
    <section class="bg-gray-50 py-8 sm:py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Refund Policy
          </h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Shop with confidence at <span class="text-brand-600 font-semibold">APAGOR</span>. 
            We stand behind every purchase with our hassle-free Refund policy.
          </p>
        </div>

        <div class="gap-6 mb-10">


        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-start">
              <div class="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                <Icon icon="material-symbols:broken-image-outline-rounded" class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Unboxing Picture Requirement</h3>
                <p class="text-gray-600 mb-3">To protect both buyers and sellers, we require  Picture documentation for warranty claims:</p>
                <ul class="space-y-2 text-gray-700 pl-1">
                  <li class="flex items-start">
                    <span class="text-gray-500 mr-2">•</span>
                    <span>The Image the unboxing from sealed package to product inspection</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-500 mr-2">•</span>
                    <span>Clearly show any damage or defects</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-gray-500 mr-2">•</span>
                    <span>Upload to Google Drive/Dropbox and share link in your claim</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">How to Return an Item</h3>
            <div class="space-y-6">
              <div class="flex">
                <div class="flex-shrink-0 mr-4">
                  <div class="flex items-center justify-center h-8 w-8 rounded-full bg-brand-100 text-brand-600 font-bold">1</div>
                </div>
                <div>
                  <h4 class="text-md font-medium text-gray-800">Initiate Return</h4>
                  <p class="mt-1 text-gray-600">Go to "My Orders" and select "Return Item" within 30 days of delivery.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0 mr-4">
                  <div class="flex items-center justify-center h-8 w-8 rounded-full bg-brand-100 text-brand-600 font-bold">2</div>
                </div>
                <div>
                  <h4 class="text-md font-medium text-gray-800">Pack Securely</h4>
                  <p class="mt-1 text-gray-600">Include all original packaging and accessories. Attach the return label.</p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-shrink-0 mr-4">
                  <div class="flex items-center justify-center h-8 w-8 rounded-full bg-brand-100 text-brand-600 font-bold">3</div>
                </div>
                <div>
                  <h4 class="text-md font-medium text-gray-800">Ship Back</h4>
                  <p class="mt-1 text-gray-600">Drop off at any authorized carrier location. Keep your tracking number.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-6">
          <div class="flex items-center">
           <Icon class="w-6 h-6 text-green-500 mb-2" icon="material-symbols:check-rounded"/>
            <span class="text-sm font-medium text-gray-700">Buyer Protection</span>
          </div>
          <div class="flex items-center">
           <Icon class="h-6 w-6 text-blue-500 mr-2" icon="material-symbols:security" />
            <span class="text-sm font-medium text-gray-700">Secure Payments</span>
          </div>
          <div class="flex items-center">
            <Icon icon="solar:wallet-money-bold" class="h-6 w-6 text-orange-500 mr-2" />
            <span class="text-sm font-medium text-gray-700">Money Back Guarantee</span>
          </div>
        </div>

        <div class="mt-12 text-center bg-brand-50 rounded-lg p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-3">Need help with a return?</h3>
          <p class="text-gray-600 mb-4">Our customer service team is available 24/7.</p>
          <a href="/contact" class="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-brand-600 hover:bg-brand-700 transition-colors">
            Contact Support
            <Icon icon="material-symbols:line-end-arrow-notch" width="24" height="24" />
          </a>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import AppLayout from "../../components/Layouts/AppLayout.vue";
</script>