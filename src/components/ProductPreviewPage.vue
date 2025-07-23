<template>
  <AppLayout>
    <section class="relative py-12 bg-[#f5f5f7] min-h-screen">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
          <div class="img flex items-center justify-center">
            <div
              class="h-96 max-lg:mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white"
            >
              <img
                :src="product?.cover_image_url"
                :alt="product?.title"
                class="max-lg:mx-auto lg:ml-auto h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {{ product }}
            </div>
          </div>
          <div
            class="w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0"
          >
            <div class="w-full max-w-xl">
              <h2
                class="font-sans font-bold text-4xl leading-tight text-gray-900 mb-3 capitalize tracking-tight"
              >
                {{ product?.title }}
              </h2>
              <p
                class="text-base font-medium leading-8 text-gray-500 py-2 tracking-wide uppercase"
              >
                {{ product?.short_description }}
              </p>
              <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6
                  class="font-semibold text-3xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5"
                >
                  zł {{ product?.discount_price }}
                </h6>
                <div class="flex items-center gap-2">
                  <div class="flex items-center gap-1">
                    <div v-for="i in 5" :key="i">
                      <svg
                        v-if="i <= product?.rating"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#ffcc00"
                        />
                      </svg>
                      <svg
                        v-else
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#e5e7eb"
                        />
                      </svg>
                    </div>
                  </div>
                  <span
                    class="pl-2 font-normal leading-7 text-gray-500 text-sm"
                  >
                    {{ product?.reviews }} reviews
                  </span>
                </div>
              </div>
              <p class="text-gray-700 text-lg font-normal mb-5 leading-relaxed">
                {{ product?.subtitle }}
              </p>
              <ul class="grid gap-y-3 mb-8">
                <li
                  v-for="(feature, i) in product?.features"
                  :key="i"
                  class="flex items-center gap-3"
                >
                  <span
                    class="inline-block w-2.5 h-2.5 rounded-full bg-red-800"
                  ></span>
                  <span class="font-normal text-base text-gray-900">{{
                    feature
                  }}</span>
                </li>
              </ul>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                <div class="flex sm:items-center sm:justify-center w-full">
                  <button
                    class="py-3 px-5 border border-gray-300 rounded-l-full bg-white hover:bg-gray-100"
                    @click="decrement"
                  >
                    <span class="text-xl font-bold text-gray-700">-</span>
                  </button>
                  <input
                    type="text"
                    class="font-semibold text-gray-900 text-lg py-2 px-6 w-20 text-center border-y border-gray-300 bg-transparent outline-none"
                    :value="quantity"
                    readonly
                  />
                  <button
                    class="py-3 px-5 border border-gray-300 rounded-r-full bg-white hover:bg-gray-100"
                    @click="increment"
                  >
                    <span class="text-xl font-bold text-gray-700">+</span>
                  </button>
                </div>
                <button
                  @click="handleAddToCart(product)"
                  class="py-3 px-5 rounded-full bg-primarysButton hover:bg-secondysButton text-white font-semibold text-lg w-full flex items-center justify-center gap-2 shadow transition-all duration-300"
                >
                  <Icon icon="mdi:cart" class="h-6 w-6" />
                  Add to cart
                </button>
              </div>
              <div class="flex items-center gap-3">
                <button
                  class="transition-all duration-300 p-4 rounded-full bg-white border border-gray-200 hover:bg-gray-100"
                  :class="{ 'ring-2 ring-indigo-400': wishlisted }"
                  @click="wishlisted = !wishlisted"
                >
                  <Icon
                    icon="mdi:heart"
                    class="h-6 w-6 text-gray-500 hover:text-gray-800"
                  />
                </button>
                <button
                  @click="handleBuyNow"
                  class="text-center w-full px-5 py-4 rounded-xl bg-primarysButton hover:bg-secondysButton flex items-center justify-center font-semibold text-lg text-white shadow transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>
              <div class="mt-8 flex justify-center gap-2 opacity-70">
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
                <span class="w-2 h-2 rounded-full bg-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full max-w-full px-4 md:px-5 lg:px-6 mx-auto relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl"
      >
        <h2
          class="font-sans font-semibold text-3xl sm:text-4xl text-gray-800 mb-10 text-center"
        >
          Customer Reviews & Ratings
        </h2>
        <div class="grid grid-cols-12 gap-8 mb-14">
          <div class="col-span-11 md:col-span-4 flex items-center">
            <div
              class="space-y-3 sm:space-y-4 w-full max-w-sm sm:max-w-md mx-auto px-2"
            >
              <div class="flex items-center w-full space-x-2 sm:space-x-3">
                <p
                  class="text-gray-700 font-medium w-4 text-right text-sm sm:text-base"
                >
                  5
                </p>
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
                />
                <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full bg-red-800 rounded-full max-w-full"
                    style="width: 30%"
                  ></div>
                </div>
                <p
                  class="text-gray-600 font-medium w-12 text-right text-sm sm:text-base"
                >
                  30
                </p>
              </div>

              <div class="flex items-center w-full space-x-2 sm:space-x-3">
                <p
                  class="text-gray-700 font-medium w-4 text-right text-sm sm:text-base"
                >
                  4
                </p>
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
                />
                <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full bg-red-800 rounded-full max-w-full"
                    style="width: 65%"
                  ></div>
                </div>
                <p
                  class="text-gray-600 font-medium w-12 text-right text-sm sm:text-base"
                >
                  78
                </p>
              </div>

              <div class="flex items-center w-full space-x-2 sm:space-x-3">
                <p
                  class="text-gray-700 font-medium w-4 text-right text-sm sm:text-base"
                >
                  3
                </p>
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
                />
                <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full bg-red-800 rounded-full max-w-full"
                    style="width: 25%"
                  ></div>
                </div>
                <p
                  class="text-gray-600 font-medium w-12 text-right text-sm sm:text-base"
                >
                  60
                </p>
              </div>

              <div class="flex items-center w-full space-x-2 sm:space-x-3">
                <p
                  class="text-gray-700 font-medium w-4 text-right text-sm sm:text-base"
                >
                  2
                </p>
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
                />
                <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full bg-red-800 rounded-full max-w-full"
                    style="width: 20%"
                  ></div>
                </div>
                <p
                  class="text-gray-600 font-medium w-12 text-right text-sm sm:text-base"
                >
                  23
                </p>
              </div>

              <div class="flex items-center w-full space-x-2 sm:space-x-3">
                <p
                  class="text-gray-700 font-medium w-4 text-right text-sm sm:text-base"
                >
                  1
                </p>
                <Icon
                  icon="mdi:star"
                  class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0"
                />
                <div class="relative flex-1 h-2 bg-gray-200 rounded-full">
                  <div
                    class="absolute top-0 left-0 h-full bg-red-800 rounded-full max-w-full"
                    style="width: 10%"
                  ></div>
                </div>
                <p
                  class="text-gray-600 font-medium w-12 text-right text-sm sm:text-base"
                >
                  3
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-span-11 md:col-span-8 space-y-3 lg:pl-4 max-w-full py-12 justify-center items-center"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white/50 border border-gray-200 backdrop-blur-xl shadow-md rounded-2xl p-6"
            >
              <div
                class="col-span-12 md:col-span-8 flex items-center justify-center"
              >
                <div
                  class="flex flex-col sm:flex-row justify-between items-center w-full max-w-full gap-6"
                >
                  <div class="sm:border-r sm:pr-6 text-center w-full">
                    <h2
                      class="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                    >
                      {{ product?.rating }}
                    </h2>
                    <div class="flex justify-center mb-2">
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon
                        icon="mdi:star-outline"
                        class="w-5 h-5 text-yellow-500"
                      />
                    </div>
                    <p class="text-gray-500 text-sm">
                      {{ product?.ratting }} Ratings
                    </p>
                  </div>
                  <div class="sm:pl-6 text-center w-full">
                    <h2
                      class="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                    >
                      {{ product?.reviews }}
                    </h2>
                    <div class="flex justify-center mb-2">
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon icon="mdi:star" class="w-5 h-5 text-yellow-500" />
                      <Icon
                        icon="mdi:star-outline"
                        class="w-5 h-5 text-yellow-500"
                      />
                    </div>
                    <p class="text-gray-500 text-sm">Last Month</p>
                  </div>
                </div>
              </div>
              <div
                class="col-span-12 md:col-span-4 flex flex-col justify-center items-center space-y-4 mt-6 md:mt-0"
              >
                <button
                  @click="isReviewModalOpen = true"
                  class="w-full py-3 px-6 rounded-full text-white font-semibold shadow bg-primarysButton hover:bg-secondysButton transition-all text-sm sm:text-base"
                >
                  Write A Review
                </button>
                <Modal
                  :show="isReviewModalOpen"
                  @close="isReviewModalOpen = false"
                >
                  <template #header>
                    <div class="mb-2">
                      <h2 class="text-lg sm:text-xl font-semibold">
                        Write Review Here:
                      </h2>
                      <h3 class="text-sm sm:text-md font-normal text-blue-600">
                        {{ product?.title }}
                      </h3>
                    </div>
                  </template>

                  <div class="mt-4 space-y-4">
                    <div class="flex items-center gap-1">
                      <Icon
                        v-for="i in 5"
                        :key="i"
                        :icon="i <= rating ? 'mdi:star' : 'mdi:star-outline'"
                        class="text-yellow-500 w-6 h-6 cursor-pointer transition"
                        @click="rating = i"
                      />
                    </div>
                    <div>
                      <label
                        for="title"
                        class="block text-sm font-medium text-gray-900 mb-1"
                        >Review Title</label
                      >
                      <input
                        type="text"
                        placeholder="Review Title"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <textarea
                        v-model="reviewText"
                        rows="4"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Give Your Review Description Here.."
                      ></textarea>
                    </div>
                    <div>
                      <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        >Add real photos of the product (Optional)</label
                      >
                      <label
                        for="file-upload"
                        class="flex flex-col items-center justify-center py-6 sm:py-8 w-full border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8 sm:h-10 sm:w-10 text-red-600 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                        <span class="text-gray-500 text-xs sm:text-sm mb-1"
                          >PNG, JPG, PDF, DOCX up to 15MB</span
                        >
                        <span class="text-red-700 font-medium text-sm"
                          >Click to upload or drag file here</span
                        >
                        <input id="file-upload" type="file" class="hidden" />
                      </label>
                    </div>
                  </div>

                  <template #footer>
                    <div class="mt-6 flex flex-wrap gap-2 justify-start">
                      <button
                        class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm"
                        @click="isReviewModalOpen = false"
                      >
                        Cancel
                      </button>
                      <button
                        class="px-4 py-2 bg-primarysButton hover:bg-secondysButton text-white rounded-lg text-sm"
                        @click="submitReview"
                      >
                        Submit
                      </button>
                    </div>
                  </template>
                </Modal>
                <RouterLink to="/review" class="w-full">
                  <button
                    class="w-full py-3 px-6 rounded-full bg-white text-red-900 border border-red-900 font-semibold hover:bg-secondysButton hover:text-white transition-all text-sm sm:text-base"
                  >
                    See All Reviews
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-12 border-b border-gray-200 pb-8 max-w-3xl mx-auto">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">
            Most Helpful Positive Review
          </h4>
          <div
            class="flex justify-between flex-col sm:flex-row text-sm text-gray-600 mb-2"
          >
            <div class="flex gap-1 items-center">
              <Icon icon="mdi:star" class="text-yellow-500" />
              <Icon icon="mdi:star" class="text-yellow-500" />
              <Icon icon="mdi:star" class="text-yellow-500" />
              <Icon icon="mdi:star" class="text-yellow-500" />
              <Icon icon="mdi:star-outline" class="text-yellow-500" />
            </div>
            <div class="flex gap-2 items-center">
              <span class="font-medium">john@gmail.com</span>
              <span>|</span>
              <span class="text-gray-400">Nov 01, 2023</span>
            </div>
          </div>
          <p class="text-gray-600 leading-7">
            I recently had the opportunity to explore Pagedone's UI design
            system, and it left a lasting impression on my workflow...
          </p>
        </div>
        <div class="space-y-8 max-w-3xl mx-auto">
          <div
            v-for="(rev, index) in reviews"
            :key="index"
            class="border-b border-gray-200 pb-6"
          >
            <div
              class="flex justify-between flex-col sm:flex-row text-sm text-gray-600 mb-2"
            >
              <div class="flex gap-1 items-center">
                <Icon
                  v-for="i in 5"
                  :key="i"
                  :icon="
                    i <= Math.floor(rev.rating)
                      ? 'mdi:star'
                      : i - rev.rating <= 0.5
                      ? 'mdi:star-half-full'
                      : 'mdi:star-outline'
                  "
                  class="text-yellow-500"
                />
              </div>
              <div class="flex gap-2 items-center">
                <span class="font-medium">{{ rev.email }}</span>
                <span>|</span>
                <span class="text-gray-400">{{ rev.date }}</span>
              </div>
            </div>
            <p class="text-gray-600 leading-7">
              {{ rev.content }}
            </p>
          </div>
        </div>
        <div class="mx-auto">
          <Offer/>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useCartStore } from "@/stores/useCartStore";
