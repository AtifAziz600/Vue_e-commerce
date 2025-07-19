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
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="email"
              >Email</label
            >
            <input
              v-model="email"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              id="email"
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="password"
              >Password</label
            >
            <input
              v-model="password"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              id="password"
              type="password"
              name="password"
              placeholder="password"
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
            Login
          </button>
          <div class="flex flex-col gap-2">
            <button
              type="button"
              class="w-full flex items-center justify-center gap-2 bg-white border border-gray-700 text-gray-700 rounded-lg py-2 shadow hover:hover:bg-gray-700 hover:text-white transition"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </button>
            <button
              type="button"
              class="w-full flex items-center justify-center gap-2 bg-white border border-gray-700 text-gray-700 rounded-lg py-2 shadow hover:hover:bg-gray-700 hover:text-white transition"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1.2em"
                width="1.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                ></path>
              </svg>
              Sign in with Facebook
            </button>
          </div>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const email = ref("");
const password = ref("");
const router = useRouter();
const toast = useToast();

const handleLogin = () => {
  if (!email.value || !password.value) {
    toast.error("Please fill in all fields!");
    return;
  }

  toast.success("Login successful!");
  router.push("/");
};
</script>
