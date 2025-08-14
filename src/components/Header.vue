<template>
  <header class="bg-deepMaroon shadow-md border-b" :class="isHeaderShrunk ? 'h-20' : 'h-24'">
    <div class="flex items-center justify-between px-4 py-4 gap-4" :class="isHeaderShrunk ? 'py-1' : 'py-2'">
      <RouterLink to="/" class="flex items-center cursor-pointer py-2">
        <img src="../assets/img/logo.png" class="h-10 md:h-6 sm:h-12 w-20 md:w-32 object-contain" />
      </RouterLink>
      <div class="relative flex-grow max-w-full mx-4" ref="resultsDropdown">
        <form class="flex border-2  rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          @submit.prevent="handleSearchSubmit">
          <div class="relative w-full">
            <input v-model="searchQuery" type="text" placeholder="Search products..."
              class="w-full px-4 py-2 text-sm md:text-base pr-12 focus:outline-none placeholder-gray-400"
              @focus="showResults = true" @keydown.esc="showResults = false">
            <button type="submit"
              class="absolute inset-y-0 right-0 px-3 flex items-center justify-center bg-deepMaroon hover:bg-secondysButton text-gray-200 transition-colors">
              <Icon icon="mdi:magnify" class="h-7 w-7" />
            </button>
          </div>
        </form>
        <transition name="fade">
          <div v-if="showResults && searchResults"
            class="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-xl max-h-[70vh] overflow-y-auto">
            <div class="p-3 border-b bg-gray-50 flex justify-between items-center sticky top-0">
              <span class="text-sm font-medium text-gray-700">
                Results for "{{ searchQuery }}"
              </span>
              <span class="text-xs text-gray-500">
                {{ searchResults.length }} {{ searchResults.length === 1 ? 'item' : 'items' }} found
              </span>
            </div>

            <div v-if="searchResults.length === 0" class="p-4 text-center">
              <Icon icon="mdi:emoticon-sad-outline" class="h-8 w-8 mx-auto text-gray-400" />
              <p class="mt-2 text-gray-600">No results found</p>
              <p class="text-sm text-gray-500 mt-1">
                Try different keywords or browse our categories
              </p>
            </div>
            <div v-else class="divide-y">
              <div v-for="result in searchResults" :key="result.id"
                class="block px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                @click="getResultLink(result)">
                <div class="flex items-center gap-3">
                  <div class="flex-shrink-0">
                    <img :src="result.image" class="w-10 h-10 object-cover rounded" alt="" />
                  </div>
                  <div class="min-w-0">
                    <h4 class="font-medium text-gray-900 truncate">{{ result.title }}</h4>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-sm font-medium text-deepMaroon" v-if="result.discount_price">
                        ${{ result.discount_price }}
                      </span>
                      <span class="text-sm text-gray-500" :class="{ 'line-through': result.discount_price }">
                        ${{ result.price }}
                      </span>
                    </div>
                  </div>
                  <div class="ml-auto text-sm text-gray-500">
                    <Icon icon="mdi:chevron-right" class="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="md:flex items-center gap-4 hidden">
        <div class="flex justify-center items-center gap-4">
          <RouterLink to="/order-history"
            class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <Icon icon="mdi:basket" class="w-6 h-6 text-white" />
            <span class="text-sm text-white">Order</span>
          </RouterLink>
          <RouterLink to="/wishlist"
            class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <Icon icon="mdi:heart" class="w-6 h-6 text-white" />
            <span
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {{ getWishlistLength }}
            </span>
            <span class="text-sm text-white">Wishlist</span>
          </RouterLink>
          <!-- <RouterLink to="/"
            class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <Icon icon="mdi:bell" class="w-6 h-6 text-white" />
          </RouterLink>
                    <RouterLink to="/"
            class="flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <Icon icon="mdi:message" class="w-6 h-6 text-white" />
          </RouterLink> -->
          <RouterLink to="/cart-order"
            class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded transition duration-200">
            <Icon icon="solar:cart-bold" class="w-6 h-6 text-white" />
            <RouterLink to="/cart-order"
              class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {{ cartCount }}</RouterLink>
            <span class="text-sm text-white">Cart</span>
          </RouterLink>
          <div class="relative">
            <div v-if="!authStore.isLoggedIn">
              <div class="relative" ref="dropdownRef2">
                <button @click="toggleDropdown2"
                  class="flex items-center gap-1 hover:bg-secondysButton px-3 py-2 rounded transition">
                  <Icon icon="mdi:user" class="w-6 h-6 text-white" />
                  <span class="text-white text-sm">Account</span>
                </button>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <div v-if="dropdownOpens"
                    class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200 origin-top-right">
                    <RouterLink to="/register" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      @click="dropdownOpens = false">
                      Register
                    </RouterLink>
                    <RouterLink to="/login"
                      class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                      @click="dropdownOpens = false">
                      Login
                    </RouterLink>
                  </div>
                </transition>
              </div>
            </div>
            <div v-else class="relative" ref="dropdownRef">
              <button @click="toggleDropdown"
                class="flex items-center justify-center gap-2 p-2 rounded hover:bg-secondysButton transition duration-200">
                <Icon icon="mdi:user" class="w-6 h-6 text-white" />
                <span class="text-white hidden sm:inline text-sm">
                  {{
                    // using slice here to show only the first name
                    authStore.user?.user?.name
                      ? authStore.user?.user?.name.split(" ")[0]
                      : "Account"
                  }}
                </span>
              </button>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border">
                  <RouterLink to="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Profile
                  </RouterLink>
                  <button @click="logout" class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden flex items-center">
        <RouterLink to="/cart-order"
          class="relative flex items-center gap-1 cursor-pointer hover:bg-secondysButton px-3 py-2 rounded-full transition duration-200">
          <Icon icon="solar:cart-bold" class="w-6 h-6 text-white" />
          <RouterLink to="/cart-order"
            class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {{ cartCount }}</RouterLink>
        </RouterLink>
      </div>

      <nav
        class="lg:hidden fixed bottom-2 left-0 right-0 z-50 px-3 py-2 bg-deepMaroon backdrop-blur-md shadow-xl border border-white/10">
        <ul class="flex items-center justify-between text-white">
          <li>
            <RouterLink to="/" class="flex flex-col items-center gap-1">
              <Icon icon="mdi:home-outline" class="w-6 h-6" />
              <span class="text-xs">Home</span>
            </RouterLink>
          </li>
          <li>
            <button @click="isSidebarOpen = true" class="flex flex-col items-center gap-1">
              <Icon icon="material-symbols:category" class="w-6 h-6" />
              <span class="text-xs">Categories</span>
            </button>
          </li>
          <li>
            <RouterLink to="/order-history" class="flex flex-col items-center gap-1">
              <Icon icon="mdi:basket" class="w-6 h-6" />
              <span class="text-white">Orders</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wishlist" class="flex flex-col items-center gap-1 relative">
              <Icon icon="mdi:heart" class="w-6 h-6" />
              <span
                class="absolute -top-2 left-6 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {{ getWishlistLength }}
              </span>
              <span class="text-xs">Wishlist</span>
            </RouterLink>
          </li>
          <li class="relative">
            <button @click="handleAccountClick" class="flex flex-col items-center gap-1"
              :aria-expanded="mobileAccountDropdownOpen.toString()">
              <Icon icon="mdi:account-outline" class="w-6 h-6" />
              <span class="text-xs">Account</span>
            </button>

            <transition name="fade">
              <div v-if="authStore.isLoggedIn && mobileAccountDropdownOpen"
                class="absolute bottom-10 right-0 bg-white rounded-md shadow-lg z-50 border w-40 text-gray-700">
                <RouterLink to="/dashboard" class="block px-4 py-2 hover:bg-gray-100"
                  @click="mobileAccountDropdownOpen = false">
                  Profile
                </RouterLink>
                <button @click="logout" class="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </transition>
          </li>
        </ul>
      </nav>

      <transition name="fade">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <transition name="slide">
            <div class="bg-deepMaroon w-full h-full shadow-xl p-6 flex flex-col overflow-auto" v-if="isSidebarOpen">
              <div class="flex justify-between items-center mb-6">
                <span class="text-lg font-bold text-gray-100"></span>
                <button @click="isSidebarOpen = false" class="p-2 rounded hover:bg-secondysButton transition">
                  <Icon icon="mdi:close" class="h-6 w-6 text-gray-100" />
                </button>
              </div>
              <nav class="flex flex-col gap-4 text-white">
                <RouterLink v-for="item in CategoryItemsNav" :key="item.name" :to="`/category/${item?.slug}`"
                  class="py-2 px-3 rounded hover:bg-secondysButton transition duration-200">
                  {{ item.name }}
                </RouterLink>
                <RouterLink to="/login" class="py-2 px-3 rounded hover:bg-secondysButton transition duration-200">
                  <span class="text-white">Sign in</span>
                </RouterLink>
              </nav>
            </div>
          </transition>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
    </div>
    <div class="hidden lg:flex bg-gray-200 border-y py-2 transition-all duration-300" :class="isNavVisible
      ? 'bg-gray-200 opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-full pointer-events-none'
      ">
      <nav class="container mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer transition">
          <div class="flex items-center gap-1">
            <img src="@/assets/img/download.png" alt="Poland Flag"
              class="h-5 w-full object-fit rounded-sm shadow-sm md:h-8 md:w-12" />
            <span class="text-sm font-medium">Poland</span>
          </div>
        </div>
        <div class="flex items-center gap-4 transition-all duration-300" :class="isHeaderShrunk ? 'py-1' : 'py-2'">
          <RouterLink to="/new-release"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100">
            New Release
          </RouterLink>
          <RouterLink to="/shop" class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100">
            Shop
          </RouterLink>
          <RouterLink v-for="item in CategoryItems" :key="item.name" :to="`/category/${item?.slug}`"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100">
            {{ item.name }}
          </RouterLink>
          <RouterLink to="/become-seller"
            class="cursor-pointer rounded-full py-1 px-2 text-sm font-medium hover:bg-gray-100">
            Become Seller
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import Icon from "@/components/Icon.vue";
import { useToast } from "vue-toastification";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import useAxios from "@/composables/useAxios";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { onClickOutside } from "@vueuse/core";
import { useWishlistStore } from '@/stores/useWishlistStore';
const wishlistStore = useWishlistStore();
const { getWishlistLength } = storeToRefs(wishlistStore);
const searchQuery = ref('')
const selectedCategory = ref('All')
const searchResults = ref(null)
const showResults = ref(false)
const resultsDropdown = ref(null)
const toast = useToast();
onClickOutside(resultsDropdown, () => {
  showResults.value = false
})
const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = [];
    showResults.value = false;
    return;
  }

  showResults.value = true;

  try {
    const response = await sendRequest({
      method: 'get',
      url: '/public/product',
      params: {
        search: searchQuery.value,
        category: selectedCategory.value === 'All' ? undefined : selectedCategory.value
      }
    });

    searchResults.value = response.data.data.map(product => ({
      id: product.id,
      title: product.title,
      slug: product.slug,
      image: product.cover_image_url,
      price: product.price,
      discount_price: product.discount_price
    }));

  } catch (err) {
    toast.error()
    searchResults.value = [];
  }
};
let searchTimeout
watch(searchQuery, () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(performSearch, 300)
})
const selectCategory = (category) => {
  selectedCategory.value = category
  performSearch()
}
const handleSearchSubmit = (e) => {
  e.preventDefault()
  performSearch()
}
const { sendRequest } = useAxios();
const authStore = useAuthStore();
const router = useRouter();
const dropdownOpen = ref(false);
const dropdownOpens = ref(false);
const dropdownRef = ref(null);
const dropdownRef2 = ref(null);
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

