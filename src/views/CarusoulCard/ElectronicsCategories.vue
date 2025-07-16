<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">Catch low prices in the Electronics category

          <a href="/electronics" class="text-xs text-blue-950 font-semibold hover:text-blue-900">See more</a>
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
            <div class="flex items-center py-1">
                <Icon icon="mdi:star" class="text-yellow-500 w-4 h-4"/>            
                <p class="text-sm mt-1 text-gray-700 leading-tight line-clamp-2 cursor-pointer">
              {{ product.rating }} 
            </p>
        </div>
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
import Electronics1 from '../../assets/img/x200.png';
import Electronics2 from '../../assets/img/ele2.png';
import Electronics3 from '../../assets/img/ele3.png';
import Electronics4 from '../../assets/img/ele4.png';
import Electronics5 from '../../assets/img/ele5.png';
import Electronics6 from '../../assets/img/ele6.png';
import Electronics7 from '../../assets/img/ele7.png';
import Electronics8 from '../../assets/img/ele8.png';
import Phone11 from '../../assets/img/x200.png';
import Phone21 from '../../assets/img/Phone.png';
import Phone3 from '../../assets/img/Phone1.png';
import Phone4 from '../../assets/img/Phone2.png';
import Phone5 from '../../assets/img/Phone3.png';

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

