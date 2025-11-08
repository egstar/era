'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // language switcher path
  const isAr = pathname.startsWith('/ar');
  const switchTo = isAr ? pathname.replace(/^\/ar/, '') || '/' : `/ar${pathname}`;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed w-full z-50 top-0 transition-all ${
        scrolled ? 'backdrop-blur-md bg-gradient-to-r from-[#012E40]/85 via-[#014D6C]/65 to-[#00CFFF]/45 border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/assets/logo.png" alt="ERA logo" width={44} height={44} />
              <div>
                <div className="text-lg font-bold text-white">ERA MARINE</div>
                <div className="text-xs text-white/90 -mt-0.5">Precision Marine Services</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/95">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#partners" className="hover:text-white">Partners</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>

            <Link href={switchTo} className="ml-3 px-3 py-1 rounded-full bg-white text-[#012E40] text-sm font-semibold shadow">
              {isAr ? 'EN' : 'AR'}
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Link href={switchTo} className="px-3 py-1 rounded-full bg-white text-[#012E40] text-sm font-semibold shadow">
              {isAr ? 'EN' : 'AR'}
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
