import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useFavorite = defineStore('favorite', () => {
  const storedFavorite = localStorage.getItem('favorite');
  const favoriteItems = ref(storedFavorite ? JSON.parse(storedFavorite) : []);

  watch(favoriteItems, (newVal) => {
    localStorage.setItem('cart', JSON.stringify(newVal));
  }, { deep: true });

  const favCount = computed(() =>
    favoriteItems.value.reduce((total, item) => total + item.quantity, 0)
  );

function addToFavorite(product) {
  const existing = favoriteItems.value.find(item => {
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
    favoriteItems.value.push({
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
    favoriteItems.value = favoriteItems.value.filter(i =>
      i.id !== item.id ||
      (item.sku && i.sku !== item.sku) ||
      (item.variant && i.variant !== item.variant)
    );
  }

  function clearCart() {
    favoriteItems.value = [];
    localStorage.removeItem("cart");
  }

  const subtotal = computed(() =>
    favoriteItems.value.reduce((sum, item) => sum + item.total, 0)
  );

  const total = computed(() => subtotal.value);

  return {
    favoriteItems,
    addToFavorite,
    removeItem,
    increment,
    decrement,
    clearCart,
    favCount,
    subtotal,
    total,
  };
});
