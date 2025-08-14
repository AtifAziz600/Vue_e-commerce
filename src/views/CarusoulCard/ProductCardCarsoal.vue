<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">
          Catch Low Prices in Each Category
          <a
            href="/new-release"
            class="text-xs text-blue-950 font-semibold hover:text-blue-900"
            >See more</a
          >
        </h2>
      </div>
      <swiper
        :slides-per-view="2"
        :space-between="16"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }"
        :navigation="true"
        class="py-2"
        :modules="modules"
      >
        <swiper-slide
          v-for="item in productApiStore.products"
          :key="item.title"
          class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-xl"
        >
        <RouterLink :to="`/product/${item.slug}`" class="block h-full">
          
          <img
            :src="item.cover_image_url"
            alt="Product"
            class="w-full h-44 object-contain p-2"
          />
                  </RouterLink>
          <div class="px-4 pb-4">
            <p class="text-xs font-medium text-gray-500 mb-1">
              <span
                class="inline-block bg-discountColor text-black px-2 py-0.5 rounded-full text-[10px] font-semibold mr-2"
              >
                -32%
              </span>
              <span class="text-[11px]">With Discount</span>
            </p>
            <p class="text-base font-semibold" v-if="item.discount_price">
              zł {{ item.discount_price }}
              <span class="text-gray-400 font-normal text-sm line-through ml-1">
                zł {{ item.price }}
              </span>
            </p>
            <p class="text-sm mt-1 text-gray-700 leading-tight line-clamp-2">
              {{ item.title }}
            </p>
            <p
              class="text-sm mt-1 text-gray-700 hover:text-blue-700 leading-tight line-clamp-2 cursor-pointer"
            >
              ({{ item.reviews }}) Reviews
            </p>
            <div class="flex items-center py-1">
              <button
                @click="handleAddToCart(item)"
                class="flex items-center justify-center bg-primarysButton hover:bg-secondysButton text-white text-sm font-medium px-4 py-2 rounded-2xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-4"
              >
                <Icon icon="mdi:cart-plus" class="w-5 h-5 mr-1" />
                Add to Cart
              </button>
            </div>
          </div>

        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAxios from "@/composables/useAxios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useToast } from "vue-toastification";
import { useCartStore } from "../../stores/useCartStore";
import "swiper/css";
import "swiper/css/navigation";
import { useApiProductStore } from "../../stores/useApiProductStore";
import { RouterLink, useRoute } from "vue-router";
const productApiStore = useApiProductStore();
const { sendRequest } = useAxios();
const route = useRoute();
onMounted(async () => {
  await productApiStore.fetchProducts();
  // console.log(productApiStore.products);
});
const toast = useToast();
const cart = useCartStore();
const modules = [Navigation];

const products = ref([]);

onMounted(async () => {
  try {
    const response = await sendRequest({
      url: `product?category=${route.params.slug}`,
      method: "GET",
    })
    products.value = response.data;
  } catch (error) {
    toast.error("Failed to load products");
  }
});

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
          shipping_charge: item.shop?.shipping_charge || 0,
  shipping_charge2: item.shop?.shipping_charge2 || 0,
  });
  toast.success(`${item.title} added to cart`);
}
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  width: 36px;
  height: 36px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 9999px;
}
</style>
