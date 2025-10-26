import { useState } from "react";
import { Link } from "react-router-dom";
import timnas from "../assets/jerseytimnas.jpg";
import persib from "../assets/jerseypersib.jpg";
import mu from "../assets/jerseymu.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-container">
      <div className="header">
        <div className="menu-mock" tabIndex={0} onClick={() => setMenuOpen(true)} style={{ cursor: "pointer" }}>
          <span /><span /><span />
        </div>
        Selamat Datang Di Website Penjualan Jersey Bola<br />Dik` Store
        <div className="header-actions">
          <Link className="btn btn-blue" to="/login">Masuk</Link>
          <Link className="btn btn-red" to="/register">Daftar</Link>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="menu-overlay" onClick={closeMenu}/>
          <nav className="nav-sidebar-home">
            <button className="navbar-exit" onClick={closeMenu} title="Tutup">×</button>
            <Link to="/" onClick={closeMenu}>Beranda</Link>
            <Link to="/katalog" onClick={closeMenu}>Katalog</Link>
            <Link to="/register" onClick={closeMenu}>Daftar/Registrasi</Link>
            <Link to="/login" onClick={closeMenu}>Masuk</Link>
          </nav>
        </>
      )}
      <div className="product-grid">
        <div className="product-card">
          <img src={timnas} width={120} alt="Jersey Timnas" />
          <div className="product-title">Jersey Timnas Official</div>
          <Link to="/pembayaran" className="btn btn-green">Beli Sekarang</Link>
        </div>
        <div className="product-card">
          <img src={persib} width={120} alt="Jersey Persib" />
          <div className="product-title">Jersey Persib Official</div>
          <Link to="/pembayaran" className="btn btn-green">Beli Sekarang</Link>
        </div>
        <div className="product-card">
          <img src={mu} width={120} alt="Jersey MU" />
          <div className="product-title">Jersey MU Official</div>
          <Link to="/pembayaran" className="btn btn-green">Beli Sekarang</Link>
        </div>
      </div>
      <div style={{ marginTop: 12, textAlign: 'center' }}>
        <Link to="/katalog" style={{ color: "#1b2533", textDecoration: "underline" }}>🛒 Katalog Lengkap</Link>
      </div>
      <div className="footer">Dik's Store @2025</div>
    </div>
  );
}
