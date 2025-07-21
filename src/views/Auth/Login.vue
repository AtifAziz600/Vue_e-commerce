<template>
    <div class="min-h-screen w-full flex justify-center items-center py-10 lg:py-20">
      <div class="w-[90%] max-w-4xl bg-boxColor flex flex-wrap rounded-xl shadow-xl p-4">
        <div class="w-full lg:w-1/2 lg:pr-5 lg:pt-10">
          <h3 class="text-2xl font-semibold mb-3">Login</h3>
          <div class="">
            <label for="email" class="block pb-1 text-xs">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="loginCredential.email"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>
          <div class="">
            <label for="password" class="block pb-1 text-xs">Password</label>
            <input
              type="password"
              name="password"
              v-model="loginCredential.password"
              id="password"
              class="bg-transparent block w-full rounded-md p-2 shadow-sm border border-primary focus:outline-none placeholder:text-gray-400 px-3 mb-2"
            />
          </div>

          <div class="pt-2">
            <p>
              <RouterLink to="/forget-password?redirect=/update-password" class="text-primary">
                Forget Password?
              </RouterLink>
            </p>
          </div>

          <div class="text-center py-5">
            <button
              @click="handleLogin"
              class="w-full py-2 bg-primary text-white font-bold text-center rounded-lg my-2"
            >
              Log In
            </button>
          </div>
          <div class="flex">
            <p>
              Don't have an account
              <RouterLink to="/register" class="text-primary">Create Account</RouterLink>
            </p>
          </div>
        </div>

        <div class="hidden lg:block w-1/2">
          <img
            class="w-full h-96 object-cover rounded-xl"
            src="https://i.pinimg.com/564x/7b/3f/e1/7b3fe1e66e263b7e0c0e1f1cfb4086c7.jpg"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/useAuthStore";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const loginCredential = ref({
  email: null,
  password: null,
});
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
