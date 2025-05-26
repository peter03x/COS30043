import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

// Create and configure app in one chain
createApp(App)
    .use(router)  // Register router plugin
    .mount('#app') // Mount the app