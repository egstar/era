"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Partners() {
  const t = useTranslations("partners");

  // Example partner logo paths — replace with your actual logos in /public/assets/
  const partners = [
    { name: "MarineTech", logo: "/assets/npartners.png" },
    { name: "Oceanic Co.", logo: "/assets/npartners.png" },
    { name: "BlueWave", logo: "/assets/npartners.png" },
    { name: "SeaCore", logo: "/assets/npartners.png" },
    { name: "HydroSys", logo: "/assets/npartners.png" },
    { name: "AquaFleet", logo: "/assets/npartners.png" },
  ];

  return (
    <section id="partners" className="relative bg-linear-to-b from-gray-200 to-white py-20 pt-25">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-sky-800 mb-4"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 flex items-center justify-center transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft background pattern */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-light.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
}
