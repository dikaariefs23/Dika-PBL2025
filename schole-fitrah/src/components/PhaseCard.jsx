export default function PhaseCard({ title, focus, items = [], output }) {
return (
<div className="card h-full flex flex-col">
<h3 className="font-semibold text-lg mb-2">{title}</h3>
{focus && <p className="mb-3 text-slate-700"><span className="font-medium">Fokus:</span> {focus}</p>}
{items.length > 0 && (
<ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
{items.map((x, i) => <li key={i}>{x}</li>)}
</ul>
)}
{output && <p className="mt-auto text-sm text-slate-600"><span className="font-medium">Output:</span> {output}</p>}
</div>
)
}