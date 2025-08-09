 <template>
      <div class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
        <div
          class="w-full max-w-4xl bg-white flex flex-wrap rounded-xl shadow-xl p-4 justify-center items-center"
        >
          <div class="w-full lg:w-1/2 lg:pr-5">
            <h3 class="text-2xl font-semibold mb-3 text-center">
              OTP Verification
            </h3>
          
            <div class="">
              <label for="otp" class="block pb-1 text-xs">Write Given OTP</label>
              <input
                type="text"
                name="otp"
                id="otp"
                v-model="form.otp"
                class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-deepMaroon focus:outline-none placeholder:text-gray-400 px-3 mb-2"
              />
            </div>
  
            <div class="text-center py-2">
              <button
                @click="checkOtp"
                :disabled="loading"
                class="w-full py-2 bg-deepMaroon text-white font-bold text-center rounded-lg my-2"
              >
                <span v-if="loading" class="spinner-border animate-spin"></span>
                <span v-else>Verify OTP</span>
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
  const { loading, error, sendRequest } = useAxios();
  
  const form = ref({
    email: store.email,
    otp: null,
  });
  
  const checkOtp = async () => {
    loading.value = true; 
  
    try {
      const response = await sendRequest({
        method: "post",
        url: "/customer/check-email-otp",
        data: form.value,
      });
  
      if (response?.data) {
        toast.success("OTP Verified Successfully", {
          autoclose: 1000,
          theme: "dark",
        });
  
        if (route?.query?.redirect) {
          router.push({
            path: route?.query?.redirect,
            query: { email: form.value.email },
          });
        } else {
          router.push({
            name: "Dashboard",
          });
        }
      }
    } catch (error) {
      toast.error("OTP verification failed. Please try again.", {
        autoclose: 1000,
        theme: "dark",
      });
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