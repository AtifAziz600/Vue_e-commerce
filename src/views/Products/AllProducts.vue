<template>
  <AppLayout>
    <div class="bg-white border-b border-gray-200 shadow-sm px-4 py-1 sticky top-0 z-10">
      <div class="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center pt-5">
        <div class="text-gray-700 text-sm pt-6">
          <p>{{ filteredProducts.length }} results</p>
        </div>
        
        <div class="flex items-center gap-3 pt-6">
          <label for="sort-by" class="text-gray-700 text-sm">Sort by:</label>
          <div class="relative">
            <select
              v-model="sortOption"
              class="block w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-deepMaroon focus:border-deepMaroon appearance-none pr-8 cursor-pointer"
            >
              <option value="price_low_to_high">Price: Low to High</option>
              <option value="price_high_to_low">Price: High to Low</option>
              <option value="avg_customer_review">Avg. Customer Review</option>
              <option value="newest_arrival">Newest Arrivals</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Icon icon="mdi:chevron-down" class="h-4 w-4" />
            </div>
          </div>
          <button
            @click="isSidebarOpen = true"
            class="md:hidden rounded-lg border border-gray-300 flex items-center gap-1"
          >
            <Icon icon="mdi:filter" class="h-5 w-5" />
            <span class="text-sm px-2 py-2">Filters</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-full mx-auto py-4 pt-8">
      <div class="flex flex-col md:flex-row gap-6">
        <aside class="hidden md:block w-64 space-y-6">
          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h2 class="text-lg font-bold text-gray-800 mb-4">Filters</h2>
            <div class="mb-6">
              <h3 class="font-semibold text-gray-700 mb-3">Price Range</h3>
              <div class="px-2">
                <input
                  type="range"
                  v-model="priceRange[0]"
                  :min="minPrice"
                  :max="maxPrice"
                  class="w-full accent-deepMaroon mb-2 bg-gray-300"
                  @input="updatePriceRange"
                />
                <input
                  type="range"
                  v-model="priceRange[1]"
                  :min="minPrice"
                  :max="maxPrice"
                  class="w-full accent-deepMaroon bg-gray-300"
                  @input="updatePriceRange"
                />
              </div>
              <div class="flex justify-between text-sm text-gray-600 mt-2">
                <span>zł{{ priceRange[0] }}</span>
                <span>zł{{ priceRange[1] }}</span>
              </div>
            </div>

            <div class="mb-6">
              <h3 class="font-semibold text-gray-700 mb-3">Discount</h3>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="discountFilter"
                    value="10"
                    class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                  />
                  <span class="text-sm">10% & above</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="discountFilter"
                    value="20"
                    class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                  />
                  <span class="text-sm">20% & above</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="discountFilter"
                    value="30"
                    class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                  />
                  <span class="text-sm">30% & above</span>
                </label>
              </div>
            </div>

            <div class="mb-6">
              <h3 class="font-semibold text-gray-700 mb-3">Customer Rating</h3>
              <div class="space-y-2">
                <label 
                  v-for="rating in [4, 3, 2, 1]" 
                  :key="rating"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    v-model="ratingFilter"
                    :value="rating"
                    class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                  />
                  <span class="flex items-center">
                    <Icon
                      v-for="i in 5"
                      :key="i"
                      :icon="i <= rating ? 'mdi:star' : 'mdi:star-outline'"
                      class="w-4 h-4 text-yellow-500"
                    />
                  </span>
                  <span class="text-sm ml-1">& Up</span>
                </label>
              </div>
            </div>
            
            
            <button 
              @click="resetFilters"
              class="mt-4 text-deepMaroon text-sm font-medium hover:underline"
            >
              Reset all filters
            </button>
          </div>
        </aside>

        <transition name="slide">
          <div 
            v-if="isSidebarOpen"
            class="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden"
          >
            <div 
              class="w-4/5 max-w-sm bg-white h-full overflow-y-auto"
              @click.stop
            >
              <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800">Filters</h2>
                <button @click="isSidebarOpen = false">
                  <Icon icon="mdi:close" class="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <div class="p-4 space-y-6">
                <div>
                  <h3 class="font-semibold text-gray-700 mb-3">Price Range</h3>
                  <div class="px-2">
                    <input
                      type="range"
                      v-model="priceRange[0]"
                      :min="minPrice"
                      :max="maxPrice"
                      class="w-full accent-deepMaroon mb-2"
                      @input="updatePriceRange"
                    />
                    <input
                      type="range"
                      v-model="priceRange[1]"
                      :min="minPrice"
                      :max="maxPrice"
                      class="w-full accent-deepMaroon"
                      @input="updatePriceRange"
                    />
                  </div>
                  <div class="flex justify-between text-sm text-gray-600 mt-2">
                    <span>zł{{ priceRange[0] }}</span>
                    <span>zł{{ priceRange[1] }}</span>
                  </div>
                </div>
                
                <div>
                  <h3 class="font-semibold text-gray-700 mb-3">Discount</h3>
                  <div class="space-y-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        v-model="discountFilter"
                        value="10"
                        class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                      />
                      <span class="text-sm">10% & above</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        v-model="discountFilter"
                        value="20"
                        class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                      />
                      <span class="text-sm">20% & above</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        v-model="discountFilter"
                        value="30"
                        class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                      />
                      <span class="text-sm">30% & above</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 class="font-semibold text-gray-700 mb-3">Customer Rating</h3>
                  <div class="space-y-2">
                    <label 
                      v-for="rating in [4, 3, 2, 1]" 
                      :key="rating"
                      class="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        v-model="ratingFilter"
                        :value="rating"
                        class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                      />
                      <span class="flex items-center">
                        <Icon
                          v-for="i in 5"
                          :key="i"
                          :icon="i <= rating ? 'mdi:star' : 'mdi:star-outline'"
                          class="w-4 h-4 text-yellow-500"
                        />
                      </span>
                      <span class="text-sm ml-1">& Up</span>
                    </label>
                  </div>
                </div>
                
                <div v-if="categories.length > 0">
                  <h3 class="font-semibold text-gray-700 mb-3">Categories</h3>
                  <div class="space-y-2 max-h-60 overflow-y-auto">
                    <label 
                      v-for="category in categories" 
                      :key="category.id"
                      class="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        v-model="categoryFilter"
                        :value="category.id"
                        class="form-checkbox text-deepMaroon focus:ring-deepMaroon rounded"
                      />
                      <span class="text-sm">{{ category.name }}</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="p-4 border-t border-gray-200 flex justify-between">
                <button 
                  @click="resetFilters"
                  class="text-deepMaroon text-sm font-medium hover:underline"
                >
                  Reset
                </button>
                <button 
                  @click="isSidebarOpen = false"
                  class="bg-deepMaroon text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </transition>

        <div class="flex-1 w-full">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">New Releases</h2>
          <p class="text-sm text-gray-500 mb-6">Check all the products here</p>
          
          <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 lg:grid-cols-4 px-2 py-2 gap-2">
            <div
              v-for="item in filteredProducts"
              :key="item.id"
              class="relative bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              <div 
                v-if="item.discount_price && item.price"
                class="absolute top-3 left-3 bg-discountColor text-gray-900 text-xs font-bold px-2 py-1 rounded-full z-10"
              >
                -{{ calculateDiscountPercentage(item.price, item.discount_price) }}%
              </div>
              
              <RouterLink
                :to="`/product/${item.slug}`"
                class="block w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden relative"
              >
                <img
                  :src="item.cover_image_url"
                  :alt="item.title"
                  class="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </RouterLink>
              
              <div class="p-4">
                <RouterLink :to="`/product/${item.slug}`">
                  <h3 class="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                    {{ item.title }}
                  </h3>
                </RouterLink>
                
                <p class="text-xs text-gray-500 mb-2 line-clamp-2">
                  {{ item.short_description || item.subtitle }}
                </p>
                
                <div class="flex items-baseline gap-2 mb-3">
                  <span v-if="item.discount_price" class="text-base font-bold text-red-700">
                    zł{{ item.discount_price }}
                  </span>
                  <span 
                    v-if="item.discount_price && item.price"
                    class="text-xs line-through text-gray-400"
                  >
                    zł{{ item.price }}
                  </span>
                  <span v-else class="text-base font-bold text-gray-900">
                    zł{{ item.price }}
                  </span>
                </div>
                
                <div class="flex items-center mb-4">
                  <div class="flex items-center">
                    <Icon 
                      v-for="i in 5"
                      :key="i"
                      icon="mdi:star"
                      class="h-4 w-4"
                      :class="i <= Math.round(item.rating || 0) ? 'text-yellow-500' : 'text-gray-300'"
                    />
                  </div>
                  <span class="text-xs text-gray-500 ml-1">
                    ({{ item.review_count || 0 }})
                  </span>
                </div>
                
                <div class="flex justify-between gap-2">
                  <button
                    @click.stop="handleBuyNow(item)"
                    class="flex-1 flex items-center justify-center gap-1 bg-black text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Icon icon="mdi:credit-card-check" class="h-4 w-4" />
                    <span>Buy Now</span>
                  </button>
                  <button
                    @click.stop="handleAddToCart(item)"
                    class="flex-1 flex items-center justify-center gap-1 bg-primarysButton text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-secondysButton transition-colors"
                  >
                    <Icon icon="mdi:cart" class="h-4 w-4" />
                    <span>Add Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="bg-white rounded-lg p-8 text-center">
            <Icon icon="mdi:package-variant-remove" class="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-1">No products found</h3>
            <p class="text-sm text-gray-500 mb-4">Try adjusting your filters to find what you're looking for.</p>
            <button 
              @click="resetFilters"
              class="text-deepMaroon text-sm font-medium hover:underline"
            >
              Reset all filters
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { Icon } from '@iconify/vue';
import { useApiProductStore } from '../../stores/useApiProductStore';
import { useCartStore } from '../../stores/useCartStore';
const router = useRouter();
const toast = useToast();
const productApiStore = useApiProductStore();
const cart = useCartStore();
const isSidebarOpen = ref(false);
const sortOption = ref('newest_arrival');
const priceRange = ref([0, 1000000000000]);
const discountFilter = ref([]);
const ratingFilter = ref([]);
const categoryFilter = ref([]);

