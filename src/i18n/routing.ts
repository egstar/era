import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  localePrefix: 'as-needed',
  defaultLocale: 'en',
  localeCookie: {
    name: 'erams_prod_cookie',
    maxAge: 60 * 60 * 2,
    sameSite: 'lax',
    secure: true,
    domain: '.eramsco.com',
  }

});