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
      path: '/order-cancel',
      name: 'order-cancel',
      component: () => import('../views/Order/OrderCancel.vue')
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
      path: '/category/:slug',
      name: "category",
      component: () => import('../views/Category/Category.vue')
    },
    {
      path: '/order-tracking/:id',
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
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import('../views/Order/Checkout.vue')
    },
    {
      path: "/customer/profile",
      name: "customer-profile",
      component: () => import('../views/Customer/Profile.vue')
    },
  ]
})
export default router
