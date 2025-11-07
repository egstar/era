'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

// Fonts
import { Inter, Cairo } from 'next/font/google';
import { MdDeveloperMode } from 'react-icons/md';
import { CgCodeSlash } from 'react-icons/cg';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Partners from '@/components/Partners';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo', display: 'swap' });

export default function CreativeEraMarinePage() {
  const t = useTranslations();
  const pathname = usePathname();
  const switchTo = pathname.startsWith('/ar') ? '/en' : '/ar';

  const services = ['fabrication', 'subsea', 'engine', 'mechanics', 'electrical', 'hvac'];
  const projects = ['project1', 'project2', 'project3'];

  // Parallax / subtle hero transform
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 400], [0, 90]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.6, 0.25]);

  return (
    <main
      className={`${inter.variable} ${cairo.variable} font-sans text-slate-900 antialiased`}
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {/* Header (gradient) */}
      <header className="fixed w-full z-50">
        <div className="backdrop-blur-lg bg-linear-to-br from-white/80 via-gray-100/70 to-gray-50/60 border-b border-white/10 drop-shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/assets/logo.png" alt="Era Marine" width={70} height={70} priority />
                <div>
                  <div className="text-lg font-extrabold text-blue-900">Era Marine</div>
                  <div className="text-xs text-slate-700/80 -mt-0.5">Precision Marine Services</div>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600/95">
              <a href="#about" className="hover:text-slate-900 transition">
                {t('nav.about')}
              </a>
              <a href="#services" className="hover:text-slate-900 transition">
                {t('nav.services')}
              </a>
              <a href="#projects" className="hover:text-slate-900 transition">
                {t('nav.projects')}
              </a>
              <a href="#partners" className="hover:text-slate-900 transition">
                {t('nav.partners')}
              </a>
              <a href="#contact" className="hover:text-slate-900 transition">
                {t('nav.contact')}
              </a>

             <LanguageSwitcher />
            </nav>

            {/* Mobile actions */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        style={{ y: yHero }}
        className="relative min-h-screen md:min-h-[200vh] lg:min-h-[89vh]  flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center brightness-[0.55] contrast-[1.08]"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-linear-to-br from-[#012E40]/85 via-[#014D6C]/55 to-[#00CFFF]/30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-center lg:text-left">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
                {t('hero.title')}
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl">
                {t('hero.subtitle')}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#012E40] font-semibold shadow hover:scale-105 transform transition"
                >
                  {t('hero.cta.primary')}
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                >
                  {t('hero.cta.secondary')}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-white/90">
                <div className="text-sm">
                  <div className="font-semibold">{t('hero_stat1.value')}</div>
                  <div className="text-xs">{t('hero_stat1.label')}</div>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div className="text-sm">
                  <div className="font-semibold">{t('hero_stat2.value')}</div>
                  <div className="text-xs">{t('hero_stat2.label')}</div>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div className="text-sm">
                  <div className="font-semibold">{t('hero_stat3.value')}</div>
                  <div className="text-xs">{t('hero_stat3.label')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right: logo + card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl bg-white/6 backdrop-blur-md p-6 shadow-2xl border border-white/10">
                  <Image
                    src="/assets/logo_w.png"
                    alt="Era Marine logo"
                    width={260}
                    height={260}
                    className="mx-auto rounded-md"
                    priority
                  />
                  <p className="mt-6 text-sm text-sky-100/90 text-center">{t('hero.cardText')}</p>
                </div>

                {/* Floating info card (centered under logo, responsive) */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 left-1/2 -translate-x-1/2 bg-white text-[#012E40] rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200 w-[90%] sm:w-[78%] md:w-[64%] lg:w-[56%] text-center backdrop-blur-sm"
                >
                  <h3 className="text-sm sm:text-base font-semibold mb-1">{t('hero.quickTitle')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t('hero.quickDetail')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            className="relative block w-[calc(200%+1.3px)] h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44C201.38 82.11 100.27 89.12 0 60V120H1200V0C1040.9 39.68 884.46 91.56 721.39 81.44 600.33 74.34 481.39 29.09 321.39 56.44Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-white text-[#012E40] mt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#014D6C]">{t('about.title')}</h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{t('about.lead')}</p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li className="flex items-start gap-3"><span className="text-sky-700 font-semibold">•</span> {t('about.point1')}</li>
              <li className="flex items-start gap-3"><span className="text-sky-700 font-semibold">•</span> {t('about.point2')}</li>
              <li className="flex items-start gap-3"><span className="text-sky-700 font-semibold">•</span> {t('about.point3')}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-full w-full">
              <Image src="/assets/about.jpg" alt="About us" width={900} height={600} className="object-cover w-full h-64 md:h-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#014D6C] mb-8">{t('services.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <div className="text-sky-700 font-semibold uppercase">{key[0]}</div>
                </div>
                <h4 className="text-lg font-semibold text-[#014D6C] mb-2">{t(`sections.${key}.title`)}</h4>
                <p className="text-slate-600 mb-3 text-sm">{t(`sections.${key}.description`)}</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• {t(`sections.${key}.sub1`)}</li>
                  <li>• {t(`sections.${key}.sub2`)}</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#014D6C] mb-8">{t('projects.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden shadow-lg"
                viewport={{ once: true }}
              >
                <div className="relative h-44 sm:h-52">
                  <Image src={`/assets/${p}.jpg`} alt={t(`projects.${p}.title`)} fill className="object-cover" />
                </div>
                <div className="p-5 bg-white">
                  <h4 className="text-lg font-semibold mb-1">{t(`projects.${p}.title`)}</h4>
                  <p className="text-sm text-slate-600 mb-2">{t(`projects.${p}.location`)}</p>
                  <p className="text-slate-700 text-sm">{t(`projects.${p}.summary`)}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* VISION & MISSION */}
      <section className="py-16 bg-linear-to-r from-[#E6FBFF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-[#014D6C] mb-3">{t('vision.title')}</h4>
            <p className="text-slate-700">{t('vision.text')}</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#014D6C] mb-3">{t('mission.title')}</h4>
            <p className="text-slate-700 mb-4">{t('mission.intro')}</p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>{t('mission.point1')}</li>
              <li>{t('mission.point2')}</li>
              <li>{t('mission.point3')}</li>
              <li>{t('mission.point4')}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-[#014D6C] mb-4">{t('contact.title')}</h3>
            <p className="text-slate-700 mb-6">{t('contact.lead')}</p>

            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-sky-700 mt-1" />
                <div>
                  <div className="font-semibold">{t('contact.addressTitle')}</div>
                  <div className="text-sm">{t('contact.address')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-sky-700 mt-1" />
                <div>
                  <div className="font-semibold">{t('contact.phoneTitle')}</div>
                  <div className="text-sm">{t('contact.phone')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-sky-700 mt-1" />
                <div>
                  <div className="font-semibold">{t('contact.emailTitle')}</div>
                  <div className="text-sm">{t('contact.email')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 p-6 rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700">{t('contact.form.name')}</label>
                <input className="mt-2 w-full rounded-md p-3 border border-slate-200" placeholder={t('contact.form.namePlaceholder')} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">{t('contact.form.email')}</label>
                <input className="mt-2 w-full rounded-md p-3 border border-slate-200" placeholder={t('contact.form.emailPlaceholder')} />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">{t('contact.form.message')}</label>
                <textarea className="mt-2 w-full rounded-md p-3 border border-slate-200" rows={5} placeholder={t('contact.form.messagePlaceholder')} />
              </div>
              <button type="button" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#00A7D6] text-white font-semibold">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER (gradient) */}
      <footer className="bg-linear-to-r from-[#012E40] via-[#014D6C] to-[#00CFFF] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Image src="/assets/logo.png" alt="Era Marine" width={110} height={110} />
            <p className="mt-3 text-sm text-white/90">{t('footer.about')}</p>
          </div>

          <div>
            <h5 className="font-semibold mb-3"> {t('footer.linksTitle')} </h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#services">{t('nav.services')}</a></li>
              <li><a href="#projects">{t('nav.projects')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">{t('footer.contactTitle')}</h5>
            <p className="text-sm">{t('contact.email')}</p>
            <p className="text-sm mt-1">{t('contact.phone')}</p>
            <div className="mt-4 flex gap-3">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">F</a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">L</a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">I</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm opacity-90">{t('footer.copyright', { year: new Date().getFullYear() })}</div>
        <div className='text-xs flex w-full items-center justify-center gap-1'><CgCodeSlash /> Developed By <Link className='font-bold underline decoration-1 decoration-dotted' target={'_blank'} href={'https://burhams.com'} title='Burham B. Soliman' content='Burham B. Soliman'>Burham B. Soliman</Link> | <Link className='font-bold underline decoration-1 decoration-dotted' target={'_blank'} href={'https://pixil.pro'} title='Pixil Pro Ltd.' content='Pixil Pro Ltd.'>PixilPro Ltd.</Link></div>
      </footer>
    </main>
  );
}
