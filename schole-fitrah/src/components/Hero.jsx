import { Link } from 'react-router-dom'


export default function Hero() {
return (
<section className="pt-16 pb-12 bg-gradient-to-b from-brand-50 to-white">
<div className="container-narrow">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="h1 mb-4">Schóle Fitrah – Menumbuhkan Fitrah Anak & Keluarga</h1>
<p className="lead mb-6">Pendidikan holistik yang menumbuhkan fitrah jasmani, akal, ruhani, dan sosial; relevan bagi keluarga modern di era digital.</p>
<div className="flex gap-3">
<Link to="/programs" className="btn btn-brand">Lihat Program</Link>
<Link to="/about" className="btn bg-white border border-slate-200">Tentang Kami</Link>
</div>
</div>
<div className="card">
<h3 className="text-lg font-semibold mb-2">Tujuan Utama</h3>
<ul className="space-y-2 text-slate-700 list-disc pl-5">
<li>Menumbuhkan inti diri: iman, adab, dan potensi unik anak.</li>
<li>Integrasi 7 aspek Tarbiyatul Aulad secara modern.</li>
<li>Jejaring pembelajaran: Anak–Orang Tua–Komunitas.</li>
</ul>
</div>
</div>
</div>
</section>
)
}