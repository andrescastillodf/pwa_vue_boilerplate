import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// load layout
import LayoutDefault from "./layouts/LayoutDefault.vue";
import LayoutManager from "./layouts/LayoutManager.vue";
import LayoutError from "./layouts/LayoutError.vue";
import LayoutMain from "./layouts/LayoutMain.vue";
Vue.component("LayoutManager", LayoutManager);
Vue.component("LayoutDefault", LayoutDefault);
Vue.component("LayoutError", LayoutError);
Vue.component("LayoutMain", LayoutMain);
// end layout

import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "@/configFirebase.js";
const system_config = require("@/constants/config.json");

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(firebase);
Vue.prototype.$firebase = firebase;
Vue.prototype.$system_config = system_config;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
