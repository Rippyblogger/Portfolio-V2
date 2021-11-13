import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "particles.vue3";

const app = createApp(App);
app.use(router);
app.use(AOS.init());
app.use(Particles);
app.mount("#app");
