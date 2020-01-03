<template>
  <layout name="LayoutDefault">
    <v-container grid-list-xs>
      <v-layout column v-if="!!product">
        <v-flex>
          <v-img :src="product.image"></v-img>
        </v-flex>
        <v-flex>
          <h1>{{ product.title }}</h1>
          <p class="subtitle">{{ product.description }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </layout>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    productProp: {
      type: Object
    }
  },
  data() {
    return {
      product: undefined
    };
  },
  mounted() {
    if (this.productProp) {
      this.product = this.productProp;
    } else {
      const id = this.$route.params.id;
      this.$firebase.db
        .doc(`products/${id}`)
        .get()
        .then(product => {
          if (product.exists) {
            this.product = product.data();
          } else {
            // doc.data() will be undefined in this case
            // eslint-disable-next-line no-console
            console.log("No such document!");
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>
