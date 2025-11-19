import React, { useState } from "react";

// IMPORT FOTO
import Img1 from "../assets/gallery/Kegiatan Laporan Akhir Program Magang Kampus MERDEKA-2021.jpg";
import Img2 from "../assets/gallery/Kegiatan Mengajar Literasi sambil Bermain, Kolaborasi DuniaAkademisi.jpg";
import Img3 from "../assets/gallery/Kelas Inspirasi Paragonian Bergerak. Program Kolaborasi dengan Dunia Industri.jpg";
import Img4 from "../assets/gallery/Kolaborasi Kegiatan Magang Bersama Perangkat Desa Bojongsari.jpg";
import Img5 from "../assets/gallery/Menjadi Fasilitator Kegiatan Kolaborasi di SD Muhammadiyah Antapani (Pembinaan Spiritual dan Akhlaq).jpg";
import Img6 from "../assets/gallery/Pembuatan Konten Kolaborasi Lintas Divisi dengan Mitra Akademisi.jpg";
import Img7 from "../assets/gallery/Pendampingan Program Edufarm untuk anak-anak anggota PKBM.jpg";
import Img8 from "../assets/gallery/Pendidikan untuk Menumbuhkan Fitrah Fisik Anak Usia Dini.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState("");

  const images = [
    { src: Img1, label: "Laporan Akhir Program Magang MERDEKA" },
    { src: Img2, label: "Mengajar Literasi sambil Bermain" },
    { src: Img3, label: "Kelas Inspirasi Paragonian Bergerak" },
    { src: Img4, label: "Kolaborasi Perangkat Desa Bojongsari" },
    { src: Img5, label: "Pembinaan Spiritual & Akhlaq" },
    { src: Img6, label: "Konten Kolaborasi Lintas Divisi" },
    { src: Img7, label: "Program Edufarm – Anak PKBM" },
    { src: Img8, label: "Pendidikan Fitrah Fisik Anak Usia Dini" },
  ];

  return (
    <section
      className="min-h-screen py-20 text-center 
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]
      transition-colors duration-700 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Galeri Schole Fitrah
        </h1>

        <p className="text-lg leading-relaxed text-[#4b3621]/80 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Dokumentasi kegiatan pembelajaran, kolaborasi, dan momen berharga dalam perjalanan Schole Fitrah.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedImage(item.src);
                setSelectedText(item.label);
              }}
              className="group overflow-hidden rounded-2xl shadow-lg
              bg-white/50 dark:bg-[#1a1a1a]/40 
              border border-[#e0c9a8]/50 dark:border-[#222]/60
              hover:-translate-y-1 hover:shadow-xl 
              transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-48 object-cover 
                  transition-transform duration-500 
                  group-hover:scale-110"
                />

                <div className="absolute bottom-0 w-full 
                bg-black/50 backdrop-blur-sm py-2 text-white text-sm font-medium">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 
          flex flex-col items-center justify-center p-4 cursor-pointer 
          animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl 
            border border-[#ffdc9a]/40 animate-zoomIn"
          />

          <p className="mt-4 text-white text-lg font-medium animate-fadeIn">
            {selectedText}
          </p>
        </div>
      )}

      {/* Animasi CSS */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.35s ease-out forwards; }
      `}</style>
    </section>
  );
}
