<template>
  <header class="bg-white shadow-md border-b"
  :class="isHeaderShrunk ? 'h-16' : 'h-20'"
  >
    <!-- Top Header Row -->
    <div class="flex items-center justify-between px-4 py-2 gap-4"
    :class="isHeaderShrunk ? 'py-1' : 'py-2'"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
        <span class="text-xl font-bold text-gray-900 hidden sm:inline">What a Market</span>
      </div>

      <!-- Search Bar -->
      <form class="flex flex-grow border border-gray-200 rounded overflow-hidden bg-white shadow-sm">
        <select class="bg-[#4094F7] text-white font-bold text-sm px-3 py-2 md:px-1 focus:outline-none md:block md:w-auto hidden">
          <option>Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Books</option>
        </select>
        <input type="text" placeholder="Search Apricot" class="flex-grow px-3 py-2 md:px-3 text-sm focus:outline-none" />
        <button type="submit" class="bg-yellow-500 px-2 md:px-2  text-sm text-white hover:bg-yellow-600 transition duration-200">
          <Icon icon="mdi:magnify" class="h-5 w-5" />
        </button>
      </form>

      <!-- Actions -->
      <div class="md:flex items-center gap-4 hidden">
        <div class="flex justify-center items-center gap-4">
          <div class="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            <span>Orders</span>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span>Favorites</span>
          </div>
          <div class="relative flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222 1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            <span>Cart</span>
          </div>
          <div class="cursor-pointer border px-3 py-2 rounded hover:bg-gray-100 transition duration-200">
            <span>Sign in</span>
          </div>
        </div>
      </div>

      <!-- Mobile Hamburger Menu Button -->
      <div class="lg:hidden flex items-center">
        <button @click="isSidebarOpen = !isSidebarOpen" class="p-2 rounded hover:bg-gray-200 focus:outline-none">
          <Icon icon="mdi:menu" class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Sidebar Navigation -->
      <transition name="fade">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div class="bg-white w-64 h-full shadow-lg p-6 flex flex-col">
            <div class="flex justify-between items-center mb-6">
              <span class="text-lg font-bold">Menu</span>
              <button @click="isSidebarOpen = false" class="p-2 rounded hover:bg-gray-200">
                <Icon icon="mdi:close" class="h-6 w-6" />
              </button>
            </div>
            <!--Accordion-->
            <div class="py-2 px-3 rounded hover:bg-gray-100 transition duration-200">
              <select v-model="isDropDownOpen" @change="isDropDownOpen = !isDropDownOpen" class="bg-gray-100 text-black font-bold text-sm md:px-1 focus:outline-none">
                <option>Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Books</option>
              </select>
              </div>
            <!-- <div class="py-2 px-3 rounded hover:bg-gray-100 transition duration-200">
              
              <select class="bg-gray-100 text-black font-bold text-sm md:px-1 focus:outline-none">
                <option>Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Books</option>
              </select>
            </div> -->
            <nav class="flex flex-col gap-4">
              <a v-for="item in NavItems" :key="item.name" :href="item.link" class="py-2 px-3 rounded hover:bg-gray-100 transition duration-200">
                {{ item.name }}
              </a>
            </nav>
            <div class="mt-8 flex flex-col gap-3">
              <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition duration-200">
                <Icon icon="mdi:cart" class="h-5 w-5 text-gray-500" />
                <span>Cart</span>
              </div>
              <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded transition duration-200">
                <Icon icon="mdi:account" class="h-5 w-5 text-gray-500" />
                <span>Sign in</span>
              </div>
            </div>
          </div>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
    </div>

    <!-- Navigation Bar -->
  <div class="hidden lg:flex bg-gray-200 border-y py-2 transition-all duration-300" :class="isNavVisible ? 'bg-gray-200 opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'">
  <nav class="container mx-auto flex items-center justify-between">
    
    <!-- Location Info -->
    <div class="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer transition">
      <Icon icon="mdi:map-marker" class="h-5 w-5 text-red-500" />
      <div class="leading-tight">
        <p class="text-xs text-gray-500">Delivering to</p>
        <p class="text-sm font-semibold">Washington 56972</p>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="flex items-center gap-4 transition-all duration-300" :class="isHeaderShrunk ? 'py-1' : 'py-2'">
      <a
        v-for="item in NavItems"
        :key="item.name"
        :href="item.link"
        class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100"
      >
        {{ item.name }}
      </a>
    </div>
  </nav>
</div>

  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Icon from '@/components/Icon.vue';


const isSidebarOpen = ref(false);
const isDropDownOpen = ref(false);
const NavItems = ref([
  { name: 'Best seller', link: '#' },
  { name: 'New Releases', link: '#' },
  { name: 'Books', link: '#' },
  { name: 'Computers', link: '#' },
  { name: 'Fashion', link: '#' },
  { name: 'Health', link: '#' },
  { name: 'Pharmacy', link: '#' },
  { name: 'Toys & Games', link: '#' },
  { name: 'Become a seller', link: '#' }
]);
const isNavVisible = ref(true);
let lastScrollY = window.scrollY;

const isHeaderShrunk = ref(false);

const handleScroll = () => {
  const currentY = window.scrollY;

  // Step 1: hide nav items
  if (currentY > lastScrollY && currentY > 100) {
    isNavVisible.value = false;
  } else {
    isNavVisible.value = true;
  }

  // Step 2: shrink header after nav is gone
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
