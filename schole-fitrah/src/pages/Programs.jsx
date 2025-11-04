import React from 'react'

export default function Programs() {
  return (
    <section className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Program Schóle Fitrah</h1>
        <p className="text-lg text-slate-600 mb-10">
          Program kami dirancang untuk menumbuhkan 7 aspek Tarbiyatul Aulad secara modern,
          meliputi dimensi jasmani, akal, ruhani, dan sosial.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Fitrah Diri</h3>
            <p className="text-slate-600">Menumbuhkan kesadaran diri, iman, dan adab anak sebagai khalifah di bumi.</p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Fitrah Belajar</h3>
            <p className="text-slate-600">Membangun proses belajar mandiri yang relevan dengan kehidupan nyata.</p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Fitrah Sosial</h3>
            <p className="text-slate-600">Menumbuhkan empati, kolaborasi, dan semangat berbagi di masyarakat.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
