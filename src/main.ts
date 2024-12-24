import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/scss/main.scss';
import router from './router';
import { i18n } from '@/utils/initI18n';

const app = createApp(App);

app.use(createPinia()).use(router).use(i18n);

app.mount('#app');
