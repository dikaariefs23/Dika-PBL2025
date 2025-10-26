import jerseyTimnas from "../assets/jerseytimnas.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Katalog() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <div className="katalog-header">
        <div className="menu-mock" tabIndex={0}
          onClick={() => setSidebarOpen(v => !v)}
          style={{ cursor: "pointer" }}>
          <span /><span /><span />
        </div>
        Dik` Store
        <Link className="tombol-kanan" to="/">&lt; Kembali</Link>
      </div>
      <div className="katalog-root">
        {sidebarOpen && (
          <aside className="katalog-sidebar">
            <div style={{ fontWeight: 600, marginBottom: 10 }}>Katalog</div>
            <form className="katalog-list">
              <label><input type="radio" name="kat" /> Jersey Klub Asia</label>
              <label><input type="radio" name="kat" /> Jersey Klub Eropa</label>
              <label><input type="radio" name="kat" /> Jersey Klub America</label>
              <label><input type="radio" name="kat" defaultChecked /> Jersey Tim Nasional</label>
            </form>
          </aside>
        )}
        <main className="katalog-content">
          <div className="product-grid">
            {[...Array(8)].map((_, idx) =>
              <div className="product-card" key={idx}>
                <img src={jerseyTimnas} width={120} alt="Jersey Timnas Indonesia" />
                <div className="product-title">Jersey Timnas Indonesia</div>
                <button className="btn btn-green">Beli Sekarang</button>
              </div>
            )}
          </div>
        </main>
      </div>
      <div className="footer">Dik's Store @2025</div>
    </div>
  );
}
