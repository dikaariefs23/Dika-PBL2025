import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Katalog from './pages/Katalog';
import Register from './pages/Register';
import Login from './pages/Login';
import Pembayaran from './pages/Pembayaran';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </Router>
  );
}
