<template>
  <div class="product-list">
    <div
      class="card"
      v-for="product in products"
      :key="product.id"
      :style="{ width: cardsWidth + '%' }"
    >
      <Product :product="product" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Product from "./Product.vue";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > 840) {
        count = 3;
      } else if (width > 420 && width < 840) {
        count = 2;
      }
      return 100 / count;
    },
  },
  methods: {
    ...mapActions(["getProductsList"]),
  },
  created() {
    this.getProductsList();
  },
  updated() {
    this.getProductsList();
  },
};
</script>

<style>
.product-list {
  padding: 10px;
}
.card {
  display: inline-block;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
</style>
