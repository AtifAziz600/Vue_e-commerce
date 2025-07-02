const frontendRoutes = [
    {
        path: '/',
        name: 'home',
        component:()=>import("@/views/Index.vue")
    },
    {
        path: '/product',
        name: 'Product',
        component:()=>import("@/views/Product.vue")
    },
    {
        path: '/single-product/:id',
        name: 'SingleProduct',
        component:()=>import("@/views/SingleProduct.vue")
    },
    {
        path: '/add-cart',
        name: 'AddToCart',
        component:()=>import("@/views/AddToCart.vue")
    },
    {
        path: '/checkout',
        name: 'checkout',
        component:()=>import("@/views/CheckOut.vue")
    },
    // {
    //     path: '/payment',
    //     name: 'payment',
    //     component:()=>import("@/views/customer/Payment.vue")
    // },
    {
        path: '/login',
        name: 'login',
        component:()=>import("@/views/Login.vue")
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component:()=>import("@/views/ForgotPassword.vue")
    },
    {
        path: '/new-given-password',
        name: 'newGivenPassword',
        component: ()=>import("@/views/NewPassword.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component:()=>import("@/views/Register.vue")
    },
    {
        path: '/page/:slug',
        name: 'Page',
        component:()=>import("@/views/Singlepage.vue")
    },
    // {
    //     path: '/customer',
    //     name: 'customer',
    //     children: [
    //         {
    //             path: '/dashboard',
    //             name: "dashboard",
    //             component: () => import("@/views/customer/Dashboard.vue"),
    //         },
    //         {
    //             path: '/customer/address',
    //             name: 'customer.address',
    //             component: () => import('@/views/customer/Address.vue')
    //         },
    //         {
    //             path: '/customer/add-address',
    //             name: 'customer.addAddress',
    //             component: () => import('@/views/customer/AddAddress.vue')
    //         },
    //         {
    //             path: '/customer/order-complate',
    //             name: 'ordercomplate',
    //             component: () => import('@/views/customer/OrderComplete.vue')
    //         },
    //         {
    //             path: '/customer/order',
    //             name: 'AllOrder',
    //             component: () => import('@/views/customer/Order.vue')
    //         },
    //         {
    //             path: '/customer/order/:id',
    //             name: 'OrderInvoice',
    //             component: () => import('@/views/Invoice.vue')
    //         },
    //         // {
    //         //     // path: '/customer/profile',
    //         //     // name: 'Profile',
    //         //     // component: () => import('@/views/customer/Profile.vue')
    //         // }
    //     ]
    // }
]

export default frontendRoutes;
