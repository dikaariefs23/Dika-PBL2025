import React from "react";

export default function Programs() {
  return (
    <section className="py-16 text-center fade-section">
      <h2 className="text-3xl font-bold text-sfBrown dark:text-[#ffdc9a] mb-4">
        Program Schole Fitrah
      </h2>
      <p className="text-sfDark/80 dark:text-gray-200 max-w-2xl mx-auto mb-10">
        Program kami dirancang untuk menumbuhkan 7 aspek Tarbiyatul Aulad secara
        modern, meliputi dimensi jasmani, akal, ruhani, dan sosial.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {/* Card 1 */}
        <div className="card bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#2a2a2a]">
          <h3 className="text-sfBrown dark:text-[#ffdc9a] font-semibold text-lg mb-2">
            Fitrah Diri
          </h3>
          <p className="text-sfDark/80 dark:text-gray-100">
            Menumbuhkan kesadaran diri, iman, adab, dan potensi unik anak
            sebagai khalifah di bumi.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#2a2a2a]">
          <h3 className="text-sfBrown dark:text-[#ffdc9a] font-semibold text-lg mb-2">
            Fitrah Belajar
          </h3>
          <p className="text-sfDark/80 dark:text-gray-100">
            Mendorong proses belajar alami sesuai minat dan fitrah tumbuh anak,
            berbasis pengalaman nyata.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#2a2a2a]">
          <h3 className="text-sfBrown dark:text-[#ffdc9a] font-semibold text-lg mb-2">
            Fitrah Sosial
          </h3>
          <p className="text-sfDark/80 dark:text-gray-100">
            Membangun jejaring kolaboratif antara anak, orang tua, dan komunitas
            sebagai ekosistem belajar.
          </p>
        </div>
      </div>
    </section>
  );
}
