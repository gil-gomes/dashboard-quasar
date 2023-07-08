import { defineStore } from 'pinia';
import { CommentInterface } from 'src/interfaces/ApiInterface';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    register(data: CommentInterface) {
      console.log(data);
    },
  },
});
