<template>
  <AppLayout>
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div class="w-full">
          <h2 class="font-manrope font-bold text-4xl text-black mb-8 text-center">
            Our customer reviews
          </h2>
          <div
            class="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div class="box flex flex-col gap-y-4 w-full">
              <div class="flex items-center w-full">
                <p class="font-medium text-lg text-black mr-0.5">5</p>
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <p class="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span class="h-full w-[30%] rounded-3xl bg-amber-400 flex"></span>
                </p>
                <p class="font-medium text-lg text-black mr-0.5">989</p>
              </div>
              <div class="flex items-center w-full">
                <p class="font-medium text-lg text-black mr-0.5">4</p>
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span class="h-full w-[40%] rounded-3xl bg-amber-400 flex"></span>
                </p>
                <p class="font-medium text-lg text-black mr-0.5">4.5K</p>
              </div>
              <div class="flex items-center">
                <p class="font-medium text-lg text-black mr-0.5">3</p>
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span class="h-full w-[20%] rounded-3xl bg-amber-400 flex"></span>
                </p>
                <p class="font-medium text-lg text-black mr-0.5">50</p>
              </div>
              <div class="flex items-center">
                <p class="font-medium text-lg text-black mr-0.5">2</p>
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span class="h-full w-[16%] rounded-3xl bg-amber-400 flex"></span>
                </p>
                <p class="font-medium text-lg text-black mr-0.5">16</p>
              </div>
              <div class="flex items-center">
                <p class="font-medium text-lg text-black mr-0.5">1</p>
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                  <span class="h-full w-[8%] rounded-3xl bg-amber-400 flex"></span>
                </p>
                <p class="font-medium text-lg py-[1px] text-black mr-0.5">8</p>
              </div>
            </div>
            <div class="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 class="font-manrope font-bold text-5xl text-amber-400 mb-6">
                4.3
              </h2>
              <div class="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <Icon icon="mdi:star" class="w-6 h-6 text-yellow-500" />
                <Icon icon="mdi:star-outline" class="w-6 h-6 text-yellow-500" />
              </div>
              <p class="font-medium text-xl leading-8 text-gray-900 text-center">
                46 Ratings
              </p>
            </div>
          </div>
          <section class="bg-white py-8 antialiased md:py-16">
            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div class="mx-auto max-w-5xl">
                <div class="gap-4 sm:flex sm:items-center sm:justify-between">
                  <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">My reviews</h2>
                  <div class="mt-6 sm:mt-0">
                    <label for="order-type" class="sr-only mb-2 block text-sm font-medium text-gray-900">Select review
                      type</label>
                    <select id="order-type"
                      class="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary ">
                      <option selected>All reviews</option>
                      <option value="5">5 stars</option>
                      <option value="4">4 stars</option>
                      <option value="3">3 stars</option>
                      <option value="2">2 stars</option>
                      <option value="1">1 star</option>
                    </select>
                  </div>
                </div>

                <div class="mt-6 flow-root sm:mt-8">
                  <div class="divide-y divide-gray-200">
                    <div class="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                      <dl class="md:col-span-3 order-3 md:order-1">
                        <dt class="sr-only">Product:</dt>
                        <dd class="text-base font-semibold text-gray-900">
                          <a href="#" class="hover:underline">Apple iMac 27", M2 Max CPU 1TB HDD, Retina 5K </a>
                        </dd>
                      </dl>

                      <dl class="md:col-span-6 order-4 md:order-2">
                        <dt class="sr-only">Message:</dt>
                        <dd class=" text-gray-500">It’s fancy, amazing keyboard, matching
                          accessories. Super fast, batteries last more than usual, everything runs perfect in this...
                        </dd>
                      </dl>

                      <div class="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                        <dl>
                          <dt class="sr-only">Stars:</dt>
                          <dd class="flex items-center space-x-1">
                            <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />
                            <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />
                            <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />
                            <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />
                            <Icon icon="mdi:star" class="w-5 h-5 text-yellow-400" />

                          </dd>
                        </dl>
                        <button id="actionsMenuDropdown1" data-dropdown-toggle="dropdownOrder1" type="button"
                          class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100">
                          <span class="sr-only"> Actions </span>
                          <Icon icon="mdi:dots-horizontal" class="h-6 w-6 text-gray-700" />
                        </button>
                        <div id="dropdownOrder1"
                          class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow"
                          data-popper-placement="bottom">
                          <ul class="p-2 text-left text-sm font-medium text-gray-500"
                            aria-labelledby="actionsMenuDropdown1">
                            <li>
                              <button type="button" data-modal-target="editReviewModal"
                                data-modal-toggle="editReviewModal"
                                class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                                <span>Edit review</span>
                              </button>
                            </li>
                            <li>
                              <button type="button" data-modal-target="deleteReviewModal"
                                data-modal-toggle="deleteReviewModal"
                                class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Delete review
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <div id="deleteReviewModal" tabindex="-1" aria-hidden="true"
            class="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
            <div class="relative h-full w-full max-w-md p-4 md:h-auto">
              <!-- Modal content -->
              <div class="relative rounded-lg bg-white p-4 text-center shadow sm:p-5">
                <button type="button"
                  class="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                  data-modal-toggle="deleteReviewModal">
                  <Icon class="w-5 h-5 text-black" icon="mdi:close"/>
                  <span class="sr-only">Close modal</span>
                </button>
                <div
                  class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 ">
                  <Icon class="w-6 h-6 text-gray-500" icon="mdi:trash"/>
                  <span class="sr-only">Danger icon</span>
                </div>
                <p class="mb-3.5 text-gray-900">Are you sure you want to delete this review?</p>
                <p class="mb-4 text-gray-500">This action cannot be undone.</p>
                <div class="flex items-center justify-center space-x-4">
                  <button data-modal-toggle="deleteReviewModal" type="button"
                    class="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">No,
                    cancel</button>
                  <button type="submit"
                    class="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300">Yes,
                    delete</button>
                </div>
              </div>
            </div>
          </div>

          <div id="editReviewModal" tabindex="-1" aria-hidden="true"
            class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased">
            <div class="relative max-h-full w-full max-w-2xl p-4">
              <!-- Modal content -->
              <div class="relative rounded-lg bg-white shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
                  <h3 class="mb-1 text-lg font-semibold text-gray-900">Edit review</h3>
                  <button type="button"
                    class="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200"
                    data-modal-toggle="editReviewModal">
                   <Icon icon="mdi:close" class="h-4 w-4 text-gray-700"/>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <form class="p-4 md:p-5">
                  <div class="mb-4 grid grid-cols-2 gap-4">
                    <div class="col-span-2">
                      <div class="flex items-center">
                        <div class="flex items-center gap-1">
                          <Icon v-for="i in 5" :key="i" :icon="i <= reviews.rating ? 'mdi:star' : 'mdi:star-outline'"
                            class="w-6 h-6 cursor-pointer text-yellow-400 transition-transform hover:scale-110"
                            @click="reviews.rating = i" />
                        </div>
                        <span class="ms-2 text-lg font-bold text-gray-900">3.0 out of 5</span>
                      </div>
                    </div>
                    <div class="col-span-2">
                      <label for="title" class="mb-2 block text-sm font-medium text-gray-900">Review
                        title</label>
                      <input type="text" name="title" id="title"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-deepMaroon focus:ring-deepMaroon"
                        required />
                    </div>
                    <div class="col-span-2">
                      <label for="description" class="mb-2 block text-sm font-medium text-gray-900">Review
                        description</label>
                      <textarea id="description" rows="6"
                        class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-deepMaroon focus:ring-deepMaroon"
                        required></textarea>
                      <p class="ms-auto text-xs text-gray-500">Problems with the product or delivery?
                        <a href="#" class="text-deepMaroon hover:underline">Send a report</a>.
                      </p>
                    </div>
                    <div class="col-span-2">
                      <div class="flex items-center">
                        <input id="review-checkbox" type="checkbox" value=""
                          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-deepMaroon focus:ring-2 focus:ring-deepMaroon" />
                        <label for="review-checkbox" class="ms-2 text-sm font-medium text-gray-500">By publishing this
                          review
                          you agree with the <a href="#" class="text-deepMaroon hover:underline">terms and
                            conditions</a>.</label>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 pt-4 md:pt-5">
                    <button type="submit"
                      class="me-2 inline-flex items-center rounded-lg bg-deepMaroon px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-secondysButton focus:outline-none focus:ring-4 focus:ring-deepMaroon">Edit
                      review</button>
                    <button type="button" data-modal-toggle="editReviewModal"
                      class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-secondysButton focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">Cancel</button>
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
import AppLayout from "@/components/Layouts/AppLayout.vue";
import { Icon } from "@iconify/vue";
import { Modal, Dropdown } from "flowbite";
import { onMounted, nextTick, ref } from "vue";
const reviews = ref({
    rating: '',
    title: '',
    description: '',
    text: '',
    date: new Date().toLocaleString(),
})
onMounted(() => {
  nextTick(() => {
    const modalIds = ['editReviewModal', 'deleteReviewModal'];

    modalIds.forEach(id => {
      const $modalElement = document.getElementById(id);
      if ($modalElement) {
        const modal = new Modal($modalElement, {
          backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
        });

        const toggles = document.querySelectorAll(`[data-modal-toggle="${id}"]`);
        toggles.forEach(el => {
          el.addEventListener('click', () => modal.toggle());
        });
      }
    });

    const dropdownToggle = document.getElementById('actionsMenuDropdown1');
    const dropdownMenu = document.getElementById('dropdownOrder1');

    if (dropdownToggle && dropdownMenu) {
      new Dropdown(dropdownMenu, dropdownToggle);
    }
  });
});
</script>
