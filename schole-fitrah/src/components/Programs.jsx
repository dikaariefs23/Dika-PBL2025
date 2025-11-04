import React from 'react'
import { GraduationCap, Heart, Users2 } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      icon: <GraduationCap size={36} className="text-brand-600 mb-4" />,
      title: 'Kelas Orang Tua',
      desc: 'Pendampingan orang tua agar memahami fitrah anak dan mampu menjadi teladan dalam rumah tangga.',
    },
    {
      icon: <Heart size={36} className="text-brand-600 mb-4" />,
      title: 'Tarbiyatul Aulad',
      desc: 'Program inti pembinaan anak usia dini dan sekolah dasar berbasis fitrah & karakter.',
    },
    {
      icon: <Users2 size={36} className="text-brand-600 mb-4" />,
      title: 'Learning Festival',
      desc: 'Ajang kolaborasi komunitas belajar untuk menumbuhkan fitrah belajar anak dan keluarga.',
    },
  ]

  return (
    <section className="section bg-slate-50">
      <div className="container-narrow text-center">
        <h2 className="h2 mb-8">Program Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              className="card hover:shadow-md transition border border-slate-100"
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
