import { createApp } from "vue";
import App from "./App.vue";
import DarkModeToggler from "./components/layout/darkmode/DarkModeToggler.vue";
import router from "./router/router.js";
import "tailwindcss/tailwind.css";

const app = createApp(App);

app.component("dark-mode-toggler", DarkModeToggler);
app.use(router);
app.mount("#app");
