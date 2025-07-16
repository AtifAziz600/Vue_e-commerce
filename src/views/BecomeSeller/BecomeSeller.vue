<template>
    <AppLayout>
        <section class="py-24 relative bg-gradient-to-br from-gray-50 to-white min-h-screen">
             <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-8">
            <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
<div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
  <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
    <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
      Empower Your Business by Becoming a Seller
    </h2>
    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
      Join our platform and connect with millions of customers. We provide the tools, support, and exposure you need to grow your business and build a loyal customer base.
    </p>
  </div>
  <div class="flex gap-2">
      <RouterLink to="/seller-form" class="sm:w-fit w-full px-3.5 py-2 bg-primarysButton hover:bg-secondysButton transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
    <span class="px-1.5 text-white text-sm font-medium leading-6">Register Account</span>
      </RouterLink>
    <button class="sm:w-fit w-full px-3.5 py-2 bg-white hover:bg-secondysButton transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
    <span class="px-1.5 text-primarysButton hover:text-white text-sm font-medium leading-6">Request Contact</span>
  </button>
  </div>
</div>

                <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="../../assets/img/heroseller.jpg" alt="about Us image" />
            </div>
        </div>
  <div class="flex flex-col md:flex-row max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mb-6 items-center md:items-start gap-8 md:gap-12 py-8">
    <div class="w-full md:w-1/2 lg:w-2/3 md:text-left">
      <h1 class="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
        The largest buyer base in Poland and new<span class="">opportunities abroad</span>
      </h1>
      <p class="text-base lg:text-lg font-light mb-6 text-gray-700">
        Whether you're just starting out selling online or looking for a new channel to reach your rapidly growing e-business, APAGOR gives you the chance to succeed in e-commerce.
      </p>

      <p class="text-lg lg:text-xl font-bold mb-2 mt-8 text-gray-800">The largest shopping platform in Poland.</p>
      <p class="text-base lg:text-lg font-light mb-6 text-gray-700">
        We're Poland's favorite shopping platform, visited by 1 people a month. By selling on APAGOR, you can reach them with your offerings.
      </p>

      <p class="text-lg lg:text-xl font-bold mb-2 mt-8 text-gray-800">Your way to start selling internationally. List once – sell everywhere!</p>
      <p class="text-base lg:text-lg text-gray-800">
        APAGOR also operates internationally. You don't even need to create a new account to gain access to an 
        <span class="font-light text-gray-700">international community of buyers! You can set everything up from your business account on apagor.</span>
      </p>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 flex justify-center items-center mt-6 md:mt-0">
      <img src="../../assets/img/polandMap-removebg-preview.png" alt="Map of Poland" class="max-w-full h-auto object-contain">
    </div>
  </div>
        <hr class="my-4 border-gray-300">
<div class="flex flex-col md:flex-row max-w-7xl px-4 md:px-6 lg:px-8 mx-auto mb-12 items-start gap-10 py-8">
  <div class="w-full md:w-2/3 space-y-6">
    <div>
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Fees</h1>
      <p class="text-base text-gray-600">How much does it cost to sell on Allegro?</p>
    </div>
    <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p>
        <span class="font-semibold">Zero costs</span> to set up and maintain an account – you pay nothing until you sell.
        Posting your listings is free, so you can start your business right away with no risk.
      </p>
      <hr class="my-4 border-gray-300">
      <p>
        <span class="font-semibold">Welcome Package:</span> Up to <span class="font-bold">0% commission</span> for the first 90 days.
        Test selling on Allegro risk-free and grow your brand.
      </p>
    <hr class="my-4 border-gray-300">
      <p>
        <span class="font-semibold">Simple payment system:</span> Instead of multiple confusing fees, enjoy a
        single, transparent sales commission that keeps your profits clear.
      </p>
    <hr class="my-4 border-gray-300">
      <p>
        You can also access advanced tools and optional flexible subscriptions designed to grow with your business.
        <a href="#" class="text-primarysButton hover:text-secondysButton font-semibold underline transition-colors">Read more about subscriptions</a>.
      </p>
    </div>
  </div>
</div>

