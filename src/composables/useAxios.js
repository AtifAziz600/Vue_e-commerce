// src/composables/useAxios.js
import {ref} from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  xsrfHeaderName: "X-XSRF-TOKEN", 
});

export default function useAxios() {
  const loading = ref(false);
  const error = ref(null);

  const sendRequest = async (config, globalLoading = loading) => {
    globalLoading.value = true;
    try {
      return await axiosInstance(config);
    } catch (err) {
      error.value = err;
    } finally {
      globalLoading.value = false;
    }
  };

  // Example of using onMounted to perform an action when the component is mounted
  // onMounted(() => {
  //   console.log('Component is mounted');
  // });

  return {
    loading,
    error,
    sendRequest,
  };
}
