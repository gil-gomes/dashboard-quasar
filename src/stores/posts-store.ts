import { defineStore } from 'pinia';
import { PostInterface } from 'src/interfaces/ApiInterface';

export const usePotsStore = defineStore('posts', {
  state: () => {
    return {
      data: {
        posts: [],
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
    setData(data: PostInterface) {
      this.data = data;
    },
  },
});