<div class="bg-white py-2">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">How Selling Works</h2>
      <p class="text-lg text-gray-500 max-w-2xl mx-auto">
        Get started in just a few simple steps. Our streamlined process helps you set up, sell, and grow quickly.
      </p>
    </div>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm">
        <div class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
            <Icon icon="mdi-user" class="w-10 h-10 text-primarysButton"/>
        </div>
        <h4 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">Create Your Account</h4>
        <p class="text-sm text-gray-500 group-hover:text-white">
          Sign up with your business or personal details. It's fast, easy, and secure.
        </p>
      </div>
      <div class="group bg-gray-100 hover:bg-secondysButton  transition-all duration-500 rounded-2xl p-6 text-center shadow-sm">
        <div class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
            <Icon icon="mdi-shopping" class="w-9 h-9 text-primarysButton"/>
        </div>
        <h4 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">List Your Products</h4>
        <p class="text-sm text-gray-500 group-hover:text-white">
          Add product details, pricing, and images to your seller dashboard with ease.
        </p>
      </div>
      <div class="group bg-gray-100 hover:bg-secondysButton transition-all duration-500 rounded-2xl p-6 text-center shadow-sm">
        <div class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
            <Icon icon="mdi-cloud-upload-outline" class="w-9 h-9 text-primarysButton"/>
        </div>
        <h4 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">Start Selling</h4>
        <p class="text-sm text-gray-500 group-hover:text-white">
          Go live and reach thousands of customers across the country.
        </p>
      </div>
      <div class="group bg-gray-100 hover:bg-secondysButton  transition-all duration-500 rounded-2xl p-6 text-center shadow-sm">
        <div class="bg-white w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
            <Icon class="w-9 h-9 text-primarysButton" icon="mdi-money"/>
        </div>
        <h4 class="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">Get Paid Fast</h4>
        <p class="text-sm text-gray-500 group-hover:text-white">
          Receive payments directly to your account with fast and secure transactions.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-gray-900 text-center mb-16 font-manrope">
      Explore Insights & Selling Tips
    </h2>
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

      <div class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
        <img src="https://pagedone.io/asset/uploads/1696244317.png" alt="Sell Smarter" class="rounded-t-2xl w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-primarysButton font-medium text-sm mb-3 block">Jan 01, 2023</span>
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition">
            Sell Smarter: How to Curate Product Listings That Convert
          </h3>
          <p class="text-gray-600 text-sm mb-6">
            Discover proven methods to present your products in ways that boost visibility and conversion.
          </p>
          <a href="#" class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1">
            Read more
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
        <img src="https://pagedone.io/asset/uploads/1696244340.png" alt="Boost Your Revenue" class="rounded-t-2xl w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-primarysButton font-medium text-sm mb-3 block">Feb 01, 2023</span>
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition">
            Boost Your Revenue with Seasonal Promotions
          </h3>
          <p class="text-gray-600 text-sm mb-6">
            Learn how timing your promotions around key shopping seasons can maximize profits effortlessly.
          </p>
          <a href="#" class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1">
            Read more
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
        <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="Product Analytics" class="rounded-t-2xl w-full h-56 object-cover">
        <div class="p-6">
          <span class="text-primarysButton font-medium text-sm mb-3 block">Mar 01, 2023</span>
          <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primarysButton transition">
            Master Product Analytics to Optimize Sales
          </h3>
          <p class="text-gray-600 text-sm mb-6">
            Use data-driven decisions to track product performance and adjust your strategy for better results.
          </p>
          <a href="#" class="text-primarysButton text-base font-semibold hover:underline flex items-center gap-1">
            Read more
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
                <div class="w-full max-w-3xl px-6 mx-auto">
                   
                <div class="bg-white/80 border border-gray-200 backdrop-blur-2xl transition-all duration-500 p-10 gap-10 py-2">
                     <h3 class="text-xl text-start text-gray-700">Contact Us</h3>
                    <p class="text-sm text-satrt text-gray-700">Have questions about Allegro's business offerings? Contact us! Our experts will tell you about the opportunities APAGOR has prepared for your business.  </p>
                    <form class="space-y-8" @submit.prevent="handleSubmitApplication">
                        <div class="gap-6">
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">Company Name <span class="text-red-500">*</span></label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Company Name" />
                            </div>
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">Tax Identification Number <span class="text-red-500">*</span></label>
                                <input type="email" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Tax Identification Number" />
                            </div>
                            <div class="gap-3">
                                <label class="block text-gray-700 font-medium mb-1">Name</label>
                                <input type="tel" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Enter Your Name" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-gray-700 font-medium mb-1">Phone</label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Enter Phone Number" />
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-gray-700 font-medium mb-1">Email</label>
                                <input type="text" class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Email Address" />
                            </div>
<div class="md:col-span-2">
  <label for="country" class="block text-gray-700 font-medium mb-1">Country</label>
  <select
    id="country"
    name="country"
    class="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primarysButton transition"
  >
    <option class="text-gray-400" value="Poland" selected>Poland</option>
    <option class="text-gray-400" value="Germany">Germany</option>
    <option class="text-gray-400" value="France">France</option>
    <option class="text-gray-400" value="United Kingdom">United Kingdom</option>
    <option class="text-gray-400" value="Italy">Italy</option>
    <option class="text-gray-400" value="Spain">Spain</option>
    <option class="text-gray-400" value="Netherlands">Netherlands</option>
    <option class="text-gray-400" value="Canada">Canada</option>
    <option class="text-gray-400" value="United States">United States</option>
    <option class="text-gray-400" value="Australia">Australia</option>
    <option class="text-gray-400" value="India">India</option>
    <option class="text-gray-400" value="Japan">Japan</option>
    <option class="text-gray-400" value="Bangladesh">Bangladesh</option>
  </select>
</div>

                        </div>
                <div class="md:col-span-2 flex items-start space-x-2">
                      <input
    id="agree"
    type="checkbox"
    v-model="agreed"
    class="mt-1 accent-primarysButton focus:ring-2 focus:ring-primarysButton w-3 h-3 rounded border-gray-300"
  />
  <label for="agree" class="text-sm text-gray-700 select-none">
    I agree to the
    <a href="/terms" target="_blank" class="text-primarysButton font-medium hover:underline">
      Terms & Conditions
    </a>
  </label>
                </div>
                    </form>
                </div>
            </div>
        </section>
    </AppLayout>
    </template>
<script setup>

</script>

