<template>
    <div class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
      <div
        class="w-full max-w-2xl bg-white flex flex-wrap rounded-xl shadow-xl p-4 justify-center items-center"
      >
        <div class="w-full lg:w-1/2 lg:pr-5">
          <h3 class="text-2xl font-semibold mb-3 text-center">Send OTP</h3>
          <div class="">
            <label for="email" class="block pb-1 text-xs">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-deepMaroon focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>

          <div class="text-center py-2">
            <button
              @click="sendOtp"
              :disabled="loading"
              class="w-full py-2 bg-deepMaroon text-white font-bold text-center rounded-lg my-2"
            >
              <span v-if="loading" class="spinner-border animate-spin"></span>
              <span v-else>Send OTP</span>
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
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const route = useRoute();

const store = useStore();
const { sendRequest } = useAxios();

const form = ref({
  email: "",
});

const loading = ref(false); 

const sendOtp = async () => {
  loading.value = true; 

  try {
    const response = await sendRequest({
      method: "post",
      url: "/customer/send-email-otp",
      data: form.value,
    });

    if (response?.data) {
      toast.success("OTP Sent Successfully", { autoclose: 1000, theme: "dark" });
      store.setEmail(form.value.email);
      router.push({ name: "VerifyEmailOTP", query: route?.query ?? '' });
    }
  } catch (error) {
    toast.error("Error sending OTP. Please try again.", { autoclose: 1000 });
  } finally {
    loading.value = false; 
  }
};
</script>

<style scoped>
.spinner-border {
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>