<template>
  <section class="bg-gray-300 h-full min-h-[50vh] md:min-h-screen">
    <h3 class="text-md lg:text-2xl font-semibold p-5" v-if="cartStore.getCartLength">Shopping Cart</h3>

    <div class="flex flex-col lg:flex-row gap-5">
            <div class="w-full lg:w-4/5">
                <div v-for="item in cartStore.getCartItems">

                  {{ item?.vendor?.name }}
                  <div class="bg-white my-5">
                    <div class="flex flex-col lg:flex-row gap-3 p-5 border-y border-gray-300 mb-5" v-for="(item, i) in item?.vendor.products" :key="`c-item-${i}`">
                      <div class="max-w-[10rem]">
                        <img :src="item?.thumbnail" alt="">
                      </div>
                      <div class="w-full order-last lg:order-none lg:w-3/5">
                        <h3 class="font-medium"> {{ item?.title }} </h3>
                        <p>Price: {{ item?.price }} BDT</p>
                        <label for="" class="flex items-center gap-4 pb-5">
                          <div class="flex items-center gap-2 text-sm">
                            <strong>{{ item.vendor ? item.vendor?.name : 'In house product' }}</strong>
                            <RouterLink :to="`/single-product/${item?.id}`" class="hover:underline text-orange-600 hover:text-red-600">Learn more</RouterLink>
                          </div>
                        </label>
                        <div class="flex flex-col lg:flex-row gap-5 lg:items-center">
                          <div class="p-1 rounded max-w-28">
                            <p class="text-sm font-medium"> Quantity: {{ item?.qty }}</p>
                          </div>
                          <Button @click="cartStore.removeFromCart(item)" class="border-l border-gray-300 text-sm text-cyan-700 hover:underline px-5 h-5">Delete</Button>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/5">
                        <p class="text-sm font-medium lg:text-right">{{ item.price * item.qty}} BDT</p>
                      </div>
                    </div>

                    <div class="flex items-center p-5 md:p-0 justify-center min-h-[30vh] md:min-h-[70vh] flex-col" v-if="!cartStore.getCartLength">
                      <h1 class="text-lg md:text-4xl font-bold text-gray-400 mb-2">Product Not Found</h1>
                      <p class="text-gray-600 mb-4 text-center md:text-sm">We're sorry, but the product you're looking for is not available.</p>
                      <RouterLink to="/" class="bg-orange-400 text-white px-3 py-1 rounded-full mt-3 text-xs">Back To Home</RouterLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-1/5">
                  <div class="bg-white my-5 p-5">
                      <p class="text-lg font-normal">SubTotal ({{ cartStore.getCartLength }} Item): <span class="font-medium">{{ cartStore?.getCartTotalPrice }} BDT</span></p>
                    <RouterLink v-if="cartStore.getCartLength" :to="{name:'checkout', query:{redirect:'/checkout'}}" class="text-sm text-center bg-orange-400 text-white rounded-xl hover:bg-yellow-400 w-full block py-1.5 my-2"> Proceed to checkout </RouterLink>
                  </div>
              </div>
          </div>
      </section>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {useCartStore} from "@/stores/useCartStore.js";
import {onMounted} from "vue";
const cartStore = useCartStore();
cartStore.initCart()
</script>

<style  scoped>

</style>