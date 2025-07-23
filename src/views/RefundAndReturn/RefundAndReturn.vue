<template>
  <AppLayout>
    <section class="py-24 relative bg-gray-100">
      <div
        class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto md:py-16 min-h-screen"
      >
        <div
          class="w-full flex-col justify-start items-end lg:gap-16 gap-12 inline-flex"
        >
          <div class="w-full flex-col justify-start items-center gap-14 flex">
            <div class="w-full flex-col justify-start items-start gap-3 flex">
              <h2
                class="w-full text-center text-gray-900 text-3xl font-bold leading-normal"
              >
                Product Return Application
              </h2>
              <p
                class="w-full text-center text-gray-500 text-base font-medium leading-relaxed"
              >
                Fill out the return request form below to initiate the return
                process for your item.
              </p>
            </div>

            <div class="w-full flex-col justify-start items-start gap-8 flex">
              <div class="w-full flex-col justify-start items-start gap-5 flex">
                <h4 class="text-black text-xl font-semibold leading-8">
                  Item Select for Return
                </h4>
                <div
                  class="w-full p-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md shadow-md flex-col justify-start items-start gap-8 flex"
                >
                  <div
                    class="w-full justify-between items-center gap-4 flex sm:flex-row flex-col pb-8 border-b border-gray-200"
                  >
                    <h5
                      class="text-gray-900 text-lg font-semibold leading-normal"
                    >
                      Order:
                      <span class="text-gray-500 font-normal">{{
                        orderId
                      }}</span>
                    </h5>
                    <h5
                      class="text-gray-900 text-lg font-semibold leading-normal"
                    >
                      Order Date:
                      <span class="text-gray-500 font-normal">{{
                        orderDate
                      }}</span>
                    </h5>
                  </div>

                  <div
                    class="w-full flex-col justify-start items-start gap-6 flex"
                  >
                    <div
                      class="w-full flex sm:items-start items-center sm:gap-8 gap-4 sm:flex-row flex-col"
                    >
                      <img
                        class="w-[122px] h-[120px] rounded-lg object-cover"
                        :src="orderImage"
                        alt="Order Image"
                      />
                      <div
                        class="w-full pt-1 flex-col justify-start sm:items-start items-center gap-3 inline-flex"
                      >
                        <div
                          class="w-full justify-between items-center flex sm:flex-row flex-col gap-3"
                        >
                          <h4
                            class="text-gray-900 text-xl font-semibold text-center sm:text-left"
                          >
                            {{ orderTitle || "Item Name" }}
                          </h4>
                          <input
                            type="checkbox"
                            checked
                            class="w-5 h-5 appearance-none border border-gray-300 rounded-md checked:bg-no-repeat checked:bg-center checked:border-blue-500 checked:bg-blue-400"
                          />
                        </div>
                        <div
                          class="flex-col justify-center items-start gap-1 flex"
                        >
                          <h6 class="text-gray-900 text-base font-medium">
                            QTY:
                            <span class="text-gray-500">{{
                              orderQty || 1
                            }}</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full flex-col justify-start items-start gap-8 flex">
                <h4 class="text-black text-xl font-semibold leading-8">
                  Select Reason for Returning
                </h4>
                <div class="w-full flex flex-col md:flex-row gap-4">
                  <div class="w-full">
                    <label class="text-gray-600 text-sm font-semibold"
                      >Choose Reason</label
                    >
                    <select
                      class="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-md text-gray-900 shadow-sm"
                    >
                      <option value="1">Other</option>
                      <option value="2" selected>Medical Leave</option>
                      <option value="3">Personal Reason</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label class="text-gray-600 text-sm font-semibold"
                      >Write Reason</label
                    >
                    <input
                      v-model="reason"
                      type="text"
                      placeholder="Write here..."
                      class="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white/70 backdrop-blur-md text-gray-900 shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div class="w-full flex-col justify-start items-start gap-8 flex">
                <h4 class="text-black text-xl font-semibold leading-8">
                  Select the Method of Delivery of Product
                </h4>
                <div class="w-full flex flex-col md:flex-row gap-4">
                  <label
                    class="w-full flex items-center gap-3 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 rounded-lg cursor-pointer shadow-sm"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      class="accent-blue-500"
                      checked
                    />
                    <div>
                      <p class="text-gray-800 font-medium">
                        Express Delivery - zł 10.00
                      </p>
                      <p class="text-sm text-gray-500">
                        Return Item to our courier service via post office or
                        drop-off point
                      </p>
                    </div>
                  </label>
                  <label
                    class="w-full flex items-center gap-3 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 rounded-lg cursor-pointer shadow-sm"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      class="accent-blue-500"
                    />
                    <div>
                      <p class="text-gray-800 font-medium">
                        Standard Delivery - zł 5.00
                      </p>
                      <p class="text-sm text-gray-500">
                        Pickup by our delivery partner from your address
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div class="w-full flex-col justify-start items-start gap-8 flex">
                <h4 class="text-black text-xl font-semibold leading-8">
                  Select Refund Option
                </h4>
                <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label
                    class="w-full flex items-center gap-3 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 rounded-lg cursor-pointer shadow-sm"
                  >
                    <input
                      type="radio"
                      name="refund"
                      class="accent-blue-500"
                      checked
                    />
                    I want a Gift Card
                  </label>
                  <label
                    class="w-full flex items-center gap-3 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 rounded-lg cursor-pointer shadow-sm"
                  >
                    <input type="radio" name="refund" class="accent-blue-500" />
                    I want my money back
                  </label>
                  <label
                    class="w-full flex items-center gap-3 border border-gray-300 bg-white/70 backdrop-blur-md px-4 py-3 rounded-lg cursor-pointer shadow-sm"
                  >
                    <input type="radio" name="refund" class="accent-blue-500" />
                    I want to exchange my product
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="handleApplication"
            class="sm:w-fit w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-md"
          >
            Send Application
          </button>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const toast = useToast();
const reason = ref("");
const route = useRoute();

const orderId = computed(() => route.query.orderId || "");
const orderDate = computed(() => route.query.orderDate || "");
const orderImage = computed(() => route.query.orderImage || "");
const orderTitle = computed(() => route.query.orderTitle || "");
const orderQty = computed(() => route.query.orderQty || 1);

function handleApplication() {
  if (!reason.value.trim()) {
    toast.error("Please provide a reason for return");
  } else {
    toast.success("Your Application is Submitted");
  }
}
</script>

<style scoped>

</style>
