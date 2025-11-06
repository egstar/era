import type { Metadata } from 'next'
import { Cairo, Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const cairoFont = Cairo({
  weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" , "1000" ]

})

export const metadata: Metadata = {
  title: 'Era Marine Services',
  description: 'Precision engineering and certified marine services.'
}

export default async function LocaleLayout ({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale} dir={locale == 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${cairoFont.className} antialiased`}
      >
        {' '}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
