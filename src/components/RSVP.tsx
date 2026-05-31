"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function RSVP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", attendance: "hadir", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", attendance: "hadir", message: "" });
    }, 3000);
  };

  return (
    <section
      id="rsvp"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-cream to-warm/30"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">RSVP</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Konfirmasi Kehadiran
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
          <p className="text-dark/50 text-sm mt-4 max-w-md mx-auto">
            Mohon doa restu Bapak/Ibu/Saudara/i dengan mengisi form di bawah ini
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-6 py-4 bg-white/80 border border-gold/20 rounded-xl text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold/50 transition-colors text-sm"
            />
          </div>

          <div className="flex gap-4">
            {["hadir", "tidak hadir", "ragu"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setForm({ ...form, attendance: option })}
                className={`flex-1 px-4 py-3 rounded-xl border text-sm capitalize transition-all ${
                  form.attendance === option
                    ? "border-gold bg-gold/10 text-gold font-medium"
                    : "border-gold/20 text-dark/50 hover:border-gold/30"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <textarea
            placeholder="Tulis ucapan & doa untuk kedua mempelai..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="w-full px-6 py-4 bg-white/80 border border-gold/20 rounded-xl text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 gold-bg text-dark font-semibold text-sm tracking-widest uppercase rounded-xl"
          >
            {submitted ? "✓ Terkirim — Jazakumullah Khairan" : "Kirim"}
          </motion.button>
        </motion.form>

        {/* Guestbook Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-[var(--font-heading)] text-xl text-primary font-bold text-center mb-8">
            Ucapan & Doa
          </h3>

          <div className="space-y-4">
            {[
              { name: "Aulia Rahman", message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma 🤲", time: "2 jam lalu" },
              { name: "Siti Nurhaliza", message: "Wahhh selamat ya kak! semoga langgeng terus 🎉", time: "5 jam lalu" },
              { name: "Hafidz Firmansyah", message: "Semoga Allah memberkahi pernikahan kalian, Aamiin 🤲", time: "1 hari lalu" },
            ].map((guest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                className="p-5 bg-white/60 rounded-xl border border-gold/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-primary text-sm">{guest.name}</span>
                  <span className="text-gold/50 text-xs">{guest.time}</span>
                </div>
                <p className="text-dark/60 text-sm leading-relaxed">{guest.message}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
