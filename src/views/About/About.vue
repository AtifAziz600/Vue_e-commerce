<template>
    <AppLayout>
<section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
  <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
      <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div class="w-full flex-col justify-center items-start gap-8 flex">
          <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
            <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 class="text-cardColour text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Building Trust in Every Transaction
              </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At ShopWise, we’re more than just a store. We're your partner in discovering top-quality products at unbeatable prices. Since our beginning, customer satisfaction, fast delivery, and curated collections have been at our core.
              </p>
            </div>
          </div>
          <div class="w-full flex-col justify-center items-start gap-6 flex">
            <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
                <p class="text-gray-500 text-base font-normal leading-relaxed">Delivering quality with care</p>
              </div>
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">50K+ Orders</h4>
                <p class="text-gray-500 text-base font-normal leading-relaxed">Trusted by thousands worldwide</p>
              </div>
            </div>
            <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
              <div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">4.9★ Ratings</h4>
                <p class="text-gray-500 text-base font-normal leading-relaxed">Average review from happy customers</p>
              </div>
              <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Satisfaction</h4>
                <p class="text-gray-500 text-base font-normal leading-relaxed">Customer-first approach always</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="sm:w-fit w-full group px-3.5 py-2 bg-cardColour-50 hover:bg-cardColour-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
          <span
            class="px-1.5 text-cardColour text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">About Us</span>
          <Icon icon="mdi:arrow-right" class="w-6 h-6 text-cardColour"/>
        </button>
      </div>
      <div class="w-full lg:justify-start justify-center items-start flex">
        <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
          <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717742431.png"
            alt="eCommerce about us image" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mx-auto py-24">
    <div class="w-full flex flex-col justify-start items-start gap-3">
         <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 class="text-gray-900 text-3xl font-bold text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                        <p class="text-gray-500 text-sm font-normal text-start md:text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                    </div>
                </div>
                <img class="mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
            </div>
    </div>
  </div>
</section>
    <FeatureSection/>
    <OurPartner/>
    </AppLayout>                                     
</template>

<script setup>
import FeatureSection from '@/components/FeatureSection.vue';
import OurPartner from "@/components/OurPayment.vue";
import { Icon } from '@iconify/vue';
</script>