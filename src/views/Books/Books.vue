<template>
  <AppLayout>
    <!-- Header -->
    <div class="pt-10 flex justify-between items-center px-6 bg-white border-b border-gray-200 shadow-sm">
      <div class="text-gray-700 text-base font-medium">
        <p class="text-center">900 results</p>
      </div>
      <div class="flex items-center gap-3">
        <label for="sort-by" class="text-gray-700 text-base font-normal">Sort by:</label>
        <div class="relative w-40">
          <select
          class="block w-full px-3 py-2 text-sm md:text-base text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm
                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 cursor-pointer"
        >
          <option value="price_low_to_high">Price: Low to High</option>
          <option value="price_high_to_low">Price: High to Low</option>
          <option value="avg_customer_review">Avg. Customer Review</option>
          <option value="newest_arrival">Newest Arrivals</option>
          <option value="best_seller">Best Seller</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <section class="md:flex md:justify-between md:items-start px-4 md:px-0">
      <div class="lg:hidden flex items-end justify-end">
        <button @click="isSidebarOpen = !isSidebarOpen" class="p-2 rounded hover:bg-gray-200 focus:outline-none">
          <Icon icon="mdi:filter" class="h-6 w-6" />
        </button>
      </div>
      <transition name="fade" class="overflow-auto">
        <div v-if="isSidebarOpen" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <aside class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 pb-6">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="all" class="form-radio text-blue-500 focus:ring-blue-500" checked />
              All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="amazon" class="form-radio text-blue-500 focus:ring-blue-500" />
            Devices & Accessories
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="appliances" class="form-radio text-blue-500 focus:ring-blue-500" />
              Appliances
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="apps" class="form-radio text-blue-500 focus:ring-blue-500" />
              Apps & Games
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="crafts" class="form-radio text-blue-500 focus:ring-blue-500" />
              Arts, Crafts & Sewing
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Garmin
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Shark
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Crest
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> ECOVACS
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" checked /> All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" />
              <span class="flex items-center">
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star-outline" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
          <input type="range" min="0" max="2500" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">$0 – $2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input type="range" min="0" max="100" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
          <div class="flex-1" @click="isSidebarOpen = false"></div>
        </div>
      </transition>
      <!-- Main Content -->
       <aside class="w-72 space-y-6 p-6 bg-white rounded-xl shadow-md self-start sticky top-28 md:block hidden">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Filters</h2>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Department</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="all" class="form-radio text-blue-500 focus:ring-blue-500" checked />
              All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="amazon" class="form-radio text-blue-500 focus:ring-blue-500" />
            Devices & Accessories
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="appliances" class="form-radio text-blue-500 focus:ring-blue-500" />
              Appliances
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="apps" class="form-radio text-blue-500 focus:ring-blue-500" />
              Apps & Games
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="department" value="crafts" class="form-radio text-blue-500 focus:ring-blue-500" />
              Arts, Crafts & Sewing
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Brands</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Garmin
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Shark
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> Crest
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" class="form-checkbox text-blue-500 focus:ring-blue-500" /> ECOVACS
            </label>
            <button class="text-blue-500 text-xs mt-1 hover:underline">See more</button>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Customer Reviews</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" checked /> All
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="reviews" class="form-radio text-blue-500 focus:ring-blue-500" />
              <span class="flex items-center">
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
                <Icon icon="mdi:star-outline" class="w-4 h-4 text-yellow-500 hover:scale-125"/>
              </span>
            </label>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Price</h3>
          <input type="range" min="0" max="2500" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">$0 – $2,500</div>
        </div>
        <div>
          <h3 class="font-semibold text-gray-700 mb-2">Discount</h3>
          <input type="range" min="0" max="100" class="w-full accent-blue-500" />
          <div class="text-sm text-gray-600">0% – 100%</div>
        </div>
      </aside>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 tracking-tight text-start">
                    Books
                </h2>
                <p class="text-sm font-thin text-gray-900 mb-6 tracking-tight text-start">
                    Check All the products here
                </p>
          <div
              v-for="section in products"
              :key="section.id"
              class="mb-12"
          >
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  <div
                      v-for="item in section.products"
                      :key="item.title"
                      class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
                  >
                      <!-- Image -->
                      <RouterLink :to="`/product/${item.slug}`" class="relative border-b-1 h-56 flex items-center justify-center rounded-t-2xl overflow-hidden">
                          <img
                              :src="item.image"
                              alt="product"
                              class="w-4/5 h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <span
                              v-if="item.discount"
                              class="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
                          >
                              -{{ item.discount }}%
                          </span>
                      </RouterLink>
                      <!-- Info -->
                      <div class="flex-1 flex flex-col p-5">
                          <h3 class="text-lg font-semibold text-gray-900 truncate mb-1">
                              {{ item.title }}
                          </h3>
                          <p class="text-xs text-gray-500 mb-2 truncate">
                              {{ item.subtitle }}
                          </p>
                          <!-- Price -->
                          <div class="flex items-end space-x-2 mb-4">
                              <span class="text-sm line-through text-gray-400">${{ item.oldPrice }}</span>
                              <span class="text-xl text-blue-600 font-bold">${{ item.newPrice }}</span>
                          </div>
                          
                          <div class="flex items-center mb-4">
                              <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                              <span class="text-xs text-gray-500">4.8 | </span>
                              <RouterLink class="text-xs text-blue-600 hover:underline ml-1">
                                  ({{ item.reviews }} reviews)
                                  </RouterLink>
                          </div>
                            <!-- Footer -->
                            <div class="mt-auto flex flex-row justify-between items-center gap-2 pt-3 border-t border-gray-100">
                            <div class="flex flex-col items-start">
                             
                              <span
    :class="[
      'text-xs font-semibold px-2 rounded-full',
      item.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
    ]"
  >
    {{ item.inStock ? 'In Stock' : 'Stock Out' }}
  </span>
                            </div>
                            <button
                              @click="handleAddToCart(item)"
                              class="flex items-center gap-2 bg-deepMaroon border text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow hover:bg-[#7a3b49] hover:border-red-900 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                            <Icon icon="mdi:cart" class="h-5 w-5 text-white" />
                              Add to Cart
                            </button>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    </AppLayout>
