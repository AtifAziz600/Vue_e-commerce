<template>
  <div
    class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
    <div
      class="w-[95%] max-w-4xl bg-white/70 backdrop-blur-md flex flex-wrap rounded-2xl shadow-2xl border border-gray-200 p-6 transition-all duration-300">
      <div class="w-full lg:w-1/2 px-2 lg:px-6 lg:pt-8">
        <h3 class="text-3xl font-semibold text-gray-800 mb-6">APAGOR</h3>
        <div class="mb-4">
          <label for="email" class="block pb-1 text-sm font-medium text-gray-600">Email</label>
          <input type="email" name="email" id="email" v-model="loginCredential.email" placeholder="you@example.com"
            class="w-full bg-white/60 border border-gray-300 focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 text-gray-800 shadow-inner focus:outline-none" />
        </div>

        <div class="mb-4 relative">
          <label for="password" class="block pb-1 text-sm font-medium text-gray-600">Password</label>
          <input :type="showPassword ? 'text' : 'password'" name="password" id="password"
            v-model="loginCredential.password" placeholder="Enter Password"
            class="w-full bg-white/60 border border-gray-300 focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 text-gray-800 shadow-inner focus:outline-none" />
          <Icon :icon="showPassword ? 'ri:eye-close-line' : 'ri:eye-2-line'"
            class="absolute top-9 right-3 text-gray-500 cursor-pointer h-5 w-5" @click="showPassword = !showPassword" />
        </div>
        <div class="mb-4 text-right">
          <RouterLink to="/forget-password?redirect=/update-password" class="text-sm text-deepMaroon hover:underline">
            Forgot Password?
          </RouterLink>
        </div>
        <div class="mb-4">
          <button @click="handleLogin"
            class="w-full py-2 bg-deepMaroon hover:bg-secondysButton text-white font-medium text-base rounded-lg shadow-md transition duration-200">
            Log In
          </button>
        </div>
        <div class="relative flex items-center py-5">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4 text-gray-400 text-sm">Or Continue with</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <div class="mb-4 relative">
          <button class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon icon="flat-color-icons:google" class="w-6 h-6" />
            <span class="font-medium text-gray-700">Login with Google</span>
          </button>

        </div>
        <div class="mb-4 relative">
          <button class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon class="w-6 h-6" icon="logos:facebook" />
            Login With FaceBook
          </button>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Don’t have an account?
          <RouterLink to="/register" class="text-deepMaroon font-medium hover:underline ml-1">Create one</RouterLink>
        </p>
      </div>
      <div class="hidden lg:block w-1/2">
        <img class="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-md"
          src="https://i.pinimg.com/564x/7b/3f/e1/7b3fe1e66e263b7e0c0e1f1cfb4086c7.jpg" alt="Login Illustration" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useAuthStore } from "../../stores/useAuthStore";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const loginCredential = ref({
  email: "",
  password: "",
});

const showPassword = ref(false)

const handleLogin = async () => {
  const loginResponse = await authStore.login(loginCredential.value);
  if (loginResponse) {
    if (loginResponse.data.status === 403) {
      toast.error("Email not verified. Please verify your email.");
    } else {
      toast.success("Login successful!", { autoClose: 1000 });
      const redirectPath = route.query.redirect || "/";
      router.push(redirectPath);
    }
  }
};
</script>
