<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-blue-300">
    <div class="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div class="flex flex-col items-center">
        <form class="flex flex-col gap-6 w-full">
          <h1 class="text-3xl font-semibold text-gray-800 mb-2 text-center tracking-tight">Register Here</h1>
          <div>
            <label class="block text-sm font-medium text-gray-800 mb-1" for="email">First Name</label>
            <input
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
               type="name" name="name" placeholder="Enter Here" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800 mb-1" for="email">Last Name</label>
            <input
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
               type="name" name="name" placeholder="Enter Here" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800 mb-1" for="email">Email</label>
            <input
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              i type="email" name="email" placeholder="youremail@gmail.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800 mb-1" for="password">Password</label>
            <input
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
               type="password" name="password" placeholder="password" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800 mb-1" for="password">Confirm Password</label>
            <input
              class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 text-gray-900 px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
               type="password" name="password" placeholder="confirm password" />
          </div>
          <button type="submit"
            class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg shadow transition">
            Register
          </button>
          
        </form>
        <div class="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <span>If you have an account?</span>
          <RouterLink to="/login" class="text-blue-500 underline hover:text-blue-600 ml-1">Login</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
