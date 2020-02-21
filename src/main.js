import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// Globally register all `_base`-prefixed components
import "@/components/global/_globals";

// load layout
import LayoutDefault from "./layouts/LayoutDefault.vue";
import LayoutManager from "./layouts/LayoutManager.vue";
Vue.component("LayoutManager", LayoutManager);
Vue.component("LayoutDefault", LayoutDefault);
// for development load the components manually so it does not break with the devtool open
//https://github.com/vuejs/vue-devtools/issues/944 - vue-devtools issue
import LayoutError from "./layouts/LayoutError.vue";
import LayoutMain from "./layouts/LayoutMain.vue";
Vue.component("LayoutError", LayoutError);
Vue.component("LayoutMain", LayoutMain);
// end layout

import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "@/configFirebase.js";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(firebase);
Vue.prototype.$firebase = firebase;

const system_config = require("@/constants/config.json");
Vue.prototype.$system_config = system_config;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
