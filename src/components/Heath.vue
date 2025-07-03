<template>
    <AppLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-10 tracking-tight text-start">
                Heath
            </h2>
            <p class="text-sm font-thin text-gray-900 mb-10 tracking-tight text-start">
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
                        <div class="relative bg-gradient-to-br from-gray-50 to-gray-200 h-56 flex items-center justify-center rounded-t-2xl overflow-hidden">
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
                        </div>
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
                                <span class="text-xs text-gray-500">4.8 | Free Delivery</span>
                            </div>
                            <!-- Footer -->
                            <div class="mt-auto flex flex-col gap-2">
                                <button class="bg-red-500 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-red-800 transition-all duration-200 focus:outline-none">
                                    Add to Cart
                                </button>
                                <button class="text-blue-500 hover:underline text-xs font-medium">
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import Watch from '../assets/img/download (5).jfif';
import Fashion from '../assets/img/download (4).jfif';
import Laptop from '../assets/img/images.jfif';
import Phone from '../assets/img/download (1).jfif';

const products = [
    {
        id: 1,
        Top: 'Electronics',
        products: [
            {
                id: 1,
                title: "Watch",
                subtitle: "from Switzerland/Germany/Austria...",
                image: Watch,
                oldPrice: "48.54",
                newPrice: "38.89",
                discount: 19,
                tag: "watch",
            },
            {
                id: 2,
                title: "Fashion",
                subtitle: "from Fashion",
                image: Fashion,
                oldPrice: "39.96",
                newPrice: "22.91",
                discount: 42,
                tag: "fashion",
            },
            {
                id: 3,
                title: "Laptop",
                subtitle: "Laptop for high performance",
                image: Laptop,
                oldPrice: "3.27",
                newPrice: "1.90",
                discount: 41,
                tag: "Laptop",
            },
            {
                id: 4,
                title: "Phone",
                subtitle: "Phone for daily use",
                image: Phone,
                oldPrice: "20.21",
                newPrice: "17.88",
                discount: 32,
                tag: "Phone",
            },
        ],
    },
    {
        id: 2,
        Top: 'Organic',
        products: [
            {
                id: 1,
                title: "Watch",
                subtitle: "from Switzerland/Germany/Austria...",
                image: Watch,
                oldPrice: "48.54",
                newPrice: "38.89",
                discount: 19,
                tag: "watch",
            },
            {
                id: 2,
                title: "Fashion",
                subtitle: "from Fashion",
                image: Fashion,
                oldPrice: "39.96",
                newPrice: "22.91",
                discount: 42,
                tag: "fashion",
            },
            {
                id: 3,
                title: "Laptop",
                subtitle: "Laptop for high performance",
                image: Laptop,
                oldPrice: "3.27",
                newPrice: "1.90",
                discount: 41,
                tag: "Laptop",
            },
            {
                id: 4,
                title: "Phone",
                subtitle: "Phone for daily use",
                image: Phone,
                oldPrice: "20.21",
                newPrice: "17.88",
                discount: 32,
                tag: "Phone",
            },
        ]
    }
];
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