'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gradient-to-r from-[#012E40] via-[#014D6C] to-[#00CFFF] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/assets/logo.png" alt="Era Marine" width={110} height={110} />
          <p className="mt-3 text-sm text-white/90">{t('footer.about')}</p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">{t('footer.linksTitle')}</h5>
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
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"><FaLinkedin className="w-4 h-4" /></a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"><FaFacebook className="w-4 h-4" /></a>
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"><FaInstagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-90">{t('footer.copyright', { year: new Date().getFullYear() })}</div>
    </footer>
  );
}
