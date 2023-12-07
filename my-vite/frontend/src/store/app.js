// Utilities
import { defineStore } from 'pinia'
import productRepository from '@/repositories/product_repository.js'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    products: [],
  }),
  getters: {
    productsById: (state) => {
      return (productId) => {state.products.filter((p) => p.uuid === productId)}
    },
  },
  actions: {
    increment() {
      this.count++
    },
    getProducts() {
      productRepository.getProducts((products) => this.products = products)
    },
  },
})
