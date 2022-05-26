import "uno.css";
import "vfonts/Lato.css";
import "vfonts/FiraCode.css";

import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";

import App from "./App.vue";

const app = createApp(App);

setupStore(app);
setupRouter(app);

app.mount("#app");
