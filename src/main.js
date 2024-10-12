import './assets/main.css'

import { createApp } from 'vue'
import Toast, {POSITION} from "vue-toastification";
import App from './App.vue'
import "vue-toastification/dist/index.css";
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT
});
app.use(router);
app.mount('#app');


