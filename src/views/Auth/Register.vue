<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div
      class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl shadow-2xl p-8 w-full max-w-md"
    >
      <div class="flex flex-col items-center">
        <form
          class="flex flex-col gap-6 w-full"
          @submit.prevent="handleRegister"
        >
          <img
            src="../../assets/img/2931c5c3-f60d-4f7d-a78d-65904b68843c - Edited.jpg"
            class="w-full h-full object-contain"
            alt=""
          />
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="email"
              >First Name</label
            >
            <input
              v-model="firstName"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              type="name"
              name="name"
              placeholder="Enter Here"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="email"
              >Last Name</label
            >
            <input
              v-model="lastName"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              type="name"
              name="name"
              placeholder="Enter Here"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="email"
              >Email</label
            >
            <input
              v-model="email"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              i
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
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-800 mb-1"
              for="password"
              >Confirm Password</label
            >
            <input
              v-model="confirmPassword"
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              type="password"
              name="password"
              placeholder="confirm password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-primarysButton hover:bg-secondysButton text-white font-semibold py-2 rounded-lg shadow transition"
          >
            Register
          </button>
        </form>
        <div class="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <span>If you have an account?</span>
          <RouterLink
            to="/login"
            class="text-blue-500 underline hover:text-blue-600 ml-1"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification"; // or your toast lib

const router = useRouter();
const toast = useToast();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    toast.error("All fields are required.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match.");
    return;
  }
  toast.success("Registration successful!");
  router.push("/login");
};
</script>
