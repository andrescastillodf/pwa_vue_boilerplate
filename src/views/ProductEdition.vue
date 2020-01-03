<template>
  <layout name="LayoutDefault">
    <v-container grid-list-xs>
      <v-layout>
        <v-flex>
          <div id="spinner_container">
            <v-progress-circular
              v-if="loading"
              v-bind:size="40"
              indeterminate
              color="pink"
              class="spinner"
            >
            </v-progress-circular>
          </div>
          <img :src="image" />
          <v-container fluid style="min-height: 0" grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="title"
                  name="title"
                  label="Title"
                  id="title"
                />
                <v-text-field
                  v-model="image"
                  name="image"
                  label="Image"
                  id="image"
                />
                <v-text-field
                  v-model="description"
                  name="Description"
                  label="Description"
                  id="Description"
                />
                <v-text-field
                  v-model="author"
                  name="author"
                  label="Author"
                  hint="your name"
                  id="author"
                />
                <v-btn block color="primary" @click="createProduct()">
                  Add product
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </layout>
</template>

<script>
import postProduct from "@/api/postProduct.js";
export default {
  name: "ProductEdition",
  data() {
    return {
      description: "",
      image: "",
      title: "",
      author: "",
      loading: false
    };
  },
  methods: {
    createProduct() {
      this.loading = true;
      postProduct(this.title, this.image, this.description, this.author).then(
        res => {
          // eslint-disable-next-line no-console
          if (res.id) {
            this.$router.push("product/" + res.id);
          } else {
            alert("show error creating product");
          }
          // eslint-disable-next-line no-console
          console.log(res);
          this.loading = false;
        }
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  width: auto\9;
  /* ie8 */
}
#spinner_container {
  text-align: center;
}
.spinner {
  margin: auto;
  margin: 4rem;
}
</style>
