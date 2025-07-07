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
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/order-history',
      name: 'order-history',
      component: () => import('../components/OrderHistory.vue'),
    },
    {
      path: '/become-seller',
      name: 'become-seller',
      component: () => import('../components/BecomeSeller.vue')
    },
    {
      path: '/cart-order',
      name: 'cart-order',
      component: () => import('../components/Cart.vue')
    },
    {
      path: '/new-release',
      name:'new-release',
      component: () => import('../components/NewRelease.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../components/Books.vue')
    },
    {
      path: "/computer",
      name: 'computer',
      component: () => import('../components/Computer.vue')
    },
    {
      path: "/health",
      name: 'health',
      component: () => import('../components/Heath.vue')
    },
    {
      path: '/fashion',
      name: 'fashion',
      component: () => import('../components/Fashion.vue')
    },
    {
      path: '/toysgame',
      name: "toysgames",
      component: () => import('../components/Toy&Games.vue')
    },
    {
      path: "/pharmacy",
      name: "pharmacy",
      component: () => import('../components/Pharmacy.vue')
    },
    {
      path: "/best-seller",
      name: "best-seller",
      component: () => import('../components/SellerBestItems.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../components/Favorite.vue')
    },
    {
      path: '/order-confirm',
      name: 'order-confirm',
      component: () => import('../components/OrderConfirmPage.vue')
    },
    {
      path: '/order-summary',
      name: 'order-summary',
      component: () => import('../components/OrderSummary.vue')
    },
    {
      path: "/all-products",
      name: "all-products",
      component: () => import('../components/AllProducts.vue')
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
    }
  ]
})
export default router
