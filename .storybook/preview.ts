import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import { createI18nInstance } from '../src/utils/initI18n';
import '../src/assets/scss/main.scss';

let i18n;
createI18nInstance().then(response => {
  i18n = response;
});

setup(app => {
  app.use(createPinia()).use(i18n);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
