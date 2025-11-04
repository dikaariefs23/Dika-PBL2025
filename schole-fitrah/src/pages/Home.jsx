import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import { User, BookOpen, Users, Heart, Sprout, Sparkles } from "lucide-react";

const Home = () => {
  // reveal-on-scroll
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#fffdfb] text-[#5b4636] min-h-screen overflow-hidden">

      {/* HERO cinematic */}
      <div
        className="relative h-[78vh] md:h-[82vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* gradient + blur overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 backdrop-blur-[2px]" />
        {/* soft glass panel */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-8 rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-2xl hero-fade">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg tracking-tight">
            Schole Fitrah – Menumbuhkan Fitrah Anak & Keluarga
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
            Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan sosial; relevan
            bagi keluarga modern di era digital.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="btn btn-brand rounded-full px-6 py-3 shadow-soft hover:shadow-md">
              Lihat Program
            </button>
            <button className="btn btn-outline rounded-full px-6 py-3 bg-white/10 backdrop-blur-sm">
              Tentang Kami
            </button>
          </div>
        </div>
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdfb] to-transparent" />
      </div>

      {/* TUJUAN */}
      <div className="max-w-5xl mx-auto glass-card p-8 mt-16 fade-up">
        <h2 className="font-semibold text-2xl text-[#7A5230] mb-4 text-center">Tujuan Utama</h2>
        <ul className="list-disc list-inside space-y-2 text-left mx-auto w-fit">
          <li>Menumbuhkan inti diri: iman, adab, dan potensi unik anak.</li>
          <li>Integrasi 7 aspek Tarbiyatul Aulad secara modern.</li>
          <li>Jejaring pembelajaran: Anak – Orang Tua – Komunitas.</li>
        </ul>
      </div>

      {/* TIGA PILAR */}
      <section className="max-w-6xl mx-auto text-center mt-16 mb-14 px-6 fade-up">
        <h2 className="title-section mb-10 text-3xl">Tiga Pilar Schole Fitrah</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card glass hover-lift">
            <User className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Fitrah Diri</h3>
            <p className="text-sm leading-relaxed">
              Menumbuhkan kesadaran diri, iman, adab, dan potensi unik anak sebagai khalifah di bumi.
            </p>
          </div>
          <div className="card glass hover-lift">
            <BookOpen className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Fitrah Belajar</h3>
            <p className="text-sm leading-relaxed">
              Mendorong proses belajar alami sesuai minat dan fitrah tumbuh anak, berbasis pengalaman nyata.
            </p>
          </div>
          <div className="card glass hover-lift">
            <Users className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Fitrah Sosial</h3>
            <p className="text-sm leading-relaxed">
              Membangun jejaring kolaboratif antara anak, orang tua, dan komunitas sebagai ekosistem belajar.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="max-w-6xl mx-auto text-center px-6 fade-up">
        <h2 className="title-section mb-10 text-3xl">Program Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card glass hover-lift">
            <Heart className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Kelas Orang Tua</h3>
            <p className="text-sm leading-relaxed">
              Pendampingan orang tua agar memahami fitrah anak dan mampu menjadi teladan dalam rumah tangga.
            </p>
          </div>
          <div className="card glass hover-lift">
            <Sprout className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Tarbiyatul Aulad</h3>
            <p className="text-sm leading-relaxed">
              Program inti pembinaan anak usia dini dan sekolah dasar berbasis fitrah dan karakter.
            </p>
          </div>
          <div className="card glass hover-lift">
            <Sparkles className="w-9 h-9 text-[#C59C6C] mb-3 mx-auto" />
            <h3 className="font-semibold text-lg text-[#7A5230] mb-2">Learning Festival</h3>
            <p className="text-sm leading-relaxed">
              Ajang kolaborasi komunitas belajar untuk menumbuhkan fitrah belajar anak dan keluarga.
            </p>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <Showcase />
    </section>
  );
};

export default Home;
