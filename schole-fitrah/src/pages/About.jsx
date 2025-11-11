import React from "react";

export default function About() {
  return (
    <section
      className="min-h-screen py-20 text-[#5b4636] bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]
      dark:text-[#fafafa] transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* === JUDUL === */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Tentang Schole Fitrah
        </h1>

        {/* === DESKRIPSI === */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Schole Fitrah merupakan lembaga pendidikan yang berfokus pada penumbuhan fitrah anak dan keluarga.
          Kami mengintegrasikan nilai-nilai spiritual, sosial, dan akademik agar setiap anak tumbuh sesuai
          kodrat dan potensinya.
        </p>

        {/* === VISI & MISI === */}
        <div className="grid md:grid-cols-2 gap-10 justify-items-center">
          {/* === VISI === */}
          <div
            className="group bg-[#ffffff]/90 dark:bg-[#111111]/90 border border-[#f0e5d1] dark:border-[#1f1f1f]
            rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            hover:shadow-[0_8px_25px_rgba(255,220,154,0.15)]
            p-8 w-full md:w-80 transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-[#7A5230] dark:text-[#ffdc9a] mb-3">
              Visi
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Menjadi lembaga pendidikan yang membantu keluarga menumbuhkan fitrah anak secara utuh,
              berlandaskan nilai ilahiah dan kemanusiaan.
            </p>
            {/* === GARIS EMAS === */}
            <div className="mt-5 w-12 h-1 bg-gradient-to-r from-[#b27b3d] to-[#e0b56f] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          {/* === MISI === */}
          <div
            className="group bg-[#ffffff]/90 dark:bg-[#111111]/90 border border-[#f0e5d1] dark:border-[#1f1f1f]
            rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            hover:shadow-[0_8px_25px_rgba(255,220,154,0.15)]
            p-8 w-full md:w-80 transition-all duration-500 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-[#7A5230] dark:text-[#ffdc9a] mb-3">
              Misi
            </h3>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-2">
              <li>Menumbuhkan potensi anak sesuai kodratnya.</li>
              <li>Mendampingi orang tua sebagai pendidik utama anak.</li>
              <li>Membangun komunitas pembelajar yang kolaboratif.</li>
            </ul>
            {/* === GARIS EMAS === */}
            <div className="mt-5 w-12 h-1 bg-gradient-to-r from-[#b27b3d] to-[#e0b56f] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* === GRADIENT BAWAH NYATU DENGAN FOOTER === */}
      <div
        className="absolute inset-x-0 bottom-0 h-32
        bg-gradient-to-t from-[#b27b3d]/10 to-transparent
        dark:from-[#0b0b0b] dark:to-transparent"
      ></div>
    </section>
  );
}
