'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'
import { MdMenu } from 'react-icons/md'
import { GrConnect, GrGroup, GrProjects, GrServices } from 'react-icons/gr'
import { BsInfo } from 'react-icons/bs'

export default function Header () {
  const [open, setOpen] = useState(false)
  const t = useTranslations('nav')

  return (
    <header className='fixed w-full z-50'>
      <div className='backdrop-blur-lg bg-linear-to-br from-white/80 via-gray-100/70 to-gray-50/60 border-b border-white/10 drop-shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/assets/era.png'
              alt='Era Marine'
              width={70}
              height={70}
              priority
              className='rounded-full'
            />
            <div>
              <Image
                src='/assets/logo_texts.png'
                alt='Era Marine'
                width={200}
                height={70}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-gray-600/95'>
            <a href='#about' className='hover:text-slate-900 transition'>
              {t('about')}
            </a>
            <a href='#services' className='hover:text-slate-900 transition'>
              {t('services')}
            </a>
            <a href='#projects' className='hover:text-slate-900 transition'>
              {t('projects')}
            </a>
            <a href='#partners' className='hover:text-slate-900 transition'>
              {t('partners')}
            </a>
            <a href='#contact' className='hover:text-slate-900 transition'>
              {t('contact')}
            </a>

            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex flex-col py-2 items-center gap-3'>
            <button
              onClick={() => setOpen(!open)}
              className='p-2 rounded-lg hover:bg-white/40 transition'
            >
              {open ? (
                <p className='text-3xl'>&times;</p>
              ) : (
                <MdMenu className='w-6 h-6 text-gray-700' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden backdrop-blur-lg bg-linear-to-br from-white/90 via-gray-100/80 to-gray-50/70 border-t border-white/10 drop-shadow-lg'
          >
            <div className='px-6 py-4 flex flex-col gap-0 text-gray-700 text-sm font-medium w-full'>
              <a
                href='#about'
                onClick={() => setOpen(false)}
                className='py-2 hover:text-sky-600 transition flex gap-2 items-center border-b-[.5px] border-black/20'
              >
                <BsInfo className='w-6 h-6 ' />{t('about')}
              </a>
              <a
                href='#services'
                onClick={() => setOpen(false)}
                className='py-2 hover:text-sky-600 transition flex gap-2 items-center border-b-[.5px] border-black/20'
              >
              <GrServices className='w-6 h-6 ' />  {t('services')}
              </a>
              <a
                href='#projects'
                onClick={() => setOpen(false)}
                className='py-2 hover:text-sky-600 transition flex gap-2 items-center border-b-[.5px] border-black/20'
              >
                <GrProjects className='w-6 h-6 ' />{t('projects')}
              </a>
              <a
                href='#partners'
                onClick={() => setOpen(false)}
                className='py-2 hover:text-sky-600 transition flex gap-2 items-center border-b-[.5px] border-black/20'
              >
                <GrGroup className='w-6 h-6 ' />{t('partners')}
              </a>
              <a
                href='#contact'
                onClick={() => setOpen(false)}
                className='py-2 hover:text-sky-600 transition flex gap-2 items-center '
              >
                <GrConnect className='w-6 h-6 ' />{t('contact')}
              </a>

              <div className='w-full flex items-center justify-end'>
                <LanguageSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
