import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  const cartCount = computed(() =>
  cartItems.value.reduce((total, item) => total + item.quantity, 0)
);

  function addToCart(product) {
    const existing = cartItems.value.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
      existing.total = existing.price * existing.quantity;
    } else {
      cartItems.value.push({ ...product, quantity: 1, total: product.price });
    }
  }

  function increment(item) {
    item.quantity += 1;
    item.total = item.price * item.quantity;
  }

  function decrement(item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.total = item.price * item.quantity;
    }
  }
  

  function removeItem(item) {
    cartItems.value = cartItems.value.filter(i =>
      i.id !== item.id);
  }

  const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.total, 0));
  const total = computed(() => subtotal.value); 

  return {
    cartItems,
    addToCart,
    removeItem,
    increment,
    decrement,
    cartCount,
    subtotal,
    total,
  };
});
