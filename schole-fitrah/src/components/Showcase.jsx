import React from "react";

const showcases = [
  {
    title: "Lingkungan Belajar Alamiah",
    desc: "Ruang belajar alami yang menumbuhkan kemandirian, rasa ingin tahu, dan cinta terhadap alam serta nilai-nilai Islam.",
    img: "",
  },
  {
    title: "Kolaborasi Orang Tua & Anak",
    desc: "Pendampingan keluarga dalam proses pendidikan, membangun komunikasi yang hangat dan berlandaskan adab.",
    img: "",
  },
  {
    title: "Pembelajaran Kontekstual",
    desc: "Belajar berbasis pengalaman nyata dan nilai-nilai Islam, membentuk karakter beriman dan berakhlak mulia.",
    img: "",
  },
];

const Showcase = () => {
  return (
    <section className="py-16 text-center fade-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-sfBrown dark:text-[#ffdc9a] mb-12">
          Showcase Schole Fitrah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-sfBrown dark:text-[#ffdc9a] font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sfDark/80 dark:text-[#f8f8f8] leading-relaxed mb-4">
                  {item.desc}
                </p>
                <button className="border border-[#ffdc9a] text-[#ffdc9a] hover:bg-[#ffdc9a] hover:text-black transition px-4 py-2 rounded-full text-sm">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
