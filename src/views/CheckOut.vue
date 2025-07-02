  <template>
    <div>
      <section>
          <div class="flex flex-wrap">
            <div class="w-full lg:w-2/3">
              <h2 class="text-xl font-bold text-primary py-5">Checkout</h2>

              <div class="items-center max-w-4xl mx-auto leading-8 p-5">
                <div class="flex flex-wrap">
                  <div class="cursor-pointer w-1/2 p-3"
                       :class="deliveryCharge.addressId === item.id ? 'bg-orange-300' : ''"
                       @click="setDeliveryAddress(item)" v-for="item in areas">
                    <div class="bg-white shadow p-5">
                      <h2 class="capitalize">{{ item?.title }}</h2>
                      <p>{{ item?.address }}</p>
                      <p>{{ item?.email }}</p>
                      <p>{{ item?.phone }}</p>
                      <p>Area: {{ item?.order_area?.area_name }} & Delivery Charge: {{ item?.order_area?.delivery_charge }} BDT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!areas?.length">
                <div class="flex items-center justify-center flex-col">
                  <h1 class="text-4xl font-bold text-gray-400 mb-2">Delivery Address Not Found</h1>
                  <p class="text-gray-700 mb-4">Please add at least one delivery address to proceed.</p>
                  <RouterLink :to="{name:'customer.addAddress', query:{redirect:'/checkout'}}" class="bg-orange-400 text-white px-3 py-1 rounded-full mt-3 text-xs">Add New Address</RouterLink>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/3">
              <h2 class="text-xl font-bold text-primary py-5">Review Order Details</h2>
              <hr>
              <p class="text-lg font-normal">SubTotal ({{ cartStore.getCartLength }} Item): <span class="font-medium">{{ cartStore?.getCartTotalPrice }} BDT</span></p>

              <div class="p-5 bg-gray-200  rounded-lg mt-10">
              <ul>
                <li class="flex items-center justify-between text-sm text-gray-500">
                  <p>Sub Total </p>
                  <p>{{ cartStore?.getCartTotalPrice }} BDT</p>
                </li>
                <li v-if="deliveryCharge.addressId"  class="flex items-center justify-between text-sm text-gray-500">
                  <p>Delivery Fee </p>
                  <p>{{ deliveryCharge?.setDeliveryCharge }} BDT</p>
                </li>
                <li class="flex items-center justify-between text-sm py-3 font-semibold">
                  <p>Grant Total </p>
                  <p>{{ parseInt(cartStore?.getCartTotalPrice) +  parseInt(deliveryCharge?.setDeliveryCharge)}} BDT</p>
                </li>
              </ul>
              </div>
              <div class="my-8">
                <div class="flex items-center mb-4">
                  <input v-model="acpetCOndition" type="checkbox" id="agree" class="form-checkbox h-5 w-5 text-blue-600" required>
                  <div class="flex items-center gap-2">
                    <label for="agree" class="ml-2 text-gray-700">I agree to the </label>
                    <div class="flex items-center gap-2">
                      <router-link :to="`/page/${item?.slug}`" v-for="(item, i) in policyItems" :key="`single-item-${i}`" class="font-semibold underline text-blue-500">
                        {{ item?.title }}
                        <span v-if="i < policyItems.length - 1">, </span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>

              <button @click="payment" class="text-sm text-center bg-secondary text-white rounded-xl hover:bg-gray-600 w-full block py-1.5 my-2">Checkout</button>

            </div>
          </div>
          
      </section>
    </div>
  </template>

<script setup>
import {onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";
import useAxios from "@/composables/useAxios.js";
import {useCartStore} from "@/stores/useCartStore.js";
import {useRoute, useRouter} from "vue-router";
const cartStore = useCartStore()
const authStore = useAuthStore()
const areas = ref(null)
const {sendRequest, error, loading} = useAxios()
const getMyAddresses = async () => {
  const token = await authStore.getToken();
  const data = await sendRequest({
    method: 'get',
    url: "/address",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  areas.value = data?.data?.addresses
}

const router = useRouter();

const deliveryCharge = ref({
  setDeliveryAddress:false,
  setDeliveryCharge:60,
  addressId:1,
})

const setDeliveryAddress = (event) => {
  deliveryCharge.value.setDeliveryAddress = true;
  deliveryCharge.value.setDeliveryCharge = event.order_area?.delivery_charge;
  deliveryCharge.value.addressId = event.id
}

const acpetCOndition = ref(false)

const payment = () =>{


  // if(!deliveryCharge.value.setDeliveryAddress){
  //   $toast.error("Please Select Your Delivery Address...")
  //
  // }else if(!acpetCOndition.value){
  //   $toast.error("Please accept our policies")
  // }else{
    router.push({
      name:"payment",
      query: {
        addressId: deliveryCharge.value.addressId
      }
    })
  // }
  //
  // if(deliveryCharge.value.setDeliveryAddress && acpetCOndition.value){
  //
  // }
  // else{
  //   $toast.error("Please Select Your Delivery Address...")
  // }
}

onMounted(async () => {
  if(useRoute().query.invalidAddressId){
    $toast.error("Please Select Your Shipping Details Before Payment.")
  }
})

const policyItems = ref(null)
onMounted(async () => {
  await getMyAddresses();

  const polices = await sendRequest("/get-terms-pages")
  policyItems.value = polices.data
})
</script>

<style scoped>

</style>