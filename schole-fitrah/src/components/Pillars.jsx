import React from 'react'
import { Lightbulb, BookOpen, Users } from 'lucide-react'

export default function Pillars() {
  const pillars = [
    {
      icon: <Lightbulb size={36} className="text-brand-600 mb-4" />,
      title: 'Fitrah Diri',
      desc: 'Menumbuhkan kesadaran diri, iman, adab, dan potensi unik orangtua dan anak sebagai khalifah dan rahmat di bumi.',
    },
    {
      icon: <BookOpen size={36} className="text-brand-600 mb-4" />,
      title: 'Fitrah Belajar',
      desc: 'Mendorong proses belajar alami sesuai minat dan potensi anak, berbasis pengalaman nyata.',
    },
    {
      icon: <Users size={36} className="text-brand-600 mb-4" />,
      title: 'Fitrah Sosial',
      desc: 'Membangun jejaring kolaboratif antara anak, orang tua, dan komunitas sebagai ekosistem belajar.',
    },
  ]

  return (
    <section className="section bg-white">
      <div className="container-narrow text-center">
        <h2 className="h2 mb-8">Tiga Pilar Schole Fitrah</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card hover:shadow-md transition bg-slate-50 border border-slate-100"
            >
              <div className="flex flex-col items-center">
                {p.icon}
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
