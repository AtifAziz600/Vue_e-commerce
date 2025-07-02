<script setup>
import useAxios from "@/composables/useAxios.js";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CustomerLayout from "@/views/customer/CustomerLayout.vue";


const {user} = useAuthStore();


const order = ref(null)
const { sendRequest, loading, error } = useAxios();


const printInvoice = (areaID) =>{
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}

onMounted(async () => {
    const route = useRoute();

    const { user } = useAuthStore();
    const data = await sendRequest({
        method: 'get',
        url: `/order-details/${route?.params?.id}`,
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    order.value = data?.data;
    console.log(data)
})


</script>

<template>

  <CustomerLayout>
    <section class="customer-section overflow-hidden py-5">
      <div class="flex items-center justify-between">
        <RouterLink to="/customer/order" class="flex items-center">
         <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19L2 12l11-7l-3.425 6H22v2H9.575z"/></svg>
         </span>
          <h2 class="text-2xl">Orders</h2>
        </RouterLink>

        <button v-if="!loading" class="bg-orange-700 text-white px-4 py-2 rounded" @click="printInvoice('areaOfPrient')">Print Invoice</button>
      </div>
        <div class="row">
          <h1 v-if="loading">Loading......</h1>
            <div v-else class="col-md-9 mx-auto p-3" id="areaOfPrient">
                <div class="card invoice-preview-card shadow-none py-5" >
                    <div class="card-body invoice-padding pb-0 mb-5">
                        <div class="d-flex align-items-center justify-content-between">
                            <div style="text-align:left; max-width: 35%">
                                    <div class="w-24 h-24">
                                        <img class="w-full h-full" src="/images/logo.png"  alt="">
                                    </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                          <div>
                            <h3 class="mt-1 fw-semibold fs-3 mb-3 text-capitalize">Invoice To: </h3>
                            <p class="card-text mb-0 pb-0" v-if="order?.customer?.full_name">Name: <strong>{{ order?.customer?.full_name }}</strong></p>
                            <p class="card-text mb-0 pb-0" v-if="order?.address?.phone || user?.phone">Phone: {{ order?.address?.phone ?? user?.phone }}</p>
                            <p class="card-text mb-0 pb-0" v-if="order?.address?.email || user?.email">Email: {{ order?.address?.email ?? user?.email }}</p>
                            <p class="card-text mb-0 pb-0" v-if="order?.address?.address">Address: {{ order?.address?.address }}</p>
                          </div>
                          <div class="mt-md-0 mt-2">
                              <h4 class="invoice-title">
                                Invoice
                                <span class="invoice-number">#5433</span>
                              </h4>
                              <div class="invoice-date-wrapper">
                                <p class="invoice-date-title">Order Date: {{ order?.order_date }}</p>
                              </div>
                              <div class="invoice-date-wrapper">
                                <p class="invoice-date-title text-capitalize">Order Status: <span
                                    class="badge bg-info ms-1">{{ order?.order_status }}</span></p>
                              </div>
                              <div class="invoice-date-wrapper">
                                <p class="invoice-date-title text-capitalize">Payment Status: <span
                                    class="badge bg-info ms-1">{{ order?.payment_status }}</span></p>
                              </div>
                            </div>
                        </div>
                    </div>

                   <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Qty
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Total
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in  order?.orderdetails" :key="`single-details-item-${index}`" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item?.product?.title }}-
                                {{ item?.stoke?.varient?.replace(/\//g, '-').slice(0, -1) }}
                              </th>
                              <td class="px-6 py-4">
                                {{ item?.stoke?.price }} BDT
                              </td>
                              <td class="px-6 py-4">
                                {{ parseInt(item?.quantity) }}
                              </td>
                              <td class="px-6 py-4">
                                {{ parseInt(item?.stoke?.price) * parseInt(item?.quantity) }} BDT
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>


                  <!-- Flex -->
                  <div class="mt-8 flex sm:justify-end">
                    <div class="w-full max-w-2xl sm:text-end space-y-2">
                      <!-- Grid -->
                      <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Subtotal:</dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">{{ order?.sub_total }} BDT</dd>
                        </dl>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Delivery Charge:</dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">+ {{ order?.address?.order_area?.delivery_charge }} BDT</dd>
                        </dl>

                        <hr>
                        <dl class="grid sm:grid-cols-5 gap-x-3">
                          <dt class="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Grand Total:</dt>
                          <dd class="col-span-2 text-gray-500 dark:text-neutral-500">{{ order?.grand_total }} DBT</dd>
                        </dl>
                      </div>
                      <!-- End Grid -->
                    </div>
                  </div>
                  <!-- End Flex -->
                </div>
            </div>
        </div>
    </section>
  </CustomerLayout>
</template>

<style lang="sass">

</style>