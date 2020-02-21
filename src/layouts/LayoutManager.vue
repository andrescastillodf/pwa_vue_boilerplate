<script>
import Vue from "vue";

export default {
  name: "LayoutManager",
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    }
  },
  created() {
    let activeLayout =
      this.name != "" ? this.name : this.$system_config.layoutDefault;
    // eslint-disable-next-line no-console
    // console.log(this.$system_config);
    // Check if the layout component
    // has already been registered.

    if (!Vue.options.components[activeLayout]) {
      // eslint-disable-next-line no-console
      console.log("entro en cargar layout");
      Vue.component(activeLayout, () => {
        // eslint-disable-next-line no-console
        console.log(activeLayout);
        import(`@/layouts/${activeLayout}.vue`).then(e => {
          // eslint-disable-next-line no-console
          console.log("loaded layout", e);
          this.$parent.$emit("update:layout", e);
          return e;
        });
      });
    }

    this.$parent.$emit("update:layout", activeLayout);
  },
  render() {
    return this.$slots.default[0];
  }
};
</script>
