import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md border-b border-white/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#b26e63]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sis Curtains
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-[#b26e63] transition">Home</Link></li>
          <li><Link to="/products" className="hover:text-[#b26e63] transition">Products</Link></li>
          <li><Link to="/about" className="hover:text-[#b26e63] transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-[#b26e63] transition">Contact</Link></li>
        </ul>

        {/* CTA Button (Desktop) */}
        <Link
          to="/contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-[#b26e63] text-white hover:bg-[#a05f55] transition"
        >
          Book a Visit
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl text-[#b26e63] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-white/70 backdrop-blur-md border-t border-white/30 shadow">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={closeMenu} className="block hover:text-[#b26e63] transition">Home</Link></li>
            <li><Link to="/products" onClick={closeMenu} className="block hover:text-[#b26e63] transition">Products</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block hover:text-[#b26e63] transition">About</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block hover:text-[#b26e63] transition">Contact</Link></li>
          </ul>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 inline-block w-full text-center px-5 py-2 rounded-full bg-[#b26e63] text-white hover:bg-[#a05f55] transition"
          >
            Book a Visit
          </Link>
        </div>
      )}
    </header>
  );
};