import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import { i18n } from '../src/utils/initI18n';

import '../src/assets/scss/main.scss';

setup(app => {
  app.use(createPinia()).use(i18n);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
