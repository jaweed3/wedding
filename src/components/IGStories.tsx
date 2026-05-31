"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function IGStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-warm/30 to-cream"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Instagram</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Bagikan Momen Bahagia
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
          <p className="text-dark/50 text-sm mt-4 max-w-md mx-auto">
            Download template IG Story dan bagikan ke teman-temanmu!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 justify-center"
        >
          {/* Template preview */}
          <div className="relative w-64 h-[340px] bg-gradient-to-b from-primary to-primary/80 rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="ig-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="15" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ig-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              {/* Top ornament */}
              <svg viewBox="0 0 80 20" className="w-20 h-5 text-gold-light/60 mb-6">
                <path d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10 Q70 20 80 10" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              <p className="text-cream/60 text-[10px] tracking-[0.3em] uppercase mb-3">
                Undangan Pernikahan
              </p>

              <p className="font-[var(--font-heading)] text-cream text-2xl font-bold leading-tight">
                ❤ <br />
                <span className="text-gold-light text-lg">&</span> <br />
                ❤
              </p>

              <div className="w-12 h-px bg-gold-light/40 mx-auto my-4" />

              <p className="text-cream/50 text-[10px] tracking-wider">
                15 • 06 • 2026
              </p>

              {/* Bottom ornament */}
              <svg viewBox="0 0 80 20" className="w-20 h-5 text-gold-light/60 mt-6">
                <path d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10 Q70 20 80 10" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>
          </div>

          {/* Download button */}
          <div className="text-center md:text-left">
            <p className="text-dark/60 text-sm mb-4 max-w-xs">
              Ayo bagikan momen bahagia ini ke Instagram Story kamu. Download template di bawah dan posting!
            </p>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 gold-bg text-dark font-semibold text-sm tracking-wider rounded-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 16V4M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M4 20H20" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              {downloaded ? "✓ Terdownload!" : "Download Template IG Story"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
