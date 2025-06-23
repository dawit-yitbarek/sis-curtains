import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function About() {
    return (
        <>
            {/* Navbar section */}
            <Navbar />

            <section className="pt-28 pb-20 px-6 md:px-20 bg-white text-gray-800 font-[Inter]">
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                            About Sis Curtains
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Inspired by elegance, driven by quality — Sis Curtains brings your dream interiors to life.
                        </p>
                    </motion.div>

                    {/* Brand Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-10 items-center"
                    >
                        <img src="/images/curtains.jpg" alt="Curtain Style" className="rounded-lg shadow-md" />
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-[#b26e63]">Our Story</h2>
                            <p className="text-gray-700 leading-relaxed">
                                At Sis Curtains, we believe every home deserves elegance. Started with a passion for beautiful
                                living spaces, we specialize in high-quality curtains and carpets tailored to your taste.
                                From modern minimalism to rich traditional patterns, we craft solutions that blend style and comfort.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission & Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-3 gap-10 text-center"
                    >
                        {[
                            {
                                icon: <FaEye className="text-3xl text-[#b26e63] mx-auto mb-4" />,
                                title: "Vision",
                                desc: "To become Ethiopia’s leading home decor brand, known for timeless designs and premium service.",
                            },
                            {
                                icon: <FaBullseye className="text-3xl text-[#b26e63] mx-auto mb-4" />,
                                title: "Mission",
                                desc: "To enhance lives through beautiful spaces by offering tailored curtain and carpet solutions.",
                            },
                            {
                                icon: <FaHeart className="text-3xl text-[#b26e63] mx-auto mb-4" />,
                                title: "Values",
                                desc: "Integrity, craftsmanship, customer-first mindset, and passion for design excellence.",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-[#fef8f5] rounded-xl border shadow hover:shadow-lg transition"
                            >
                                {item.icon}
                                <h4 className="text-xl font-bold mb-3 text-[#b26e63]">{item.title}</h4>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer section */}
            <Footer />
        </>
    );
};