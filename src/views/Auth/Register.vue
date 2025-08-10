<template>
  <div
    class="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 py-10 lg:py-20">
    <div
      class="w-[95%] max-w-4xl bg-white/70 backdrop-blur-md flex flex-wrap rounded-2xl shadow-2xl border border-gray-200 p-6 transition-all duration-300">

      <div class="w-full lg:w-1/2 px-2 lg:px-6 lg:pt-6">
        <h3 class="text-3xl font-semibold text-gray-800 mb-6">Create Account</h3>
      
        <div class="mb-4">
          <label for="name" 
          class="block text-sm font-medium"
          :class="{'text-red-500': authStore?.error?.errors?.name, 'text-gray-600': !authStore?.error?.errors?.name}">
          Full Name</label>
          <input type="text" id="name" v-model="state.name" placeholder="Enter name"
          :class="{'border-red-500': authStore?.error?.errors?.name, 'border-gray-300': !authStore?.error?.errors?.name}"
            class="bg-white/60 border focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 w-full shadow-inner focus:outline-none text-gray-800" />
            <span v-if="authStore?.error?.errors?.name" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.name">{{ error }}</span>
          </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600"
          :class="{'text-red-500': authStore?.error?.errors?.phone, 'text-gray-600': !authStore?.error?.errors?.phone}"
          >Phone Number</label>
          <input type="tel" id="phone" v-model="state.phone" placeholder="Enter Phone Number"
          :class="{'border-red-500': authStore?.error?.errors?.phone, 'border-gray-300': !authStore?.error?.errors?.phone}"
            class="bg-white/60 border focus:ring-2 focus:ring-deepMaroon rounded-lg px-4 py-2 w-full shadow-inner focus:outline-none text-gray-800" />
            <span v-if="authStore?.error?.errors?.phone" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.phone">{{ error }}</span>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600"
          :class="{'text-red-500': authStore?.error?.errors?.email, 'text-gray-600': !authStore?.error?.errors?.email}"
          >Email</label>
          <input type="email" id="email" v-model="state.email" placeholder="you@example.com"
          :class="{'border-red-500': authStore?.error?.errors?.email, 'border-gray-300': !authStore?.error?.errors?.email}"
            class="bg-white/60 border rounded-lg px-4 py-2 w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-deepMaroon text-gray-800" />
            <span v-if="authStore?.error?.errors?.email" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.email">{{ error }}</span>
        </div>
        <div class="mb-4 relative">
          <label for="password" class="block text-sm font-medium text-gray-600"
          :class="{'text-red-500': authStore?.error?.errors?.password, 'text-gray-600': !authStore?.error?.errors?.password}"
          >Password</label>
          <input :type="showPassword ? 'text' : 'password'" id="password" v-model="state.password"
          :class="{'border-red-500': authStore?.error?.errors?.password, 'border-gray-300': !authStore?.error?.errors?.email}"  
          placeholder="Enter Password"
            class="bg-white/60 border border-gray-300 rounded-lg px-4 py-2 w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-deepMaroon text-gray-800" />
          <Icon :icon="showPassword ? 'ri:eye-close-line' : 'ri:eye-2-line'"
            class="absolute top-8 right-3 text-gray-500 cursor-pointer h-5 w-5" @click="showPassword = !showPassword" />
            <span v-if="authStore?.error?.errors?.password" class="text-red-500 text-sm" :key="error" v-for="error in authStore?.error?.errors?.password">{{ error }}</span>
        </div>
        <div class="mb-4">
          <button @click="handleRegister" :disabled="authStore.loading"
            class="w-full py-2 bg-deepMaroon hover:bg-secondysButton text-white font-medium text-base rounded-lg shadow-md hover:bg-opacity-90 disabled:opacity-50 transition flex justify-center items-center">
            <template v-if="authStore.loading">
              <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"></path>
              </svg>
              Registering...
            </template>
            <template v-else>
              Register
            </template>
          </button>

        </div>
        <div class="relative flex items-center py-1">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4 text-gray-400 text-sm">Or Continue with</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div>
        <div class="mb-4 relative">
          <button @click="handleGoogleLogin"
            class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon icon="flat-color-icons:google" class="w-6 h-6" />
            <span class="font-medium text-gray-700">SignUp with Google</span>
          </button>

        </div>
        <div class="mb-4 relative">
          <button @click="handleFaceBookLogin"
            class="w-full py-2 flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-100">
            <Icon class="w-6 h-6" icon="logos:facebook" />
            SignUp With FaceBook
          </button>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Already have an account?
          <RouterLink to="/login" class="text-deepMaroon hover:text-secondysButton font-medium hover:underline ml-1">
            Login Here</RouterLink>
        </p>
      </div>
      <div class="hidden lg:block w-1/2">
        <img class="w-full h-full object-cover rounded-xl transition-all duration-300 shadow-md"
          src="https://i.pinimg.com/564x/7b/3f/e1/7b3fe1e66e263b7e0c0e1f1cfb4086c7.jpg" alt="Register Illustration" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useAuthStore } from "../../stores/useAuthStore";
// import { useStore } from "@/stores/useStore.js";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
// const store = useStore();
const toast = useToast();
const state = ref({
  name: "",
  phone: "",
  email: "",
  password: "",
});
const showPassword = ref(false);
onMounted(() => {
  if (route.query.user) {
    try {
      const user = JSON.parse(route.query.user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Registration successful");
      router.push('/dashboard')
    } catch (e) {
      console.error("Failed to parse user data from query:", e);
    }
  }
});
const handleGoogleLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  window.location.href = `${apiUrl}/auth/google/redirect`;
}
const handleFaceBookLogin = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  window.location.href = `${apiUrl}/auth/facebook/redirect`;
}
const handleRegister = async () => {
   const response = await authStore.register(state.value);
   if(response.data){
    if(route?.query?.redirect){
      router.push(route.query.redirect);
    }else {
      router.push('/dashboard');
    }
   }
};

</script>