import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./style.css";
import router from "./router";

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
  }
}

const app = createApp(App);

// app.use(createPinia());
// app.use(router);

app.mount("#app");
