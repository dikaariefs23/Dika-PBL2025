import React, { useEffect, useState } from "react";
import heroImg from "/src/assets/hero.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`hero-section relative h-[95vh] flex flex-col items-center justify-center overflow-hidden text-center transition-all duration-700 ease-in-out dark:text-[#f5f3ee] ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${heroImg})`,
          transform: `translateY(${offsetY * 0.2}px)`,
          backgroundAttachment: isMobile ? "scroll" : "fixed",
        }}
      ></div>

      {/* Overlay agar tulisan tetap terbaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent dark:from-black/70 dark:via-black/50 dark:to-transparent transition-opacity duration-700 ease-in-out"></div>

      {/* Konten utama */}
      <div
        className={`relative z-10 px-6 text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#ffdc9a] hero-glow mb-4">
          Schole Fitrah – Menumbuhkan Fitrah Anak & Keluarga
        </h1>
        <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium">
          Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan sosial;
          relevan bagi keluarga modern di era digital.
        </p>

        {/* Tombol */}
        <div
          className={`mt-8 flex justify-center gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => scrollToSection("programs")}
            className="bg-[color:var(--sf-gold)] text-[color:var(--sf-dark)] font-semibold px-7 py-3 rounded-full hover:bg-[color:var(--sf-brown)] hover:text-white transition-all shadow-lg active:scale-95"
          >
            Lihat Program
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="border-2 border-[color:var(--sf-gold)] text-[color:var(--sf-gold)] font-semibold px-7 py-3 rounded-full hover:bg-[color:var(--sf-gold)] hover:text-white transition-all shadow-lg active:scale-95"
          >
            Tentang Kami
          </button>
        </div>
      </div>

      {/* Panah scroll */}
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
