import { createRouter, createWebHistory } from 'vue-router'
import ProductPreviewPage from "@/components/ProductPreviewPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue')
    },
    {
      path: '/order-history',
      name: 'order-history',
      component: () => import('../views/Order/OrderHistory.vue'),
    },
    {
      path: '/become-seller',
      name: 'become-seller',
      component: () => import('../views/BecomeSeller/BecomeSeller.vue')
    },
    {
      path: '/cart-order',
      name: 'cart-order',
      component: () => import('../views/Order/Cart.vue')
    },
    {
      path: '/new-release',
      name:'new-release',
      component: () => import('../views/NewRelease/NewRelease.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/Books/Books.vue')
    },
    {
      path: "/computer",
      name: 'computer',
      component: () => import('../views/Computer/Computer.vue')
    },
    {
      path: "/health",
      name: 'health',
      component: () => import('../views/Health/Heath.vue')
    },
    {
      path: '/fashion',
      name: 'fashion',
      component: () => import('../views/Fashion/Fashion.vue')
    },
    {
      path: '/toysgame',
      name: "toysgames",
      component: () => import('../views/Toy&Game/Toy&Games.vue')
    },
    {
      path: "/pharmacy",
      name: "pharmacy",
      component: () => import('../views/Pharmacy/Pharmacy.vue')
    },
    {
      path: "/best-seller",
      name: "best-seller",
      component: () => import('../views/BestSeller/SellerBestItems.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/Order/Favorite.vue')
    },
    {
      path: '/order-confirm',
      name: 'order-confirm',
      component: () => import('../views/Order/OrderConfirmPage.vue')
    },
    {
      path: '/order-summary',
      name: 'order-summary',
      component: () => import('../views/Order/OrderSummary.vue')
    },
    {
      path: "/all-products",
      name: "all-products",
      component: () => import('../views/Products/AllProducts.vue')
    },
    {
      path: "/add-coupon-code",
      name: "add-coupon-code",
      component: () => import('../components/AddCoupon.vue')
    }, 
    {
      path: '/product/:slug',
      name: 'preview-product-page',
      component: ProductPreviewPage,
    },
    {
      path: "/review",
      name: 'review',
      component: () => import('../views/Review/Review.vue')
    },
    {
      path: "/electronics",
      name: "electronics",
      component: () => import('../views/Electronics/Electronics.vue')
    },
    {
      path: "/phones",
      name: "phones",
      component: () => import('../views/Phone/Phone.vue')
    },
    {
      path: "/tablets",
      name: "tablets",
      component: () => import('../views/Tablets/Tablets.vue')
    },
    {
      path: '/category/:slug',
      name: "category",
      component: () => import('../views/Category/HomeCategoryCard.vue')
    },
    {
      path: "/accessories",
      name: "accessories",
      component: () => import('../views/Accessories/Accessories.vue')
    },
    {
      path: '/order-tracking',
      name: 'order-tracking',
      component: () => import('../views/Order/OrderTracking.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/About.vue')
    },
    {
      path: '/refund',
      name: 'refund',
      component: () => import('../views/RefundAndReturn/RefundPolicy.vue')
    },
    {
      path: '/refund-order',
      name: 'refund-order',
      component: () => import('../views/RefundAndReturn/RefundAndReturn.vue')
    },
    {
      path: '/seller-form',
      name: "seller-form",
      component: () => import ('../views/BecomeSeller/SellerRegister.vue')
    }
  ]
})
export default router
