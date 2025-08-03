import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useWishlistStore = defineStore("wishlist", {
  state: () => {
    const storedWishlist = localStorage.getItem("wishlist");
    return {
      wishlist: storedWishlist ? JSON.parse(storedWishlist) : [],
    };
  },

  actions: {
    addToWishlist(product) {
      this.initWishlist();

      const exists = this.wishlist.some((item) => item.id === product.id);
      if (!exists) {
        this.wishlist.push(product);
        this.setInLocalStorage();
        toast.success("Added to Wishlist...", { autoClose: 500 });
      } else {
        toast.info("Already in Wishlist...", { autoClose: 500 });
      }
    },
    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter((item) => item.id !== id);
      this.setInLocalStorage();
      toast.success("Removed from Wishlist...", { autoClose: 500 });
    },
    clearWishlist() {
      this.wishlist = [];
      localStorage.removeItem("wishlist");
      toast.info("Wishlist Cleared...", { autoClose: 500 });
    },
    setInLocalStorage() {
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    },
    initWishlist() {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        this.wishlist = JSON.parse(storedWishlist);
      }
    },
  },

  getters: {
    getWishlistLength: (state) => state.wishlist.length,
    getWishlistItems: (state) => state.wishlist,
  },
});