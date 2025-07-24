// import axios from 'axios'
import { defineStore } from 'pinia'
import useAxios from "@/composables/useAxios";
export const useApiProductStore = defineStore("productApiStore", {
  state: () => ({
    products: [],
    singleProduct: null,
    loading: false,
  }),
  actions: {
    
    async fetchProducts() {
      this.loading = true;
      try {
        // const response = await axios.get(`${import.meta.env.VITE_APP_URL}public/product`, { params });
        const { sendRequest } = useAxios();
        const response = await sendRequest({
          url: '/public/product',
          params: {},
          method:  'GET',
        });
        this.products = response?.data?.data;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
