import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const Showcase = () => {
  const showcases = [
    {
      title: "Lingkungan Belajar Alamiah",
      desc: "Suasana belajar yang natural dan menyenangkan, memungkinkan anak tumbuh sesuai fitrahnya.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
      link: "#",
    },
    {
      title: "Festival Fitrah Tahunan",
      desc: "Ajang bagi anak dan keluarga untuk menampilkan hasil karya dan perjalanan fitrah mereka.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      link: "#",
    },
    {
      title: "Ruang Kolaborasi Komunitas",
      desc: "Menghubungkan para pendidik, orang tua, dan anak dalam komunitas belajar berbasis nilai fitrah.",
      img: "https://images.unsplash.com/photo-1522202195461-0bc66bb7f34b?auto=format&fit=crop&w=1600&q=80",
      link: "#",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  // Auto slide setiap 7 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % showcases.length);
        setFadeState("fade-in");
      }, 600);
    }, 7000);
    return () => clearInterval(timer);
  }, [showcases.length]);

  return (
    <section
      id="showcase"
      className="py-20 px-6 text-center bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5] dark:from-[#111] dark:via-[#0e0e0e] dark:to-[#0a0a0a] fade-up"
    >
      <h2 className="text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-12 tracking-wide">
        Showcase Schole Fitrah
      </h2>

      {/* Container Utama */}
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-lg border border-[#e7d7b9]/60 dark:border-[#2a2a2a] h-[420px] md:h-[480px]">
        {showcases.map((show, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
              i === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            } ${i === 0 ? "opacity-100 z-10" : ""} ${fadeState}`}
          >
            {/* === GAMBAR === */}
            <img
              src={`${show.img}?auto=format&fit=crop&w=1600&q=80`}
              alt={show.title}
              loading="lazy"
              className="w-full h-full object-cover brightness-[0.9] transition-transform duration-1000 ease-in-out"
            />

            {/* Overlay gradasi ganda */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d250d]/30 via-transparent to-transparent"></div>

            {/* Konten teks */}
            <div className="absolute bottom-10 left-0 right-0 text-white px-8 fade-text">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-md flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6 text-[#ffdc9a]" />
                {show.title}
              </h3>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 leading-relaxed mb-5">
                {show.desc}
              </p>
              <a
                href={show.link}
                className="inline-block border border-[#ffdc9a] text-[#ffdc9a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#ffdc9a] hover:text-[#5B4636] shadow-md transition-all duration-300"
              >
                Lihat Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigasi manual (dot indikator) */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {showcases.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFadeState("fade-out");
              setTimeout(() => {
                setActiveIndex(i);
                setFadeState("fade-in");
              }, 400);
            }}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
              activeIndex === i
                ? "bg-[#C59C6C] scale-125 shadow-[0_0_10px_#c59c6c]"
                : "bg-[#e7d7b9] hover:bg-[#C59C6C]/70"
            }`}
          ></button>
        ))}
      </div>

      {/* Animasi CSS */}
      <style>{`
        .fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .fade-out {
          animation: fadeOut 1.2s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        .fade-text {
          animation: slideUp 1s ease-in-out;
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
