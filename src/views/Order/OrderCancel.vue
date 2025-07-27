<template>

    <div class="flex justify-center m-5">
      <button id="defaultModalButton" data-modal-target="defaultModal" data-modal-toggle="defaultModal"
        class="block text-white bg-deepMaroon hover:bg-secondysButton focus:ring-4 focus:outline-none focus:ring-deepMaroon font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button">
        Cancel Order
      </button>
    </div>
    <div id="defaultModal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

        <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">

          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
            <h3 class="text-lg font-semibold text-gray-900">
              Cancel Order
            </h3>
            <button type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal">
              <Icon class="w-5 h-5 text-black" icon="mdi:close" />
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <form action="">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
                <h6 class="text-gray-800">PRODUCTS</h6>
              </div>
              <div class="sm:col-span-2">
                <label for="reason" class="block mb-2 text-sm font-medium text-gray-900">Reason</label>
                <textarea id="reason" rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-deepMaroon focus:border-deepMaroon"
                  placeholder="Enter your Reason"></textarea>
              </div>
            </div>
            <button type="submit"
              class="text-white inline-flex items-center bg-deepMaroon hover:bg-secondysButton focus:ring-4 focus:outline-none focus:ring-deepMaroon font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>
