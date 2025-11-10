import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Talent Mapping", path: "/talentmapping" },
    { name: "Audience", path: "/audience" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md border-b ${
        scrolled
          ? "bg-white/95 dark:bg-[#0b0b0b]/90 border-[#e6d5b8]/60 dark:border-[#333] shadow-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3 md:py-4">
        {/* === Logo + Nama === */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Schole Fitrah Logo"
            className="w-9 h-9 object-cover rounded-full border border-[#dba94d] shadow-sm"
          />
          <h1
            className={`text-lg font-semibold tracking-wide transition-colors duration-500 ${
              scrolled
                ? "text-[#704718] dark:text-[#f4e7ca]"
                : "text-[#fff6e8] drop-shadow-md dark:text-[#f4e7ca]"
            }`}
          >
            Schole Fitrah
          </h1>
        </div>

        {/* === Menu Desktop === */}
        <ul
          className={`hidden md:flex items-center space-x-8 font-medium transition-colors duration-300 ${
            scrolled
              ? "text-[#704718] dark:text-[#f4e7ca]"
              : "text-[#fff6e8] dark:text-[#f4e7ca]"
          }`}
        >
          {links.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`cursor-pointer transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-[#dba94d] font-semibold"
                    : "hover:text-[#dba94d]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Tombol Dark Mode & Mobile Toggle === */}
        <div className="flex items-center gap-2">
          {/* Tombol Dark Mode */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`hidden md:flex p-2 rounded-full border transition duration-300 ${
              isDark
                ? "bg-[#dba94d] border-[#dba94d] text-white hover:bg-[#e5b760]"
                : "border-[#dba94d] text-[#dba94d] hover:bg-[#f4e2b2] hover:text-[#7b5522]"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md border transition-all duration-300 ${
              scrolled
                ? "border-[#dba94d]/60 text-[#704718] dark:text-[#f4e7ca]"
                : "border-white/50 text-[#fff6e8] dark:text-[#f4e7ca]"
            } hover:bg-[#f9f3ec]/80 dark:hover:bg-[#2a2a2a]/70`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* === Menu Mobile === */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 max-h-[500px]"
            : "opacity-0 -translate-y-2 max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-5 space-y-5 bg-white dark:bg-[#0b0b0b] border-t border-[#e6d5b8]/50 dark:border-[#333] shadow-lg rounded-b-2xl">
          {links.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 text-[16px] transition-colors ${
                  location.pathname === item.path
                    ? "text-[#dba94d] font-semibold"
                    : "text-[#704718] dark:text-[#f4e7ca] hover:text-[#dba94d]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Toggle Dark Mode di Mobile */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`flex items-center gap-2 px-5 py-2.5 mt-2 rounded-full border transition duration-300 ${
              isDark
                ? "bg-[#dba94d] border-[#dba94d] text-white hover:bg-[#e5b760]"
                : "border-[#dba94d] text-[#dba94d] hover:bg-[#f4e2b2] hover:text-[#7b5522]"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="text-sm">{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <div className="pb-4" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
