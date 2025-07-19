<template>
  <AppLayout>
    <section
      class="py-24 relative bg-gradient-to-br from-gray-50 to-white min-h-screen"
    >
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-8">
        <div
          class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1"
        >
          <div
            class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex"
          >
            <div
              class="w-full flex-col justify-start lg:items-start items-center gap-4 flex"
            >
              <h2
                class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
              >
                Empower Your Business by Becoming a Seller
              </h2>
              <p
                class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
              >
                Join our platform and connect with millions of customers. We
                provide the tools, support, and exposure you need to grow your
                business and build a loyal customer base.
              </p>
            </div>
            <div class="flex gap-2">
              <RouterLink
                to="/seller-form"
                class="sm:w-fit w-full px-3.5 py-2 bg-primarysButton hover:bg-secondysButton transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex"
              >
                <span class="px-1.5 text-white text-sm font-medium leading-6"
                  >Register Account</span
                >
              </RouterLink>
              <button
                class="sm:w-fit w-full px-3.5 py-2 bg-white hover:bg-secondysButton transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex"
              >
                <span
                  class="px-1.5 text-primarysButton hover:text-white text-sm font-medium leading-6"
                  >Request Contact</span
                >
              </button>
            </div>
          </div>

          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="../../assets/img/heroseller.jpg"
            alt="about Us image"
          />
        </div>
      </div>
      <div class="py-1">
        <PolandInfo />
      </div>
      <hr class="my-4 border-gray-300" />
      <div class="py-1">
        <Fees />
      </div>
      <div class="bg-white py-2">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              How Selling Works
            </h2>
            <p class="text-lg text-gray-500 max-w-2xl mx-auto">
              Get started in just a few simple steps. Our streamlined process
              helps you set up, sell, and grow quickly.
            </p>
          </div>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm"
            >
              <div
                class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4"
              >
                <Icon icon="mdi-user" class="w-10 h-10 text-primarysButton" />
              </div>
              <h4
                class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2"
              >
                Create Your Account
              </h4>
              <p class="text-sm text-gray-500 group-hover:text-white">
                Sign up with your business or personal details. It's fast, easy,
                and secure.
              </p>
            </div>
            <div
              class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm"
            >
              <div
                class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4"
              >
                <Icon icon="mdi-shopping" class="w-9 h-9 text-primarysButton" />
              </div>
              <h4
                class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2"
              >
                List Your Products
              </h4>
              <p class="text-sm text-gray-500 group-hover:text-white">
                Add product details, pricing, and images to your seller
                dashboard with ease.
              </p>
            </div>
            <div
              class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm"
            >
              <div
                class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4"
              >
                <Icon
                  icon="mdi-cloud-upload-outline"
                  class="w-9 h-9 text-primarysButton"
                />
              </div>
              <h4
                class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2"
              >
                Start Selling
              </h4>
              <p class="text-sm text-gray-500 group-hover:text-white">
                Go live and reach thousands of customers across the country.
              </p>
            </div>
            <div
              class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm"
            >
              <div
                class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4"
              >
                <Icon class="w-9 h-9 text-primarysButton" icon="mdi-money" />
              </div>
              <h4
                class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2"
              >
                Get Paid Fast
              </h4>
              <p class="text-sm text-gray-500 group-hover:text-white">
                Receive payments directly to your account with fast and secure
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-24 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            class="text-4xl font-bold text-gray-900 text-center mb-16 font-manrope"
          >
            Explore Insights & Selling Tips
          </h2>
          <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src="https://pagedone.io/asset/uploads/1696244317.png"
                alt="Sell Smarter"
                class="rounded-t-2xl w-full h-56 object-cover"
              />
              <div class="p-6">
                <span class="text-primarysButton font-medium text-sm mb-3 block"
                  >Jan 01, 2023</span
                >
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition"
                >
                  Sell Smarter: How to Curate Product Listings That Convert
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                  Discover proven methods to present your products in ways that
                  boost visibility and conversion.
                </p>
                <a
                  href="#"
                  class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1"
                >
                  Read more
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src="https://pagedone.io/asset/uploads/1696244340.png"
                alt="Boost Your Revenue"
                class="rounded-t-2xl w-full h-56 object-cover"
              />
              <div class="p-6">
                <span class="text-primarysButton font-medium text-sm mb-3 block"
                  >Feb 01, 2023</span
                >
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition"
                >
                  Boost Your Revenue with Seasonal Promotions
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                  Learn how timing your promotions around key shopping seasons
                  can maximize profits effortlessly.
                </p>
                <a
                  href="#"
                  class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1"
                >
                  Read more
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src="https://pagedone.io/asset/uploads/1696244356.png"
                alt="Product Analytics"
                class="rounded-t-2xl w-full h-56 object-cover"
              />
              <div class="p-6">
                <span class="text-primarysButton font-medium text-sm mb-3 block"
                  >Mar 01, 2023</span
                >
                <h3
                  class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition"
                >
                  Master Product Analytics to Optimize Sales
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                  Use data-driven decisions to track product performance and
                  adjust your strategy for better results.
                </p>
                <a
                  href="#"
                  class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1"
                >
                  Read more
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2">
        <BecomeSellerContactpage />
      </div>
      <div class="mt-2">
        <FAQ />
      </div>
    </section>
  </AppLayout>
</template>
<script setup>
import FAQ from "../FAQ/FAQ.vue";
import BecomeSellerContactpage from "./BecomeSellerContactpage.vue";
import Fees from "./Fees.vue";
import PolandInfo from "./PolandInfo.vue";
</script>
