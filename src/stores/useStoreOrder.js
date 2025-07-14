import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const customerName = ref('')
  const orderId = ref([]);
  const orderItems = ref([])
  const paymentMethod = ref('')
  const shippingMethod = ref('')
  const promoCode = ref('')
  const couponCode = ref('')
  const shipping = ref(0)
  const subtotal = ref(0)
  const total = ref(0)

  function setOrder(order) {
    customerName.value = order.customerName
    orderId.value = order.orderId
    orderItems.value = order.orderItems
    paymentMethod.value = order.paymentMethod
    shippingMethod.value = order.shippingMethod
    promoCode.value = order.promoCode
    couponCode.value = order.couponCode
    shipping.value = order.shipping
    subtotal.value = order.subtotal
    total.value = order.total
  }

  return {
    customerName,
    orderId,
    orderItems,
    paymentMethod,
    shippingMethod,
    promoCode,
    shipping,
    subtotal,
    total,
    setOrder
  }
})
