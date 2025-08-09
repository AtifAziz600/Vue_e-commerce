<template>
      <div class="w-full flex justify-center items-center py-10 lg:py-20">
        <div
          class="w-full max-w-4xl bg-white flex flex-wrap rounded-xl shadow-xl p-4 justify-center items-center"
        >
          <div class="w-full lg:w-1/2 lg:pr-5">
            <h3 class="text-2xl font-semibold mb-3 text-center">Send OTP</h3>
            <div class="">
              <label for="phone" class="block pb-1 text-xs">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                v-model="form.phone"
                class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-deepMaroon focus:outline-none placeholder:text-gray-400 px-3 mb-2"
              />
            </div>
  
            <div class="text-center py-2">
              <button
                @click="sendOtp"
                class="w-full py-2 bg-deepMaroon text-white font-bold text-center rounded-lg my-2"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>

  import useAxios from "@/composables/useAxios";
  import { useStore } from "@/stores/useStore.js";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";
  const toast = useToast();
  const router = useRouter();
  const store = useStore();
  const { sendRequest } = useAxios();
  
  const form = ref({
    phone: "",
  });
  
  const sendOtp = async () => {
    const response = await sendRequest({
      method: "post",
      url: "/customer/send-phone-otp",
      data: form.value,
    });
  
    if (response?.data) {
      toast.success("OTP Sent Successfully", { autoclose: 1000, theme: "dark" });
      store.setEmail(form.value.email);
      router.push({ name: "VerifyOtp" });
    }
  };
  </script>
  