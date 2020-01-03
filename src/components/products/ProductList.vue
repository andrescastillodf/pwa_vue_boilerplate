<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id">
      <product-small-box :product="product" />
    </div>
  </div>
</template>

<script>
import ProductSmallBox from "@/components/products/ProductSmallBox";

export default {
  name: "ProductList",
  components: {
    ProductSmallBox
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
}
</style>
