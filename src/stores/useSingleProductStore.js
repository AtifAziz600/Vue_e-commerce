import { defineStore } from 'pinia';
import axios from 'axios';

export const useSingleProductStore = defineStore('singleProductStore', {
  state: () => ({
    product: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProductBySlug(slug) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`http://localhost:8000/api/public/product/${slug}`);
        this.product = response?.data;
      } catch (err) {
        // console.error("Failed to fetch single product", err);
        this.error = err;
      } finally {
        this.loading = false;
      }
    },

    clearProduct() {
      this.product = null;
    }
  },
});
