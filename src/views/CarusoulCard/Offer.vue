<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">
          Offer Sale

          <a
            href="/all-products"
            class="text-xs text-blue-950 font-semibold hover:text-blue-900"
            >See more</a
          >
        </h2>
      </div>
      <swiper
        :slides-per-view="2"
        :space-between="16"
        :breakpoints="{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
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
          <img
            :src="product.image"
            alt="Product"
            class="w-full h-44 object-contain p-2"
          />
          <div class="px-4 pb-4">
            <p class="text-xs font-medium text-gray-500 mb-1">
              <span
                class="inline-block bg-discountColor text-black px-2 py-0.5 rounded-full text-[10px] font-semibold mr-2"
              >
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
            <p
              class="text-sm mt-1 text-gray-700 hover:text-blue-700 leading-tight line-clamp-2 cursor-pointer"
            >
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import Watch from "../../assets/img/watch.png";
import Fashion from "../../assets/img/shirt.jfif";
import Laptop from "../../assets/img/laptop.jfif";
import Phone from "../../assets/img/xiaomi.jfif";
import Watch2 from "../../assets/img/watch2.png";
import Fashion2 from "../../assets/img/pants.jfif";
import Laptop2 from "../../assets/img/laptop.jfif";
import Phone2 from "../../assets/img/Oppo.jfif";
import { useToast } from "vue-toastification";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
import { useCartStore } from "../../stores/useCartStore";
const cart = useCartStore();
const toast = useToast();
function handleAddToCart(item) {
  cart.addToCart({
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.newPrice,
    quantity: 1,
    total: item.newPrice,
    category: item.tag,
  });
  toast.success(`${item.title} added to cart`);
}

const products = [
  {
    id: 1,
    orderId: "#FWB127364372",
    title: "Watch",
    slug: "luxury-watch",
    category: "Watches / Luxury",
    subtitle:
      "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
    image: Watch,
    oldPrice: 48.54,
    newPrice: 38.89,
    inStock: true,
    discount: 19,
    tag: "watch",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "Stainless steel case",
      "2-year warranty",
    ],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: 2,
    orderId: "#FWD215439065",
    title: "Shirt",
    slug: "fashion-show",
    subtitle:
      "Latest trends in fashion. Elevate your style with our exclusive collection.",
    image: Fashion,
    oldPrice: 39.96,
    newPrice: 22.91,
    inStock: true,
    discount: 42,
    tag: "fashion",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 3,
    orderId: "#FWB122546348",
    title: "Laptop",
    slug: "computer-laptop",
    subtitle:
      "High performance laptops for work and play. Reliable and powerful.",
    image: Laptop,
    oldPrice: 3.27,
    newPrice: 1.9,
    discount: 41,
    inStock: true,
    tag: "laptop",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 4,
    orderId: "#FWB122344348",
    title: "Xiaomi",
    slug: "phone",
    subtitle:
      "Smartphones for daily use. Stay connected with the latest technology.",
    image: Phone,
    oldPrice: 20.21,
    newPrice: 17.88,
    inStock: false,
    discount: 32,
    tag: "phone",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 5,
    orderId: "#FWB12345659",
    title: "Pants",
    slug: "eco-watch",
    subtitle: "Eco-friendly watches crafted with sustainable materials.",
    image: Fashion2,
    oldPrice: 48.54,
    newPrice: 38.89,
    discount: 19,
    inStock: true,
    tag: "watch",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 6,
    orderId: "#FWB126345659",
    title: "Watch",
    slug: "sustainable-fashion",
    subtitle: "Organic fashion wear for a greener planet.",
    image: Watch2,
    oldPrice: 39.96,
    newPrice: 22.91,
    discount: 42,
    inStock: true,
    tag: "fashion",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 7,
    orderId: "#FWB123456593",
    title: "Desktop",
    slug: "eco-laptop",
    subtitle: "Energy-efficient laptops with eco-friendly packaging.",
    image: Laptop2,
    oldPrice: 3.27,
    newPrice: 1.9,
    discount: 41,
    inStock: false,
    tag: "laptop",
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 8,
    orderId: "#FWB123456549",
    title: "Oppo",
    slug: "recycled-phone",
    subtitle: "Phones made with recycled materials.",
    image: Phone2,
    oldPrice: 20.21,
    newPrice: 17.88,
    discount: 32,
    tag: "phone",
    inStock: true,
    reviews: 1248,
    rating: 5,
    features: [
      "Swiss movement",
      "Sapphire crystal glass",
      "Water resistant up to 50m",
      "cotton blend fabric",
      "Breathable and lightweight",
    ],
    sizes: ["M", "XL", "XXL"],
  },
  {
    id: 9,
    orderId: "#FWB123456369",
    title: "Atomic Habits",
    slug: "atomic-habits",
    category: "Self-help",
    inStock: true,
    subtitle:
      "An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear.",
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
      "Life-changing",
    ],
    sizes: [],
  },
  {
    id: 10,
    orderId: "#FWB123456591",
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
      "Timeless classic",
    ],
    sizes: [],
  },
];
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
