import { defineStore } from 'pinia'

export const useSingleProductStore  = defineStore('products', {
  state: () => ({
    allProducts: []
  }),
  actions: {
    setProducts(products) {
      this.allProducts = products
    },
    getProductBySlug(slug) {
      return this.allProducts
        .flatMap(section => section.products)
        .find(p => p.tag === slug)
    }
  }
})
