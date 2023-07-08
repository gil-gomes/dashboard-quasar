import { defineStore } from 'pinia';
import { ProductInterface } from 'src/interfaces/ApiInterface';

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      data: {
        products: [],
        limit: 0,
        skip: 0,
        total: 0,
      },
    };
  },

  getters: {
    getData: (state) => state.data,
  },

  actions: {
    setData(data: ProductInterface) {
      this.data = data;
    },
  },
});
