'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnersGrid from '@/components/PartnersGrid';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations();

  const services = [
    'fabrication',
    'subsea',
    'engine',
    'mechanics',
    'electrical',
    'hvac',
  ];

  const projects = ['project1', 'project2', 'project3'];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#E9F8FF,white)] font-sans antialiased">
      <Header />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[86vh] md:min-h-[92vh] flex items-center"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover object-center brightness-[0.55] contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#012E40]/80 via-[#014D6C]/55 to-[#00CFFF]/25" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                {t('hero.title')}
              </h1>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-sky-100 max-w-2xl">
                {t('hero.subtitle')}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#012E40] font-semibold shadow hover:scale-105 transition"
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
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl bg-white/8 backdrop-blur-md p-6 shadow-2xl border border-white/10">
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

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -bottom-16 sm:-bottom-18 md:-bottom-20 left-1/2 -translate-x-1/2 bg-white text-[#012E40] rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200 w-[92%] sm:w-[78%] md:w-[64%] lg:w-[56%] text-center backdrop-blur-sm"
                >
                  <h3 className="text-sm sm:text-base font-semibold mb-1">{t('hero.quickTitle')}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t('hero.quickDetail')}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(200%+1.3px)] h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39 56.44C201.38 82.11 100.27 89.12 0 60V120H1200V0C1040.9 39.68 884.46 91.56 721.39 81.44 600.33 74.34 481.39 29.09 321.39 56.44Z" fill="#ffffff" />
          </svg>
        </div>
      </motion.section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-sky-800 text-center mb-8">{t('services.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((key, i) => (
              <motion.div key={key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.06 }} viewport={{ once: true }}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-blue-50">
                  <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                    <div className="text-sky-700 font-semibold uppercase">{key[0]}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#014D6C] mb-2">{t(`sections.${key}.title`)}</h4>
                  <p className="text-slate-600 mb-3 text-sm">{t(`sections.${key}.description`)}</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• {t(`sections.${key}.sub1`)}</li>
                    <li>• {t(`sections.${key}.sub2`)}</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-sky-800 text-center mb-8">{t('projects.title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article key={p} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} className="rounded-2xl overflow-hidden shadow-lg bg-white" viewport={{ once: true }}>
                <div className="relative h-44 sm:h-52">
                  <Image src={`/assets/${p}.jpg`} alt={t(`projects.${p}.title`)} fill className="object-cover" />
                </div>
                <div className="p-5">
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
      <PartnersGrid />

      {/* VISION & MISSION */}
      <section className="py-16 bg-white">
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
      <section id="contact" className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-sky-800 text-center mb-8">{t('contact.title')}</h3>
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-blue-50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="p-3 border rounded-md" placeholder={t('contact.form.namePlaceholder')} />
              <input className="p-3 border rounded-md" placeholder={t('contact.form.emailPlaceholder')} />
              <textarea className="md:col-span-2 p-3 border rounded-md h-36" placeholder={t('contact.form.messagePlaceholder')} />
              <div className="md:col-span-2 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{t('contact.phoneTitle')}</p>
                  <p className="text-sm text-slate-600">{t('contact.phone')}</p>
                </div>
                <button type="button" className="bg-[#00A7D6] text-white px-6 py-3 rounded-full">
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
