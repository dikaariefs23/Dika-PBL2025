import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Komponen umum
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Halaman
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Audience from "./pages/Gallery";
import TalentMapping from "./pages/TalentMapping";
import NotFound from "./pages/NotFound";

// 🔥 Hook animasi fade-up saat scroll
function useFadeUpOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useFadeUpOnScroll(); // ✅ aktifkan animasi scroll global

  return (
    <>
      <div className="flex flex-col min-h-full bg-sfLight text-sfDark dark:bg-[#0b0b0b] dark:text-sfLight transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/talentmapping" element={<TalentMapping />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
