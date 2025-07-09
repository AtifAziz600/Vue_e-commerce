import { defineStore } from "pinia";
import Watch from '../assets/img/watch.png';
import Fashion from '../assets/img/shirt.jfif';
import Laptop from '../assets/img/laptop.jfif';
import Phone from '../assets/img/xiaomi.jfif';
import Watch2 from '../assets/img/watch2.png';
import Fashion2 from '../assets/img/pants.jfif';
import Laptop2 from '../assets/img/laptop.jfif';
import Phone2 from '../assets/img/Oppo.jfif';
import Fashion1 from '../assets/img/shirt.jfif';
import Fashion25 from '../assets/img/cloths.png';
import Fashion35 from '../assets/img/pants.jfif';
import Fashion45 from '../assets/img/best-british-fashion-brands-1.jpg';
import Fashion55 from '../assets/img/download (7).jfif';
import Fashion65 from '../assets/img/images (4).jfif';
import Fashion75 from '../assets/img/81+oQBvBR-L._AC_UL320_.jpg';
import Fashion85 from '../assets/img/images (5).jfif';
import Health1 from '../assets/img/bluepressure.png';
import Health2 from '../assets/img/InfraredThermometer.png';
import Health3 from '../assets/img/PulseOximeter.png';
import Health4 from '../assets/img/DigitalWeighingScale.png';
import Health5 from '../assets/img/FitnessTrackerBand.png';
import Health6 from '../assets/img/ElectricToothbrush.png';
import Health7 from '../assets/img/SmartWaterBottle.png';
import Health8 from '../assets/img/MassageGun.png';
import Pharmacy1 from '../assets/img/para.png'
import Pharmacy2 from '../assets/img/Ibuprofen200mgTablets.png';
import Pharmacy3 from '../assets/img/CetirizineAllergyTablets.png';
import Pharmacy4 from '../assets/img/VitaminC1000mgTablets.png';
import Pharmacy5 from '../assets/img/Loratadine10mgTablets.png';
import Pharmacy6 from '../assets/img/Aspirin75mgTablets.png';
import Pharmacy7 from '../assets/img/MultivitaminTablets.png';
import Pharmacy8 from '../assets/img/Omeprazole20mgCapsules.png';
import Toy1 from '../assets/img/LEGOClassicBricks.png';
import Toy2 from '../assets/img/MonopolyBoardGame.png';
import Toy3 from '../assets/img/NerfEliteDisruptor.png';
import Toy4 from '../assets/img/UNOCardGame.png';
import Toy5 from '../assets/img/HotWheels10-Pack.png';
import Toy6 from '../assets/img/JengaClassicGame.png';
import Toy7 from '../assets/img/BarbieDreamhouseDollhouse.png';
import Toy8 from '../assets/img/Play-Doh10-PackColors.png';
import Laptop1 from '../assets/img/apple.jfif'
import Laptop0 from '../assets/img/download (6).jfif'
import Laptop25 from '../assets/img/HPSpectre x360.png'
import Laptop3 from '../assets/img/LenovoThinkPad X1Carbon.png'
import Laptop4 from '../assets/img/ASUSZenBook14.png'
import Laptop5 from '../assets/img/AcerSwift3.png'
import Laptop6 from '../assets/img/MicrosoftSurfaceLaptop5.png'
import Laptop7 from '../assets/img/RazerBlade15.png'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
         {
    id: 1,
    title: "Watch",
    slug: "luxury-watch",
    category: "Watches / Luxury",
    subtitle: "Premium watches from Switzerland, Germany, and Austria. Timeless elegance for every occasion.",
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
        title: "Shirt",
        slug: "fashion-show",
        subtitle: "Latest trends in fashion. Elevate your style with our exclusive collection.",
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
        id: 3,
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
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
        id: 4,
        title: "Xiaomi",
        slug: "phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
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
      {
        id: 5,
        title: "Pants",
        slug: "eco-watch",
        subtitle: "Eco-friendly watches crafted with sustainable materials.",
        image: Fashion2,
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
        title: "Watch",
        slug: "sustainable-fashion",
        subtitle: "Organic fashion wear for a greener planet.",
        image: Watch2,
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
        title: "Desktop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
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
        title: "Oppo",
        slug: "recycled-phone",
        subtitle: "Phones made with recycled materials.",
        image: Phone2,
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
      {
        id: 9,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
            {
        id: 21,
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
          "For ages 4+"
        ],
        sizes: []
      },
      {
        id: 22,
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
          "Ages 8+"
        ],
        sizes: []
      },
      {
        id: 23,
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
          "Ages 8+"
        ],
        sizes: []
      },
      {
        id: 24,
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
        features: [
          "108 cards",
          "Easy to learn",
          "Great for travel",
          "Ages 7+"
        ],
        sizes: []
      },
            {
        id: 25,
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
          'Heart rate monitor',
          'Sleep tracking',
          'Water resistant',
          'Multi-sport modes',
          'Long battery life'
        ],
        sizes: ['S', 'M', 'L']
      },
      {
        id: 26,
        title: "Electric Toothbrush",
        slug: "electric-toothbrush",
        category: "Personal Care",
        inStock: true,
        subtitle: "Advanced sonic technology for a brighter, healthier smile.",
        image: Fashion,
        oldPrice: 59.99,
        newPrice: 39.99,
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
        id: 27,
        title: "Smart Water Bottle",
        slug: "smart-water-bottle",
        category: "Hydration",
        inStock: true,
        subtitle: "Stay hydrated with reminders and temperature display.",
        image: Laptop,
        oldPrice: 39.99,
        newPrice: 27.99,
        discount: 30,
        tag: "water-bottle",
        reviews: 95,
        rating: 4.3,
        features: [
          'LED temperature display',
          'Hydration reminders',
          'Stainless steel',
          'Keeps drinks hot/cold',
          'Leak-proof lid'
        ],
        sizes: []
      },
      {
        id: 28,
        title: "Massage Gun",
        slug: "massage-gun",
        category: "Recovery",
        inStock: false,
        subtitle: "Relieve muscle soreness and improve recovery with deep tissue massage.",
        image: Phone,
        oldPrice: 99.99,
        newPrice: 69.99,
        discount: 30,
        tag: "massage-gun",
        reviews: 130,
        rating: 4.6,
        features: [
          '6 massage heads',
          'Adjustable speed',
          'Quiet motor',
          'Portable case',
          'Rechargeable battery'
        ],
        sizes: []
      },
            {
        id: 29,
        title: "Blood Pressure Monitor",
        slug: "blood-pressure-monitor",
        category: "Health Devices",
        inStock: true,
        subtitle: "Accurate and easy-to-use digital blood pressure monitor for home use.",
        image: Health1,
        oldPrice: 59.99,
        newPrice: 44.99,
        discount: 25,
        tag: "bp-monitor",
        reviews: 320,
        rating: 4.7,
        features: [
          'Large LCD display',
          'Memory for 120 readings',
          'One-touch operation',
          'Irregular heartbeat detection',
          'Portable design'
        ],
        sizes: []
      },
      {
        id: 30,
        title: "Infrared Thermometer",
        slug: "infrared-thermometer",
        category: "Health Devices",
        inStock: true,
        subtitle: "Contactless thermometer for instant and hygienic temperature readings.",
        image: Health2,
        oldPrice: 39.99,
        newPrice: 29.99,
        discount: 25,
        tag: "thermometer",
        reviews: 210,
        rating: 4.5,
        features: [
          'Fever alarm',
          'Backlit display',
          'Fast 1-second reading',
          'Memory recall',
          'Celsius/Fahrenheit switch'
        ],
        sizes: []
      },
      {
        id: 31,
        title: "Pulse Oximeter",
        slug: "pulse-oximeter",
        category: "Health Devices",
        inStock: false,
        subtitle: "Monitor your blood oxygen saturation and pulse rate at home.",
        image: Health3,
        oldPrice: 29.99,
        newPrice: 19.99,
        discount: 33,
        tag: "oximeter",
        reviews: 180,
        rating: 4.6,
        features: [
          'SpO2 and pulse rate measurement',
          'OLED display',
          'Auto power-off',
          'Lightweight and portable',
          'Battery included'
        ],
        sizes: []
      },
      {
        id: 32,
        title: "Digital Weighing Scale",
        slug: "digital-weighing-scale",
        category: "Health Devices",
        inStock: true,
        subtitle: "Track your weight with high-precision digital scale.",
        image: Health4,
        oldPrice: 34.99,
        newPrice: 24.99,
        discount: 29,
        tag: "scale",
        reviews: 150,
        rating: 4.4,
        features: [
          'Tempered glass platform',
          'Auto-calibration',
          'Step-on technology',
          'Large LED display',
          'Max weight 180kg'
        ],
        sizes: []
      },
            {
        id: 33,
        title: "Fitness Tracker Band",
        slug: "fitness-tracker-band",
        category: "Wearables",
        inStock: true,
        subtitle: "Track your steps, heart rate, and sleep with this smart band.",
        image: Health5,
        oldPrice: 49.99,
        newPrice: 34.99,
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
        id: 34,
        title: "Electric Toothbrush",
        slug: "electric-toothbrush",
        category: "Personal Care",
        inStock: true,
        subtitle: "Advanced sonic technology for a brighter, healthier smile.",
        image: Health6,
        oldPrice: 59.99,
        newPrice: 39.99,
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
        id: 35,
        title: "Smart Water Bottle",
        slug: "smart-water-bottle",
        category: "Hydration",
        inStock: true,
        subtitle: "Stay hydrated with reminders and temperature display.",
        image: Health7,
        oldPrice: 39.99,
        newPrice: 27.99,
        discount: 30,
        tag: "water-bottle",
        reviews: 95,
        rating: 4.3,
        features: [
          'LED temperature display',
          'Hydration reminders',
          'Stainless steel',
          'Keeps drinks hot/cold',
          'Leak-proof lid'
        ],
        sizes: []
      },
      {
        id: 36,
        title: "Massage Gun",
        slug: "massage-gun",
        category: "Recovery",
        inStock: false,
        subtitle: "Relieve muscle soreness and improve recovery with deep tissue massage.",
        image: Health8,
        oldPrice: 99.99,
        newPrice: 69.99,
        discount: 30,
        tag: "massage-gun",
        reviews: 130,
        rating: 4.6,
        features: [
          '6 massage heads',
          'Adjustable speed',
          'Quiet motor',
          'Portable case',
          'Rechargeable battery'
        ],
        sizes: []
      },
       {
        id: 37,
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
        id: 38,
        title: "Ibuprofen 200mg Tablets",
        slug: "ibuprofen-200mg",
        subtitle: "Anti-inflammatory for pain and swelling.",
        image: Pharmacy2,
        inStock: true,
        oldPrice: 6.49,
        newPrice: 4.49,
        discount: 31,
        tag: "anti-inflammatory",
        reviews: 210,
        rating: 4.7,
        features: [
          "Reduces inflammation",
          "Relieves pain and swelling",
          "Suitable for headaches and muscle pain",
          "Non-drowsy formula",
          "Fast relief"
        ],
        sizes: ["Pack of 16", "Pack of 32"]
      },
      {
        id: 39,
        title: "Cetirizine Allergy Tablets",
        slug: "cetirizine-allergy",
        subtitle: "24-hour allergy relief for hayfever and allergies.",
        image: Pharmacy3,
        inStock: false,
        oldPrice: 7.99,
        newPrice: 5.99,
        discount: 25,
        tag: "allergy",
        reviews: 180,
        rating: 4.6,
        features: [
          "Non-drowsy",
          "Relieves sneezing and itchy eyes",
          "Effective for hayfever",
          "Once daily",
          "Suitable for adults and children"
        ],
        sizes: ["Pack of 7", "Pack of 14"]
      },
      {
        id: 40,
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
      },
      {
        id: 41,
        title: "Loratadine 10mg Tablets",
        slug: "loratadine-10mg",
        subtitle: "Non-drowsy antihistamine for allergies.",
        image: Pharmacy5,
        inStock: true,
        oldPrice: 6.99,
        newPrice: 4.99,
        discount: 29,
        tag: "allergy",
        reviews: 140,
        rating: 4.7,
        features: [
          "24-hour relief",
          "Non-drowsy",
          "Effective for hayfever",
          "Suitable for adults and children",
          "Easy to swallow"
        ],
        sizes: ["Pack of 7", "Pack of 14"]
      },
      {
        id: 42,
        title: "Aspirin 75mg Tablets",
        slug: "aspirin-75mg",
        subtitle: "Low dose for heart health and blood thinning.",
        image: Pharmacy6,
        inStock: true,
        oldPrice: 5.49,
        newPrice: 3.99,
        discount: 27,
        tag: "heart-health",
        reviews: 110,
        rating: 4.5,
        features: [
          "Supports heart health",
          "Low dose",
          "Easy to swallow",
          "Suitable for long-term use",
          "Trusted formula"
        ],
        sizes: ["Pack of 28", "Pack of 56"]
      },
      {
        id: 43,
        title: "Multivitamin Tablets",
        slug: "multivitamin",
        subtitle: "Daily essential vitamins and minerals.",
        image: Pharmacy7,
        inStock: true,
        oldPrice: 8.99,
        newPrice: 6.99,
        discount: 22,
        tag: "vitamins",
        reviews: 170,
        rating: 4.8,
        features: [
          "Supports overall health",
          "Contains 12 vitamins and minerals",
          "Suitable for adults",
          "One-a-day formula",
          "Easy to swallow"
        ],
        sizes: ["Pack of 30", "Pack of 60"]
      },
      {
        id: 44,
        title: "Omeprazole 20mg Capsules",
        slug: "omeprazole-20mg",
        subtitle: "Relieves heartburn and acid reflux.",
        image: Pharmacy8,
        inStock: true,
        oldPrice: 10.99,
        newPrice: 8.49,
        discount: 23,
        tag: "digestive-health",
        reviews: 130,
        rating: 4.6,
        features: [
          "Reduces stomach acid",
          "Effective for heartburn",
          "Once daily",
          "Easy to swallow",
          "Suitable for adults"
        ],
        sizes: ["Pack of 14", "Pack of 28"]
      },
            {
        id: 43,
        title: "LEGO Classic Bricks",
        slug: "lego-classic-bricks",
        category: "Building Toys",
        inStock: true,
        subtitle: "A box of colorful LEGO bricks for creative building fun.",
        image: Toy1,
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
          "For ages 4+"
        ],
        sizes: []
      },
      {
        id: 44,
        title: "Monopoly Board Game",
        slug: "monopoly-board-game",
        category: "Board Games",
        inStock: true,
        subtitle: "Classic Monopoly game for family and friends.",
        image: Toy2,
        oldPrice: 24.99,
        newPrice: 19.99,
        discount: 20,
        tag: "monopoly",
        reviews: 1987,
        rating: 4,
        features: [
          "2-8 players",
          "Includes game board, tokens, cards, and money",
          "Ages 8+"
        ],
        sizes: []
      },
      {
        id: 45,
        title: "Nerf Elite Disruptor",
        slug: "nerf-elite-disruptor",
        category: "Outdoor Toys",
        inStock: true,
        subtitle: "Quick-draw blaster with rotating drum.",
        image: Toy3,
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
          "Ages 8+"
        ],
        sizes: []
      },
      {
        id: 46,
        title: "UNO Card Game",
        slug: "uno-card-game",
        category: "Card Games",
        inStock: true,
        subtitle: "Fast-paced card game for everyone.",
        image: Toy4,
        oldPrice: 9.99,
        newPrice: 6.99,
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
        id: 47,
        title: "Hot Wheels 10-Pack",
        slug: "hot-wheels-10-pack",
        category: "Vehicles",
        inStock: true,
        subtitle: "Set of 10 Hot Wheels cars for racing fun.",
        image: Toy5,
        oldPrice: 14.99,
        newPrice: 11.99,
        discount: 20,
        tag: "hotwheels",
        reviews: 1100,
        rating: 4,
        features: [
          "10 die-cast cars",
          "Variety of styles",
          "Ages 3+"
        ],
        sizes: []
      },
      {
        id: 48,
        title: "Jenga Classic Game",
        slug: "jenga-classic-game",
        category: "Stacking Games",
        inStock: true,
        subtitle: "Stack the blocks and don't let the tower fall!",
        image: Toy6,
        oldPrice: 16.99,
        newPrice: 12.99,
        discount: 24,
        tag: "jenga",
        reviews: 1450,
        rating: 5,
        features: [
          "54 hardwood blocks",
          "For 1 or more players",
          "Ages 6+"
        ],
        sizes: []
      },
      {
        id: 49,
        title: "Barbie Dreamhouse Dollhouse",
        slug: "barbie-dreamhouse-dollhouse",
        category: "Dolls & Dollhouses",
        inStock: false,
        subtitle: "Three-story Barbie Dreamhouse with furniture and accessories.",
        image: Toy7,
        oldPrice: 199.99,
        newPrice: 179.99,
        discount: 10,
        tag: "barbie",
        reviews: 800,
        rating: 5,
        features: [
          "70+ accessories",
          "Working elevator",
          "Lights and sounds",
          "Ages 3+"
        ],
        sizes: []
      },
      {
        id: 50,
        title: "Play-Doh 10-Pack Colors",
        slug: "play-doh-10-pack",
        category: "Arts & Crafts",
        inStock: true,
        subtitle: "10 cans of colorful Play-Doh for creative play.",
        image: Toy8,
        oldPrice: 8.99,
        newPrice: 6.49,
        discount: 28,
        tag: "playdoh",
        reviews: 950,
        rating: 4,
        features: [
          "10 colors",
          "Non-toxic",
          "Ages 2+"
        ],
        sizes: []
      },
            {
        id: 51,
        title: "Dell XPS 13",
        slug: "dell-xps-13",
        category: "Laptops / Ultrabook",
        inStock: true,
        subtitle: "13.4-inch FHD+ Laptop, Intel Core i7, 16GB RAM, 512GB SSD.",
        image: Laptop0,
        oldPrice: 1299.99,
        newPrice: 1099.99,
        discount: 15,
        tag: "laptop",
        reviews: 234,
        rating: 5,
        features: [
          'Intel Core i7 12th Gen',
          '16GB LPDDR5 RAM',
          '512GB NVMe SSD',
          '13.4" FHD+ InfinityEdge Display',
          'Windows 11 Home'
        ],
        sizes: []
      },
      {
        id: 52,
        title: "Apple MacBook Air M2",
        slug: "macbook-air-m2",
        category: "Laptops / Apple",
        inStock: true,
        subtitle: "Apple M2 chip, 8GB RAM, 256GB SSD, 13.6-inch Liquid Retina.",
        image: Laptop1,
        oldPrice: 1199.00,
        newPrice: 1049.00,
        discount: 13,
        tag: "laptop",
        reviews: 512,
        rating: 5,
        features: [
          'Apple M2 Chip',
          '8GB Unified Memory',
          '256GB SSD Storage',
          '13.6-inch Liquid Retina Display',
          'macOS Ventura'
        ],
        sizes: []
      },
      {
        id: 53,
        title: "HP Spectre x360",
        slug: "hp-spectre-x360",
        category: "Laptops / Convertible",
        inStock: false,
        subtitle: "14-inch 2-in-1 Touch, Intel i7, 16GB RAM, 1TB SSD.",
        image: Laptop25,
        oldPrice: 1599.99,
        newPrice: 1349.99,
        discount: 16,
        tag: "laptop",
        reviews: 187,
        rating: 4,
        features: [
          'Intel Core i7 12th Gen',
          '16GB RAM',
          '1TB SSD',
          '14" 3K2K OLED Touchscreen',
          '360° Convertible'
        ],
        sizes: []
      },
      {
        id: 54,
        title: "Lenovo ThinkPad X1 Carbon",
        slug: "thinkpad-x1-carbon",
        category: "Laptops / Business",
        inStock: true,
        subtitle: "14-inch, Intel i7, 16GB RAM, 512GB SSD, Windows 11 Pro.",
        image: Laptop3,
        oldPrice: 1799.00,
        newPrice: 1499.00,
        discount: 17,
        tag: "laptop",
        reviews: 321,
        rating: 5,
        features: [
          'Intel Core i7 12th Gen',
          '16GB RAM',
          '512GB SSD',
          '14" FHD+ Display',
          'Windows 11 Pro'
        ],
        sizes: []
      },
            {
        id: 55,
        title: "ASUS ZenBook 14",
        slug: "asus-zenbook-14",
        category: "Laptops / Ultrabook",
        inStock: true,
        subtitle: "14-inch FHD, AMD Ryzen 7, 16GB RAM, 1TB SSD.",
        image: Laptop4,
        oldPrice: 999.99,
        newPrice: 849.99,
        discount: 15,
        tag: "laptop",
        reviews: 98,
        rating: 4,
        features: [
          'AMD Ryzen 7 5800H',
          '16GB RAM',
          '1TB SSD',
          '14" FHD NanoEdge Display',
          'Windows 11 Home'
        ],
        sizes: []
      },
      {
        id: 56,
        title: "Acer Swift 3",
        slug: "acer-swift-3",
        category: "Laptops / Thin & Light",
        inStock: true,
        subtitle: "14-inch, Intel i5, 8GB RAM, 512GB SSD, Silver.",
        image: Laptop5,
        oldPrice: 749.99,
        newPrice: 649.99,
        discount: 13,
        tag: "laptop",
        reviews: 76,
        rating: 4,
        features: [
          'Intel Core i5 11th Gen',
          '8GB RAM',
          '512GB SSD',
          '14" FHD IPS Display',
          'Wi-Fi 6'
        ],
        sizes: []
      },
      {
        id: 57,
        title: "Microsoft Surface Laptop 5",
        slug: "surface-laptop-5",
        category: "Laptops / Touchscreen",
        inStock: false,
        subtitle: "13.5-inch Touch, Intel i5, 8GB RAM, 256GB SSD.",
        image: Laptop6,
        oldPrice: 999.00,
        newPrice: 899.00,
        discount: 10,
        tag: "laptop",
        reviews: 54,
        rating: 4,
        features: [
          'Intel Core i5 12th Gen',
          '8GB RAM',
          '256GB SSD',
          '13.5" PixelSense Touchscreen',
          'Windows 11 Home'
        ],
        sizes: []
      },
      {
        id: 58,
        title: "Razer Blade 15",
        slug: "razer-blade-15",
        category: "Laptops / Gaming",
        inStock: true,
        subtitle: "15.6-inch QHD, Intel i7, RTX 3070, 16GB RAM, 1TB SSD.",
        image: Laptop7,
        oldPrice: 2499.99,
        newPrice: 2199.99,
        discount: 12,
        tag: "laptop",
        reviews: 112,
        rating: 5,
        features: [
          'Intel Core i7 12th Gen',
          'NVIDIA GeForce RTX 3070',
          '16GB RAM',
          '1TB SSD',
          '15.6" QHD 240Hz Display'
        ],
        sizes: []
      }
        ]
    }),
      getters: {
    getProductBySlug: (state) => (slug) => {
      return state.products.find(product => product.slug === slug)
    }
  }
})