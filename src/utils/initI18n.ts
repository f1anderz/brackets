import { createI18n } from 'vue-i18n';

const locales = ['en', 'uk'];

const currentLocale = getCurrentLocale();
const messages = await getMessages();

export const i18n = createI18n({
  legacy: false,
  locale: currentLocale,
  fallbackLocale: 'en',
  messages,
});

function getCurrentLocale() {
  return 'en';
}

async function getMessages() {
  const messages = {};
  for (const locale of locales) {
    const response = await fetch(`../../../translations/${locale}.json`);
    messages[locale] = await response.json();
  }
  return messages;
}
