"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function LiveStreaming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-primary/5 to-cream"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Live Streaming</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Siaran Langsung
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
          <p className="text-dark/50 text-sm mt-4 max-w-md mx-auto">
            Bagi yang berhalangan hadir, dapat menyaksikan akad & resepsi secara langsung
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5 overflow-hidden"
        >
          {/* Video placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-cream to-gold/10 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg viewBox="0 0 80 80" className="w-20 h-20 text-gold/60">
                <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="32,22 60,40 32,58" fill="currentColor" />
              </svg>
            </motion.div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-dark/30 text-xs tracking-wider">
              YouTube Live Embed
            </span>
          </div>

          <div className="p-6 text-center">
            <p className="text-dark/60 text-sm mb-4">
              Acara ini akan disiarkan langsung melalui YouTube. Klik tombol di bawah untuk membuka saluran live streaming.
            </p>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 gold-bg text-dark font-semibold text-sm tracking-wider rounded-full"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <polygon points="9,6 18,12 9,18" fill="currentColor" />
              </svg>
              Tonton Live Streaming
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
