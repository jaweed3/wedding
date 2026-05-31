"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const qrisPlaceholder = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

export default function Gift() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-cream to-warm/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Wedding Gift</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Tanda Kasih
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-dark/60 text-sm leading-relaxed">
            Doa restu adalah hadiah terindah. Namun jika Bapak/Ibu/Saudara/i ingin
            memberi tanda kasih, dapat melalui:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold">
                <rect x="4" y="16" width="32" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 16L20 6L36 16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 24H28" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 30H25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-lg text-primary font-bold mb-2">
              Transfer Bank
            </h3>
            <p className="text-dark/50 text-sm mb-1">Bank Syariah Indonesia (BSI)</p>
            <p className="font-mono text-primary font-bold text-lg tracking-wider">1234 5678 90</p>
            <p className="text-dark/50 text-xs mt-1">a.n. &nbsp; & &nbsp;</p>
          </motion.div>

          {/* QRIS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold">
                <rect x="2" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="22" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="2" y="22" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="22" y="22" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="31" y="22" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="22" y="31" width="16" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-lg text-primary font-bold mb-4">
              QRIS
            </h3>
            <div className="w-40 h-40 mx-auto bg-white rounded-xl border border-gold/20 flex items-center justify-center p-2">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-20 h-20 text-gold/40">
                  <rect x="2" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="22" y="2" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="2" y="22" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="22" y="22" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <p className="text-dark/40 text-xs mt-3">Scan QRIS untuk kirim hadiah</p>
          </motion.div>
        </div>

        {/* Gift Registry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 p-8 bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8 text-gold">
              <rect x="6" y="10" width="28" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 6C16 6 14 10 14 10H26C26 10 24 6 20 6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 18H28" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 24H24" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <h3 className="font-[var(--font-heading)] text-lg text-primary font-bold mb-2">
            Daftar Kado (Gift Registry)
          </h3>
          <p className="text-dark/60 text-sm mb-4 max-w-md mx-auto">
            Kami telah menyiapkan daftar hadiah sebagai referensi. Kehadiran Anda adalah hadiah terindah bagi kami.
          </p>
          <motion.a
            href="https://wegiftry.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 gold-bg text-dark font-semibold text-sm tracking-wider rounded-full"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4">
              <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Lihat Daftar Kado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
