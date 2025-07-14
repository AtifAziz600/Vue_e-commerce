<template>
  <header class="bg-deepMaroon shadow-md border-b"
  :class="isHeaderShrunk ? 'h-16' : 'h-20'"
  >
    <!-- Top Header Row -->
    <div class="flex items-center justify-between px-4 py-1 gap-4"
    :class="isHeaderShrunk ? 'py-1' : 'py-2'"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 cursor-pointer py-2">
       <img src="../assets/img/logo.png" class="h-10 md:h-6 sm:h-8 w-20 md:w-60 object-contain">
      </RouterLink>

      <!-- Search Bar -->
     <div class="relative flex-grow">
  <form class="flex border border-[#1f2d3a] rounded overflow-hidden bg-[#34495e]">
    <select class="bg-deepMaroon text-white font-bold text-sm px-3 py-2 md:px-1 focus:outline-none md:block md:w-auto hidden appearance-none">
      <option class="hover:bg-black text-white border-black">Categories</option>
      <option class="hover:bg-black text-white border-black">Electronics</option>
      <option class="hover:bg-black text-white border-black">Fashion</option>
      <option class="hover:bg-black text-white border-black">Books</option>
    </select>
    <div class="relative w-full">
      <input
        type="text"
        placeholder="Search Apricot"
        class="w-full px-3 py-2 md:px-3 text-sm pr-10 focus:outline-none"
      />
      <button
        type="submit"
        class="absolute inset-y-0 right-0 px-2 flex items-center justify-center text-blue-950"
      >
        <Icon icon="mdi:magnify" class="h-5 w-5" />
      </button>
    </div>
  </form>
</div>

      <!-- Actions -->
      <div class="md:flex items-center gap-4 hidden">
        <div class="flex justify-center items-center gap-4">
          <RouterLink to="/order-history" class="flex items-center gap-1 cursor-pointer hover:bg-red-900 px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="text-white">Orders</span>
          </RouterLink>
          <RouterLink to="/wishlist" class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span class="text-white">Favorites</span>
          </RouterLink>
          <RouterLink to="/cart-order" class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222 1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <RouterLink to="/cart-order" class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{{ cartCount }}</RouterLink>
            <span class="text-white">Cart</span>
          </RouterLink>
          <RouterLink to="/login" class="cursor-pointer border border-black px-3 py-2 rounded hover:bg-secondysButton transition duration-200">
            <span class="text-white">Sign in</span>
          </RouterLink>
        </div>
      </div>

      <!-- Mobile Hamburger Menu Button -->
       <div class="lg:hidden flex items-center">
        <RouterLink to="/cart-order" class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222 1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <RouterLink to="/cart-order" class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{{ cartCount }}</RouterLink>
          </RouterLink>
       </div>

      <!-- Mobile Sidebar Navigation -->
     <nav class="lg:hidden fixed bottom-4 left-4 right-4 z-50 px-4 py-2 bg-deepMaroon backdrop-blur-md shadow-xl rounded-2xl border border-white/10">
  <ul class="flex items-center justify-between">
    <li>
      <button @click="isSidebarOpen = true" class="flex flex-col items-center gap-1 text-white hover:text-gray-200 transition">
        <Icon icon="mdi:menu" class="w-6 h-6" />
        <span class="text-xs font-medium">Menu</span>
      </button>
    </li>
    <li>
      <RouterLink to="/order-history" class="flex flex-col items-center gap-1 text-white hover:text-gray-200 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <span class="text-xs font-medium">Order</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/wishlist" class="flex flex-col items-center gap-1 text-white hover:text-gray-200 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
        <span class="text-xs font-medium">Favorite</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/login" class="flex flex-col items-center gap-1 text-white hover:text-gray-200 transition">
        <Icon icon="mdi:user-outline" class="w-6 h-6" />
        <span class="text-xs font-medium">Sign In</span>
      </RouterLink>
    </li>
  </ul>
</nav>

      <transition name="fade" class="overflow-auto">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-white bg-opacity-40 flex">
          <div class="bg-deepMaroon w-64 h-full shadow-lg p-6 flex flex-col">
            <div class="flex justify-between items-center mb-6">
              <span class="text-lg font-bold text-gray-100">Menu</span>
              <button @click="isSidebarOpen = false" class="p-2 rounded hover:bg-secondysButton">
                <Icon icon="mdi:close" class="h-5 w-5 md:w-6 md:h-6 text-gray-100" />
              </button>
            </div>
            <nav class="flex flex-col gap-4 text-white">
              <a v-for="item in NavItems" :key="item.name" :href="item.link" class="py-2 px-3 rounded hover:bg-secondysButton transition duration-200">
                {{ item.name }}
              </a>
            </nav>
          </div>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
    </div>

    <!-- Navigation Bar -->
  <div class="hidden lg:flex bg-gray-200 border-y py-2 transition-all duration-300" :class="isNavVisible ? 'bg-gray-200 opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'">
  <nav class="container mx-auto flex items-center justify-between">
    
    <!-- Country -->
    <div class="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer transition">
  <!-- Country Flag -->
  <div class="flex items-center gap-2">
    <img
      src="@/assets/img/download.png"
      alt="Poland Flag"
      class="h-5 w-full object-cover rounded-sm shadow-sm md:h-6 md:w-8"
    />
    <span class="text-sm font-medium">Poland</span>
  </div>
</div>
    <!-- Navigation Links -->
    <div class="flex items-center gap-4 transition-all duration-300" :class="isHeaderShrunk ? 'py-1' : 'py-2'">
      <RouterLink
        v-for="item in NavItems"
        :key="item.name"
        :to="item.link"
        class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</div>

  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Icon from '@/components/Icon.vue';
import { useCartStore } from '@/stores/useCartStore';
import { storeToRefs } from 'pinia';

const cart = useCartStore();
const { cartCount } = storeToRefs(cart);


const isSidebarOpen = ref(false);
const isDropDownOpen = ref(false);
const NavItems = ref([
  { name: 'Best seller', link: '/best-seller' },
  { name: 'New Releases', link: '/new-release' },
  { name: 'Books', link: '/books' },
  { name: 'Computers', link: '/computer' },
  { name: 'Fashion', link: '/fashion' },
  { name: 'Health', link: '/health' },
  { name: 'Pharmacy', link: '/pharmacy' },
  { name: 'Toys & Games', link: '/toysgame' },
  { name: 'Become a seller', link: '/become-seller' }
]);
const isNavVisible = ref(true);
let lastScrollY = window.scrollY;

const isHeaderShrunk = ref(false);

const handleScroll = () => {
  const currentY = window.scrollY;

  if (currentY > lastScrollY && currentY > 100) {
    isNavVisible.value = false;
  } else {
    isNavVisible.value = true;
  }

  isHeaderShrunk.value = currentY > 180;

  lastScrollY = currentY;
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
