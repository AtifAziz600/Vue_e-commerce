// src/composables/useAxios.js
import {ref} from 'vue';
import axios from 'axios';
import { useToast } from "vue-toastification";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  xsrfHeaderName: "X-XSRF-TOKEN", 
});

export default function useAxios() {
  const loading = ref(false);
  const error = ref(null);

  const sendRequest = async (config, globalLoading = loading) => {
    const toast = useToast();
    globalLoading.value = true;
    try {
      return await axiosInstance(config);
    } catch (err) {
      error.value = err.response?.data;
      toast.info(err.response?.data?.message)
    } finally {
      globalLoading.value = false;
    }
  };


  return {
    loading,
    error,
    sendRequest,
  };
}
