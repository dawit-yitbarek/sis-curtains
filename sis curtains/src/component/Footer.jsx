import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sis Curtains
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Elegant curtains & luxurious carpets for the spaces you love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#e6d8cf] transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#e6d8cf] transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-[#e6d8cf] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#e6d8cf] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>

          <p className="flex items-center text-sm text-gray-300 mb-2">
            <FiMapPin className="mr-2" /> Addis Ababa, Ethiopia
          </p>

          <div className="text-sm text-gray-300 mb-2">
            <p className="mb-1 flex items-center"><FiPhone className="mr-2" /> +251 911 101 049</p>
            <p className="mb-1 flex items-center"><FiPhone className="mr-2" /> +251 920 549 696</p>
            <p className="mb-1 flex items-center"><FiPhone className="mr-2" /> +251 923 668 888</p>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Sis Curtains. All rights reserved.
      </div>
    </footer>
  );
};