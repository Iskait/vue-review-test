export const cart = {
  state: () => ({
    cart: [],
    currency: 'VGTB',
  }),
  mutations: {
    setCart: (state, payload) => {
      const product = state.cart.find(product => product.id === payload.id);
      if (product) {
        product.amount += payload.amount;
      } else {
        state.cart.push(payload);
      }
    }
  },
  getters: {
    reverseCart: (state) => {
      return [...state.cart].reverse();
    },
    cartPrice: (state) => {
      return state.cart.reduce((acc, val) => acc + (val.amount * val.price), 0).toFixed(2);
    }
  },
}