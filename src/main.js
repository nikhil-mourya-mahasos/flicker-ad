import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css";
import 'material-icons/iconfont/material-icons.css';
import "@/styles/index.scss";

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
