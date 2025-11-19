import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import { User, BookOpen, Users, Heart, Sprout, Sparkles } from "lucide-react";

const Home = () => {
  // Animasi fade-up saat scroll
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#fffdfb] dark:bg-[#0b0b0b] text-[#5b4636] dark:text-[#f5f3ee] min-h-screen overflow-hidden transition-colors duration-500 pb-32">
      {/* HERO */}
      <Hero />

      {/* TUJUAN UTAMA */}
      <section id="tujuan-utama" className="max-w-5xl mx-auto mt-20 px-6 fade-up text-center">
        <h2 className="font-semibold text-2xl text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Tujuan Utama
        </h2>
        <ul className="list-disc list-inside space-y-3 text-left mx-auto w-fit text-base leading-relaxed text-[#4a3a2a] dark:text-[#f2eee5]">
          <li>Menumbuhkan inti diri: iman, adab, dan potensi unik anak.</li>
          <li>Integrasi 7 aspek Tarbiyatul Aulad secara modern.</li>
          <li>Jejaring pembelajaran: Anak – Orang Tua – Komunitas.</li>
        </ul>
      </section>

      {/* TENTANG KAMI */}
      <section id="about" className="max-w-5xl mx-auto mt-24 px-6 fade-up text-center">
        <h2 className="text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Tentang Kami
        </h2>
        <p className="text-base text-gray-700 dark:text-[#e6e1d5] leading-relaxed max-w-3xl mx-auto">
          Schole Fitrah hadir untuk menumbuhkan fitrah anak dan keluarga melalui pendidikan berbasis nilai,
          pengalaman, dan kolaborasi. Kami berkomitmen membangun ekosistem belajar yang alami, modern,
          dan sesuai dengan fitrah tumbuh anak.
        </p>
      </section>

      {/* TIGA PILAR */}
      <section id="pilar" className="max-w-6xl mx-auto text-center mt-20 px-6 fade-up">
        <h2 className="title-section mb-12 text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a]">
          Tiga Pilar Schole Fitrah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              icon: <User className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Fitrah Diri",
              desc: "Menumbuhkan kesadaran diri, iman, adab, dan potensi unik anak sebagai khalifah di bumi.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Fitrah Belajar",
              desc: "Mendorong proses belajar alami sesuai minat dan fitrah tumbuh anak, berbasis pengalaman nyata.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Fitrah Sosial",
              desc: "Membangun jejaring kolaboratif antara anak, orang tua, dan komunitas sebagai ekosistem belajar.",
            },
          ].map((pilar, i) => (
            <div
              key={i}
              className="hover-lift transition-all duration-300 w-full md:w-80 text-center p-6 rounded-xl"
            >
              {pilar.icon}
              <h3 className="font-semibold text-lg text-[#7A5230] dark:text-[#ffdc9a] mb-2">
                {pilar.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-[#e0dbd0]">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section id="programs" className="max-w-6xl mx-auto text-center mt-20 px-6 fade-up">
        <h2 className="title-section mb-12 text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a]">
          Program Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              icon: <Heart className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Kelas Orang Tua",
              desc: "Pendampingan ayah bunda agar memahami fitrah diri dan anak sehingga mampu menjadi pembimbing dan teladan dalam keluarga.",
            },
            {
              icon: <Sprout className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Pendidikan Anak",
              desc: "Program pembinaan anak usia dini, usia dasar dan pemuda berbasis potensi dengan mengacu pada 7 pilar pendidikan.",
            },
            {
              icon: <Sparkles className="w-10 h-10 text-[#C59C6C] mb-3 mx-auto" />,
              title: "Kolaborasi Pentahelix",
              desc: "Ajang kolaborasi antara lima elemen; akademisi, dunia  industri, komunitas, pemerintah, dan media yang bertujuan untuk menciptakan ekosistem yang saling melengkapi guna mencapai tujuan berkelanjutan.",
            },
          ].map((program, i) => (
            <div
              key={i}
              className="hover-lift transition-all duration-300 w-full md:w-80 text-center p-6 rounded-xl"
            >
              {program.icon}
              <h3 className="font-semibold text-lg text-[#7A5230] dark:text-[#ffdc9a] mb-2">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-[#e0dbd0]">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <div className="mt-24 fade-up">
        <Showcase />
      </div>
    </section>
  );
};

export default Home;
