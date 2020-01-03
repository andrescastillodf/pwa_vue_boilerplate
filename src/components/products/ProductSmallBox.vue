<template>
  <div class="product-small-box">
    {{ product.title }}
    <br />
    <router-link :to="'/product/' + product.id">View More</router-link> |
  </div>
</template>

<script>
export default {
  name: "ProductSmallBox",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-small-box {
  padding: 15px;
  min-width: 200px;
}
</style>
