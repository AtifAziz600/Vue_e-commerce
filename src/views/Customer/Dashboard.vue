<template>
    <AppLayout>
        <section class="bg-gray-200/80 lg:py-20 ">
           <div class="max-w-4xl mx-auto bg-white shadow-md p-10 ">
              <div class="flex gap-3">
                <span class="flex items-center justify-center rounded-full bg-gray-200 w-16 h-16 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                </span>
                <div class="flex flex-col justify-center px-4">
                  <p class="text-sm font-medium">Hello,</p>
                  <h3 class="text-lg font-semibold">Elegance's Customer</h3>
                </div>
              </div>

              <div class="flex flex-wrap pt-20">
                   <div class="w-1/4 px-2 mb-8">
                      <RouterLink to="/order" class="flex flex-col gap-3 group items-center justify-center py-6 bg-gray-200/80 border-2 border-transparent hover:border-black transition-all duration-500">
                        <span class="flex items-center justify-center rounded-full bg-black w-16 h-16">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z"/></svg>
                        </span>
                        <h3 class="text-xl font-semibold text-center border-b-2 border-transparent group-hover:border-black transition-all duration-500">Orders</h3>
                      </RouterLink>
                   </div>
                  <div class="w-1/4 px-2 mb-8">
                      <RouterLink to="/profile" class="flex flex-col gap-3 group items-center justify-center py-6 bg-gray-200/80 border-2 border-transparent hover:border-black transition-all duration-500">
                          <span class="flex items-center justify-center rounded-full bg-black w-16 h-16">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m4 8v-6.4q.625.2 1.225.425t1.175.525q.75.375 1.175 1.088T20 17.2V20zm-6-3.5v-3.35q.5-.075 1-.112T12 13t1 .038t1 .112v3.35zM4 20v-2.8q0-.85.425-1.562T5.6 14.55q.575-.3 1.175-.525T8 13.6V20z"/></svg>
                          </span>
                          <h3 class="text-xl font-semibold text-center border-b-2 border-transparent group-hover:border-black transition-all duration-500">Profile</h3>
                      </RouterLink>
                   </div>
                  <div class="w-1/4 px-2 mb-8">
                      <RouterLink  to="/password" class="flex flex-col gap-3 group items-center justify-center py-6 bg-gray-200/80 border-2 border-transparent hover:border-black transition-all duration-500">
                          <span class="flex items-center justify-center rounded-full bg-black w-16 h-16">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="text-white" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 8c.788 1 1 2 1 3v1m-9-1c0-1.578 1.343-3 3-3s3 1.422 3 3v2m-3-2v2"/><path d="M6 12v-1.397c-.006-1.999 1.136-3.849 2.993-4.85A6.39 6.39 0 0 1 15 5.748M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2"/></g></svg>
                          </span>
                          <h3 class="text-xl font-semibold text-center border-b-2 border-transparent group-hover:border-black transition-all duration-500">Password</h3>
                      </RouterLink>
                   </div>
                  <div class="w-1/4 px-2 mb-8">
                      <RouterLink to="/address" class="flex flex-col gap-3 group items-center justify-center py-6 bg-gray-200/80 border-2 border-transparent hover:border-black transition-all duration-500">
                          <span class="flex items-center justify-center rounded-full bg-black w-16 h-16">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="text-white" viewBox="0 0 24 24"><path fill="currentColor" d="m18 13l-1.4-1.4l2.15-2.15q-1.075-.2-3.437.225T10 12.975q.8-2.925 3.225-4.7T18.7 6.5l-2.1-2.1L18 3l5 5zm-6 9q-4.025-3.425-6.012-6.362T4 10.2q0-3.4 2.325-5.8T12 2q.875 0 1.75.188t1.675.562l-1.55 1.55q-.45-.15-.925-.225T12 4Q9.475 4 7.738 5.813T6 10.2q0 1.775 1.475 4.05T12 19.325q1.5-1.375 2.625-2.625t1.85-2.4l1.45 1.45q-1 1.475-2.475 3.025T12 22"/></svg>
                          </span>
                          <h3 class="text-xl font-semibold text-center border-b-2 border-transparent group-hover:border-black transition-all duration-500">Address</h3>
                      </RouterLink>
                   </div>


                      <div class="w-1/4 px-2 mb-8">
                          <RouterLink to="/" class="flex flex-col gap-3 group items-center justify-center py-6 bg-gray-200/80 border-2 border-transparent hover:border-black transition-all duration-500">
                              <span class="flex items-center justify-center rounded-full bg-black w-16 h-16">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="text-white" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 2.25h-3.5v12h3.5m5.5-9.5l3.5 3.5l-3.5 3.5m-5-3.5h8.5"/></svg>
                              </span>
                            <h3 class="text-xl font-semibold text-center border-b-2 border-transparent group-hover:border-black transition-all duration-500">Logout</h3>
                          </RouterLink>
                      </div>

              </div>
           </div>
        </section>
    </AppLayout>
</template>

<script setup>

import AppLayout from "@/components/Layouts/AppLayout.vue";
</script>

<style scoped>

</style>