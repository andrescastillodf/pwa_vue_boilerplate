import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Layout from "./layouts/Layout.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "@/configFirebase.js";

Vue.config.productionTip = false;
Vue.component("layout", Layout);
Vue.use(VueAxios, axios);
Vue.use(firebase);
Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