</template>

<script setup>
import Icon from '@/components/Icon.vue';
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
const toast = useToast();

const products = [
  {
    id: 1,
    products: [
      {
        id: 1,
        title: "Atomic Habits",
        slug: "atomic-habits",
        category: "Self-help",
        inStock: true,
        subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear.",
        image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
        oldPrice: 24.99,
        newPrice: 16.99,
        discount: 32,
        tag: "self-help",
        reviews: 15420,
        rating: 5,
        features: [
          "Practical strategies",
          "Science-backed methods",
          "Easy to read",
          "Bestseller",
          "Life-changing"
        ],
        sizes: []
      },
      {
        id: 2,
        title: "The Alchemist",
        slug: "the-alchemist",
        category: "Fiction",
        inStock: true,
        subtitle: "A fable about following your dream by Paulo Coelho.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        oldPrice: 19.99,
        newPrice: 11.99,
        discount: 40,
        tag: "fiction",
        reviews: 21000,
        rating: 5,
        features: [
          "Inspirational story",
          "International bestseller",
          "Simple language",
          "Philosophical",
          "Timeless classic"
        ],
        sizes: []
      },
      {
        id: 3,
        title: "Deep Work",
        slug: "deep-work",
        category: "Productivity",
        inStock: false,
        subtitle: "Rules for Focused Success in a Distracted World by Cal Newport.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL.jpg",
        oldPrice: 21.00,
        newPrice: 14.00,
        discount: 33,
        tag: "productivity",
        reviews: 8700,
        rating: 4,
        features: [
          "Focus techniques",
          "Actionable advice",
          "Popular among professionals",
          "Research-based",
          "Motivational"
        ],
        sizes: []
      },
      {
        id: 4,
        title: "Educated",
        slug: "educated",
        category: "Memoir",
        inStock: true,
        subtitle: "A Memoir by Tara Westover.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
        oldPrice: 28.00,
        newPrice: 18.20,
        discount: 35,
        tag: "memoir",
        reviews: 12000,
        rating: 5,
        features: [
          "True story",
          "Critically acclaimed",
          "Inspiring",
          "Bestseller",
          "Emotional"
        ],
        sizes: []
      }
    ]
  },
  {
    id: 2,
    products: [
      {
        id: 5,
        title: "Sapiens",
        slug: "sapiens",
        category: "History",
        inStock: true,
        subtitle: "A Brief History of Humankind by Yuval Noah Harari.",
        image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
        oldPrice: 22.99,
        newPrice: 15.99,
        discount: 30,
        tag: "history",
        reviews: 18000,
        rating: 5,
        features: [
          "Global bestseller",
          "Thought-provoking",
          "Accessible writing",
          "Wide-ranging",
          "Illustrated edition available"
        ],
        sizes: []
      },
      {
        id: 6,
        title: "The Subtle Art of Not Giving a F*ck",
        slug: "subtle-art",
        category: "Self-help",
        inStock: true,
        subtitle: "A Counterintuitive Approach to Living a Good Life by Mark Manson.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
        oldPrice: 25.00,
        newPrice: 17.50,
        discount: 30,
        tag: "self-help",
        reviews: 22000,
        rating: 4,
        features: [
          "Straightforward advice",
          "Humorous",
          "Bestseller",
          "Modern classic",
          "Relatable"
        ],
        sizes: []
      },
      {
        id: 7,
        title: "Becoming",
        slug: "becoming",
        category: "Biography",
        inStock: false,
        subtitle: "The memoir by Michelle Obama.",
        image: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
        oldPrice: 32.50,
        newPrice: 20.00,
        discount: 38,
        tag: "biography",
        reviews: 15000,
        rating: 5,
        features: [
          "Inspiring",
          "Personal story",
          "Bestseller",
          "Award-winning",
          "Empowering"
        ],
        sizes: []
      },
      {
        id: 8,
        title: "1984",
        slug: "1984",
        category: "Dystopian",
        inStock: true,
        subtitle: "A novel by George Orwell.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
        oldPrice: 18.00,
        newPrice: 9.99,
        discount: 44,
        tag: "fiction",
        reviews: 25000,
        rating: 5,
        features: [
          "Classic literature",
          "Political fiction",
          "Timeless",
          "Highly influential",
          "Must-read"
        ],
        sizes: []
      }
    ]
  }
];
import { useCartStore } from '../../stores/useCartStore'
const cart = useCartStore()

function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.newPrice,
    quantity: 1,
    total: item.newPrice,
    category: item.tag
  })
  toast.success(`${item.title} added to cart`)
}

const isSidebarOpen = ref(false);


</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>