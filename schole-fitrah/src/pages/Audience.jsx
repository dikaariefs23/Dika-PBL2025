import React from "react";

export default function Audience() {
  return (
    <section
      className="min-h-screen py-20 text-[#5b4636]
      bg-gradient-to-b from-[#fffaf5] via-[#fff4e6] to-[#f5e3c5]
      dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]
      dark:text-[#fafafa] transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* === JUDUL === */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#7A5230] dark:text-[#ffdc9a] mb-6">
          Untuk Siapa Schole Fitrah?
        </h1>

        {/* === DESKRIPSI === */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Schole Fitrah ditujukan bagi seluruh keluarga, pendidik, dan komunitas yang ingin
          menumbuhkan fitrah manusia secara utuh.
        </p>

        {/* === CARD GRID === */}
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              title: "Untuk Orang Tua",
              desc:
                "Mendampingi orang tua agar mampu menjadi teladan dan fasilitator dalam proses pendidikan anak.",
            },
            {
              title: "Untuk Pendidik",
              desc:
                "Membantu guru memahami pendekatan fitrah dan menerapkannya dalam pembelajaran.",
            },
            {
              title: "Untuk Komunitas",
              desc:
                "Membangun jaringan pembelajar yang berkolaborasi untuk pendidikan berbasis nilai dan kemanusiaan.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-[#ffffff]/90 dark:bg-[#111111]/90
              border border-[#f0e5d1] dark:border-[#1f1f1f]
              rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              hover:shadow-[0_8px_25px_rgba(255,220,154,0.15)]
              p-8 w-full md:w-72 transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-[#7A5230] dark:text-[#ffdc9a] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>

              {/* === GARIS EMAS DENGAN GLOW === */}
              <div
                className="mt-5 w-12 h-1 mx-auto rounded-full
                bg-gradient-to-r from-[#b27b3d] to-[#e0b56f]
                opacity-0 group-hover:opacity-100 transition-all duration-500
                shadow-[0_0_10px_#b27b3d]"
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* === GRADIENT HALUS DI BAWAH === */}
      <div
        className="absolute inset-x-0 bottom-0 h-32
        bg-gradient-to-t from-[#b27b3d]/10 to-transparent
        dark:from-[#0b0b0b] dark:to-transparent"
      ></div>
    </section>
  );
}
