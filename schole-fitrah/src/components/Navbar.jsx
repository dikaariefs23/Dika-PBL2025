import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // toggle dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // efek saat scroll: ubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-[#1a1a1a]/90 border-[#f0e5d1] dark:border-[#333] shadow-md"
          : "bg-white/50 dark:bg-[#1a1a1a]/60 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* logo dan nama */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Schole Fitrah Logo"
            className="w-8 h-8 object-cover rounded-full border border-[#dba94d]"
          />
          <h1 className="text-lg font-semibold text-[#7b5522] dark:text-[#f4e7ca]">
            Schole Fitrah
          </h1>
        </div>

        {/* menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-[#7b5522] dark:text-[#f4e7ca]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Programs", path: "/programs" },
            { name: "Talent Mapping", path: "/talentmapping" },
            { name: "Audience", path: "/audience" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`cursor-pointer transition-colors duration-300 ${
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

        {/* dark mode toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full border transition duration-300 ${
            isDark
              ? "bg-[#dba94d] border-[#dba94d] text-white hover:bg-[#e5b760]"
              : "border-[#dba94d] text-[#dba94d] hover:bg-[#f4e2b2] hover:text-[#7b5522]"
          }`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
