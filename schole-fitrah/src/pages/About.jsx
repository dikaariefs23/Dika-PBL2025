import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-[#fffdfb] text-[#5b4636] dark:bg-[#101010] dark:text-[#fafafa] pt-28 pb-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* JUDUL */}
        <h1 className="text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Tentang Schole Fitrah
        </h1>

        {/* DESKRIPSI */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Schole Fitrah merupakan lembaga pendidikan yang berfokus pada penumbuhan fitrah anak dan keluarga.
          Kami mengintegrasikan nilai-nilai spiritual, sosial, dan akademik agar setiap anak tumbuh sesuai
          kodrat dan potensinya.
        </p>

        {/* VISI & MISI */}
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {/* VISI */}
          <div className="bg-white dark:bg-[#181818] shadow-md rounded-2xl p-8 w-full md:w-80 border border-[#f0e5d1] dark:border-[#2c2c2c] transition hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#7A5230] dark:text-[#ffdc9a] mb-3">
              Visi
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Menjadi lembaga pendidikan yang membantu keluarga menumbuhkan fitrah anak secara utuh,
              berlandaskan nilai ilahiah dan kemanusiaan.
            </p>
          </div>

          {/* MISI */}
          <div className="bg-white dark:bg-[#181818] shadow-md rounded-2xl p-8 w-full md:w-80 border border-[#f0e5d1] dark:border-[#2c2c2c] transition hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#7A5230] dark:text-[#ffdc9a] mb-3">
              Misi
            </h3>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-2">
              <li>Menumbuhkan potensi anak sesuai kodratnya.</li>
              <li>Mendampingi orang tua sebagai pendidik utama anak.</li>
              <li>Membangun komunitas pembelajar yang kolaboratif.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
