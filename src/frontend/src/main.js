import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import ApiService from "@/services/apiService";
import { TokenService, StorageIdentifier } from "@/services/tokenService";

const apiUrl = "http://localhost:5000";
Vue.config.productionTip = false;

ApiService.init(process.env.NUMEROUS_BACKEND_URL ? process.env.NUMEROUS_BACKEND_URL : apiUrl + "/api/");

if (TokenService.getToken(StorageIdentifier.tokenKey)) {
  ApiService.setHeader();
}

Vue.use(new VueSocketIO({ connection: SocketIO(apiUrl) }));

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
