import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-semibold text-green-700">
          Schóle Fitrah
        </Link>

        <ul className="flex gap-6 text-slate-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-green-700 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/talent-mapping"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Talent Mapping
            </Link>
          </li>
          <li>
            <Link
              to="/audience"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Audience
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
