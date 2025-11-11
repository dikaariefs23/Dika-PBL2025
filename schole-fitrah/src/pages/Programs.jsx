import React from "react";

export default function Programs() {
  const cards = [
    {
      title: "Fitrah Diri",
      desc: "Menumbuhkan kesadaran diri, iman, adab, dan potensi unik anak sebagai khalifah di bumi.",
    },
    {
      title: "Fitrah Belajar",
      desc: "Mendorong proses belajar alami sesuai minat dan fitrah tumbuh anak, berbasis pengalaman nyata.",
    },
    {
      title: "Fitrah Sosial",
      desc: "Membangun jejaring kolaboratif antara anak, orang tua, dan komunitas sebagai ekosistem belajar.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5] dark:from-[#1a1a1a] dark:via-[#151515] dark:to-[#0e0e0e] text-center fade-section overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#704718] dark:text-[#ffdc9a] mb-4">
          Program Schole Fitrah
        </h2>
        <p className="text-[#4b3621]/80 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Program kami dirancang untuk menumbuhkan 7 aspek Tarbiyatul Aulad secara modern,
          meliputi dimensi jasmani, akal, ruhani, dan sosial.
        </p>

        {/* === Grid Cards === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white/90 dark:bg-[#181818]/90 backdrop-blur-md border border-[#e2d3b8] dark:border-[#2a2a2a] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(107,67,28,0.25)] p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#704718] dark:text-[#ffdc9a] mb-3">
                {card.title}
              </h3>
              <p className="text-[#5b4a36] dark:text-gray-200 leading-relaxed">
                {card.desc}
              </p>
              <div className="mt-5 w-12 h-1 bg-gradient-to-r from-[#b27b3d] to-[#e0b56f] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Latar belakang lembut (hiasan gradasi bawah) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#b27b3d]/10 to-transparent dark:from-[#2a2a2a]/40"></div>
    </section>
  );
}