onMounted(async () => {
  await productApiStore.fetchProducts();
  categories.value = [...new Set(productApiStore.products.map(p => ({
    id: p.category_id,
    name: p.category?.name 
  })))].filter(c => c.id);
});

const minPrice = computed(() => {
  return Math.min(...productApiStore.products.map(p => p.price || 0));
});

const maxPrice = computed(() => {
  return Math.max(...productApiStore.products.map(p => p.price || 0));
});

const categories = ref([]);

const filteredProducts = computed(() => {
  let products = [...productApiStore.products];
  products = products.filter(p => {
    const price = p.discount_price || p.price || 0;
    return price >= priceRange.value[0] && price <= priceRange.value[1];
  });
  if (discountFilter.value.length > 0) {
    products = products.filter(p => {
      if (!p.price || !p.discount_price) return false;
      const discount = ((p.price - p.discount_price) / p.price) * 100;
      return discountFilter.value.some(d => discount >= parseInt(d));
    });
  }
  if (ratingFilter.value.length > 0) {
    products = products.filter(p => {
      return ratingFilter.value.some(r => (p.rating || 0) >= r);
    });
  }
  if (categoryFilter.value.length > 0) {
    products = products.filter(p => {
      return categoryFilter.value.includes(p.category_id);
    });
  }

  switch (sortOption.value) {
    case 'price_low_to_high':
      products.sort((a, b) => (a.discount_price || a.price || 0) - (b.discount_price || b.price || 0));
      break;
    case 'price_high_to_low':
      products.sort((a, b) => (b.discount_price || b.price || 0) - (a.discount_price || a.price || 0));
      break;
    case 'avg_customer_review':
      products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'newest_arrival':
      products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
  }
  
  return products;
});

