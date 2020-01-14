import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import ApiService from "@/services/apiService";
import { TokenService, StorageIdentifier } from "@/services/tokenService";

Vue.config.productionTip = false;

ApiService.init(process.env.NUMEROUS_BACKEND_URL ? process.env.NUMEROUS_BACKEND_URL : "http://localhost:5000/api/");

if (TokenService.getToken(StorageIdentifier.tokenKey)) {
  ApiService.setHeader();
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
