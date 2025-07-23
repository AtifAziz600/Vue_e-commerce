import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    customerName: "",
    orderItems: [],
    paymentMethod: "",
    shippingMethod: "",
    promoCode: "",
    subtotal: "",
    shipping: "",
    total: "",
  }),
  actions: {
    setOrder(order) {
      this.customerName = order.customerName;
      this.orderItems = order.orderItems;
      this.paymentMethod = order.paymentMethod;
      this.shippingMethod = order.shippingMethod;
      this.promoCode = order.promoCode;
      this.subtotal = order.subtotal;
      this.shipping = order.shipping;
      this.total = order.total;
    },
  },
});
