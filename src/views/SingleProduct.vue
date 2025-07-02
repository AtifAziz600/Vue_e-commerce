<template>
    <AppLayout>
        <section class="py-12">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-[30%]">
                    <div>
                       <Gallery :images="data?.images"/>
                    </div>
                </div>
                <div class="w-full lg:w-[50%] px-0 lg:px-8">
                    <div>
                        <h3 class="font-base text-md lg:text-2xl capitalize text-orange-800">
                          {{ data?.title }}
                        </h3>
                        <p class="my-4">
                          <span class="rounded bg-orange-700 px-2 py-0.5 text-white text-sm font-medium">
                            {{ data?.category?.name }}
                          </span>
                        </p>
                        <p class="text-xl lg:text-2xl">
                        {{ showpiece ?? '---   ---' }}
                        </p>
<!--                        <p class="text-sm  border-b border-gray-300 py-4">$437.74 Shipping & Import Fees Deposit to Bangladesh</p>-->
                    </div>
                    <div class="border-b border-gray-300 py-4 whitespace-pre text-wrap w-full" v-html="data?.description"/>

                    <template v-if="selectVariant.length > 0">
                      <div v-for="(varient, i) in selectVariant" :key="`varient-${i}`">
                        <div class="flex flex-col items-start gap-3 bg-white p-3 rounded my-4">
                          <p class="m-0 capitalize font-bold">{{ varient?.option?.name }}</p>

                          <select v-model="varient.selectVariant" class="form-control p-2 border rounded w-full">
                            <option value="null" disabled>Select {{ varient?.option?.name }} Option</option>
                            <option v-for="(item, j) in varient?.tags" :key="`option-${j}`" :value="item">
                              {{ item }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </template>
                    <div class="py-4">
                      <div v-html="data?.details"/>
                    </div>
                </div>
                <div class="w-full lg:w-[20%]">
                   <div class="border border-gray-300 p-5">
                      <p class="text-xl">{{  selectVariantProduct.totalPrice }} BDT</p>
                      <p class="text-sm text-gray-500  pb-3">Delivery <span class="font-medium text-gray-700">Tuesday, June 25 </span> . Order within 15 hrs 37 mins</p>
                      <span class="text-xs text-blue-600">Delivery in Bangladesh</span>
                      <h3 class="text-green-600 text-xl font-medium py-3">Stock In</h3>
                       <div class="border border-gray-300 p-1 rounded">
                           <p class="text-sm font-medium"> Quantity:
                           <select id="quantity" v-model="buyQty" class="focus:ring-none">
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                             <option value="4">4</option>
                             <option value="5">5</option>
                           </select>
                           </p>
                       </div>
                       <Button @click="addToCart" class="text-sm text-center bg-primary text-white rounded-full hover:bg-gray-600 w-full block py-1.5 my-2"> Add to Cart </Button>
                       <Button @click="addToCart('buyNow')"
                               class="text-sm text-center bg-secondary text-white rounded-full hover:bg-gray-700 w-full block py-1.5 my-2"> Buy Now </Button>
                   </div>
                </div>
            </div>
        </section>

<!--      <section class="py-6 border-y border-gray-300 mb-3">
        <h2>Products related to this item</h2>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <ProductCard v-for="product in 5 " />
        </div>
      </section>-->
    </AppLayout>
</template>

<script setup>
import Gallery from "@/components/Layouts/Gallary.vue";
import AppLayout from "@/components/Layouts/AppLayout.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref, watch} from "vue";
import useAxios from "@/composables/useAxios.js";
import {useCartStore} from "@/stores/useCartStore.js";
const router = useRouter()
const {sendRequest} = useAxios()
const data = ref({});
const cartStore = useCartStore()
const selectVariant = ref([]);
const buyQty = ref(1)
const variantPrice = ref(0)
const selectVariantProduct = ref({});
watch([selectVariant, buyQty], ([item, qty]) => {
  variantPrice.value = 10 * qty
  const title = item.map(item => item.selectVariant).join('/') + "/";
  const selectVariant = data?.value?.stocks?.filter(item => {
    if (item.varient === title) {
      return item;
    }
  })[0]
  selectVariantProduct.value = { ...selectVariant, totalPrice: selectVariant?.price * qty }
}, { deep: true })

const addToCart = async (type = null) => {
  cartStore.addToCart({data, selectSku: {...selectVariantProduct.value, selectQty: buyQty.value}})
  if(type === 'buyNow') await router.push('/add-cart')
}



const showpiece = computed(()=>{
  const prices = data?.value?.stocks?.map(product => product?.price);
  return Math.min(prices)+' BDT'+' - '+Math.max(prices)+' BDT';
})

const singleProduct = async (url) => {
  const route = useRoute();
  const response = await sendRequest(`/product/${route.params?.id}`)
  data.value = response?.data
  selectVariant.value = response?.data?.attributes

}

onMounted(async () => {
  await singleProduct()
})
</script>
