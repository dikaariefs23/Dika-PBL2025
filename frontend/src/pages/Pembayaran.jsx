import { useState } from "react";
import { Link } from "react-router-dom";
import imgJersey from "../assets/jerseytimnas.jpg";

export default function Pembayaran() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-container">
      <div className="katalog-header">
        <div className="menu-mock" tabIndex={0} onClick={() => setMenuOpen(true)} style={{cursor:"pointer"}}>
          <span /><span /><span />
        </div>
        Pembayaran
        <Link className="tombol-kanan" to="/">&lt; Kembali</Link>
      </div>
      {menuOpen && (
        <>
          <div className="menu-overlay" onClick={closeMenu}/>
          <nav className="nav-sidebar-home">
            <button className="navbar-exit" onClick={closeMenu} title="Tutup">×</button>
            <Link to="/" onClick={closeMenu}>Beranda</Link>
            <Link to="/katalog" onClick={closeMenu}>Katalog</Link>
            <Link to="/register" onClick={closeMenu}>Registrasi</Link>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </nav>
        </>
      )}
      <div className="payment-center">
        <div className="payment-block">
          <img src={imgJersey} alt="Jersey Timnas"/>
          <div className="product-title">Jersey Tim Nasional Indonesia</div>
          <div className="product-price">Rp. 750.000</div>
          <a href="https://wa.me/628XXXX?" target="_blank" className="btn btn-green" style={{ fontWeight:700, fontSize:"1.13rem", textAlign:"center"}}>
            Selesaikan Pembayaran<br />di Whatsapp
          </a>
        </div>
      </div>
      <div className="footer">Dik's Store @2025</div>
    </div>
  );
}
