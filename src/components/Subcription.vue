<template>
  <section class="py-16 bg-gray-300">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="bg-gray-100 rounded-2xl shadow-xl p-10 border border-gray-300 ">
        <h2 class="font-sans text-4xl text-gray-800 text-center font-semibold mb-10">
          Subscribe to Newsletter
        </h2>
        <div class="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            name="email"
            class="py-3 px-5 h-14 w-full sm:max-w-md border dark:border-gray-600 bg-gray-200 text-gray-800 placeholder-gray-500 dark:placeholder-gray-400 shadow-inner transition"
            placeholder="Your email address"
          />
          <button
            class="h-14 px-8 bg-primarysButton hover:bg-secondysButton text-white font-medium shadow-md hover:shadow-lg transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
