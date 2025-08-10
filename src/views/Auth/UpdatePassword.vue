<template>
      <div class="w-full flex justify-center items-center py-10 lg:py-20">
        <div
          class="w-full max-w-4xl bg-white flex flex-wrap rounded-xl shadow-xl p-4 justify-center items-center"
        >
          <div class="w-full lg:w-1/2 lg:pr-5">
            <h3 class="text-2xl font-semibold mb-3 text-center">
              Update Password
            </h3>
  
            <div class="">
              <label for="password" class="block pb-1 text-xs">New Password</label>
              <input
                type="password"
                name="new_password"
                v-model="form.new_password"
                id="password"
                class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-deepMaroon focus:outline-none placeholder:text-gray-400 px-3 mb-2"
              />
            </div>
  
            <div class="">
              <label for="password" class="block pb-1 text-xs">Confirm New Password</label>
              <input
                type="password"
                name="new_password_confirmation"
                v-model="form.new_password_confirmation"
                id="password"
                class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-deepMaroon focus:outline-none placeholder:text-gray-400 px-3 mb-2"
              />
            </div>
  
            <div class="text-center py-2">
              <button
                @click="UpdatePassword"
                :disabled="loading"
                class="w-full py-2 bg-deepMaroon text-white font-bold text-center rounded-lg my-2"
              >
                <span v-if="loading" class="spinner-border animate-spin"></span>
                <span v-else>Update Password</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
  import AppLayout from "@/components/Layouts/AppLayout.vue";
  import { ref } from "vue";
  import useAxios from "@/composables/useAxios";
  import { useRouter } from "vue-router";
  import { useStore } from "@/stores/useStore.js";
  import { useToast } from "vue-toastification";

  const toast = useToast();
  const router = useRouter();
  const store = useStore();
  const { loading, sendRequest } = useAxios();
  
  const form = ref({
    email: store.email,
    new_password: null,
    new_password_confirmation: null,
  });
  
  const UpdatePassword = async () => {
    loading.value = true; 
  
    try {
      const response = await sendRequest({
        method: "post",
        url: "/customer/reset-password",
        data: form.value,
      });
  
      if (response?.data) {
        toast.success("Password Updated Successfully", { autoclose: 1000 });
        await router.push("/login");
      }
    } catch (error) {
      toast.error("Error updating password. Please try again.", { autoclose: 1000 });
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
  