<template>
  <div
    class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
    <div
      class="w-[95%] max-w-4xl bg-white/70 backdrop-blur-md flex flex-wrap rounded-2xl shadow-2xl border border-gray-200 p-6 transition-all duration-300">
      <div class="w-full lg:w-1/2 px-2 lg:px-6 lg:pt-8">
        <h3 class="text-3xl font-semibold text-gray-800 mb-6">APAGOR</h3>
        <div class="mb-4">
          <label for="email" class="block pb-1 text-sm font-medium text-gray-600"
          :class="{'text-red-500': authStore?.error?.errors?.email, 'text-gray-600': !authStore?.error?.errors?.email}"
          >Email</label>
          <input type="email" name="email" id="email" v-model="loginCredential.email" placeholder="you@example.com"
            class="w-full bg-white/60 border border-gray-300 focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 text-gray-800 shadow-inner focus:outline-none" 
            :class="{'border-red-500': authStore?.error?.errors?.email, 'border-gray-300': !authStore?.error?.errors?.email}"
            />
            <span v-if="authStore?.error?.errors?.email" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.email">{{ error }}</span>
        </div>

        <div class="mb-4 relative">
          <label for="password" class="block pb-1 text-sm font-medium text-gray-600">Password</label>
          <input :type="showPassword ? 'text' : 'password'" name="password" id="password"
            v-model="loginCredential.password" placeholder="Enter Password"
            class="w-full bg-white/60 border border-gray-300 focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 text-gray-800 shadow-inner focus:outline-none" 
            :class="{'border-red-500' : authStore?.error?.errors?.password, 'border-gray-300': !authStore?.error?.errors?.password}" 
            />
            <span v-if="authStore?.error?.errors?.password" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.password">{{ error }}</span>
          <Icon :icon="showPassword ? 'ri:eye-close-line' : 'ri:eye-2-line'"
            class="absolute top-9 right-3 text-gray-500 cursor-pointer h-5 w-5" @click="showPassword = !showPassword" />
        </div>
        <div class="mb-4 text-right">
          <RouterLink to="/forget-password?redirect=/update-password" class="text-sm text-deepMaroon hover:underline">
            Forgot Password?
          </RouterLink>
        </div>
        <div class="mb-4">
          <button @click="handleLogin" :disabled="authStore.loading"
            class="w-full py-2 bg-deepMaroon hover:bg-secondysButton text-white font-medium text-base rounded-lg shadow-md transition disabled:opacity-50 duration-200 flex justify-center items-center">
            <template v-if="authStore.loading">
              <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"></path>
              </svg>
              Processing...
            </template>
            <template v-else>
              Log In
            </template>
          </button>

        </div>
        <div class="relative flex items-center py-5">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4 text-gray-400 text-sm">Or Continue with</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <div class="mb-4 relative">
          <button @click="handleGoogleLogin"
            class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon icon="flat-color-icons:google" class="w-6 h-6" />
            <span class="font-medium text-gray-700">Login with Google</span>
          </button>

        </div>
        <div class="mb-4 relative">
          <button @click="handleFaceBookLogin"
            class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon class="w-6 h-6" icon="logos:facebook" />
            Login With FaceBook
          </button>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Don’t have an account? 
          <RouterLink :to="`/register?redirect=/${route.query?.redirect}`" class="text-deepMaroon font-medium hover:underline ml-1">Create one</RouterLink>
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
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);

const loginCredential = ref({
  email: "",
  password: "",
});

const showPassword = ref(false)
const handleGoogleLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  window.location.href = `${apiUrl}/auth/google/redirect`;
};

const handleFaceBookLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  window.location.href = `${apiUrl}/auth/facebook/redirect`;
}
onMounted(() => {

  if (route.query.user) {
    try {
      const user = JSON.parse(route.query.user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Login successful");
      router.push('/dashboard')
    } catch (e) {
      console.error("Failed to parse user data from query:", e);
    }
  }
});

const handleLogin = async () => {
   const response = await authStore.login(loginCredential.value);
   if(response.data){
    if(route?.query?.redirect){
      router.push(route.query.redirect);
    }else {
      router.push('/dashboard');
    }
   }
};
</script>
