"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InvitationModal from "@/components/InvitationModal";
import Hero from "@/components/Hero";
import AyatSection from "@/components/AyatSection";
import BrideGroom from "@/components/BrideGroom";
import LoveStory from "@/components/LoveStory";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import LiveStreaming from "@/components/LiveStreaming";
import RSVP from "@/components/RSVP";
import Gallery from "@/components/Gallery";
import Gift from "@/components/Gift";
import IGStories from "@/components/IGStories";
import QRCheckin from "@/components/QRCheckin";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "ayat", label: "Ayat" },
    { id: "pengantin", label: "Mempelai" },
    { id: "kisah", label: "Kisah" },
    { id: "acara", label: "Acara" },
    { id: "rsvp", label: "RSVP" },
    { id: "galeri", label: "Galeri" },
  ];

  return (
    <>
      <InvitationModal onOpen={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <AyatSection />
            <BrideGroom />
            <LoveStory />
            <EventDetails />
            <Countdown />
            <LiveStreaming />
            <RSVP />
            <Gallery />
            <Gift />
            <IGStories />
            <QRCheckin />
            <Footer />
            <MusicPlayer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Floating Navbar */}
      <AnimatePresence>
        {showNav && isOpen && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-40 glass border-b border-gold/10"
          >
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center overflow-x-auto gap-1 no-scrollbar">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 px-3 py-1.5 text-xs text-dark/50 hover:text-gold transition-colors tracking-wider uppercase whitespace-nowrap"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
