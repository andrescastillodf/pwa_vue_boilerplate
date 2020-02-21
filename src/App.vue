<template>
  <v-app>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: this.$system_config.layoutDefault
    };
  },
  watch: {
    layout() {
      // eslint-disable-next-line no-console
      console.log("layout watcher changed ", this.layout);
    }
  }
};
</script>
