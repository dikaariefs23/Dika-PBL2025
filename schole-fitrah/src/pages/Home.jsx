import React from 'react'
import { Link } from 'react-router-dom'
import Pillars from '../components/Pillars'
import Programs from '../components/Programs'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schóle Fitrah – Menumbuhkan Fitrah Anak & Keluarga
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan sosial;
              relevan bagi keluarga modern di era digital.
            </p>
            <div className="flex gap-3">
              <Link
                to="/programs"
                className="bg-brand-600 text-white rounded-xl px-4 py-2 hover:bg-brand-700"
              >
                Lihat Program
              </Link>
              <Link
                to="/about"
                className="border border-slate-200 rounded-xl px-4 py-2 hover:bg-slate-50"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <h3 className="text-lg font-semibold mb-2">Tujuan Utama</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Menumbuhkan inti diri: iman, adab, dan potensi unik anak.</li>
              <li>Integrasi 7 aspek Tarbiyatul Aulad secara modern.</li>
              <li>Jejaring pembelajaran: Anak – Orang Tua – Komunitas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Section */}
      <Pillars />

      {/* Program Unggulan Section */}
      <Programs />
    </>
  )
}
