import Section from '../components/Section'


const items = [
{ step: 'Fase I (Hari 1–3)', text: 'Pengarahan ide, kebutuhan website, dan struktur konten.' },
{ step: 'Fase II (Hari 4–6)', text: 'Desain sistem, rancangan visual, arsitektur website.' },
{ step: 'Fase III (Hari 7–14)', text: 'Implementasi frontend dan pengisian konten awal.' },
{ step: 'Fase IV (Hari 15–18)', text: 'Testing, optimisasi, dan finalisasi konten.' },
{ step: 'Fase V (Hari 19–20)', text: 'Peluncuran & serah terima hasil.' },
]


export default function Roadmap() {
return (
<Section id="roadmap" title="Roadmap Pengembangan Website (20 Hari)" subtitle="Tahapan singkat dari pengarahan hingga serah terima.">
<div className="grid md:grid-cols-2 gap-4">
{items.map((x, i) => (
<div key={i} className="card">
<span className="badge mb-2">{x.step}</span>
<p className="text-slate-700">{x.text}</p>
</div>
))}
</div>
</Section>
)
}