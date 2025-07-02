import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from "@/middleware/auth.js"
import vendor from "./vendor.js";
import frontendRoutes from "@/router/frontend.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...vendor, ...frontendRoutes]
})

router.beforeEach(authMiddleware)
export default router
