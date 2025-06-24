import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar section */}
      <Navbar />

      <section className="min-h-screen bg-[#fef8f5] flex flex-col items-center justify-center text-center px-6 mt-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-white/50"
        >
          <h1
            className="text-7xl font-bold text-[#b26e63] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
          <p className="text-xl text-gray-800 mb-6">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-block mt-2 bg-[#b26e63] text-white px-6 py-3 rounded-full hover:bg-[#a05f55] transition"
          >
            Back to Home
          </button>

        </motion.div>

        {/* Floating decorative element */}
        <div className="absolute top-[15%] left-[5%] w-60 h-60 bg-gradient-to-br from-[#f9e5dc] to-[#fef6f0] rounded-full blur-[120px] opacity-50 animate-float-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-gradient-to-tl from-[#e6d8cf] to-[#fef8f5] rounded-full blur-[140px] opacity-40 animate-float-slow" />

        <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
      </section>

      {/* Footer section */}
      <Footer />
    </>
  );
};