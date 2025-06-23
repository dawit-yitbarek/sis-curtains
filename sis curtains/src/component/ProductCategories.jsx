import React from "react";
import { motion } from "framer-motion";


export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      title: "Curtains",
      desc: "Stylish drapes that bring warmth and elegance to your space.",
      icon: "assets/curtain.svg",
      bgGradient: "from-[#fbeae3] via-[#f6d4c9] to-[#fef8f5]",
    },
    {
      id: 2,
      title: "Carpets",
      desc: "Soft and rich carpets to elevate your floor game.",
      icon: "assets/carpet.svg",
      bgGradient: "from-[#fdf3ee] via-[#edd6c9] to-[#fef8f5]",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2
        className="text-4xl font-semibold mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Products
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {categories.map(({ id, title, desc, icon, bgGradient }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.05 }}
            className={`p-12 rounded-3xl bg-gradient-to-br ${bgGradient} shadow-lg cursor-pointer flex flex-col items-center justify-center`}
          >
            <div className="mb-6">
              <img src={icon} alt={title} className="w-20 h-20 mb-6 filter sepia hue-rotate-[10deg] brightness-90" />
            </div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h3>
            <p className="text-gray-700 max-w-md">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};