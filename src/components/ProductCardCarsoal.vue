<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">Catch low prices in each category

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
          class="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-xl"
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
import Fashion1 from '../assets/img/shirt.jfif';
import Fashion25 from '../assets/img/cloths.png';
import Fashion35 from '../assets/img/pants.jfif';
import Fashion45 from '../assets/img/best-british-fashion-brands-1.jpg';
import Fashion55 from '../assets/img/download (7).jfif';
import Fashion65 from '../assets/img/images (4).jfif';
import Fashion75 from '../assets/img/81+oQBvBR-L._AC_UL320_.jpg';
import Fashion85 from '../assets/img/images (5).jfif';
import { useToast } from 'vue-toastification';
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]
import { useCartStore } from '../stores/useCartStore'
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

const products = [
          {
    
        id: 1,
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
        id: 2,
        orderId: '#FWB123456597',
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
        id: 3,
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
        id: 4,
        orderId: '#FWB1234565976',
        title: "Classic Trench Coat",
        slug: "classic-trench-coat",
        category: "Outerwear",
        inStock: true,
        subtitle: "Timeless double-breasted trench coat for all seasons.",
        image: Fashion1,
        oldPrice: 120.00,
        newPrice: 89.99,
        discount: 25,
        tag: "coat",
        reviews: 320,
        rating: 4.7,
        features: [
          "Water-resistant fabric",
          "Removable belt",
          "Classic fit",
          "Available in beige and black"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 5,
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
        id: 6,
        orderId: '#FWB123483497',
        title: "Cotton Crewneck T-Shirt",
        slug: "cotton-crewneck-tshirt",
        category: "Tops",
        inStock: true,
        subtitle: "Soft cotton t-shirt available in multiple colors.",
        image: Fashion35,
        oldPrice: 20.00,
        newPrice: 14.99,
        discount: 25,
        tag: "tshirt",
        reviews: 150,
        rating: 4.6,
        features: [
          "100% cotton",
          "Breathable fabric",
          "Regular fit"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
      },
      {
        id: 7,
        orderId: '#FWB123483493',
        title: "Summer Floral Dress",
        slug: "summer-floral-dress",
        category: "Dresses",
        inStock: false,
        subtitle: "Lightweight floral dress perfect for summer outings.",
        image: Fashion45,
        oldPrice: 80.00,
        newPrice: 59.99,
        discount: 25,
        tag: "dress",
        reviews: 98,
        rating: 4.8,
        features: [
          "Floral print",
          "A-line silhouette",
          "Knee length"
        ],
        sizes: ["XS", "S", "M", "L"]
      },
      {
        id: 8,
        orderId: '#FWB982361902',
        title: "Wool Blend Overcoat",
        slug: "wool-blend-overcoat",
        category: "Outerwear",
        inStock: true,
        subtitle: "Elegant wool blend overcoat for chilly days.",
        image: Fashion55,
        oldPrice: 180.00,
        newPrice: 135.00,
        discount: 25,
        tag: "overcoat",
        reviews: 75,
        rating: 4.9,
        features: [
          "Wool blend",
          "Single-breasted",
          "Notched lapel"
        ],
        sizes: ["M", "L", "XL"]
      },
      {
        id: 9,
        orderId: '#FWB348971823',
        title: "Pleated Midi Skirt",
        slug: "pleated-midi-skirt",
        category: "Bottoms",
        inStock: true,
        subtitle: "Chic pleated skirt for casual and formal looks.",
        image: Fashion65,
        oldPrice: 50.00,
        newPrice: 37.50,
        discount: 25,
        tag: "skirt",
        reviews: 60,
        rating: 4.4,
        features: [
          "Polyester fabric",
          "Elastic waistband",
          "Midi length"
        ],
        sizes: ["S", "M", "L"]
      },
      {
        id: 10,
        orderId: '#FWB293573489',
        title: "Linen Button-Up Shirt",
        slug: "linen-button-up-shirt",
        category: "Tops",
        inStock: true,
        subtitle: "Breathable linen shirt for a relaxed summer style.",
        image: Fashion75,
        oldPrice: 45.00,
        newPrice: 33.75,
        discount: 25,
        tag: "shirt",
        reviews: 110,
        rating: 4.3,
        features: [
          "100% linen",
          "Button closure",
          "Short sleeves"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: 11,
        orderId: '#FWB093571352',
        title: "Denim Jacket",
        slug: "denim-jacket",
        category: "Outerwear",
        inStock: false,
        subtitle: "Classic denim jacket with a modern fit.",
        image: Fashion85,
        oldPrice: 90.00,
        newPrice: 67.50,
        discount: 25,
        tag: "jacket",
        reviews: 130,
        rating: 4.7,
        features: [
          "Cotton denim",
          "Button front",
          "Chest pockets"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
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
