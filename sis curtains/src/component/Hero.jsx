import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#fef6f0] overflow-hidden flex items-center justify-center px-6 md:px-12 py-20">
      {/* Blurred gradient blobs (optimized) */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#e6cfc3] via-[#f9e5dc] to-[#fef6f0] rounded-full blur-3xl opacity-60 animate-blob will-change-transform"
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-gradient-to-tl from-[#f9e5dc] via-[#e6d8cf] to-[#f4ebe6] rounded-full blur-3xl opacity-50 animate-blob2 will-change-transform"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl bg-white/50 backdrop-blur-md px-10 py-14 rounded-3xl shadow-lg border border-white/40"
      >
        <h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome to <span className="text-[#b26e63]">Sis Curtains</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto">
          Where luxury meets fabric. Discover curtains and carpets that speak elegance.
        </p>
        <motion.button
          onClick={() => navigate("/products")}
          whileHover={{ scale: 1.05 }}
          className="bg-[#b26e63] hover:bg-[#a05f55] text-white px-8 py-3 rounded-full font-medium shadow-md transition"
        >
          Explore Collection
        </motion.button>
      </motion.div>

      {/* Floating faint shape */}
      <div className="absolute z-0 top-[20%] right-[10%] w-72 h-72 bg-[#ffffff20] backdrop-blur-md rounded-full rotate-45 animate-float-slow" />


      {/* Keyframe animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, 15px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10px, -12px) scale(1.05); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animate-blob2 {
          animation: blob2 24s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};