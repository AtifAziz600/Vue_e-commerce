<template>
  <CustomerLayout>
    <section class="bg-gray-200/80 lg:py-20 ">
      <RouterLink to="/dashboard" class="flex items-center max-w-2xl mx-auto">
       <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
       </span>
        <h2 class="text-2xl">Add Address Book </h2>
      </RouterLink>

      <div class="items-center max-w-2xl mx-auto leading-8 bg-white p-10">
        <div>
          <small class="text-red-500" v-if="error?.response?.data?.message">{{ error?.response?.data?.message }}</small>
          <ul>
            <li class="text-red-500" :v-for="err in error?.response?.data?.errors">&#9632; {{ err[0] }}</li>
          </ul>
        </div>

        <form @submit.prevent="saveAddress">
          <div class="w-full text-primary">
            <label for="email" class="block pb-1" >Title</label>
            <input type="text" v-model="addressFrom.title" id="email"
                   class="block w-full rounded-md border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2"
                   placeholder="e.g Home Address / Office Address etc..">
          </div>
          <div class="text-primary">
            <label for="name" class="block pb-1" >Address</label>
            <textarea type="text" v-model="addressFrom.address" id="name" class="block w-full border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 pl-5"></textarea>
          </div>
          <div class="flex flex-col mt-4">
            <label class="text-sm font-medium"> select Area </label>
            <select v-model="addressFrom.area" class="focus:ring-none border border-gray-300 p-1 rounded w-full">
              <option :value="item?.id" :v-for="item in orderAreas">{{ item?.area_name }}</option>
            </select>
          </div>
          <div class="flex gap-3 pt-5">
            <div class="w-1/2 text-primary">
              <label for="email" class="block pb-1" >Email</label>
              <input type="email" v-model="addressFrom.email" id="email" class="block w-full rounded-md border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2" placeholder="Your Email">
            </div>
            <div class="w-1/2 text-primary">
              <label for="number" class="block pb-1" >Phone Number</label>
              <input type="number" v-model="addressFrom.phone" id="number" class="block w-full rounded-md border-0 py-2 text-primary shadow-sm ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 px-3 mb-2" placeholder="Your Phone Number">
            </div>
          </div>
          <Button type="submit" class="font-semibold text-white bg-primary hover:bg-gray-600 py-2 px-4 inline-block mt-7">Add Address
          </Button>
        </form>
      </div>
    </section>
  </CustomerLayout>
</template>

<script setup>
import CustomerLayout from "@/views/customer/CustomerLayout.vue";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";
import {useRouter, useRoute} from "vue-router";
const {sendRequest, loading, error} = useAxios()
const orderAreas = ref([])
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const addressFrom = ref({
  title:null,
  email:null,
  phone: null,
  address: null,
  area: null,
  state: null,
  zip_code: null,
})


const saveAddress = async () => {
  error.value = null;
  const data = await sendRequest({
    method: 'post',
    data: {user_id: authStore?.user?.id, ...addressFrom.value},
    url: "/save-new-address",
  })

  if(data !== undefined){
    $toast.success('Address Added')
    await router.push(route.query?.redirect ? route.query?.redirect : '/customer/address')
  }
}

onMounted(async () => {
  const getAreas = await sendRequest({
    method: 'get',
    url: "/all-areas"
  })
  orderAreas.value = getAreas?.data
})
</script>