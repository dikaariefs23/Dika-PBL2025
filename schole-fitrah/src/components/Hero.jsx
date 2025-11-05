import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Animasi fade-in
    setTimeout(() => setIsVisible(true), 300);

    // Listener parallax scroll
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll ke bagian tertentu
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80&v=12')",
        backgroundAttachment: "fixed",
        backgroundPositionY: `${offsetY * 0.5}px`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay agar teks tetap kontras */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#5B4636]/40 to-transparent pointer-events-none"></div>

      {/* Konten utama */}
      <div
        className={`relative z-10 text-white px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          Schole Fitrah – Menumbuhkan Fitrah Anak & Keluarga
        </h1>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan
          sosial; relevan bagi keluarga modern di era digital.
        </p>

        {/* Tombol aksi */}
        <div
          className={`mt-8 flex justify-center gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => scrollToSection("programs")}
            className="bg-[color:var(--sf-gold)] text-[color:var(--sf-dark)] font-semibold px-6 py-2.5 rounded-full hover:bg-[color:var(--sf-brown)] hover:text-white transition-all shadow-md"
          >
            Lihat Program
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="border-2 border-[color:var(--sf-gold)] text-[color:var(--sf-gold)] font-semibold px-6 py-2.5 rounded-full hover:bg-[color:var(--sf-gold)] hover:text-white transition-all shadow-md"
          >
            Tentang Kami
          </button>
        </div>
      </div>

      {/* Tombol panah scroll ke bawah */}
      <div
        onClick={() => scrollToSection("tujuan-utama")}
        className={`absolute bottom-6 cursor-pointer animate-bounce text-[color:var(--sf-gold)] hover:text-white transition-all ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-sm mt-1 font-medium">Scroll ke bawah</p>
      </div>
    </section>
  );
};

export default Hero;
