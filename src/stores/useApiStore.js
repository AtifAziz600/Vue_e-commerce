import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('apiStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProductsByCategory(slug) {
      try {
        const res = await axios.get(`https://admin.welkin.ctpbd.info/api/product?category=${slug}`);
        this.products = res.data;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  }
})
