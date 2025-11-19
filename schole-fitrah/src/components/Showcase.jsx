import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

// IMPORT GAMBAR LOKAL
import ImgSaung from "../assets/showcase/showcase-saung-fitrah.jpeg";
import ImgSertifikat from "../assets/showcase/showcase-apresiasi-sertifikat.jpeg";
import ImgDispusipda from "../assets/showcase/showcase-edutrip-dispusipda.jpeg";

const Showcase = () => {
  const showcases = [
    ImgSaung,
    ImgSertifikat,
    ImgDispusipda
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcases.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showcases.length]);

  return (
    <section
      id="showcase"
      className="py-16 px-6 text-center 
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5] 
      dark:from-[#111] dark:via-[#0e0e0e] dark:to-[#0a0a0a]"
    >
      <h2 className="text-3xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-10 tracking-wide">
        Showcase Schole Fitrah
      </h2>

      <div className="relative max-w-5xl mx-auto overflow-hidden 
      rounded-3xl shadow-lg h-[420px] md:h-[480px]">

        {showcases.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-700 
            ${i === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}

      </div>

      <div className="flex justify-center mt-6 gap-2">
        {showcases.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all 
            ${i === activeIndex ? "bg-[#C59C6C] scale-110" : "bg-[#e7d7b9]"}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
