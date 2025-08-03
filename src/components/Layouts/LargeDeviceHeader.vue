<template>
  <header class="bg-white hidden lg:block">
    <section>
      <div class="top-header">
        <div class="flex items-center justify-between py-1">
          <div class="w-3/12">
            <RouterLink to="/">
              <img src="/images/logo.png" alt="" class="h-16 w-18">
            </RouterLink>
          </div>
          <div class="w-6/12">
            <SearchArea area-id="desktopArea"/>
          </div>
          <div class="w-3/12">
            <div class="flex gap-4 justify-end">
              <RouterLink v-if="!auth.isLoggedIn" to="/login" class="rounded py-1 px-5 font-semibold text-white bg-primary">Login</RouterLink>
              <RouterLink v-else to="/dashboard" class="rounded py-1 px-5 font-semibold text-white bg-orange-400">Dashboard</RouterLink>
              <RouterLink to="/add-cart" class="flex items-center text-primary gap-2 border border-gray-300 rounded py-1 px-5">
                {{ cartStore?.getCartLength }}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"/></svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-secondary hidden lg:block relative">
      <nav>
        <div class="container flex items-center justify-between">
          <ul class="flex items-center py-3 font-bold text-md text-white">
            <li @click="handelCategoryMenuSidebar"
                class="cursor-pointer flex items-center gap-2 border hover:border-white border-secondary rounded px-2 py-1">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
                </svg>
              </div>
              <span>All</span>
            </li>

            <li class="cursor-pointer flex items-center gap-2 border hover:border-white border-secondary rounded px-2 py-1">
              <router-link to="/">
              <span>Home</span>
              </router-link>
            </li>
            <li class="border hover:border-white border-secondary rounded px-2 py-1" v-for="(item, i) in navPages" :key="`lg-page-${i}`">
              <router-link :to="`/page/${item?.slug}`">{{ item?.title }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="absolute">
        <div class="fixed top-0 left-0 bottom-0 w-full transition-all ease-in-out duration-500"
             :class="categoryToggle ? 'bg-black/75 z-40' : 'scale-0'">
          <div id="categoryMenuArea" class="relative w-[22rem] h-screen transition-all ease-in-out duration-500 bg-white"
               :class="categoryToggle ? 'translate-x-0' : '-translate-x-[500rem]'">
            <SidebarContent @handmaiden="handelHidenMenu" :navPages="props.navPages" :categories="props.categories"/>
            <button class="absolute top-1 -right-10" @click="categoryToggle = false">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script setup>
  import SearchArea from "@/components/SearchArea.vue";
  import {useAuthStore} from "@/stores/useAuthStore.js";
  import {useCartStore} from "@/stores/useCartStore.js";
  import {onBeforeUnmount, onMounted, ref} from "vue";
  import SidebarContent from "@/components/Layouts/SidebarContent.vue";
  const auth = useAuthStore();
  const cartStore = useCartStore();

  const props = defineProps({
    navPages:{
      type:Array,
      required:true
    },
    categories:{
      type:Array,
      required:true
    }
  })


  const categoryToggle = ref(false)
  const handelSidebarClick = (event) => {
    const area = document.getElementById('categoryMenuArea');
    if (area && !area.contains(event.target)) {
      categoryToggle.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('mousedown', handelSidebarClick);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handelSidebarClick);
  });
  const handelCategoryMenuSidebar = () => categoryToggle.value = true
  const handelHidenMenu = () => categoryToggle.value = false
</script>