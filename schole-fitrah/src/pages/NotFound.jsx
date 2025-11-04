import { Link } from 'react-router-dom'


export default function NotFound() {
return (
<div className="container-narrow section">
<h1 className="h1 mb-2">Halaman tidak ditemukan</h1>
<p className="lead mb-6">Maaf, tautan yang kamu buka tidak tersedia.</p>
<Link to="/" className="btn btn-brand">Kembali ke Beranda</Link>
</div>
)
}