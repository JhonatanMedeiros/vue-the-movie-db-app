import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
