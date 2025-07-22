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
    setOrder(data) {
      this.customerName = data.customerName;
      this.orderItems = data.orderItems;
      this.paymentMethod = data.paymentMethod;
      this.shippingMethod = data.shippingMethod;
      this.promoCode = data.promoCode;
      this.subtotal = data.subtotal;
      this.shipping = data.shipping;
      this.total = data.total;
    },
  },
});
