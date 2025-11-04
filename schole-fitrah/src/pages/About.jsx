import React from 'react'

export default function About() {
  return (
    <section className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Tentang Schóle Fitrah
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Schóle Fitrah merupakan lembaga pendidikan yang berfokus pada penumbuhan fitrah anak dan keluarga.
          Kami mengintegrasikan nilai-nilai spiritual, sosial, dan akademik agar setiap anak tumbuh sesuai kodrat dan potensinya.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Visi</h3>
            <p className="text-slate-600">
              Menjadi lembaga pendidikan yang membantu keluarga menumbuhkan fitrah anak secara utuh, berlandaskan nilai ilahiah dan kemanusiaan.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Misi</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Menumbuhkan potensi anak sesuai kodratnya.</li>
              <li>Mendampingi orang tua sebagai pendidik utama anak.</li>
              <li>Membangun komunitas pembelajar yang kolaboratif.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
