<template>
  <!--  phone nav bar-->
  <nav class="lg:hidden bg-secondary">
    <div class="flex justify-between p-3">
      <!--        menu & logo  -->
      <div class="flex items-center justify-center">
        <div>
          <!--            menu bar-->
          <div class="elegance-hamburger-menu" @click="channelSidebarClickEvent">
            <div class="elegance-hamburger-menu__btn" :class="{'elegance-hamburger-menu__btn--active' : toggleNav}">
              <span></span>
            </div>
          </div>

          <div class="absolute">
            <div class="fixed top-0 left-0 bottom-0 w-full transition-all ease-in-out duration-500"
                 :class="toggleNav ? 'bg-black/75 z-40' : 'scale-0'">
              <div id="sidebarArea" class="relative w-64 md:w-[22rem] h-screen transition-all ease-in-out duration-500 bg-white"
                   :class="toggleNav ? 'translate-x-0' : '-translate-x-[500rem]'">
                <SidebarContent  @handmaiden="handelHidenMenu" :navPages="props.navPages" :categories="props.categories"/>
                <button class="absolute top-1 -right-10" @click="toggleNav = false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/12">
        <RouterLink to="/">
          <img src="/images/logo.png" alt="" class="h-16 w-18">
        </RouterLink>
      </div>

      <div class="flex items-center justify-center gap-3">
        <div>
          <RouterLink to="/add-cart"  class="flex items-center text-white gap-2 border border-gray-300 rounded py-1 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"/></svg>
          </RouterLink>
        </div>
      </div>

    </div>
    <!--        search box -->
    <div>
      <div class="flex items-center pb-2 px-3 w-full">
        <SearchArea class="w-full"></SearchArea>
      </div>
    </div>
  </nav>
  <!--  phone nav bar end-->
</template>
<script setup>
  import SearchArea from "@/components/SearchArea.vue";
  import {onBeforeUnmount, onMounted, ref} from "vue";
  import useAxios from "@/composables/useAxios.js";
  import {useCartStore} from "@/stores/useCartStore.js";
  import {useAuthStore} from "@/stores/useAuthStore.js";
  import SidebarContent from "@/components/Layouts/SidebarContent.vue";
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
  const {sendRequest, loading} = useAxios()
  const cartStore = useCartStore()
  cartStore.initCart()
  const auth = useAuthStore()

  const toggleNav = ref(false);
  const handelSidebarClick = (event) => {
    const area = document.getElementById('sidebarArea');
    if (area && !area.contains(event.target)) {
      toggleNav.value = false;
    }
  };
  onMounted(() => {
    document.addEventListener('mousedown', handelSidebarClick);
  });
  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handelSidebarClick);
  });
  const channelSidebarClickEvent = () => toggleNav.value = true;
  const handelHidenMenu = () => categoryToggle.value = false


</script>