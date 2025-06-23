import React from "react";
import { FaStar, FaMoneyBillWave, FaPaintBrush } from "react-icons/fa";
import { motion } from 'framer-motion';

const features = [
    {
        icon: <FaStar className="text-3xl text-[#b26e63]" />,
        title: "Premium Materials",
        desc: "Top-grade fabrics and materials sourced globally.",
    },
    {
        icon: <FaMoneyBillWave className="text-3xl text-[#b26e63]" />,
        title: "Affordable Luxury",
        desc: "Style and quality without breaking the bank.",
    },
    {
        icon: <FaPaintBrush className="text-3xl text-[#b26e63]" />,
        title: "Custom Designs",
        desc: "We tailor your decor to match your vision.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#fef8f5] py-20 px-6 md:px-20 text-center">
            <h2
                className="text-4xl font-semibold mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
                {features.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-md transition space-y-3"
                    >
                        <div>{item.icon}</div>
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};