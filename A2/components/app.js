import { createApp } from '../../framework/js/vue.global.js';
import router from '../router/router.js'; // Import the router configuration
import App from '../App.js';

// Create and mount the root Vue application
const app = createApp(App);
app.use(router); // Use the configured router
app.mount('#app');