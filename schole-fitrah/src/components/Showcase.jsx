import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const Showcase = () => {
  const showcases = [
    {
      title: "Lingkungan Belajar Alamiah",
      desc: "Suasana belajar yang natural dan menyenangkan, memungkinkan anak tumbuh sesuai fitrahnya.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      title: "Festival Fitrah Tahunan",
      desc: "Ajang bagi anak dan keluarga untuk menampilkan hasil karya dan perjalanan fitrah mereka.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      title: "Ruang Kolaborasi Komunitas",
      desc: "Menghubungkan para pendidik, orang tua, dan anak dalam komunitas belajar berbasis nilai fitrah.",
      img: "https://images.unsplash.com/photo-1522202195461-0bc66bb7f34b?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  // Efek transisi crossfade + auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % showcases.length);
        setFadeState("fade-in");
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, [showcases.length]);

  return (
    <section id="showcase" className="py-16 px-6 text-center bg-transparent fade-up">
      <h2 className="text-3xl font-bold text-[#7A5230] mb-12">Showcase Schole Fitrah</h2>

      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* Container gambar */}
        <div className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          {showcases.map((show, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${fadeState}`}
            >
              <img
                src={show.img}
                alt={show.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-white px-6">
                <h3 className="text-2xl font-semibold mb-2 drop-shadow-md flex items-center justify-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#ffdc9a]" />
                  {show.title}
                </h3>
                <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200 leading-relaxed mb-4">
                  {show.desc}
                </p>
                <a
                  href={show.link}
                  className="inline-block border border-[#ffdc9a] text-[#ffdc9a] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#ffdc9a] hover:text-[#5B4636] transition-all duration-300"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi manual */}
        <div className="flex justify-center items-center gap-3 mt-6">
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-[#C59C6C] scale-125 shadow-md"
                  : "bg-[#E2C8A8] hover:bg-[#C59C6C]/60"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Tambahan animasi halus */}
      <style>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .fade-out {
          animation: fadeOut 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
