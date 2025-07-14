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
import Laptop1 from '../assets/img/apple.jfif';
import Laptop0 from '../assets/img/download (6).jfif';
import Laptop25 from '../assets/img/HPSpectre x360.png';
import Laptop3 from '../assets/img/LenovoThinkPad X1Carbon.png';
import Laptop4 from '../assets/img/ASUSZenBook14.png';
import Laptop5 from '../assets/img/AcerSwift3.png';
import Laptop6 from '../assets/img/MicrosoftSurfaceLaptop5.png';
import Laptop7 from '../assets/img/RazerBlade15.png';
import Electronics1 from '../assets/img/x200.png';
import Electronics2 from '../assets/img/ele2.png';
import Electronics3 from '../assets/img/ele3.png';
import Electronics4 from '../assets/img/ele4.png';
import Electronics5 from '../assets/img/ele5.png';
import Electronics6 from '../assets/img/ele6.png';
import Electronics7 from '../assets/img/ele7.png';
import Electronics8 from '../assets/img/ele8.png';
import Phone11 from '../assets/img/x200.png';
import Phone21 from '../assets/img/Phone.png';
import Phone3 from '../assets/img/Phone1.png';
import Phone4 from '../assets/img/Phone2.png';
import Phone5 from '../assets/img/Phone3.png';
import Phone6 from '../assets/img/Phone4.png';
import Phone7 from '../assets/img/Phone5.png';
import Phone8 from '../assets/img/Phone6.png';
import Accessory0 from '../assets/img/acc1.png'
import Accessory1 from '../assets/img/acc2.png'
import Accessory2 from '../assets/img/acc3.png'
import Accessory3 from '../assets/img/acc4.png'
import Accessory4 from '../assets/img/acc5.png'
import Accessory5 from '../assets/img/acc6.png'
import Accessory6 from '../assets/img/acc7.png'
import Accessory7 from '../assets/img/acc8.png'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [
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
        id: 2,
        orderId: '#FWD215439065',
        title: "Shirt",
        slug: "fashion-show",
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
        'cotton blend fabric',
        'Breathable and lightweight',
    ],
    sizes: ['M', 'XL', 'XXL']
      },
      {
        id: 3,
        orderId: '#FWB122546348',
        title: "Laptop",
        slug: "computer-laptop",
        subtitle: "High performance laptops for work and play. Reliable and powerful.",
        image: Laptop,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        inStock: true,
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
        orderId: '#FWB122344348',
        title: "Xiaomi",
        slug: "phone",
        subtitle: "Smartphones for daily use. Stay connected with the latest technology.",
        image: Phone,
        oldPrice: 20.21,
        newPrice: 17.88,
        inStock: false,
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
        orderId: '#FWB12345659',
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
        orderId: '#FWB126345659',
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
        orderId: '#FWB123456593',
        title: "Desktop",
        slug: "eco-laptop",
        subtitle: "Energy-efficient laptops with eco-friendly packaging.",
        image: Laptop2,
        oldPrice: 3.27,
        newPrice: 1.90,
        discount: 41,
        inStock: false,
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
        orderId: '#FWB123456549',
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
        id: 11,
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
        id: 13,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
            {
        id: 21,
        orderId: '#FWB093571352',
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
        orderId: '#FWB0192741232',
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
        orderId: '#FWB0291562731',
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
        orderId: '#FWB8392791290',
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
        orderId: '#FWB3928571233',
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
        orderId: '#FWB092375823',
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
        orderId: '#FWB932486871',
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
        orderId: '#FWB2390578912',
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
        orderId: '#FWB23895691',
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
        orderId: '#FWB349857821',
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
        orderId: '#FWB293857123',
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
        orderId: '#FWB957237132',
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
        orderId: '#FWB457237132',
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
        orderId: '#FWB157237132',
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
        orderId: '#FWB257237132',
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
        orderId: '#FWB057237132',
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
        id: 38,
        orderId: '#FWB757237132',
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
        orderId: '#FWB557237132',
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
      },
      {
        id: 41,
        orderId: '#FWB98767237132',
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
        orderId: '#FWB12357237132',
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
        orderId: '#FWB93357237132',
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
        orderId: '#FWB4957237132',
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
        id: 45,
        orderId: '#FWB112957237132',
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
        id: 46,
        orderId: '#FWB09957237132',
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
        id: 47,
        orderId: '#FWB8757237132',
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
        id: 49,
        orderId: '#FWB0857237132',
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
        id: 50,
        orderId: '#FWB2937237132',
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
        id: 51,
        orderId: '#FWB2398437132',
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
        id: 52,
        orderId: '#FWB238477132',
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
        id: 53,
        orderId: '#FWB1957237132',
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
        id: 54,
        orderId: '#FWB0957237132',
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
        id: 55,
        orderId: '#FWB1957237132',
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
        id: 56,
        orderId: '#FWB1957237132',
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
        id: 57,
        orderId: '#FWB93237132',
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
        id: 58,
        orderId: '#FWB0957237132',
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
        id: 59,
        orderId: '#FWB2347237132',
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
        id: 60,
        orderId: '#FWB1237237132',
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
        id: 61,
        orderId: '#FWB0987237132',
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
      },
            {
        id: 62,
        orderId: '#FWB9857237132',
        title: "Smartphone X200",
        slug: "smartphone-x200",
        category: "Smartphones",
        inStock: true,
        subtitle: "Powerful smartphone with advanced camera and display.",
        image: Electronics1, // Replace with actual image import
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
      },
      {
        id: 75,
        orderId: '#FWB5127237132',
        title: "Xiaomi Mi Ultra 13",
        slug: "xiaomi-mi-ultra-13",
        category: "Smartphones",
        inStock: true,
        subtitle: "Flagship phone with Leica-powered cameras.",
        image: Phone6,
        oldPrice: 899.00,
        newPrice: 729.00,
        discount: 18,
        tag: "phone",
        reviews: 740,
        rating: 4.6,
        features: [
          "1-inch Sony sensor",
          "Snapdragon 8 Gen 3",
          "90W wired / 50W wireless charging",
          "IP68 water resistance"
        ],
        sizes: ["256GB", "512GB"]
      },
      {
        id: 76,
        orderId: '#FWB1227237132',
        title: "Nothing Phone 2",
        slug: "nothing-phone-2",
        category: "Smartphones",
        inStock: true,
        subtitle: "Stylish smartphone with Glyph interface and clean UI.",
        image: Phone7,
        oldPrice: 599.00,
        newPrice: 499.00,
        discount: 16,
        tag: "phone",
        reviews: 420,
        rating: 4.4,
        features: [
          "Glyph LED notifications",
          "Snapdragon 8+ Gen 1",
          "Dual rear cameras",
          "Nothing OS"
        ],
        sizes: ["128GB", "256GB"]
      },
      {
        id: 77,
        orderId: '#FWB23427237132',
        title: "Asus ROG Phone 7",
        slug: "asus-rog-phone-7",
        category: "Smartphones",
        inStock: false,
        subtitle: "Gaming phone with extreme performance and cooling.",
        image: Phone8,
        oldPrice: 999.00,
        newPrice: 849.00,
        discount: 15,
        tag: "phone",
        reviews: 300,
        rating: 4.7,
        features: [
          "165Hz AMOLED",
          "AirTrigger buttons",
          "6000mAh battery",
          "Snapdragon 8 Gen 2"
        ],
        sizes: ["256GB", "512GB"]
      },
            {
        id: 78,
        orderId: '#FWB2327237132',
        title: "Logitech MX Master 3S",
        slug: "logitech-mx-master-3s",
        category: "Accessories / Mouse",
        inStock: true,
        subtitle: "Advanced wireless mouse with ergonomic design and fast scrolling.",
        image: Accessory0,
        oldPrice: 119.99,
        newPrice: 99.99,
        discount: 17,
        tag: "accessory",
        reviews: 1241,
        rating: 5,
        features: [
          'Ergonomic Design',
          'MagSpeed Scrolling',
          '4000 DPI Sensor',
          'USB-C Rechargeable',
          'Bluetooth & USB Receiver'
        ],
        sizes: []
      },
      {
        id: 79,
        orderId: '#FWB2427237132',
        title: "Sony WH-1000XM5",
        slug: "sony-wh-1000xm5",
        category: "Accessories / Headphones",
        inStock: true,
        subtitle: "Wireless Noise-Canceling Over-Ear Headphones with premium sound.",
        image: Accessory1,
        oldPrice: 399.99,
        newPrice: 349.99,
        discount: 13,
        tag: "accessory",
        reviews: 942,
        rating: 5,
        features: [
          'Industry-leading Noise Cancellation',
          '30-hour Battery Life',
          'Touch Controls',
          'Bluetooth 5.2',
          'Hi-Res Audio Certified'
        ],
        sizes: []
      },
      {
        id: 80,
        orderId: '#FWB4327237132',
        title: "Razer BlackWidow V4 Pro",
        slug: "razer-blackwidow-v4-pro",
        category: "Accessories / Keyboard",
        inStock: false,
        subtitle: "Mechanical gaming keyboard with RGB and macro keys.",
        image: Accessory2,
        oldPrice: 229.99,
        newPrice: 199.99,
        discount: 13,
        tag: "accessory",
        reviews: 283,
        rating: 4,
        features: [
          'Mechanical Switches (Green)',
          'Dedicated Macro Keys',
          'Magnetic Wrist Rest',
          'Chroma RGB Lighting',
          'USB Passthrough'
        ],
        sizes: []
      },
      {
        id: 81,
        orderId: '#FWB2327237132',
        title: "Elgato Stream Deck XL",
        slug: "elgato-stream-deck-xl",
        category: "Accessories / Streaming",
        inStock: true,
        subtitle: "32 customizable LCD keys for productivity and streaming control.",
        image: Accessory3,
        oldPrice: 249.99,
        newPrice: 219.99,
        discount: 12,
        tag: "accessory",
        reviews: 389,
        rating: 5,
        features: [
          '32 LCD Keys',
          'Custom Icons & Functions',
          'Integration with OBS, Twitch, YouTube',
          'Detachable Stand',
          'USB-C Connection'
        ],
        sizes: []
      },
            {
        id: 82,
        orderId: '#FWB1227237132',
        title: "Anker 737 Power Bank",
        slug: "anker-737-power-bank",
        category: "Accessories / Power",
        inStock: true,
        subtitle: "140W USB-C Portable Charger with 24,000mAh capacity.",
        image: Accessory4,
        oldPrice: 159.99,
        newPrice: 139.99,
        discount: 13,
        tag: "accessory",
        reviews: 478,
        rating: 5,
        features: [
          '140W Fast Charging',
          '24,000mAh Battery',
          'USB-C PD 3.1',
          'Smart Digital Display',
          'Multiple Device Charging'
        ],
        sizes: []
      },
      {
        id: 83,
        orderId: '#FWB2327237132',
        title: "Logitech Brio 4K Webcam",
        slug: "logitech-brio-4k-webcam",
        category: "Accessories / Webcam",
        inStock: true,
        subtitle: "Ultra HD 4K webcam with HDR and Windows Hello support.",
        image: Accessory5,
        oldPrice: 199.99,
        newPrice: 169.99,
        discount: 15,
        tag: "accessory",
        reviews: 212,
        rating: 4,
        features: [
          '4K Ultra HD Resolution',
          'HDR and Auto Light Correction',
          'Windows Hello Facial Recognition',
          'Omni-directional Microphones',
          'Adjustable Field of View'
        ],
        sizes: []
      },
      {
        id: 84,
        orderId: '#FWB11227237132',
        title: "Samsung T7 Shield SSD",
        slug: "samsung-t7-shield-ssd",
        category: "Accessories / Storage",
        inStock: false,
        subtitle: "1TB rugged portable SSD with USB 3.2 and IP65 water resistance.",
        image: Accessory6,
        oldPrice: 139.99,
        newPrice: 119.99,
        discount: 14,
        tag: "accessory",
        reviews: 341,
        rating: 4,
        features: [
          '1TB NVMe SSD',
          'USB 3.2 Gen 2',
          'Up to 1050MB/s Read Speed',
          'Shock & Water Resistant (IP65)',
          'Secure AES 256-bit Encryption'
        ],
        sizes: []
      },
      {
        id: 85,
        orderId: '#FWB3127237132',
        title: "HyperX Cloud II",
        slug: "hyperx-cloud-ii",
        category: "Accessories / Gaming Headset",
        inStock: true,
        subtitle: "Gaming headset with 7.1 virtual surround and detachable mic.",
        image: Accessory7,
        oldPrice: 99.99,
        newPrice: 79.99,
        discount: 20,
        tag: "accessory",
        reviews: 1920,
        rating: 5,
        features: [
          '7.1 Virtual Surround Sound',
          'Memory Foam Ear Cushions',
          'Detachable Noise-Canceling Mic',
          'USB Audio Control Box',
          'Multi-Platform Compatibility'
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