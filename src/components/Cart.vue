<template>
  <div class="cart-list" v-if="listForRender.length">
    <p class="cart-title">В корзине:</p>
    <ul class="cart-product">
      <li v-for="item in listForRender" :key="item.id">
        <strong>{{ item.title }}</strong> по цене
        <strong>{{ item.price }}</strong> в количестве
        <strong>{{ item.amount }}</strong> штук.
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      listForRender: "reverseCart",
    }),
  },
};
</script>

<style scoped>
.cart-list {
  margin-left: 10px;
  font-size: 20px;
}
.cart-title {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
}
.cart-product {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
