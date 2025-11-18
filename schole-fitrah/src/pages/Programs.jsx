import React from "react";

export default function Programs() {
  // List fase program (fleksibel, bisa ditambah sewaktu-waktu)
  const phases = [
    {
      title: "Fase I — Mentoring Fitrah Personal",
      desc: "Pendampingan mendalam untuk menggali fitrah personal anak dan keluarga melalui pembelajaran mingguan yang terstruktur.",
      link: "https://drive.google.com/drive/folders/13tciy0gNNPw8gHWzzE84yPQ4BGUtFe0_?usp=drive_link",
    },
    {
      title: "Fase II — Learning & Community Project",
      desc: "Fase aksi dan kolaborasi berbasis komunitas, berfokus pada pembiasaan, proyek nyata, dan penguatan karakter anak serta keluarga.",
      link: "https://drive.google.com/drive/folders/1ivsKMUy4TWPB-R2ZpTGgDT2yaqYBccTG?usp=drive_link",
    },

    // Jika ada fase berikutnya, tinggal tambah 1 objek baru di sini:
    // {
    //   title: "Fase III — …",
    //   desc: "Deskripsi singkat...",
    //   link: "LINK_FASE_3"
    // },
  ];

  return (
    <section
      className="min-h-screen py-20 text-center 
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]
      transition-colors duration-700 relative"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* ==== JUDUL ==== */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#704718] dark:text-[#ffdc9a] mb-6">
          Program Pengembangan Schole Fitrah
        </h1>

        <p className="text-lg leading-relaxed text-[#4b3621]/80 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Program pengembangan Schole Fitrah disusun dalam beberapa fase yang dapat
          berkembang sesuai kebutuhan, mulai dari pendalaman fitrah personal hingga aksi
          kolaboratif berbasis komunitas.
        </p>

        {/* ==== GRID KARTU ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {phases.map((item, i) => (
            <div
              key={i}
              className="group bg-white/90 dark:bg-[#111]/90 
              border border-[#e2d3b8] dark:border-[#1f1f1f] 
              rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.15)]
              hover:shadow-[0_8px_25px_rgba(255,220,154,0.18)]
              p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-[#704718] dark:text-[#ffdc9a] mb-4">
                {item.title}
              </h3>

              <p className="text-[#5b4a36] dark:text-gray-300 leading-relaxed mb-6">
                {item.desc}
              </p>

              <button
                onClick={() => window.open(item.link, "_blank")}
                className="px-6 py-3 rounded-full border border-[#c8ab76] 
                text-[#704718] dark:text-[#ffdc9a]
                hover:bg-[#c8ab76] hover:text-white
                transition-all duration-300"
              >
                Lihat Materi
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ==== GRADIENT BAWAH ==== */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 
        bg-gradient-to-t from-[#b27b3d]/10 to-transparent 
        dark:from-[#0b0b0b] dark:to-transparent"
      ></div>
    </section>
  );
}
