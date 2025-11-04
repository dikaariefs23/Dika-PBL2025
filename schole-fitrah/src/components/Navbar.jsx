import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    setIsDark(useDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-[#111]/80 transition-all duration-500">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Schole Fitrah Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-lg font-bold text-sfBrown dark:text-sfGold">
          Schole Fitrah
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-sm text-sfDark dark:text-gray-300 transition-colors duration-300">
        <li><a href="/" className="hover:text-sfGold">Home</a></li>
        <li><a href="/about" className="hover:text-sfGold">About</a></li>
        <li><a href="/programs" className="hover:text-sfGold">Programs</a></li>
        <li><a href="/talent-mapping" className="hover:text-sfGold">Talent Mapping</a></li>
        <li><a href="/audience" className="hover:text-sfGold">Audience</a></li>
      </ul>

      {/* Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border border-sfGold hover:bg-sfGold/20 transition-all"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDark ? (
          // ☀️ Light icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0 3a1 1 0 011 1v1H9v-1a1 1 0 011-1zm0-18a1 1 0 011 1V2H9V1a1 1 0 011-1zM19 9h1v2h-1a1 1 0 01-1-1 1 1 0 011-1zM0 9h1a1 1 0 011 1 1 1 0 01-1 1H0V9zm15.364 6.364l.707.707-1.414 1.414-.707-.707a1 1 0 011.414-1.414zM4.343 4.343l.707.707A1 1 0 013.636 6.46L2.222 5.05l.707-.707a1 1 0 011.414 0zM4.343 15.657a1 1 0 010 1.414l-.707.707L2.222 16.36l.707-.707a1 1 0 011.414 0zM16.364 4.343a1 1 0 010 1.414l-.707.707L14.243 5.05l.707-.707a1 1 0 011.414 0z" />
          </svg>
        ) : (
          // 🌙 Dark icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-200" viewBox="0 0 20 20">
            <path d="M17.293 13.293A7 7 0 016.707 2.707 7 7 0 1017.293 13.293z" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
