import { defineStore } from 'pinia';
// import axios from 'axios';
import useAxios from "@/composables/useAxios";

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
        const { sendRequest } = useAxios();
        // const response = await axios.get(`${import.meta.env.VITE_APP_URL}public/product/${slug}`);
        const response = await sendRequest({
          url: `public/product/${slug}`,
          method: 'GET',
        })
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
