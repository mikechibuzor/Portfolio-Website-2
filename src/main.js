import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";

import DarkModeToggler from "./components/layout/darkmode/DarkModeToggler.vue";
import "tailwindcss/tailwind.css";

const app = createApp(App);

app.component("dark-mode-toggler", DarkModeToggler);
app.use(router);
app.use(store);
app.mount("#app");
