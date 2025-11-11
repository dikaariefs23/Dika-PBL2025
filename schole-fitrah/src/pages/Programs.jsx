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
    <section className="relative py-20 pb-36 text-center overflow-hidden 
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b] 
      transition-colors duration-700">
      
      <div className="relative z-10">
        {/* Judul */}
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
              className="group bg-[#ffffff]/90 dark:bg-[#111111]/90 
              border border-[#e2d3b8] dark:border-[#1f1f1f] 
              rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] 
              hover:shadow-[0_8px_25px_rgba(255,220,154,0.15)] 
              p-8 transition-all duration-500 hover:-translate-y-2"
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

      {/* Efek gradasi bawah halus */}
      <div className="absolute inset-x-0 bottom-0 h-32 
        bg-gradient-to-t from-[#b27b3d]/10 to-transparent 
        dark:from-[#0b0b0b] dark:to-transparent">
      </div>
    </section>
  );
}
