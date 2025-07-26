import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const storedCart = localStorage.getItem('cart');
  const cartItems = ref(storedCart ? JSON.parse(storedCart) : []);

  watch(cartItems, (newVal) => {
    localStorage.setItem('cart', JSON.stringify(newVal));
  }, { deep: true });

  const cartCount = computed(() =>
    cartItems.value.reduce((total, item) => total + item.quantity, 0)
  );

function addToCart(product) {
  const existing = cartItems.value.find(item => {
    return (
      item.id === product.id &&
      item.sku === product.sku &&
      item.variant === product.variant
    );
  });

  if (existing) {
    existing.quantity += product.quantity || 1;
    existing.total = existing.price * existing.quantity;
  } else {
    console.log(product);
    cartItems.value.push({
      ...product,
      quantity: product.quantity || 1,
      total: product.price * (product.quantity || 1),
    });
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
      i.id !== item.id ||
      (item.sku && i.sku !== item.sku) ||
      (item.variant && i.variant !== item.variant)
    );
  }

  function clearCart() {
    cartItems.value = [];
    localStorage.removeItem("cart");
  }

  const subtotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.total, 0)
  );

  const total = computed(() => subtotal.value);

  return {
    cartItems,
    addToCart,
    removeItem,
    increment,
    decrement,
    clearCart,
    cartCount,
    subtotal,
    total,
  };
});
