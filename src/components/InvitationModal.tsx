"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationModal({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(false);
    setTimeout(onOpen, 800);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D5C46] overflow-hidden"
        >
          {/* Page-turn overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0D5C46] to-transparent z-20 pointer-events-none"
            initial={{ scaleX: 1, originX: 0 }}
            exit={{ scaleX: 0, originX: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Geometric background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="animate-rotate-slow">
              <defs>
                <pattern id="modal-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <polygon points="40,0 80,40 40,80 0,40" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modal-pattern)" />
            </svg>
          </div>

          {/* Floating light orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-gold/5 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-sage/5 blur-3xl"
            />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-8"
          >
            {/* Decorative top pattern */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="h-px max-w-[280px] gold-bg mb-12"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-[var(--font-arabic)] text-gold-light text-3xl md:text-4xl mb-6 leading-relaxed"
              dir="rtl"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-[var(--font-heading)] text-cream text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4 leading-tight"
            >
              ❤ <span className="text-gold-light font-[var(--font-arabic)] text-3xl md:text-4xl">&</span> ❤
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-gold-light/60 text-sm md:text-base tracking-[0.3em] uppercase mb-10"
            >
              • Undangan Pernikahan •
            </motion.p>

            {/* Bottom decorative pattern */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.6, ease: "easeInOut" }}
              className="h-px max-w-[280px] gold-bg mb-10"
            />

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="relative px-10 py-4 gold-bg text-dark font-semibold text-sm tracking-widest uppercase rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Buka Undangan</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="mt-8 text-cream/30 text-xs tracking-wider"
            >
              Scroll untuk menjelajahi
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
