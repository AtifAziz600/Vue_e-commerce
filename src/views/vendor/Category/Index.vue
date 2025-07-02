<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import {onMounted, ref} from "vue";
import DeleteButton from "@/components/DeleteButton.vue";
import useAxios from "@/composables/useAxios.js";

const {sendRequest, error, loading} = useAxios()


const items = ref([])

const getALlUsers = async () => {
  const res = await sendRequest({
    url: '/v1/get-categories',
    method: 'GET'
  })
  items.value = res.data
}
const errorImage = (event) =>{
  console.log(event.target)
}


onMounted(() => getALlUsers())

</script>
<template>
  <AppLayout>

    <Breadcrumbs
        :item="{name:'Category', path:'/category', icon:'solar:widget-6-bold-duotone'}"
        :links="[{name:'Index', path:'/category'}]"
    />

    <div class="bg-white h-screen shadow-lg rounded-lg mt-4 p-4">
      <div class="flex items-center justify-between">
        <p class="font-bold">Category</p>
        <RouterLink to="/add-category"
                    class="px-2 py-1 rounded-md bg-primary-700 text-white flex items-center gap-2 hover:shadow-lg transition-all ease-in-out duration-300">
          <Icon name="solar:bolt-bold-duotone"/>
          <span class="text-xs font-semibold">Add</span>
        </RouterLink>
      </div>

      <div class="relative overflow-x-auto mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="text-xs px-6 py-3">
              User Information
            </th>
            <th scope="col" class="text-xs px-6 py-3">
              Featured
            </th>

            <th scope="col" class="text-xs px-6 py-3">
              Products
            </th>
            <th scope="col" class="text-xs px-6 py-3">
              Status
            </th>
            <th scope="col" class="text-xs px-6 py-3">
              Action
            </th>
          </tr>
          </thead>
          <transition-group name="fade" appear mode="out-in" tag="tbody">
            <template v-for="n in 20" :key="n">
              <tr class="animate-pulse">
                <td colspan="6" class="py-1">
                  <div class="h-6 bg-gray-200 rounded"></div>
                </td>
              </tr>
            </template>
            <tr :v-if="!loading && items.data.length" class="bg-white border-b" v-for="(item, index) in items?.data" :key="item.id"
                :style="{ transitionDelay: index * 0.1 + 's' }">
              <th scope="row" class="px-6 py-1 w-[40%] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div class="flex gap-4">
                  <img class="w-7 h-7 rounded-full object-contain" :src="item.icon_url"
                       @error="event => event.target.src=`https://ui-avatars.com/api/?name=${item.name}`" alt="">
                  <div>
                    <p class="text-xs font-bold capitalize text-primary-800">{{ item?.name }}</p>
                    <p class="text-[10px] font-normal leading-none text-primary-400">{{ item?.slug }}</p>
                  </div>
                </div>
              </th>
              <td class="px-6 py-1">
                <div>
                  <Icon v-if="item.status" name="solar:check-circle-bold" class="text-green-500"/>
                  <Icon v-else name="solar:close-circle-bold-duotone" class="text-primary-500"/>
                </div>
              </td>

              <td class="px-6 py-1">
                <span class="text-xs font-semibold" v-if="item?.products_count">{{ item?.products_count }} Products</span>
                <span class="text-xs font-semibold" v-else>-</span>
              </td>
              <td class="px-6 py-1">
                <div class="flex gap-2 items-center">
                  <span class="w-2 h-2 bg-green-500 block rounded-full"></span>
                  <span class="text-xs font-semibold">Active</span>
                </div>
              </td>
              <td class="px-6 py-1">
                <div class="flex gap-2">
                  <RouterLink :to="{name:'EditUser', params:{id:item.id}}"
                              class="p-1 px-2 rounded-md flex items-center gap-2 justify-center bg-primary-100 text-primary-800 hover:bg-primary-300 transition-all ease-in-out">
                    <Icon name="solar:pen-line-duotone"/>
                    <span class="text-xs font-semibold">Edit</span>
                  </RouterLink>
                  <DeleteButton  :path="`/v1/user/${item.id}`" @deleted="getALlUsers()"/>
                </div>
              </td>
            </tr>
            <template v-if="!loading && !items.data.length">
              <tr class="animate-pulse text-center uppercase">
                <td colspan="6">
                    No queries found
                </td>
              </tr>
            </template>
          </transition-group>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
<style>

</style>