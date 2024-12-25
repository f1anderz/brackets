import { createI18n } from 'vue-i18n';

const locales: string[] = ['en', 'uk'] as const;

type Locale = (typeof locales)[number];

type Messages = Record<Locale, Record<string, string>>;

function getCurrentLocale(): Locale {
  return 'en';
}

async function getMessages(): Promise<Messages> {
  const messages: Partial<Messages> = {};
  for (const locale of locales) {
    const response = await fetch(`../../../translations/${locale}.json`);
    messages[locale] = await response.json();
  }
  return messages as Messages;
}

export async function createI18nInstance() {
  const currentLocale = getCurrentLocale();
  const messages = await getMessages();

  return createI18n({
    legacy: false,
    locale: currentLocale,
    fallbackLocale: 'en',
    messages,
  });
}
