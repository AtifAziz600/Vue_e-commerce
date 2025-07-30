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
                class="max-lg:mx-auto lg:ml-auto h-full w-full object-fit transition-transform duration-300 hover:scale-105"
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
                  @click="handleBuyNow(product)"
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
      <div class="mx-auto">
        <GiveReview/>
      </div>
        <div class="mx-auto">
          <Offer />
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
import GiveReview from "@/views/Review/GiveReview.vue";
const productApiStore = useApiProductStore();
const router = useRouter();
onMounted(async () => {
  await productApiStore.fetchProducts();
  // console.log(productApiStore.products);
});

const route = useRoute();
const cart = useCartStore();
const toast = useToast();
const singleProductStore = useSingleProductStore();
function handleAddToCart(item) {
      const existingCartItems = cart.cartItems; 
  if (existingCartItems.length > 0) {
    const existingVendorId = existingCartItems[0].shop_id;
    if (existingVendorId !== item.shop_id) {
      toast.error("You can only order from one vendor at a time.");
      return;
    }
  }
  cart.addToCart({
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.price,
    quantity: item.quantity,
    shop_id: item.shop_id,
    category_id: item.category_id,
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
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: item.price,
    category: item.tag,
  };
  localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
  toast.success(`${item.title} is bought`)
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
