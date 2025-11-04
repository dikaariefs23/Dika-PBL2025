import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto text-center py-6 px-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-green-700">Schóle Fitrah</span>. Semua hak dilindungi.
        </p>
        <p className="text-slate-400 text-xs mt-1">
          Dikembangkan oleh tim proyek PBL 2025 — Frontend by Dika Arief Sugiyatna 💻
        </p>
      </div>
    </footer>
  )
}
