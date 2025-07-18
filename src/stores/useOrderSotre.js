import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreOrder = defineStore('order', () => {
  const orderItems = ref([]);
  const orderId = ref([]);
  const shippingCost = ref(0);
  const discount = ref(0);
  const subtotal = ref(0);
  const total = ref(0);
  const couponCode = ref('');
  const shippingMethod = ref('');
  const paymentMethod = ref('');

  function setOrder({
    oid,
    items,
    shipping,
    discountAmount,
    subtotalValue,
    totalValue,
    coupon,
    shippingOption,
    payment
  }) {
    orderId.value = oid
    orderItems.value = items
    shippingCost.value = shipping
    discount.value = discountAmount
    subtotal.value = subtotalValue
    total.value = totalValue
    couponCode.value = coupon
    shippingMethod.value = shippingOption
    paymentMethod.value = payment
  }

  return {
    orderId,
    orderItems,
    shippingCost,
    discount,
    subtotal,
    total,
    couponCode,
    shippingMethod,
    paymentMethod,
    setOrder
  }
})
