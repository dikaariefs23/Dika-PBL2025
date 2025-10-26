import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="app-container">
      <div className="katalog-header">
        Dik` Store
        <Link className="tombol-kanan" to="/">&lt; Kembali</Link>
      </div>
      <div className="form-center">
        <form className="form-block">
          <h1>Masuk Akun</h1>
          <label>Username
            <input type="text" name="username" />
          </label>
          <label>Password
            <input type="password" name="password" />
          </label>
          <button type="submit" className="btn btn-blue">Masuk</button>
          <small>
            Lupa Password? Yuk admin bantu di Whatsapp
          </small>
        </form>
      </div>
      <div className="footer">Dik's Store @2025</div>
    </div>
  );
}
