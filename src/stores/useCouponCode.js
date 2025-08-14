import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCouponCode = defineStore('couponCode', () => {
  const appliedCoupon = ref(null)

  const discountAmount = computed(() => {
    if (!appliedCoupon.value) return 0
    if (appliedCoupon.value === 'SAVE10') return 0.1 
    if (appliedCoupon.value === 'WELCOME') return 5   
    if (appliedCoupon.value === 'FREESHIP') return 0  
    return 0
  })

  const applyCoupon = (code) => {
    appliedCoupon.value = code
  }

  const clearCoupon = () => {
    appliedCoupon.value = null
  }

  return {
    appliedCoupon,
    discountAmount,
    applyCoupon,
    clearCoupon
  }
})