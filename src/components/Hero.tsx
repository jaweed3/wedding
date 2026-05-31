"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const geometricShapes = [
  "M100,0 L200,50 L200,150 L100,200 L0,150 L0,50 Z",
  "M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z",
  "M100,40 L160,70 L160,130 L100,160 L40,130 L40,70 Z",
];

function HeroCountdown() {
  const targetDate = new Date("2026-06-15T08:00:00+07:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  return (
    <div className="flex gap-3 md:gap-5">
      {[
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-white/8 backdrop-blur-sm border border-white/12 flex items-center justify-center">
            <span className="font-[var(--font-heading)] text-xl md:text-3xl font-bold text-cream">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-gold-light/40 text-[10px] md:text-xs tracking-wider mt-1 uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D5C46] via-[#0D5C46] to-[#1A7A5E]"
    >
      {/* Animated geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="animate-rotate-slow">
          <defs>
            <pattern id="geo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {geometricShapes.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="#C9A96E" strokeWidth="0.5" />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-sage/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full max-w-xs h-12 mb-8"
        >
          <svg viewBox="0 0 200 40" className="w-full h-full text-gold">
            <path d="M0 20 Q25 0 50 20 Q75 40 100 20 Q125 0 150 20 Q175 40 200 20" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Basmalah */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-[var(--font-arabic)] text-gold-light text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed"
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-32 h-px gold-bg mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-gold-light/60 text-sm md:text-base tracking-[0.3em] uppercase mb-3"
        >
          Undangan Pernikahan
        </motion.p>

        {/* Bride & Groom Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="font-[var(--font-heading)] text-cream text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-8 leading-tight"
        >
          <span className="block">❤</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-[var(--font-arabic)] text-gold-light mt-2">&</span>
          <span className="block mt-2">❤</span>
        </motion.h1>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <HeroCountdown />
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 3.2 }}
          className="w-full max-w-xs h-12 mt-8"
        >
          <svg viewBox="0 0 200 40" className="w-full h-full text-gold rotate-180">
            <path d="M0 20 Q25 0 50 20 Q75 40 100 20 Q125 0 150 20 Q175 40 200 20" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 3.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gold-light/40 text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-gold/30 flex items-start justify-center pt-2"
          >
            <motion.div className="w-1 h-2 rounded-full gold-bg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
