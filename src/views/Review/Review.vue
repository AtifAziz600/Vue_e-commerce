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
                <div class="space-y-4">      
              <div v-for="review in reviewApi" :key="review.id" class="border p-4 rounded-lg">
                <div class="flex items-center gap-2">
                  <p class="font-semibold">{{ review.user }}</p>
                  <span class="text-sm text-gray-500">{{ review.email }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon v-for="n in review.rating" :key="n" icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                </div>
                <p class="text-gray-700 mt-2">{{ review.review }}</p>
                <p class="text-sm text-gray-400">{{ moment(review?.created_at).format('dddd/mm/YYYY') }}</p>

              </div>
            </div>
              </div>
            </div>
          </section>


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
import useAxios from "@/composables/useAxios";
import moment from "moment";

const { sendRequest } = useAxios(); 
const reviews = ref({
    rating: '',
    title: '',
    description: '',
    text: '',
    date: new Date().toLocaleString(),
})

const reviewApi = ref([]);
const fetchReviews = async () => {
  try {
    const response = await sendRequest({
      method: 'get',
      url: '/review', 
    });
    reviewApi.value = response.data; 
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}
onMounted(() => {
  fetchReviews()
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
