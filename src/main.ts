import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/base/tailwind.css";
import "./assets/scss/main.scss";
import { projectAuth } from "@/configs/firebase";

import { registerGlobalComponents } from "@/untils/import";

let app: any;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponents(app);

    app.use(router);

    app.mount("#app");
  }
});
