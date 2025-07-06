import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const customerName = ref('')
  const orderItems = ref([])
  const paymentMethod = ref('')
  const shippingMethod = ref('')
  const promoCode = ref('')
  const shipping = ref(0)
  const subtotal = ref(0)

  function setOrder(order) {
    customerName.value = order.customerName
    orderItems.value = order.orderItems
    paymentMethod.value = order.paymentMethod
    shippingMethod.value = order.shippingMethod
    promoCode.value = order.promoCode
    shipping.value = order.shipping
    subtotal.value = order.subtotal
  }

  return {
    customerName,
    orderItems,
    paymentMethod,
    shippingMethod,
    promoCode,
    shipping,
    subtotal,
    setOrder
  }
})
