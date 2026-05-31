"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

export default function QRCheckin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [checkedIn, setCheckedIn] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCheckin = () => {
    setCheckedIn(true);
    setTimeout(() => setCheckedIn(false), 4000);
  };

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-cream to-primary/5"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Check-in</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            QR Code Check-in
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
          <p className="text-dark/50 text-sm mt-4 max-w-md mx-auto">
            Scan QR code saat tiba di lokasi acara untuk konfirmasi kehadiran
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-sm mx-auto"
        >
          <div className="bg-white/80 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5 p-8 text-center">
            {/* QR Code */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="w-full h-full bg-white rounded-xl border border-gold/20 p-3 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg flex items-center justify-center relative">
                  {/* Simulated QR code pattern */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary/70">
                    {/* Top left finder */}
                    <rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                    <rect x="12" y="12" width="16" height="16" rx="1.5" fill="currentColor" opacity="0.3" />

                    {/* Top right finder */}
                    <rect x="68" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                    <rect x="72" y="12" width="16" height="16" rx="1.5" fill="currentColor" opacity="0.3" />

                    {/* Bottom left finder */}
                    <rect x="8" y="68" width="24" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
                    <rect x="12" y="72" width="16" height="16" rx="1.5" fill="currentColor" opacity="0.3" />

                    {/* Data modules */}
                    {[38, 46, 54, 62, 76, 84].map((x, i) =>
                      [38, 46, 54, 62, 70, 84].map((y, j) => (
                        <rect
                          key={`${i}-${j}`}
                          x={x} y={y}
                          width="4" height="4"
                          rx="0.5"
                          fill="currentColor"
                          opacity={((i + j) % 3 === 0) ? 0.5 : 0.15}
                        />
                      ))
                    )}
                  </svg>
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {checkedIn ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary">
                      <path d="M20 6L9 17L4 12" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-primary font-semibold">✓ Kamu sudah check-in!</p>
                  <p className="text-dark/40 text-xs mt-1">Selamat menikmati acara!</p>
                </motion.div>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-dark/50 text-sm mb-2">
                    Tunjukkan QR ini saat check-in
                  </p>
                  <p className="font-mono text-primary/30 text-xs mb-4 tracking-widest">
                    W7X9 • K2M4 • R8P1
                  </p>
                  <motion.button
                    onClick={handleCheckin}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 gold-bg text-dark font-semibold text-sm tracking-wider rounded-xl"
                  >
                    Check-in Sekarang
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
