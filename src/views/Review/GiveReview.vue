<template>
  <section class="bg-white py-8 antialiased md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="flex items-center gap-2">
        <h2 class="text-2xl font-semibold text-gray-900">Reviews</h2>
        <div class="mt-2 flex items-center gap-2 sm:mt-0">
          <div class="flex items-center gap-0.5">
            <Icon icon="mdi-star" v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-300" />
          </div>
          <p class="text-sm font-medium leading-none text-gray-500">({{ averageRating }})</p>
          <RouterLink to="/reviews"
            class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
            {{ reviews.length }} Reviews
          </RouterLink>
        </div>
      </div>
      <div class="my-6 gap-8 sm:flex sm:items-start md:my-8">
        <div class="shrink-0 space-y-4">
          <p class="text-2xl font-semibold leading-none text-gray-900">{{ averageRating }} out of 5</p>
          <button type="button" @click="openModal"
            class="mb-2 me-2 rounded-lg bg-deepMaroon px-5 py-2.5 text-sm font-medium text-white hover:bg-secondysButton">
            Write a review
          </button>
        </div>
      </div>
      <div class="mt-6 divide-y divide-gray-200">
        <div class="gap-3 py-6 sm:flex sm:items-start" v-for="review in reviews.slice(0, 4)" :key="review.id">
          <div class="shrink-0 space-y-2 sm:w-48 md:w-72">
            <div class="flex items-center gap-0.5">
              <Icon v-for="n in review.rating" :key="n" icon="mdi:star" class="w-5 h-5 text-yellow-500" />
            </div>
            <div class="space-y-0.5">
              <p class="text-base font-semibold text-gray-900">{{ review.name }}</p>
              <p class="text-sm font-normal text-gray-500">{{ moment(review?.created_at).format('dddd/mm/YYYY') }}</p>
            </div>
            <div class="inline-flex items-center gap-1">
              <Icon icon="mdi:check-decagram" class="w-5 h-5 text-deepMaroon" />
              <p class="text-sm font-medium text-gray-900">Verified purchase</p>
            </div>
          </div>
          <div class="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
            <p class="text-base font-normal text-gray-500">{{ review.review }}</p>
            <div v-if="review.product?.length" class="flex gap-2">
              <img v-for="(img, index) in review.product.cover_image_url" :key="index" :src="img"
                class="h-32 w-20 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative bg-white rounded-lg shadow max-w-2xl w-full mx-4">
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
            <div>
              <h3 class="mb-1 text-lg font-semibold text-gray-900">Add a review for:</h3>
              <span class="font-medium text-deepMaroon">{{ productName }}</span>
            </div>
            <button type="button" @click="closeModal"
              class="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900">
              <Icon icon="mdi:close" class="w-5 h-5 text-black" />
            </button>
          </div>
          <form class="p-4 md:p-5" @submit.prevent="addReview">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="col-span-2">
                <label for="title" class="block text-sm font-medium text-gray-900 mb-2">Review title</label>
                <input v-model="newReview.title" id="title" type="text" required
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900" />
              </div>
              <div class="col-span-2 mb-4">
                <label class="block text-sm font-medium text-gray-900 mb-2">Your rating</label>
                <div class="flex items-center gap-1">
                  <Icon v-for="i in 5" :key="i"
                    :icon="i <= newReview.rating ? 'mdi:star' : 'mdi:star-outline'"
                    class="w-6 h-6 cursor-pointer text-yellow-400 transition-transform hover:scale-110"
                    @click="newReview.rating = i" />
                </div>
              </div>
              <div class="col-span-2">
                <label for="review" class="block text-sm font-medium text-gray-900 mb-2">Review description</label>
                <textarea v-model="newReview.review" id="review" rows="4" required
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"></textarea>
              </div>
              <div class="col-span-2">
                <p class="mb-2 block text-sm font-medium text-gray-900">Add real photos of the product to help other customers 
                  <span class="text-gray-500">(Optional)</span></p>
                <div class="flex w-full items-center justify-center">
                  <label for="dropzone-file"
                    class="flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                    <div class="flex flex-col items-center justify-center pb-6 pt-5">
                      <Icon icon="mdi:cloud-upload-outline" class="w-8 h-8 text-deepMaroon" />
                      <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" multiple
                      accept="image/svg+xml,image/png,image/jpg,image/jpeg,image/gif"
                      @change="handleFileChange" />
                  </label>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-200 pt-4 text-right">
              <button type="submit"
                class="me-2 rounded-lg bg-deepMaroon px-5 py-2.5 text-sm font-medium text-white hover:bg-secondysButton">
                Add review
              </button>
              <button type="button" @click="closeModal"
                class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 text-center">
        <RouterLink to="/reviews">
          <button type="button"
            class="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-deepMaroon focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
            View more reviews
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import useAxios from "@/composables/useAxios";
import { useAuthStore } from '../../stores/useAuthStore'
import moment from 'moment';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
const toast = useToast();
const router = useRouter();
const authStore = useAuthStore();
const props = defineProps({
  productId: {
    type: [String, Number],
    required: true
  },
  productName: {
    type: [String, Text],
    required: true
  }
});
const { sendRequest } = useAxios();
const showModal = ref(false);
const reviews = ref([]);
const loading = ref(false);
const error = ref(null);
const newReview = ref({
  rating: 0,
  text: '',
  review: '', 
  verified: false,
  images: [],
});
async function fetchReviews() {
  loading.value = true;
  error.value = null;
  try {
    const response = await sendRequest({
      method: 'get',
      url: `/review`,
    });
    reviews.value = response.data;
  } catch (err) {
    error.value = 'Error fetching reviews';
    console.error(err);
  } finally {
    loading.value = false;
  }
}
newReview.value.name = authStore?.user?.name;
newReview.value.email = authStore?.user?.email;
async function addReview() {
    if (!authStore?.user?.token) {
    toast.error("Please login first!");
    router.push("/login?redirect=/product/:slug");
    return;
  }
  try {
    const formData = new FormData();
    formData.append('product_id', props.productId);
    formData.append('rating', newReview.value.rating);
    formData.append('title', newReview.value.title);
    formData.append('review', newReview.value.review);
    formData.append('name', newReview.value.name);
    formData.append('email', newReview.value.email);
    
   if (fileInput.value?.files?.length) {
      Array.from(fileInput.value.files).forEach(file => {
        formData.append('images[]', file);
      });
    }
    await sendRequest({
      method: 'post',
      url: '/review',
      data: formData,
    });   
    await fetchReviews();
    newReview.value = {};
    closeModal();
    toast.success('Review Given')
  } catch (err) {
    error.value = 'Error adding review';
    console.error(err);
  }
}
const fileInput = ref(null);
function handleFileChange(event) {
  fileInput.value = event.target;
}
function openModal() {
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}
const averageRating = computed(() => {
  if (reviews.value.length === 0) return 0;
  const sum = reviews.value.reduce((acc, r) => acc + Number(r.rating), 0);
  return (sum / reviews.value.length).toFixed(2);
});

onMounted(() => {
  fetchReviews();
});
</script>