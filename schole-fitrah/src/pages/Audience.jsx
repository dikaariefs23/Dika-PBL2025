import React from "react";

export default function Audience() {
  return (
    <section className="min-h-screen bg-[#fffdfb] text-[#5b4636] dark:bg-[#101010] dark:text-[#fafafa] pt-28 pb-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* JUDUL */}
        <h1 className="text-3xl font-bold text-[color:var(--sf-brown)] dark:text-[#ffdc9a] mb-6">
          Untuk Siapa Schole Fitrah?
        </h1>

        {/* DESKRIPSI */}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          Schole Fitrah ditujukan bagi seluruh keluarga, pendidik, dan komunitas yang ingin
          menumbuhkan fitrah manusia secara utuh.
        </p>

        {/* 3 CARD */}
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
              className="bg-white dark:bg-[#181818] shadow-md rounded-2xl p-8 w-full md:w-72 border border-[#f0e5d1] dark:border-[#2c2c2c] transition hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[color:var(--sf-brown)] dark:text-[#ffdc9a] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>

              {/* aksen garis emas halus */}
              <div className="mt-5 h-[2px] w-12 mx-auto rounded bg-[color:var(--sf-gold)]/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
