<template>
  <header
    class="bg-deepMaroon shadow-md border-b"
    :class="isHeaderShrunk ? 'h-20' : 'h-24'"
  >
    <div
      class="flex items-center justify-between px-4 py-4 gap-4"
      :class="isHeaderShrunk ? 'py-1' : 'py-2'"
    >
      <RouterLink to="/" class="flex items-center cursor-pointer py-2">
        <img
          src="../assets/img/logo.png"
          class="h-10 md:h-6 sm:h-12 w-20 md:w-32 object-contain"
        />
      </RouterLink>
      <div class="relative flex-grow">
        <form
          class="flex border border-[#1f2d3a] rounded overflow-hidden bg-deepMaroon"
        >
          <div class="relative w-full">
            <input
              type="text"
              placeholder="Search APAGOR"
              class="w-full px-3 py-2 md:px-3 text-sm pr-10 focus:outline-none"
            />
            <button
              type="submit"
              class="absolute inset-y-0 right-0 px-2 flex items-center justify-center text-blue-950"
            >
              <Icon icon="mdi:magnify" class="h-7 w-7" />
            </button>
          </div>
          <button class="md:block hidden sm:block w-24 text-center">
            <div
              @click.prevent="open = !open"
              class="bg-deepMaroon text-white font-bold text-sm px-1 py-2 rounded focus:outline-none text-start"
            >
              {{ selected || "Category" }}
            </div>
            <ul
              v-if="open"
              class="absolute z-10 bg-white border border-white rounded shadow-md text-start"
            >
              <li
                v-for="item in items"
                :key="item"
                @click="select(item)"
                class="cursor-pointer bg-deepMaroon text-white hover:bg-primarysButton hover:text-white w-24"
              >
                {{ item }}
              </li>
            </ul>
          </button>
        </form>
      </div>
      <div class="md:flex items-center gap-4 hidden">
        <div class="flex justify-center items-center gap-4">
          <RouterLink
            to="/order-history"
            class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200"
          >
            <Icon icon="mdi:basket" class="w-6 h-6 text-white" />
            <span class="text-white">Orders</span>
          </RouterLink>
          <RouterLink
            to="/wishlist"
            class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200"
          >
            <Icon icon="mdi:heart" class="w-6 h-6 text-white" />
            <span class="text-white">Wishlist</span>
          </RouterLink>
          <RouterLink
            to="/cart-order"
            class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200"
          >
            <Icon icon="solar:cart-bold" class="w-6 h-6 text-white" />
            <RouterLink
              to="/cart-order"
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >{{ cartCount }}</RouterLink
            >
            <span class="text-white">Cart</span>
          </RouterLink>
          <div class="relative">
            <div v-if="!authStore.isLoggedIn">
              <RouterLink
                to="/login"
                class="cursor-pointer border border-black px-3 py-2 rounded hover:bg-secondysButton transition duration-200"
              >
                <span class="text-white">Sign in</span>
              </RouterLink>
            </div>

            <div v-else class="relative" ref="dropdownRef">
              <button
                @click="toggleDropdown"
                class="flex items-center justify-center gap-2 px-3 py-2 rounded hover:bg-secondysButton transition duration-200"
              >
                <Icon icon="mdi:user" class="w-6 h-6 text-white" />
                <span class="text-white hidden sm:inline">
                  {{
                    authStore.user?.user?.name?.split(" ")[0] ||
                    authStore.user.user.name
                  }}
                </span>
              </button>

              <div
                v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border"
              >
                <RouterLink
                  to="/customer/profile"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </RouterLink>
                <button
                  @click="logout"
                  class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden flex items-center">
        <RouterLink
          to="/cart-order"
          class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded-full transition duration-200"
        >
          <Icon icon="solar:cart-bold" class="w-6 h-6 text-white" />
          <RouterLink
            to="/cart-order"
            class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >{{ cartCount }}</RouterLink
          >
        </RouterLink>
      </div>

      <nav
        class="lg:hidden fixed bottom-2 left-2 right-2 z-50 px-3 py-2 bg-deepMaroon backdrop-blur-md shadow-xl rounded-2xl border border-white/10"
      >
        <ul class="flex items-center justify-between text-white">
          <li>
            <RouterLink to="/" class="flex flex-col items-center gap-1">
              <Icon icon="mdi:home-outline" class="w-6 h-6" />
              <span class="text-xs">Home</span>
            </RouterLink>
          </li>
          <li>
            <button
              @click="isSidebarOpen = true"
              class="flex flex-col items-center gap-1"
            >
              <Icon icon="material-symbols:category" class="w-6 h-6" />
              <span class="text-xs">Categories</span>
            </button>
          </li>
          <li>
            <RouterLink
              to="/order-history"
              class="flex flex-col items-center gap-1"
            >
              <Icon icon="mdi:basket" class="w-6 h-6" />
              <span class="text-white">Orders</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wishlist" class="flex flex-col items-center gap-1">
              <Icon icon="mdi:heart" class="w-6 h-6" />
              <span class="text-xs">Favorites</span>
            </RouterLink>
          </li>
          <li class="relative">
            <button
              @click="handleAccountClick"
              class="flex flex-col items-center gap-1"
              aria-haspopup="true"
              :aria-expanded="mobileAccountDropdownOpen.toString()"
            >
              <Icon icon="mdi:account-outline" class="w-6 h-6" />
              <span class="text-xs">Account</span>
            </button>

            <transition name="fade">
              <div
                v-if="authStore.isLoggedIn && mobileAccountDropdownOpen"
                class="absolute bottom-10 right-0 bg-white rounded-md shadow-lg z-50 border w-40 text-gray-700"
              >
                <RouterLink
                  to="/customer/profile"
                  class="block px-4 py-2 hover:bg-gray-100"
                  @click="mobileAccountDropdownOpen = false"
                >
                  Profile
                </RouterLink>
                <button
                  @click="logoutMobile"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </transition>
          </li>
        </ul>
      </nav>

      <transition name="fade">
        <div
          v-if="isSidebarOpen"
          class="fixed inset-0 z-50 bg-black bg-opacity-40 flex"
        >
          <transition name="slide">
            <div
              class="bg-deepMaroon w-80 h-full shadow-xl p-6 flex flex-col overflow-auto"
              v-if="isSidebarOpen"
            >
              <div class="flex justify-between items-center mb-6">
                <span class="text-lg font-bold text-gray-100"></span>
                <button
                  @click="isSidebarOpen = false"
                  class="p-2 rounded hover:bg-secondysButton transition"
                >
                  <Icon icon="mdi:close" class="h-6 w-6 text-gray-100" />
                </button>
              </div>
              <nav class="flex flex-col gap-4 text-white">
                <RouterLink
                  v-for="item in CategoryItemsNav"
                  :key="item.name"
                  :to="`/category/${item?.slug}`"
                  class="py-2 px-3 rounded hover:bg-secondysButton transition duration-200"
                >
                  {{ item.name }}
                </RouterLink>
                <RouterLink
                  to="/login"
                  class="py-2 px-3 rounded hover:bg-secondysButton transition duration-200"
                >
                  <span class="text-white">Sign in</span>
                </RouterLink>
              </nav>
            </div>
          </transition>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
    </div>
    <div
      class="hidden lg:flex bg-gray-200 border-y py-2 transition-all duration-300"
      :class="
        isNavVisible
          ? 'bg-gray-200 opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
      "
    >
      <nav class="container mx-auto flex items-center justify-between">
        <div
          class="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer transition"
        >
          <div class="flex items-center gap-1">
            <img
              src="@/assets/img/download.png"
              alt="Poland Flag"
              class="h-5 w-full object-fit rounded-sm shadow-sm md:h-8 md:w-12"
            />
            <span class="text-sm font-medium">Poland</span>
          </div>
        </div>
        <div
          class="flex items-center gap-4 transition-all duration-300"
          :class="isHeaderShrunk ? 'py-1' : 'py-2'"
        >
          <RouterLink
            to="/all-products"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100"
          >
            New Release
          </RouterLink>
          <RouterLink
            v-for="item in CategoryItems"
            :key="item.name"
            :to="`/category/${item?.slug}`"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100"
          >
            {{ item.name }}
          </RouterLink>
          <RouterLink
            to="/become-seller"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100"
          >
            Become Seller
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Icon from "@/components/Icon.vue";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { onClickOutside } from "@vueuse/core";

