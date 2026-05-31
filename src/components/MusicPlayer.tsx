"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/sounds/nasyid.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    const audio = audioRef.current;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onError = () => setHasError(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-2 p-4 bg-cream/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gold/20 w-64"
          >
            <p className="text-primary text-xs font-medium mb-2 tracking-wider uppercase">
              Nasyid Pengiring
            </p>
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8V12L15 15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.div>
              <div className="flex-1">
                <div className="h-1.5 bg-gold/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gold-bg rounded-full"
                    style={{ width: duration ? `${(currentTime / duration) * 100}%` : "0%" }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-dark/40 text-[10px]">{formatTime(currentTime)}</span>
                  <span className="text-dark/40 text-[10px]">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={togglePlay}
                className="flex-1 px-3 py-1.5 gold-bg text-dark text-xs font-medium rounded-lg"
              >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
              </button>
              <button
                onClick={() => { setIsOpen(false); }}
                className="px-3 py-1.5 border border-gold/20 text-dark/50 text-xs rounded-lg"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={togglePlay}
        onDoubleClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full gold-bg shadow-lg shadow-gold/20 flex items-center justify-center relative group"
      >
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-5">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["30%", "100%", "50%", "80%", "30%"] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                className="w-0.5 bg-dark rounded-full"
              />
            ))}
          </div>
        ) : (
          <svg viewBox="0 0 20 20" className="w-6 h-6 text-dark ml-0.5">
            <polygon points="5,3 17,10 5,17" fill="currentColor" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
