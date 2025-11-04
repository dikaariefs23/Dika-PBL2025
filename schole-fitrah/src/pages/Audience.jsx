import React from 'react'

export default function Audience() {
  return (
    <section className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Untuk Siapa Schole Fitrah?</h1>
        <p className="text-lg text-slate-600 mb-10">
          Schole Fitrah ditujukan bagi seluruh keluarga, pendidik, dan komunitas yang ingin menumbuhkan fitrah manusia secara utuh.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Untuk Orang Tua</h3>
            <p className="text-slate-600">
              Mendampingi orang tua agar mampu menjadi teladan dan fasilitator dalam proses pendidikan anak.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Untuk Pendidik</h3>
            <p className="text-slate-600">
              Membantu guru memahami pendekatan fitrah dan menerapkannya dalam pembelajaran.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Untuk Komunitas</h3>
            <p className="text-slate-600">
              Membangun jaringan pembelajar yang berkolaborasi untuk pendidikan berbasis nilai dan kemanusiaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
