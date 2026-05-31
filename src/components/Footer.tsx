"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-primary to-[#062D22] overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="animate-rotate-slow">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="#C9A96E" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#C9A96E" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Closing arabic */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="font-[var(--font-arabic)] text-gold-light text-3xl md:text-4xl mb-8 leading-relaxed"
          dir="rtl"
        >
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-24 h-px gold-bg mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gold-light/60 text-sm tracking-widest uppercase mb-4"
        >
          Jazakumullah Khairan Katsiran
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-cream/50 text-sm leading-relaxed max-w-lg mx-auto mb-12"
        >
          Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami sekeluarga mengucapkan terima kasih yang sebesar-besarnya.
          Semoga Allah SWT membalas dengan kebaikan berlipat.
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="mb-12"
        >
          <p className="font-[var(--font-heading)] text-2xl md:text-3xl text-cream font-bold">
            ❤ &nbsp; & ❤
          </p>
          <p className="text-gold-light/40 text-xs mt-3 tracking-wider">
            &amp; Keluarga Besar
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="w-32 h-px gold-bg mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-cream/20 text-xs"
        >
          Islamic Wedding Invitation &copy; {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
