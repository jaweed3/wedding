"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const stories = [
  {
    title: "Pertemuan Pertama",
    date: "2019",
    description:
      "Pertama kali kami bertemu saat menjadi anggota organisasi kampus. Kebetulan kami berada di divisi yang sama. Dari diskusi serius hingga tawa lepas karena lelucon yang garing, momen-momen itu perlahan menumbuhkan benih cinta.",
    side: "left" as const,
  },
  {
    title: "Mulai Serius",
    date: "2021",
    description:
      "Walaupun kami sempat menjalani hubungan jarak jauh selama 2 tahun, hal itu bukan menjadi halangan. Justru kami semakin yakin satu sama lain dan memutuskan untuk melangkah ke jenjang lebih serius.",
    side: "right" as const,
  },
  {
    title: "Lamaran",
    date: "2024",
    description:
      "Dengan restu kedua orang tua, akhirnya kami bertunangan. Momen yang penuh haru dan bahagia, menjadi awal dari persiapan menuju pernikahan yang diridhoi Allah SWT.",
    side: "left" as const,
  },
  {
    title: "Pernikahan",
    date: "2026",
    description:
      "Akhirnya tibalah hari yang dinanti. Dengan memohon rahmat Allah SWT, kami akan bersatu dalam ikatan suci pernikahan. Doakan kami menjadi keluarga yang sakinah, mawaddah, warahmah.",
    side: "right" as const,
  },
];

export default function LoveStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="kisah"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-cream to-warm/30 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="love-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 20 L50 35 L65 38 L55 50 L57 65 L40 58 L23 65 L25 50 L15 38 L30 35Z" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#love-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Journey</p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-primary font-bold">
            Kisah Cinta
          </h2>
          <div className="w-16 h-px gold-bg mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 gold-bg hidden md:block" />
          {/* Mobile line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/20 md:hidden" />

          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 md:mb-16 ${
                story.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${story.side === "right" ? "md:text-right" : "md:text-left"} pl-14 md:pl-0`}>
                <div className="p-6 bg-white/70 rounded-2xl border border-gold/10 shadow-lg shadow-gold/5">
                  <span className="inline-block px-3 py-1 gold-bg text-dark text-xs font-semibold rounded-full mb-3">
                    {story.date}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-xl text-primary font-bold mb-2">
                    {story.title}
                  </h3>
                  <p className="text-dark/60 text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot - desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full gold-bg border-4 border-cream z-10 shadow-md" />

              {/* Timeline dot - mobile */}
              <div className="md:hidden absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full gold-bg border-2 border-cream z-10" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
