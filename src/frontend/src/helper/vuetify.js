import Vue from "vue";
import VuetifyLib from "vuetify/lib";

Vue.use(VuetifyLib);

export const Vuetify = new VuetifyLib({
    theme: {
        themes: {
            light: {
                primary: "#6a1b9a",
                secondary: "#c158dc"
            },
        },
    },
});
