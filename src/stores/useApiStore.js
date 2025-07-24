import { defineStore } from 'pinia'
// import axios from 'axios'
import { useAxios } from "@/composables/useAxios";
export const useApiStore = defineStore('apiStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProductsByCategory(slug) {
      try {
        const { sendRequest } = useAxios()
        // const res = await axios.get(`${import.meta.env.VITE_APP_URL}product?category=${slug}`);
        const res = await sendRequest({
          url: `product?category=${slug}`,
          method: 'GET',
        })
        this.products = res.data;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  }
})
