// const routes = [
//     {
//         path: '/dashboard',
//         name: 'Home',
//         meta:{
//             layout:'vendor'
//         },
//         component: () => import('@/views/vendor/Dashboard.vue')
//     },
//     {
//         path: '/login',
//         name: 'Login',
//         component: () => import('@/views/vendor/Auth/Login.vue')
//     },
//     {
//         path: '/dashboard',
//         name: 'Dashboard',
//         meta: {
//             can: ['dashboard.show'],
//             layout:'vendor'
//         },
//         component: () => import('@/views/vendor/Dashboard/Index.vue')
//     },
//     // crud page routes
//     {
//         path: '/roles',
//         name: 'Roles',
//         meta: {
//             can: ['authorization.index']
//         },
//         component: () => import('@/views/vendor/Role/Index.vue')
//     },
//     {
//         path: '/add-role',
//         name: 'AddRoles',
//         meta: {
//             can: ['authorization.create']
//         },
//         component: () => import('@/views/vendor/Role/Add.vue')
//     },
//     {
//         path: '/edit-role/:id',
//         name: 'EditRoles',
//         meta: {
//             can: ['authorization.edit']
//         },
//         component: () => import('@/views/vendor/Role/Edit.vue')
//     },
//     // user pages routes
//     {
//         path: '/users',
//         name: 'Users',
//         meta: {
//             can: ['user.index']
//         },
//         component: () => import('@/views/vendor/User/Index.vue')
//     },
//     {
//         path: '/add-user',
//         name: 'AddUser',
//         meta: {
//             can: ['user.create']
//         },
//         component: () => import('@/views/vendor/User/Add.vue')
//     },
//     {
//         path: '/edit-user/:id',
//         name: 'EditUser',
//         meta: {
//             can: ['user.create']
//         },
//         component: () => import('@/views/vendor/User/Edit.vue')
//     },
//     // vendor management
//     {
//         path: '/vendor',
//         name: 'Vendor',
//         component: () => import('@/views/vendor/Vendor/Index.vue')
//     },
//     {
//         path: '/add-vendor',
//         name: 'AddVendor',
//         component: () => import('@/views/vendor/Vendor/Add.vue')
//     },
//     {
//         path: '/vendor/:id',
//         name: 'EditVendor',
//         component: () => import('@/views/vendor/Vendor/Edit.vue')
//     },
//     // category management
//     {
//         path: '/category',
//         name: 'Category',
//         component: () => import('@/views/vendor/Category/Index.vue')
//     },
//     {
//         path: '/add-category',
//         name: 'AddCategory',
//         component: () => import('@/views/vendor/Category/Add.vue')
//     },
//     {
//         path: '/category/:id',
//         name: 'EditCategory',
//         component: () => import('@/views/vendor/Category/Edit.vue')
//     },
//     // product management
//     {
//         path: '/products',
//         name: 'Products',
//         meta:{
//             layout:'vendor'
//         },
//         component: () => import('@/views/vendor/Product/Index.vue')
//     },
//     {
//         path: '/add-product',
//         name: 'AddProduct',
//         meta:{
//             layout:'vendor'
//         },
//         component: () => import('@/views/vendor/Product/Add.vue')
//     },
//     {
//         path: '/product/:id',
//         name: 'EditProduct',
//         meta:{
//             layout:'vendor'
//         },
//         component: () => import('@/views/vendor/Product/Edit.vue')
//     },
//     // manage settings
//     {
//         path: '/settings',
//         name: 'Settings',
//         component: () => import('@/views/vendor/Setting/ProfileSetting.vue')
//     },
//     {
//         path: '/profile-setting',
//         name: 'ProfileSetting',
//         component: () => import('@/views/vendor/Setting/ProfileSetting.vue')
//     },
//     // {
//     //     path: '/page-note-found',
//     //     name: 'NotFound',
//     //     component: () => import('@/views/customer/Profile.vue')
//     // }
// ]


// export default routes;

