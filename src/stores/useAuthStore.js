import useAxios from "@/composables/useAxios";
import axios from "axios";
// import { useAxios } from "@/composables/useAxios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);
  const isLoggedIn = computed(() => !!user.value);
  const { loading, error, sendRequest } = useAxios();
  const nav = ref({ isMobileMenu: false });

  async function fetchUser() {
    // const storedUser = JSON.parse(await getLocalStorage());

    // if (storedUser) {
    //   try {
    //     const { data } = await sendRequest({
    //       method: "get",
    //       url: `${import.meta.env.VITE_APP_URL}user`,
    //       headers: {
    //         Authorization: `Bearer ${storedUser?.token}`,
    //       },
    //     });

    //     if (data) {
    //       user.value = data;
    //       tokenStore.setAuthUser(data);
    //     } else {
    //       await clearLocalStorage();
    //     }
    //   } catch (err) {
    //     await clearLocalStorage();
    //   }
    // } else {
    //   await clearLocalStorage();
    // }
  }

  async function login(credential) {
    try {
      axios.get(`${import.meta.env.VITE_APP_URL}/sanctum/csrf-cookie`);
      
      const loginResponse = await sendRequest({
        method: "POST",
        url: '/customer/login',
        data: credential,
      });
      if (loginResponse?.data) {
        // console.log('auth data', loginResponse?.data)
        await setLocalStorage(loginResponse?.data);
        user.value = loginResponse.data;
        return loginResponse;
      }
    } catch (err) {
      throw err;
    }
  }
  async function logout() {
    try {
      // await sendRequest({
      //     url: "/api/logout",
      //     method: "GET"
      // });
      router.push("/");
      user.value = null;
      await clearLocalStorage();
    } catch (err) {
      console.error("Logout failed", error.value);
    }
  }

  async function setLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function clearLocalStorage() {
    localStorage.removeItem("user");
  }

  async function getLocalStorage() {
    return localStorage.getItem("user");
  }

  function getToken() {
    try {
      return JSON.parse(localStorage.getItem("user"))?.token || "";
    } catch (error) {
      return "";
    }
  }

  function toggleMobileMenu() {
    nav.value.isMobileMenu = !nav.value.isMobileMenu;
  }

  async function register(credentials) {
    try {
      const response = await sendRequest({
        method: "POST",
        url: "/customer/register",
        data: credentials,
      });

      if (response) {
        user.value = response.data;
        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
      }
    } catch (err) {
      throw err;
    }
  }

  async function resendOtp(phone) {
    try {
      await sendRequest({
        method: "POST",
        url: "/resend-otp",
        data: { phone },
      });
      return true;
    } catch (err) {
      throw err;
    }
  }
 
 
  return {
    user,
    login,
    register,
    isLoggedIn,
    fetchUser,
    logout,
    loading,
    error,
    getToken,
    // verifyOtp,
    resendOtp,

  };
});