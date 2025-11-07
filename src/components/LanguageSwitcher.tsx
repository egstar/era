"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiGlobe } from "react-icons/bi";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇪🇬" },
  ];

  const changeLanguage = (lang: string) => {
    setOpen(false);
    router.replace(pathname, { locale: lang });
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-slate-700 to-gray-500 text-white rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <BiGlobe className="w-4 h-4" />
        <span className="font-medium">{locale.toUpperCase()}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute end-0 mt-2 w-40 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-blue-50 transition ${
                  locale === lang.code ? "text-blue-700 font-semibold" : "text-gray-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
