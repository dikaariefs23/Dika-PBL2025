import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="app-container">
      <div className="katalog-header">
        Dik` Store
        <Link className="tombol-kanan" to="/">&lt; Kembali</Link>
      </div>
      <div className="form-center">
        <form className="form-block">
          <h1>Pendaftaran Akun</h1>
          <label>Nama
            <input type="text" name="nama" />
          </label>
          <label>Username
            <input type="text" name="username" />
          </label>
          <label>Password
            <input type="password" name="password" />
          </label>
          <button type="submit" className="btn btn-red">Registrasi</button>
        </form>
      </div>
      <div className="footer">Dik's Store @2025</div>
    </div>
  );
}
