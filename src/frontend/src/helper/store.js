import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: false,
        user: {
            token: "",
            username: "",
            isGuest: false
        }
    },
    mutations: {
    },
    actions: {
    }
});