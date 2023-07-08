import { defineStore } from 'pinia';
import { CommentInterface } from 'src/interfaces/ApiInterface';

export const useCommentsStore = defineStore('comments', {
  state: () => {
    return {
      data: {
        comments: [],
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
    setData(data: CommentInterface) {
      this.data = data;
    },
  },
});
