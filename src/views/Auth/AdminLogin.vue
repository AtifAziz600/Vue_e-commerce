<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div
      class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl shadow-2xl p-8 w-full max-w-md"
    >
      <div class="flex flex-col items-center">
        <form class="flex flex-col gap-6 w-full" @submit.prevent="handleLogin">
          <img
            src="../../assets/img/2931c5c3-f60d-4f7d-a78d-65904b68843c - Edited.jpg"
            class="w-full h-full object-contain"
            alt=""
          />
          <div class=""></div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="email"
              >Email</label
            >
            <input
              v-model="state.email"
              id="email"
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
              class="w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="password"
              >Password</label
            >
            <input
              v-model="state.password"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              class="w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            />
            <div class="text-left mt-1">
              <a href="#" class="text-sm text-blue-500 hover:underline"
                >Forgot password?</a
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-primarysButton hover:bg-secondysButton text-white font-semibold py-2 rounded-lg shadow transition"
          >
           Admin Login
          </button>
        </form>

        <div class="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <span>Don't have an account?</span>
          <RouterLink
            to="/register"
            class="text-blue-500 underline hover:text-blue-600 ml-1"
            >Create account</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../../stores/useAuthStore";
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();
const isForm = ref(false);
const inputError = ref(false);
const setting = inject("setting");

const state = ref({
  email: "",
  password: "",
});
const loading = ref(false);
const handleLogin = async () => {
  loading.value = true;
  try {
    await authStore.login(state.value, "admin");
    toast.success("Login successful!", { autoClose: 1000 });
    loading.value = false;
    setTimeout(() => {
      window.location.href = "http://localhost:8000/admin/dashboard";
    }, 1000);
  } catch (error) {
    loading.value = false;
    inputError.value = true;
    console.log(error);
    toast.error(
      error.response?.data?.message || "Login failed. Please try again.",
      { autoClose: 1000 }
    );
  }
};
</script>
