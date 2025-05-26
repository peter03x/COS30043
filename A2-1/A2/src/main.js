import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "../ router/index.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';

const app = createApp(App)

app.use(router)

app.mount('#app')
