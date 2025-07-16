<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">For you with the lowest price guarante

          <a href="/all-products" class="text-xs text-blue-950 font-semibold hover:text-blue-900 whitespace-nowrap">See more</a>
        </h2>
        
      </div>
      <swiper
        :slides-per-view="2"
        :space-between="16"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }"
        :navigation="true"
        class="py-2"
        :modules="modules"
      >
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <img :src="product.image" alt="Product" class="w-full h-44 object-contain p-2" />
          <div class="px-4 pb-4">
            <p class="text-xs font-medium text-gray-500 mb-1">
              <span class="inline-block bg-discountColor text-black px-2 py-0.5 rounded-full text-[10px] font-semibold mr-2">
                -{{ product.discount }}%
              </span>
              <span class="text-[11px]">With Discount</span>
            </p>
            <p class="text-base font-semibold" v-if="product.discount">
              zł {{ product.newPrice.toFixed(2) }}
              <span class="text-gray-400 font-normal text-sm line-through ml-1">
                zł {{ product.oldPrice.toFixed(2) }}
              </span>
            </p>
            <p class="text-sm mt-1 text-gray-700 leading-tight line-clamp-2">
              {{ product.title }}
            </p>
            <p class="text-sm mt-1 text-gray-700 hover:text-blue-700 leading-tight line-clamp-2 cursor-pointer">
              ({{ product.reviews }}) Reviews
            </p>
           <div class="flex items-center py-1">
              <button
                @click="handleAddToCart(item)"
                class="flex items-center justify-center bg-primarysButton hover:bg-secondysButton text-white text-sm font-medium px-4 py-2 rounded-2xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 mt-4"
              >
                <Icon icon="mdi:cart-plus" class="w-5 h-5 mr-1" />
                Add to Cart
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';
import Watch from '../../assets/img/watch.png';
import Fashion from '../../assets/img/shirt.jfif';
import Fashion25 from '../../assets/img/cloths.png';
import Pharmacy1 from '../../assets/img/para.png'
import Pharmacy4 from '../../assets/img/VitaminC1000mgTablets.png';
import { useToast } from 'vue-toastification';
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]
import { useCartStore } from '../../stores/useCartStore'
const cart = useCartStore()
const toast = useToast()
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

const products =  [
  {
    id: 2,
    orderId: '#FWD215439065',
    title: "Shirt",
    slug: "fashion-show",
    category: "Fashion",
    subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
    image: Fashion,
    oldPrice: 39.96,
    newPrice: 22.91,
    inStock: true,
    discount: 42,
    tag: "fashion",
    reviews: 1248,
    rating: 5,
    features: [
      'Swiss movement',
      'Sapphire crystal glass',
      'Water resistant up to 50m',
      'Cotton blend fabric',
      'Breathable and lightweight'
    ],
    sizes: ['M', 'XL', 'XXL']
  },
  {
    id: 1,
    orderId: '#FWB127364372',
    title: "Watch",
    slug: "luxury-watch",
    category: "Watches / Luxury",
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    inStock: true,
    discount: 19,
    tag: "watch",
    reviews: 1248,
    rating: 5,
    features: [
      'Swiss movement',
      'Sapphire crystal glass',
      'Water resistant up to 50m',
      'Stainless steel case',
      '2-year warranty'
    ],
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: 26,
    orderId: '#FWB092375823',
    title: "Electric Toothbrush",
    slug: "electric-toothbrush",
    category: "Personal Care",
    subtitle: "Advanced sonic technology for a brighter, healthier smile.",
    image: Fashion,
    oldPrice: 59.99,
    newPrice: 39.99,
    inStock: true,
    discount: 33,
    tag: "toothbrush",
    reviews: 220,
    rating: 4.7,
    features: [
      '2-minute timer',
      'Multiple brushing modes',
      'Rechargeable battery',
      'Soft bristles',
      'Travel case included'
    ],
    sizes: []
  },
  {
    id: 25,
    orderId: '#FWB3928571233',
    title: "Fitness Tracker Band",
    slug: "fitness-tracker-band",
    category: "Wearables",
    subtitle: "Track your steps, heart rate, and sleep with this smart band.",
    image: Watch,
    oldPrice: 49.99,
    newPrice: 34.99,
    inStock: true,
    discount: 30,
    tag: "fitness-band",
    reviews: 400,
    rating: 4.8,
    features: [
      'Heart rate monitor',
      'Sleep tracking',
      'Water resistant',
      'Multi-sport modes',
      'Long battery life'
    ],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 24,
    orderId: '#FWB0291562731',
    title: "UNO Card Game",
    slug: "uno-card-game",
    category: "Card Games",
    subtitle: "Fast-paced card game for everyone.",
    image: "https://m.media-amazon.com/images/I/81QwQ4n6FGL._AC_SL1500_.jpg",
    oldPrice: 9.99,
    newPrice: 6.99,
    inStock: true,
    discount: 30,
    tag: "uno",
    reviews: 3210,
    rating: 5,
    features: [
      "108 cards",
      "Easy to learn",
      "Great for travel",
      "Ages 7+"
    ],
    sizes: []
  },
  {
    id: 9,
    orderId: '#FWB123456369',
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
    id: 10,
    orderId: '#FWB123456591',
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
    id: 12,
    orderId: '#FWB1234565971',
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
  },
  {
    id: 14,
    orderId: '#FWB1234565978',
    title: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    category: "Bottoms",
    inStock: true,
    subtitle: "Modern slim fit jeans with stretch for comfort.",
    image: Fashion25,
    oldPrice: 60.00,
    newPrice: 44.99,
    discount: 25,
    tag: "jeans",
    reviews: 210,
    rating: 4.5,
    features: [
      "Stretch denim",
      "5-pocket styling",
      "Machine washable"
    ],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 37,
    orderId: '#FWB557237132',
    title: "Paracetamol 500mg Tablets",
    slug: "paracetamol-500mg",
    subtitle: "Effective pain relief and fever reducer.",
    image: Pharmacy1,
    inStock: true,
    oldPrice: 5.99,
    newPrice: 3.99,
    discount: 33,
    tag: "pain-relief",
    reviews: 320,
    rating: 4.8,
    features: [
      "Reduces fever",
      "Relieves mild to moderate pain",
      "Suitable for adults and children",
      "Fast acting",
      "Easy to swallow"
    ],
    sizes: ["Pack of 16", "Pack of 32"]
  },
  {
    id: 40,
    orderId: '#FWB957237132',
    title: "Vitamin C 1000mg Tablets",
    slug: "vitamin-c-1000mg",
    subtitle: "Boosts immune system and overall health.",
    image: Pharmacy4,
    inStock: true,
    oldPrice: 9.99,
    newPrice: 7.49,
    discount: 25,
    tag: "vitamins",
    reviews: 150,
    rating: 4.9,
    features: [
      "Supports immune health",
      "High strength",
      "Antioxidant support",
      "Easy to swallow",
      "Suitable for daily use"
    ],
    sizes: ["Pack of 30", "Pack of 60"]
  }
]
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  width: 36px;
  height: 36px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 9999px;
}
</style>
