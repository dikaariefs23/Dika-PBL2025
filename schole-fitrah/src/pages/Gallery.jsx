import React, { useState } from "react";

export default function Audience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
  ];

  return (
    <section
      className="min-h-screen py-20 text-center 
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]
      transition-colors duration-700 relative"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Galeri Schole Fitrah
        </h1>

        <p className="text-lg leading-relaxed text-[#4b3621]/80 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Dokumentasi kegiatan, pembelajaran, dan momen berharga dalam perjalanan Schole Fitrah.
        </p>

        {/* GRID GALERI */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(src)}
              className="relative group overflow-hidden rounded-xl shadow-md
              bg-white/40 dark:bg-[#111]/40 
              border border-[#e0c9a8] dark:border-[#1f1f1f] w-full"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover transition-transform duration-500 
                ease-out group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 bg-black/0 
                group-hover:bg-black/20 group-hover:backdrop-blur-[1px]
                transition-all duration-500"
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* === POPUP LIGHTBOX + FADE-IN ANIMATION === */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 
          flex items-center justify-center p-4 cursor-pointer 
          animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-lg 
            border border-[#ffdc9a]/40 animate-zoomIn"
          />
        </div>
      )}

      {/* Footer Gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 
        bg-gradient-to-t from-[#b27b3d]/10 to-transparent 
        dark:from-[#0b0b0b] dark:to-transparent"
      ></div>

      {/* === ANIMASI CSS === */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.35s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 0.35s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
