"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BrideGroom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pengantin"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-warm/50 to-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Assalamu&rsquo;alaikum Warahmatullahi Wabarakatuh
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Kedua Mempelai
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            {/* Avatar frame */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-rotate-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full gold-bg" />
              </div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-gold/60">
                  <path d="M40 10C25 10 15 25 15 35C15 45 25 55 40 55C55 55 65 45 65 35C65 25 55 10 40 10Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 70C15 55 25 45 40 45C55 45 65 55 65 70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M40 25L45 35L55 37L48 45L50 55L40 50L30 55L32 45L25 37L35 35Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </div>

            <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mb-2">
              ❤
            </h3>
            <p className="text-gold text-sm tracking-widest uppercase mb-4">Putri tercinta</p>
            <div className="max-w-xs mx-auto space-y-1 text-dark/60 text-sm">
              <p>Putri dari Bapak &nbsp; & Ibu &nbsp;</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-48 w-px gold-bg origin-top"
            />
          </div>
          <div className="md:hidden flex items-center justify-center -my-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-48 h-px gold-bg"
            />
          </div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-rotate-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full gold-bg" />
              </div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-gold/60">
                  <path d="M40 10C25 10 15 25 15 35C15 45 25 55 40 55C55 55 65 45 65 35C65 25 55 10 40 10Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M40 25L45 35L55 37L48 45L50 55L40 50L30 55L32 45L25 37L35 35Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </div>

            <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mb-2">
              ❤
            </h3>
            <p className="text-gold text-sm tracking-widest uppercase mb-4">Putra tercinta</p>
            <div className="max-w-xs mx-auto space-y-1 text-dark/60 text-sm">
              <p>Putra dari Bapak &nbsp; & Ibu &nbsp;</p>
            </div>
          </motion.div>
        </div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-px gold-bg mx-auto mb-8" />
          <p className="text-dark/70 leading-relaxed text-base md:text-lg">
            Dengan segala kerendahan hati dan penuh rasa syukur kepada Allah SWT,
            kami bermaksud menyempurnakan sunnah Rasulullah ﷺ dengan
            menyelenggarakan pernikahan putra-putri kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
