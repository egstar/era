'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Partners () {
  const t = useTranslations('partners')
  const locale = useLocale()
  const partners = [
    { name: 'MarineTech', logo: '/assets/partners.png' },
    { name: 'Oceanic Co.', logo: '/assets/partners.png' },
    { name: 'BlueWave', logo: '/assets/partners.png' },
    { name: 'SeaCore', logo: '/assets/partners.png' },
    { name: 'HydroSys', logo: '/assets/partners.png' },
    { name: 'AquaFleet', logo: '/assets/partners.png' },
    { name: 'AquaMarine', logo: '/assets/partners.png' },
    { name: 'WaveLine', logo: '/assets/partners.png' }
  ]

  return (
    <section
      id='partners'
      className='relative bg-linear-to-b from-gray-200 to-white py-20 overflow-hidden px-2 md:px-10'
    >
      <div className='max-w-7xl mx-auto px-6 text-center z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-sky-800 mb-4'
        >
          {t('title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed'
        >
          {t('description')}
        </motion.p>
      </div>

      {/* Infinite Scrolling Slider */}
      <div className='relative w-full overflow-hidden md:px-10'>
        <motion.div
          className='flex gap-2 md:gap-4'
          animate={
            locale=='ar' ?

            {x:['0%',`160%`]}
            :
            {x:[`0%`,`-160%`]}
          }
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear'
          }}
        >
          {/* Duplicate the logos twice for seamless looping */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className='min-w-[150px] md:min-w-[180px] lg:min-w-[200px] bg-white p-4 rounded-2xl shadow-md border border-blue-100 flex items-center justify-center hover:shadow-xl transition-all'
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                className='object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-300 cursor-pointer'
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft background pattern */}
    </section>
  )
}
