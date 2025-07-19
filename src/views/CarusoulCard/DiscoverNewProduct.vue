<template>
  <div class="bg-gray-100 py-4 text-gray-900 font-sans">
    <div class="max-w-full mx-auto px-4">
      <div class="flex items-center gap-2 justify-start">
        <h2 class="text-xl sm:text-2xl font-semibold text-black">
          Discover our new products

          <a
            href="/all-products"
            class="text-xs text-blue-950 font-semibold hover:text-blue-900 whitespace-nowrap"
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
import { useToast } from "vue-toastification";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Watch from "../../assets/img/watch.png";
import Fashion from "../../assets/img/shirt.jfif";
import Laptop from "../../assets/img/laptop.jfif";
import Phone from "../../assets/img/xiaomi.jfif";
import Watch2 from "../../assets/img/watch2.png";
import Fashion2 from "../../assets/img/pants.jfif";
import Laptop2 from "../../assets/img/laptop.jfif";
import Phone2 from "../../assets/img/Oppo.jfif";
import Fashion1 from "../../assets/img/shirt.jfif";
import Fashion25 from "../../assets/img/cloths.png";
import Fashion35 from "../../assets/img/pants.jfif";
import Fashion45 from "../../assets/img/best-british-fashion-brands-1.jpg";
import Fashion55 from "../../assets/img/download (7).jfif";
import Fashion65 from "../../assets/img/images (4).jfif";
import Fashion75 from "../../assets/img/81+oQBvBR-L._AC_UL320_.jpg";
import Fashion85 from "../../assets/img/images (5).jfif";
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
    features: ["Cotton blend fabric", "Breathable and lightweight"],
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
      "Intel i5 processor",
      "8GB RAM",
      "256GB SSD",
      "15.6-inch display",
      "Windows 10",
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
      "6.5-inch display",
      "128GB storage",
      "Dual camera",
      "Fast charging",
      "AI features",
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
      "Organic cotton",
      "Breathable fabric",
      "Eco-friendly dyes",
      "Comfort fit",
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
      "Recycled materials",
      "Water resistant",
      "Stylish design",
      "2-year warranty",
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
      "Intel i7 processor",
      "16GB RAM",
      "512GB SSD",
      "15.6-inch display",
      "Windows 11",
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
      "6.5-inch display",
      "Triple camera",
      "Fast charging",
      "Eco-friendly packaging",
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
  {
    id: 11,
    orderId: "#FWB123456597",
    title: "Deep Work",
    slug: "deep-work",
    category: "Productivity",
    inStock: false,
    subtitle: "Rules for Focused Success in a Distracted World by Cal Newport.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL.jpg",
    oldPrice: 21.0,
    newPrice: 14.0,
    discount: 33,
    tag: "productivity",
    reviews: 8700,
    rating: 4,
    features: [
      "Focus techniques",
      "Actionable advice",
      "Popular among professionals",
      "Research-based",
      "Motivational",
    ],
    sizes: [],
  },
  {
    id: 12,
    orderId: "#FWB1234565971",
    title: "Educated",
    slug: "educated",
    category: "Memoir",
    inStock: true,
    subtitle: "A Memoir by Tara Westover.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
    oldPrice: 28.0,
    newPrice: 18.2,
    discount: 35,
    tag: "memoir",
    reviews: 12000,
    rating: 5,
    features: [
      "True story",
      "Critically acclaimed",
      "Inspiring",
      "Bestseller",
      "Emotional",
    ],
    sizes: [],
  },
  {
    id: 13,
    orderId: "#FWB1234565976",
    title: "Classic Trench Coat",
    slug: "classic-trench-coat",
    category: "Outerwear",
    inStock: true,
    subtitle: "Timeless double-breasted trench coat for all seasons.",
    image: Fashion1,
    oldPrice: 120.0,
    newPrice: 89.99,
    discount: 25,
    tag: "coat",
    reviews: 320,
    rating: 4.7,
    features: [
      "Water-resistant fabric",
      "Removable belt",
      "Classic fit",
      "Available in beige and black",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    orderId: "#FWB1234565978",
    title: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    category: "Bottoms",
    inStock: true,
    subtitle: "Modern slim fit jeans with stretch for comfort.",
    image: Fashion25,
    oldPrice: 60.0,
    newPrice: 44.99,
    discount: 25,
    tag: "jeans",
    reviews: 210,
    rating: 4.5,
    features: ["Stretch denim", "5-pocket styling", "Machine washable"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 15,
    orderId: "#FWB123483497",
    title: "Cotton Crewneck T-Shirt",
    slug: "cotton-crewneck-tshirt",
    category: "Tops",
    inStock: true,
    subtitle: "Soft cotton t-shirt available in multiple colors.",
    image: Fashion35,
    oldPrice: 20.0,
    newPrice: 14.99,
    discount: 25,
    tag: "tshirt",
    reviews: 150,
    rating: 4.6,
    features: ["100% cotton", "Breathable fabric", "Regular fit"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 16,
    orderId: "#FWB123483493",
    title: "Summer Floral Dress",
    slug: "summer-floral-dress",
    category: "Dresses",
    inStock: false,
    subtitle: "Lightweight floral dress perfect for summer outings.",
    image: Fashion45,
    oldPrice: 80.0,
    newPrice: 59.99,
    discount: 25,
    tag: "dress",
    reviews: 98,
    rating: 4.8,
    features: ["Floral print", "A-line silhouette", "Knee length"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 17,
    orderId: "#FWB982361902",
    title: "Wool Blend Overcoat",
    slug: "wool-blend-overcoat",
    category: "Outerwear",
    inStock: true,
    subtitle: "Elegant wool blend overcoat for chilly days.",
    image: Fashion55,
    oldPrice: 180.0,
    newPrice: 135.0,
    discount: 25,
    tag: "overcoat",
    reviews: 75,
    rating: 4.9,
    features: ["Wool blend", "Single-breasted", "Notched lapel"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 18,
    orderId: "#FWB348971823",
    title: "Pleated Midi Skirt",
    slug: "pleated-midi-skirt",
    category: "Bottoms",
    inStock: true,
    subtitle: "Chic pleated skirt for casual and formal looks.",
    image: Fashion65,
    oldPrice: 50.0,
    newPrice: 37.5,
    discount: 25,
    tag: "skirt",
    reviews: 60,
    rating: 4.4,
    features: ["Polyester fabric", "Elastic waistband", "Midi length"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 19,
    orderId: "#FWB293573489",
    title: "Linen Button-Up Shirt",
    slug: "linen-button-up-shirt",
    category: "Tops",
    inStock: true,
    subtitle: "Breathable linen shirt for a relaxed summer style.",
    image: Fashion75,
    oldPrice: 45.0,
    newPrice: 33.75,
    discount: 25,
    tag: "shirt",
    reviews: 110,
    rating: 4.3,
    features: ["100% linen", "Button closure", "Short sleeves"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    orderId: "#FWB093571352",
    title: "Denim Jacket",
    slug: "denim-jacket",
    category: "Outerwear",
    inStock: false,
    subtitle: "Classic denim jacket with a modern fit.",
    image: Fashion85,
    oldPrice: 90.0,
    newPrice: 67.5,
    discount: 25,
    tag: "jacket",
    reviews: 130,
    rating: 4.7,
    features: ["Cotton denim", "Button front", "Chest pockets"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 21,
    orderId: "#FWB093571352",
    title: "LEGO Classic Bricks",
    slug: "lego-classic-bricks",
    category: "Building Toys",
    inStock: true,
    subtitle: "A box of colorful LEGO bricks for creative building fun.",
    image: "https://m.media-amazon.com/images/I/81QF4lQ9pGL._AC_SL1500_.jpg",
    oldPrice: 29.99,
    newPrice: 22.99,
    discount: 23,
    tag: "lego",
    reviews: 2345,
    rating: 5,
    features: [
      "500+ pieces",
      "Compatible with all LEGO sets",
      "Encourages creativity",
      "For ages 4+",
    ],
    sizes: [],
  },
  {
    id: 22,
    orderId: "#FWB0192741232",
    title: "Monopoly Board Game",
    slug: "monopoly-board-game",
    category: "Board Games",
    inStock: true,
    subtitle: "Classic Monopoly game for family and friends.",
    image: "https://m.media-amazon.com/images/I/91lF1gkQKGL._AC_SL1500_.jpg",
    oldPrice: 24.99,
    newPrice: 19.99,
    discount: 20,
    tag: "monopoly",
    reviews: 1987,
    rating: 4,
    features: [
      "2-8 players",
      "Includes game board, tokens, cards, and money",
      "Ages 8+",
    ],
    sizes: [],
  },
  {
    id: 23,
    orderId: "#FWB0291562731",
    title: "Nerf Elite Disruptor",
    slug: "nerf-elite-disruptor",
    category: "Outdoor Toys",
    inStock: true,
    subtitle: "Quick-draw blaster with rotating drum.",
    image: "https://m.media-amazon.com/images/I/81vQwQd2QXL._AC_SL1500_.jpg",
    oldPrice: 17.99,
    newPrice: 13.49,
    discount: 25,
    tag: "nerf",
    reviews: 1560,
    rating: 4,
    features: [
      "6-dart rotating drum",
      "Fires up to 90 feet",
      "Includes 6 Nerf darts",
      "Ages 8+",
    ],
    sizes: [],
  },
  {
    id: 24,
    orderId: "#FWB8392791290",
    title: "UNO Card Game",
    slug: "uno-card-game",
    category: "Card Games",
    inStock: true,
    subtitle: "Fast-paced card game for everyone.",
    image: "https://m.media-amazon.com/images/I/81QwQ4n6FGL._AC_SL1500_.jpg",
    oldPrice: 9.99,
    newPrice: 6.99,
    discount: 30,
    tag: "uno",
    reviews: 3210,
    rating: 5,
    features: ["108 cards", "Easy to learn", "Great for travel", "Ages 7+"],
    sizes: [],
  },
  {
    id: 25,
    orderId: "#FWB3928571233",
    title: "Fitness Tracker Band",
    slug: "fitness-tracker-band",
    category: "Wearables",
    inStock: true,
    subtitle: "Track your steps, heart rate, and sleep with this smart band.",
    image: Watch,
    oldPrice: 49.99,
    newPrice: 34.99,
    discount: 30,
    tag: "fitness-band",
    reviews: 400,
    rating: 4.8,
    features: [
      "Heart rate monitor",
      "Sleep tracking",
      "Water resistant",
      "Multi-sport modes",
      "Long battery life",
    ],
    sizes: ["S", "M", "L"],
  },
];
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  width: 36px;
  height: 36px;
  font-size: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 9999px;
}
</style>
