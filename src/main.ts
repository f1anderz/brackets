import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/scss/main.scss';
import router from './router';
import { createI18nInstance } from '@/utils/initI18n.ts';

const app = createApp(App);
const i18n = await createI18nInstance();

app.use(createPinia()).use(router).use(i18n);
app.mount('#app');
