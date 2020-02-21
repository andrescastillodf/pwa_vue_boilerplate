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
  async created() {
    let activeLayout =
      this.name != "" ? this.name : this.$system_config.layoutDefault;
    // Check if the layout component
    // has already been registered.

    if (!Vue.options.components[activeLayout]) {
      // eslint-disable-next-line no-unused-vars
      Vue.component(activeLayout, function(resolve) {
        require([`../layouts/${activeLayout}.vue`], resolve);
      });
    }
    // eslint-disable-next-line no-console
    console.log({ ...Vue.options.components });
    this.$parent.$emit("update:layout", activeLayout);
  },
  render() {
    return this.$slots.default[0];
  }
};
</script>
