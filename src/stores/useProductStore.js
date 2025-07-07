import { defineStore } from "pinia";
import Watch from '../assets/img/download (5).jfif';
import Fashion from '../assets/img/download (4).jfif';
import Laptop from '../assets/img/images.jfif';
import Phone from '../assets/img/download (1).jfif';

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
            {
        id: 1,
        title: "Watch",
        slug: "luxury-watch",
        category: "Watches / Luxury",
        subtitle: "Premium watches from Switzerland, Germany, and Austria.",
        image: Watch,
        oldPrice: 48.54,
        newPrice: 38.89,
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
        id: 2,
        title: "Fashion",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        tag: "fashion",
        reviews: 1248,
        rating: 5,
        features: [
          'Cotton blend fabric',
          'Breathable and lightweight',
          'Stylish design'
        ],
        sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 3,
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        tag: "laptop",
        reviews: 1248,
        rating: 5,
        features: [
          'Fast processor',
          'Long battery life',
          'Lightweight design'
        ],
        sizes: ['13 inch', '15 inch']
      },
      {
        id: 4,
        title: "Phone",
        slug: "phone",
        subtitle: "Smartphones for daily use.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
        reviews: 1248,
        rating: 5,
        features: [
          'High-resolution display',
          'Fast charging',
          'Durable build'
        ],
        sizes: ['128GB', '256GB']
      },
       {
        id: 5,
        title: "Watch",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Watch,
        oldPrice: 48.54,
        newPrice: 38.89,
        discount: 19,
        tag: "watch",
        reviews: 1248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 6,
        title: "Fashion",
        slug: "sustainable-fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Fashion,
        oldPrice: 39.96,
        newPrice: 22.91,
        discount: 42,
        tag: "fashion",
        reviews: 1248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 7,
        title: "Laptop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        tag: "laptop",
        reviews: 1248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 8,
        title: "Phone",
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        discount: 32,
        tag: "phone",
        reviews: 1248,
    rating: 5,
    features: [
        'Swiss movement',
        'Sapphire crystal glass',
        'Water resistant up to 50m',
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
        ]
    }),
      getters: {
    getProductBySlug: (state) => (slug) => {
      return state.products.find(product => product.slug === slug)
    }
  }
})