const authStore = useAuthStore();
const router = useRouter();

const dropdownOpen = ref(false);
const dropdownRef = ref(null);
const mobileAccountDropdownOpen = ref(false);

function handleAccountClick() {
  if (authStore.isLoggedIn) {
    mobileAccountDropdownOpen.value = !mobileAccountDropdownOpen.value;
  } else {
    router.push('/login');
  }
}

function logoutMobile() {
  authStore.logout();
  mobileAccountDropdownOpen.value = false;
  toast.success(`${authStore.user} has been Log Out`);
  router.push('/');
}

onClickOutside(dropdownRef, () => {
  dropdownOpen.value = false;
});

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function logout() {
  authStore.logout();
  dropdownOpen.value = false;
  toast.success(`${authStore.user} has been Log Out`);
  router.push("/");
}
const cart = useCartStore();
const { cartCount } = storeToRefs(cart);
const isSidebarOpen = ref(false);
const CategoryItems = ref([]);
const CategoryItemsNav = ref([]);

const getNavItems = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/public/get-all-page-list"
  );
  if (res) {
    NavItems.value = res.value;
  }
};

const getCategoryNav = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/public/get-all-category-list"
  );
  if (res) {
    // console.log(res);
    CategoryItemsNav.value = res.data;
  }
};

const getCategory = async () => {
  const res = await axios.get("http://localhost:8000/api/public/apricot");
  if (res) {
    // console.log(res);
    CategoryItems.value = res.data?.header_categories;
  }
};

onMounted(() => getCategory());
onMounted(() => getCategoryNav());
onMounted(() => authStore.fetchUser());
onMounted(() => getNavItems());
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

const open = ref(false);
const selected = ref(null);
const items = ["Category", "Electronics", "Fashion", "Books"];

function select(item) {
  selected.value = item;
  open.value = false;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isUserDropdownOpen = ref(false);

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

const closeUserDropdown = () => {
  isUserDropdownOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
