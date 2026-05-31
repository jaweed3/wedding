"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: "Akad Nikah",
      date: "Minggu, 15 Juni 2026",
      time: "08:00 – 10:00 WIB",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold">
          <path d="M20 5L25 15L35 17L28 24L30 35L20 30L10 35L12 24L5 17L15 15Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Resepsi",
      date: "Minggu, 15 Juni 2026",
      time: "10:00 – 15:00 WIB",
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold">
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 12V20L26 23" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="acara"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-cream to-primary/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Save the Date</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Acara Pernikahan
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="relative p-8 bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5"
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <svg viewBox="0 0 40 40" className="w-full h-full text-gold/20">
                  <path d="M40 0 L40 40 L0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M32 8 L32 32 L8 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                  {event.icon}
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-xl text-primary font-bold">
                    {event.title}
                  </h3>
                  <p className="text-gold text-xs tracking-widest uppercase">Undangan</p>
                </div>
              </div>

              <div className="space-y-3 text-dark/70">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold shrink-0">
                    <rect x="2" y="3" width="16" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2 8H18" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 1V5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M14 1V5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold shrink-0">
                    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M10 5V10L13 13" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold shrink-0">
                    <path d="M10 1C6 1 3 5 3 8C3 13 10 19 10 19C10 19 17 13 17 8C17 5 14 1 10 1Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="10" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <span className="text-sm">Masjid &nbsp; — [ Lokasi ]</span>
                </div>
              </div>

              {/* Google Maps button */}
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 text-gold text-xs tracking-wider hover:bg-gold/5 transition-colors"
              >
                <svg viewBox="0 0 16 16" className="w-4 h-4">
                  <path d="M8 0C5.2 0 3 2.2 3 5C3 8 8 16 8 16C8 16 13 8 13 5C13 2.2 10.8 0 8 0Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="8" cy="5" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Lihat di Google Maps
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
