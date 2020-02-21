<template>
  <LayoutManager :name="$system_config.viewSettings.Home.layout">
    <div class="Home">
      <h1>Home</h1>
      I use {{ $system_config.viewSettings.Home.layout }}
      <!-- <product-list :products="products" /> -->
    </div>
  </LayoutManager>
</template>

<script>
// import ProductList from "@/components/products/ProductList";

export default {
  name: "Home",
  // components: {
  //   ProductList
  // },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    /*this.$firebase.db
      .collection("products")
      .orderBy("createdAt")
      .onSnapshot(snapShot => {
        this.products = [];
        snapShot.forEach(product => {
          this.products.push({
            id: product.id,
            createdAt: product.data().createdAt,
            description: product.data().description,
            image: product.data().image,
            title: product.data().title
          });
        });
      });
    */
  }
};
</script>