import { Icon } from "@iconify/vue";
import Modal from "../components/Modal.vue";
import { useApiProductStore } from "../stores/useApiProductStore";
import { useSingleProductStore } from "../stores/useSingleProductStore";
import Offer from "@/views/CarusoulCard/Offer.vue";
const productApiStore = useApiProductStore();
const router = useRouter();
onMounted(async () => {
  await productApiStore.fetchProducts();
  // console.log(productApiStore.products);
});
const rating = ref(0);
const isReviewModalOpen = ref(false);
const reviewText = ref("");

const reviews = ref([
  {
    email: "sara@live.com",
    date: "Oct 18, 2023",
    rating: 4.5,
    content: "The design is intuitive and easy to use...",
  },
]);

function submitReview() {
  const newReview = {
    email: "guest@user.com",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    rating: rating.value,
    content: reviewText.value,
  };

  reviews.value.push(newReview);
  toast.success(`Review Submitted:, ${reviewText.value}`);
  isReviewModalOpen.value = false;
  reviewText.value = "";
  rating.value = 0;
}
const route = useRoute();
const cart = useCartStore();
const toast = useToast();
const singleProductStore = useSingleProductStore();
function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: item.quantity,
    shop_id: 1,
    category_id: 1,
    total: item.price,
    category: item.tag,
  });
  toast.success(`${item.title} added to cart`);
}
function handleBuyNow(item) {
  const checkoutProduct = {
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: item.quantity,
    shop_id: 1,
    category_id: 1,
    total: item.price,
    category: item.tag,
  };
  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  toast.success(`${item.title} is bought`);
  router.push("/checkout");
}
onMounted(async () => {
  await singleProductStore.fetchProductBySlug(route.params.slug);
  // console.log("Fetched product:", singleProductStore.item);
});

const product = computed(() => singleProductStore.product);

const quantity = ref(1);
const wishlisted = ref(false);

function increment() {
  quantity.value++;
}
function decrement() {
  if (quantity.value > 1) quantity.value--;
}
</script>

<style scoped>
input[readonly]::-webkit-input-placeholder {
  color: #111;
  opacity: 1;
}
</style>
