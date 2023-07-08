import { defineStore } from 'pinia';
import { UserInterface } from 'src/interfaces/ApiInterface';

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      data: {
        users: [],
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
    setData(data: UserInterface) {
      this.data = data;
    },
  },
});
