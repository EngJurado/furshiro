// src/components/Modal.jsx

import { useState, useEffect } from "react";

export default function Modal({ drawings }) {
  const [selected, setSelected] = useState(null);

  /* Global opener for Astro thumbnails */
  useEffect(() => {
    window.openModal = (i) => setSelected(i);
    return () => delete window.openModal;
  }, []);

  /* Esc key handler */
  useEffect(() => {
    const h = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const close = () => setSelected(null);
  if (selected === null) return null;

  const { src, artist, date } = drawings[selected];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg">
      {/* Click anywhere outside the panel to dismiss */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={close}
        aria-label="Dismiss gallery modal"
      />

      {/* Glassy panel */}
      <div className="relative z-10 rounded-[2rem] overflow-hidden bg-black/50 backdrop-blur-lg shadow-2xl p-8 text-white max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4 select-none">
        <img
          src={src}
          alt={`Art by ${artist}`}
          className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg"
        />
        <div className="text-center text-sm">
          <p className="font-semibold">{artist}</p>
          <p className="opacity-80">{date}</p>
        </div>
      </div>
    </div>
  );
}