function calculateDiscountPercentage(originalPrice, discountPrice) {
  if (!originalPrice || !discountPrice) return 0;
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function updatePriceRange() {
  if (priceRange.value[0] > priceRange.value[1]) {
    const temp = priceRange.value[0];
    priceRange.value[0] = priceRange.value[1];
    priceRange.value[1] = temp;
  }
}

function resetFilters() {
  priceRange.value = [minPrice.value, maxPrice.value];
  discountFilter.value = [];
  ratingFilter.value = [];
  categoryFilter.value = [];
}

function handleBuyNow(item) {
  const checkoutProduct = {
    id: item.id, 
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.discount_price || item.price,
    quantity: 1,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: item.discount_price || item.price,
    category: item.category?.name,
  };
  
  localStorage.setItem('checkoutProduct', JSON.stringify(checkoutProduct));
  toast.success(`Proceeding to checkout for ${item.title}`);
  router.push('/checkout');
}

function handleAddToCart(item) {
  const existingCartItems = cart.cartItems; 
  if (existingCartItems.length > 0) {
    const existingVendorId = existingCartItems[0].shop_id;
    if (existingVendorId !== item.shop_id) {
      toast.error('You can only order from one vendor at a time.');
      return;
    }
  }
  
  cart.addToCart({
    id: item.id,
    product_id: item.id,
    title: item.title,
    image: item.cover_image_url,
    price: item.discount_price || item.price,
    quantity: 1,
    shop_id: item.shop_id,
    category_id: item.category_id,
    total: item.discount_price || item.price,
    category: item.category?.name,
  });
  
  toast.success(`${item.title} added to cart`);
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  border-radius: 2px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
}
</style>