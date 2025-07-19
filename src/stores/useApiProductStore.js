import axios from 'axios'
import { defineStore } from 'pinia'

export const useApiProductStore = defineStore("productApiStore", {
  state: () => ({
    products: [],
    loading: false,
  }),
  actions: {
    async fetchProducts(params = {}) {
      this.loading = true;
      try {
        const response = await axios.get("http://localhost:8000/api/public/product", { params });
        console.log(response.data.data)
        this.products = response?.data?.data;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
