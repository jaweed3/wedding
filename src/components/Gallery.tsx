"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const galleryImages = [
  { id: 1, delay: 0.1 },
  { id: 2, delay: 0.2 },
  { id: 3, delay: 0.3 },
  { id: 4, delay: 0.15 },
  { id: 5, delay: 0.25 },
  { id: 6, delay: 0.35 },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="galeri"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-primary/5 to-cream"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Gallery</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Cinta dalam Bingkai
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: img.delay }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gold/10 bg-white/60 shadow-lg shadow-gold/5">
                {/* Placeholder with Islamic pattern */}
                <div className={`w-full ${img.id % 2 === 0 ? "h-64" : "h-80"} bg-gradient-to-br from-primary/10 via-cream to-gold/10 flex items-center justify-center`}>
                  <div className="text-center p-6">
                    <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto text-gold/30 mb-2">
                      <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                      <path d="M30 10L35 22L48 25L38 35L40 48L30 42L20 48L22 35L12 25L25 22Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <p className="text-gold/40 text-xs">Foto Prewedding</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-cream/0 group-hover:text-cream text-xs tracking-widest uppercase font-medium"
                  >
                    ❤
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
