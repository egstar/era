'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const partners = [
  { name: 'Maersk', logo: '/assets/partner1.png' },
  { name: 'DHL Logistics', logo: '/assets/partner2.png' },
  { name: 'Global Ports', logo: '/assets/partner3.png' },
  { name: 'Port Authority', logo: '/assets/partner4.png' },
  { name: 'HydroSys', logo: '/assets/partner5.png' },
  { name: 'AquaFleet', logo: '/assets/partner6.png' },
];

export default function PartnersGrid() {
  const t = useTranslations();

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-extrabold text-sky-800 mb-4">
          {t('partners.title')}
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-slate-600 max-w-3xl mx-auto mb-8">
          {t('partners.description')}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <motion.div key={p.name} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-3 bg-white/60 rounded-lg shadow-sm flex items-center justify-center border border-blue-50">
              <Image src={p.logo} alt={p.name} width={120} height={60} className="object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
