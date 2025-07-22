<template>
  <AppLayout>
    <section
      class="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen"
    >
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="p-6 sm:p-10 md:p-14 bg-white/95 backdrop-blur-3xl shadow-3xl rounded-3xl sm:rounded-[3rem] border border-gray-200 ring-1 ring-gray-100 transition-all duration-500"
        >
          <h2
            class="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-5 text-center"
          >
            Your Favorites
          </h2>
          <p
            class="font-sans text-base text-gray-600 tracking-tight mb-8 sm:mb-12 text-center max-w-2xl mx-auto"
          >
            These are the products you've added to your wishlist. Easily manage
            them or add them to your cart.
          </p>

          <div
            class="hidden lg:grid grid-cols-10 pb-4 border-b border-gray-200 mb-4 items-center"
          >
            <div class="col-span-4">
              <p class="font-semibold text-lg text-indigo-700">Product</p>
            </div>
            <div class="col-span-1 text-center">
              <p class="font-semibold text-lg text-gray-600">Price</p>
            </div>
            <div class="col-span-2 text-center">
              <p class="font-semibold text-lg text-gray-600">Stock Status</p>
            </div>
            <div class="col-span-2 text-center">
              <p class="font-semibold text-lg text-gray-600">Action</p>
            </div>
            <div class="col-span-1 text-center">
              <p class="font-semibold text-lg text-gray-600">Remove</p>
            </div>
          </div>

          <div
            v-for="item in favoriteItems"
            :key="item.product + item.color"
            class="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 shadow-lg grid grid-cols-1 lg:grid-cols-10 items-center mb-5 sm:mb-6 border border-gray-100 hover:shadow-xl hover:bg-white/100 transition-all duration-300 ring-1 ring-gray-50"
          >
            <div
              class="flex items-center justify-center mb-4 lg:mb-0 lg:col-span-1"
            >
              <img
                :src="item.image"
                :alt="item.product"
                class="w-24 h-24 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-105 transform"
              />
            </div>
            <div
              class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0 lg:col-span-3"
            >
              <h5
                class="font-display font-semibold text-lg sm:text-xl text-gray-900 mb-1"
              >
                {{ item.product }}
              </h5>
              <p class="font-sans text-sm text-gray-500">{{ item.color }}</p>
            </div>
            <div class="flex flex-col gap-3 w-full lg:contents">
              <div
                class="flex items-center justify-between lg:justify-center lg:col-span-1"
              >
                <span
                  class="block lg:hidden font-medium text-gray-500 text-sm mr-2"
                  >Price:</span
                >
                <p class="font-semibold text-base sm:text-lg text-gray-900">
                  {{ item.price }}
                </p>
              </div>
              <div
                class="flex items-center justify-between lg:justify-center lg:col-span-2"
              >
                <span
                  class="block lg:hidden font-medium text-gray-500 text-sm mr-2"
                  >Status:</span
                >
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full font-semibold text-xs shadow-sm transition-all duration-300"
                  :class="{
                    'bg-green-100 text-green-700': item.status === 'In Stock',
                    'bg-red-100 text-red-700': item.status === 'Stock Out',
                  }"
                >
                  <span
                    class="w-2.5 h-2.5 rounded-full mr-2"
                    :class="{
                      'bg-green-500': item.status === 'In Stock',
                      'bg-red-500': item.status === 'Stock Out',
                    }"
                  ></span>
                  {{ item.status }}
                </span>
              </div>
              <div
                class="flex items-center justify-between lg:justify-center lg:col-span-2"
              >
                <span
                  class="block lg:hidden font-medium text-gray-500 text-sm mr-2"
                  >Action:</span
                >
                <button
                  class="font-semibold text-sm rounded-full px-5 py-2 text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  :class="
                    item.button === 'Add to Cart'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 hover:bg-gray-800'
                  "
                >
                  {{ item.button }}
                </button>
              </div>
              <div
                class="flex items-center justify-between lg:justify-center lg:col-span-1 cursor-pointer"
              >
                <span
                  class="block lg:hidden font-medium text-gray-500 text-sm mr-2"
                  >Remove:</span
                >
                <Icon
                  icon="mdi:delete"
                  class="h-6 w-6 text-gray-500 hover:text-red-500 transition-colors duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useAuthStore } from '../../stores/useAuthStore';
import { Icon } from "@iconify/vue";
import image from "../../assets/img/1705474950.png";

const router = useRouter();
const toast = useToast();
const authStore = useAuthStore();

onMounted(() => {
  if (!authStore?.user?.token) {
    toast.error("Please Login first!");
    router.push("/login");
  }
});

const favoriteItems = ref([
  {
    product: "Apple Airpods Pro",
    color: "White",
    price: "zł249.99",
    button: "Add to Cart",
    image: image,
    status: "In Stock",
  },
  {
    product: "Samsung Galaxy Buds",
    color: "Black",
    price: "zł199.99",
    button: "Add to Cart",
    image: image,
    status: "In Stock",
  },
  {
    product: "Sony WH-1000XM4",
    color: "Silver",
    price: "zł349.99",
    button: "Contact Us",
    image: image,
    status: "Stock Out",
  },
]);
</script>

<style scoped></style>
