<template>
<div>
  <p class="card-title">{{ product.title }}</p>
  <img class="card-image" ref="image" :src="product.image" alt="product" />
  <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>
  <div>
    <input type="number" min=0 v-model="amount" />
    <span>кг</span>
  </div>
  <button @click="addToCart">В корзину</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  props: {
    product: {
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      amount: 0,
    }
  },
  computed: {
    ...mapState({
      currency: (state) => state.cart.currency,
    })
  },
  methods: {
    ...mapMutations(['setCart']),
    addToCart() {
      this.amount &&
      this.setCart({
        id: this.product.id,
        amount: +this.amount,
        price: this.product.price,
        title: this.product.title,
      });
      this.amount = 0;
    }
  },
};
</script>
<style>
.card-image {
  width: 100%;
}
button {
  padding: 5px;
  margin: 5px;
}
</style>