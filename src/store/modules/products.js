import api from "@/../api/products.js";
export const products = {
  state: () => ({
    products: [],
  }),
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
  },
  actions: {
    async getProductsList({ commit }) {
      const data = await api.getProductsList();
      commit("setProducts", data);
    },
  },
};
