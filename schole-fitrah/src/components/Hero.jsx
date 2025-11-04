import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 bg-gradient-to-b from-[#fffdfb] to-white dark:from-[#1c1c1c] dark:to-[#111] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Bagian kiri - teks hero */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-sfBrown dark:text-sfGold transition-colors duration-300">
            Schole Fitrah – <br />
            Menumbuhkan Fitrah Anak & Keluarga
          </h1>

          <p className="text-base md:text-lg text-sfDark/90 dark:text-gray-300 mb-6 leading-relaxed">
            Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan sosial;
            relevan bagi keluarga modern di era digital.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/programs"
              className="px-6 py-3 rounded-full bg-sfGold text-white font-semibold hover:bg-sfBrown transition-colors duration-300"
            >
              Lihat Program
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-sfGold text-sfGold hover:bg-sfGold hover:text-white dark:text-sfLight dark:border-sfGold dark:hover:bg-sfGold/80 dark:hover:text-white transition-colors duration-300"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Bagian kanan - daftar poin */}
        <div className="bg-white dark:bg-[#222] shadow-soft rounded-2xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-3 text-sfBrown dark:text-sfGold">
            Tujuan Utama
          </h3>
          <ul className="space-y-2 list-disc list-inside text-sfDark/90 dark:text-gray-300">
            <li>Menumbuhkan fitrah iman, adab, dan potensi unik anak.</li>
            <li>Integrasi 7 aspek Tarbiyatul Aulad secara modern.</li>
            <li>Jaringan pembelajaran: Anak, Orang Tua, & Komunitas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
