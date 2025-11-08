"use client";

import React from "react";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";
import { motion } from "framer-motion";
import {
  FaShip,
  FaWrench,
  FaMapPin,
  FaPhone,
  FaAnchor,
  FaGlobe,
  FaTruck,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const bannerImageSrc = "/images/shipping-banner.jpg";

const partnerIcons = [
  { Icon: FaShip, name: "Maersk" },
  { Icon: FaTruck, name: "DHL Logistics" },
  { Icon: FaGlobe, name: "Global Ports" },
  { Icon: BsBuilding, name: "Port Authority" },
];

export default function ERAMarineServices(): React.ReactElement {
  return (
    <div
      className="min-h-screen text-gray-800 font-[Inter] bg-gradient-to-b from-sky-50 via-white to-blue-50"
      style={{ fontFamily: "'Inter', 'Cairo', sans-serif" }}
    >
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="ERA Marine Logo"
              className="h-12 w-auto drop-shadow-md"
            />
            <div>
              <h1 className="text-xl font-bold text-sky-700">
                ERA MARINE SERVICES
              </h1>
              <p className="text-xs text-gray-500 tracking-wide">
                All The Ship Needs
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {["Services", "Partners", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src={bannerImageSrc}
          alt="Shipping and Logistics"
          className="w-full h-[28rem] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black/50 to-black/20 text-white text-center p-6">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold drop-shadow-lg"
          >
            Reliable Shipping & Logistics Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 max-w-2xl mx-auto text-sm md:text-lg opacity-90"
          >
            Providing comprehensive marine and logistics support for global
            fleets — on time, every time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <a href="#contact" aria-label="Contact us">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full shadow-lg">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Curved divider */}
        <svg
          className="absolute bottom-0 left-0 w-full rotate-180 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L80,80C160,96,320,128,480,144C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
          ></path>
        </svg>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-4">
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-center text-sky-800 mb-12"
        >
          Our Core Services
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              Icon: FaShip,
              title: "Ship Maintenance",
              text: "Technical support, inspections and repairs for all vessel types.",
            },
            {
              Icon: FaWrench,
              title: "Spare Parts Supply",
              text: "On-demand high-quality spare parts and equipment.",
            },
            {
              Icon: FaMapPin,
              title: "Port Logistics",
              text: "Efficient port coordination, customs support and delivery.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="rounded-3xl shadow-md hover:shadow-xl transition-all border border-blue-100 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <s.Icon className="mx-auto text-sky-600 mb-4 h-10 w-10" />
                  <h4 className="text-lg font-semibold mb-2 text-sky-800">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative bg-gradient-to-b from-white to-sky-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-sky-800 mb-6"
          >
            Our Trusted Partners
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We collaborate with leading maritime and logistics companies to
            deliver end-to-end solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {partnerIcons.map(({ Icon, name }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 h-36 transition-all"
              >
                <Icon className="h-10 w-10 text-sky-600 mb-3" />
                <span className="text-sm font-semibold text-gray-700">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-blue-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-sky-800 mb-6">
            About ERA Marine Services
          </h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            ERA Marine Services is a trusted maritime partner providing
            maintenance, spares, and logistics services. Our experienced team
            ensures operational continuity and rapid response to keep your fleet
            moving. We combine local knowledge with international standards to
            deliver reliable service across the region.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-sky-800 text-center mb-10"
        >
          Contact Us
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white shadow-lg rounded-3xl p-8 border border-blue-100"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 border rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="md:col-span-2 p-3 border rounded-lg h-28"
            ></textarea>
            <div className="md:col-span-2 flex justify-between items-center mt-4">
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-sm text-gray-500">+20 111 234 5678</p>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-10 text-center text-sm">
        <div className="flex justify-center gap-6 mb-4">
          {[FaLinkedin, FaFacebook, FaInstagram].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="opacity-80">
          © {new Date().getFullYear()} ERA Marine Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
