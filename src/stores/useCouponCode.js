import { defineStore } from 'pinia'
import { ref } from 'vue'
import useAxios from '@/composables/useAxios'

export const useCouponCode = defineStore('couponCode', () => {
  const appliedCoupon = ref(null)
  const discountAmount = ref(0)
  const { sendRequest } = useAxios()

  async function applyCoupon(code, cartTotal) {
    try {
      const response = await sendRequest({
        method: 'POST',
        url: '/coupon',  
        data: {
          code: code.trim(),
          cart_total: cartTotal,
        },
      })

      if (response?.data?.discount_amount !== undefined) {
        appliedCoupon.value = code.trim()
        discountAmount.value = response.data.discount_amount
        return true
      } else {
        throw new Error('Invalid response from server')
      }
    } catch (error) {
      appliedCoupon.value = null
      discountAmount.value = 0
      throw error
    }
  }

  function clearCoupon() {
    appliedCoupon.value = null
    discountAmount.value = 0
  }

  return {
    appliedCoupon,
    discountAmount,
    applyCoupon,
    clearCoupon,
  }
})