onClickOutside(dropdownRef2, () => {
  dropdownOpens.value = false;
})
function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
};
function toggleDropdown2() {
  dropdownOpens.value = !dropdownOpens.value
};
function logout() {
  authStore.logout();
  dropdownOpen.value = false;
  toast.success(`Your Log Out is Successful`);
  router.push("/login");
}
const cart = useCartStore();
const { cartCount } = storeToRefs(cart);
const isSidebarOpen = ref(false);
const CategoryItems = ref([]);
const CategoryItemsNav = ref([]);
const getNavItems = async () => {
  const res = await sendRequest({
    url: 'public/get-all-page-list',
    method: 'GET',
  });
  if (res) {
    NavItems.value = res.value;
  }
};
const getCategoryNav = async () => {
  const res = await sendRequest({
    url: 'public/get-all-category-list',
    method: 'GET',
  })
  if (res) {
    CategoryItemsNav.value = res.data;
  }
};
const getCategory = async () => {
  const res = await sendRequest({
    url: 'public/apricot',
    method: 'GET',
  });
  if (res) {
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

  isHeaderShrunk.value = currentY > 240;

  lastScrollY = currentY;
};

const open = ref(false);
const selected = ref(null);

function select(item) {
  selected.value = item;
  open.value = false;
}

const getResultLink = (result) => {
  if (result.slug) {
    router.push(`/product/${result.slug}`);
    showResults.value = false;
    searchQuery.value = '';
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isUserDropdownOpen = ref(false);

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

.rotate-180 {
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.max-h-\[70vh\] {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

.max-h-\[70vh\]::-webkit-scrollbar {
  width: 6px;
}

.max-h-\[70vh\]::-webkit-scrollbar-track {
  background: #f7fafc;
}

.max-h-\[70vh\]::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 3px;
}
</style>
