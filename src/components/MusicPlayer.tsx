"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function createMelody(ctx: AudioContext) {
  const pentatonic = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.08;
  gainNode.connect(ctx.destination);

  const delay = ctx.createDelay(0.5);
  delay.delayTime.value = 0.25;
  const delayGain = ctx.createGain();
  delayGain.gain.value = 0.3;
  gainNode.connect(delay);
  delay.connect(delayGain);
  delayGain.connect(gainNode);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 800;
  gainNode.disconnect();
  gainNode.connect(filter);
  filter.connect(ctx.destination);
  filter.connect(delay);

  let noteIndex = 0;
  let nextTime = ctx.currentTime + 0.5;
  let stopped = false;

  function scheduleNote() {
    if (stopped) return;
    const freq = pentatonic[noteIndex % pentatonic.length];
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq;

    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0, nextTime);
    noteGain.gain.linearRampToValueAtTime(0.08, nextTime + 0.05);
    noteGain.gain.linearRampToValueAtTime(0.06, nextTime + 0.2);
    noteGain.gain.linearRampToValueAtTime(0, nextTime + 0.45);

    osc.connect(noteGain);
    noteGain.connect(filter);

    osc.start(nextTime);
    osc.stop(nextTime + 0.5);

    noteIndex++;
    if (noteIndex % 8 === 0) {
      noteIndex += 2;
    }
    nextTime += 0.3 + Math.random() * 0.15;
    setTimeout(scheduleNote, (nextTime - ctx.currentTime) * 1000);
  }

  scheduleNote();
  return () => { stopped = true; };
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const startMusic = useCallback(() => {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      ctxRef.current = ctx;
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    stopRef.current = createMelody(ctxRef.current);
  }, []);

  const stopMusic = useCallback(() => {
    stopRef.current?.();
    stopRef.current = null;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startMusic();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => stopMusic();
  }, [stopMusic]);

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
                <div className="flex items-center justify-between">
                  <span className="text-dark/50 text-xs">Melodi Instrumental</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={togglePlay}
                className="flex-1 px-3 py-1.5 gold-bg text-dark text-xs font-medium rounded-lg"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 border border-gold/20 text-dark/50 text-xs rounded-lg"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