const products = [
  {
    id: 62,
    orderId: '#FWB9857237132',
    title: "Smartphone X200",
    slug: "smartphone-x200",
    category: "Smartphones",
    inStock: true,
    subtitle: "Powerful smartphone with advanced camera and display.",
    image: Electronics1,
    oldPrice: 799.00,
    newPrice: 649.99,
    discount: 19,
    tag: "phone",
    reviews: 1050,
    rating: 4.6,
    features: [
      "6.5-inch AMOLED display",
      "Triple 64MP camera",
      "128GB storage",
      "Fast charging"
    ],
    sizes: ["128GB", "256GB"]
  },
  {
    id: 63,
    orderId: '#FWB827237132',
    title: "UltraNoise Headphones",
    slug: "ultranoise-headphones",
    category: "Audio",
    inStock: true,
    subtitle: "Wireless noise-canceling headphones for immersive sound.",
    image: Electronics2,
    oldPrice: 299.00,
    newPrice: 219.99,
    discount: 27,
    tag: "headphones",
    reviews: 620,
    rating: 4.8,
    features: [
      "Active noise cancellation",
      "Bluetooth 5.2",
      "30-hour battery life"
    ],
    sizes: ["Standard"]
  },
  {
    id: 64,
    orderId: '#FWB077237132',
    title: "Smartwatch Pro 5",
    slug: "smartwatch-pro-5",
    category: "Wearables",
    inStock: true,
    subtitle: "Fitness-focused smartwatch with advanced health tracking.",
    image: Electronics3,
    oldPrice: 199.00,
    newPrice: 149.99,
    discount: 25,
    tag: "smartwatch",
    reviews: 340,
    rating: 4.5,
    features: [
      "Heart rate monitor",
      "Sleep tracking",
      "Water resistant",
      "AMOLED display"
    ],
    sizes: ["42mm", "46mm"]
  },
  {
    id: 65,
    orderId: '#FWB9327237132',
    title: "4K LED Smart TV 55\"",
    slug: "4k-led-smart-tv-55",
    category: "Televisions",
    inStock: false,
    subtitle: "Crisp 4K display with built-in streaming apps.",
    image: Electronics4,
    oldPrice: 599.00,
    newPrice: 449.99,
    discount: 25,
    tag: "tv",
    reviews: 270,
    rating: 4.7,
    features: [
      "Ultra HD 4K resolution",
      "HDR10 support",
      "Built-in WiFi",
      "Voice remote"
    ],
    sizes: ["43\"", "50\"", "55\"", "65\""]
  },
  {
    id: 66,
    orderId: '#FWB345237132',
    title: "Gaming Laptop G15",
    slug: "gaming-laptop-g15",
    category: "Computers",
    inStock: true,
    subtitle: "High-performance laptop for gaming and productivity.",
    image: Electronics5,
    oldPrice: 1299.00,
    newPrice: 1099.00,
    discount: 15,
    tag: "laptop",
    reviews: 420,
    rating: 4.6,
    features: [
      "Intel i7 / Ryzen 7",
      "RTX 4060 GPU",
      "16GB RAM, 512GB SSD"
    ],
    sizes: ["15.6\"", "17.3\""]
  },
  {
    id: 67,
    orderId: '#FWB3427237132',
    title: "Portable Bluetooth Speaker",
    slug: "portable-bluetooth-speaker",
    category: "Audio",
    inStock: true,
    subtitle: "Compact speaker with deep bass and waterproof build.",
    image: Electronics6,
    oldPrice: 89.00,
    newPrice: 66.75,
    discount: 25,
    tag: "speaker",
    reviews: 310,
    rating: 4.4,
    features: [
      "Waterproof (IPX7)",
      "12-hour battery",
      "Built-in mic"
    ],
    sizes: ["Small", "Medium"]
  },
  {
    id: 68,
    orderId: '#FWB8127237132',
    title: "Wireless Mechanical Keyboard",
    slug: "wireless-mechanical-keyboard",
    category: "Accessories",
    inStock: true,
    subtitle: "Tactile mechanical keys with customizable RGB lighting.",
    image: Electronics7,
    oldPrice: 110.00,
    newPrice: 82.50,
    discount: 25,
    tag: "keyboard",
    reviews: 145,
    rating: 4.5,
    features: [
      "Hot-swappable keys",
      "Wireless + USB-C",
      "RGB backlight"
    ],
    sizes: ["75%", "TKL", "Full"]
  },
  {
    id: 69,
    orderId: '#FWB12427237132',
    title: "Home Security Camera 1080p",
    slug: "home-security-camera-1080p",
    category: "Security",
    inStock: false,
    subtitle: "Monitor your home remotely with motion alerts.",
    image: Electronics8,
    oldPrice: 70.00,
    newPrice: 52.50,
    discount: 25,
    tag: "camera",
    reviews: 190,
    rating: 4.3,
    features: [
      "Night vision",
      "Mobile app control",
      "Cloud storage compatible"
    ],
    sizes: ["Indoor", "Outdoor"]
  },
  {
    id: 70,
    orderId: '#FWB12327237132',
    title: "Smartphone X200",
    slug: "smartphone-x200",
    category: "Smartphones",
    inStock: true,
    subtitle: "Powerful smartphone with advanced camera and display.",
    image: Phone11,
    oldPrice: 799.00,
    newPrice: 649.99,
    discount: 19,
    tag: "phone",
    reviews: 1050,
    rating: 4.6,
    features: [
      "6.5-inch AMOLED display",
      "Triple 64MP camera",
      "128GB storage",
      "Fast charging"
    ],
    sizes: ["128GB", "256GB"]
  },
  {
    id: 71,
    orderId: '#FWB1227237132',
    title: "Galaxy Note Air",
    slug: "galaxy-note-air",
    category: "Smartphones",
    inStock: true,
    subtitle: "Stylus-supported productivity phone with big display.",
    image: Phone21,
    oldPrice: 999.00,
    newPrice: 799.00,
    discount: 20,
    tag: "phone",
    reviews: 860,
    rating: 4.7,
    features: [
      "6.9-inch Dynamic AMOLED",
      "S-Pen support",
      "Snapdragon 8 Gen 2",
      "5000mAh battery"
    ],
    sizes: ["256GB", "512GB"]
  },
  {
    id: 72,
    orderId: '#FWB12327237132',
    title: "Pixel Vision Pro",
    slug: "pixel-vision-pro",
    category: "Smartphones",
    inStock: true,
    subtitle: "AI-optimized camera phone from Google.",
    image: Phone3,
    oldPrice: 899.00,
    newPrice: 749.99,
    discount: 17,
    tag: "phone",
    reviews: 980,
    rating: 4.8,
    features: [
      "Dual 50MP camera with AI",
      "Stock Android 14",
      "Face unlock",
      "Titan M2 security chip"
    ],
    sizes: ["128GB", "256GB", "512GB"]
  },
  {
    id: 73,
    orderId: '#FWB23427237132',
    title: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    category: "Smartphones",
    inStock: false,
    subtitle: "Premium Apple device with titanium build.",
    image: Phone4,
    oldPrice: 1099.00,
    newPrice: 999.00,
    discount: 9,
    tag: "phone",
    reviews: 1320,
    rating: 4.9,
    features: [
      "A17 Pro chip",
      "USB-C port",
      "ProMotion 120Hz display",
      "LiDAR scanner"
    ],
    sizes: ["128GB", "256GB", "512GB", "1TB"]
  },
  {
    id: 74,
    orderId: '#FWB2457237132',
    title: "OnePlus 12 Turbo",
    slug: "oneplus-12-turbo",
    category: "Smartphones",
    inStock: true,
    subtitle: "Fast performance with AMOLED and flagship SoC.",
    image: Phone5,
    oldPrice: 699.00,
    newPrice: 599.00,
    discount: 14,
    tag: "phone",
    reviews: 610,
    rating: 4.5,
    features: [
      "Snapdragon 8 Gen 2",
      "120Hz AMOLED",
      "80W SUPERVOOC charging",
      "Dual stereo speakers"
    ],
    sizes: ["256GB", "512GB"]
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
