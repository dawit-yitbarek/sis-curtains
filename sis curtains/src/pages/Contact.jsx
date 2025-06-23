import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaTelegramPlane, FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";
import Navbar from '../component/Navbar';
import footer from '../component/Footer'
import Footer from "../component/Footer";

export default function Contact() {
    return (
        <>
            {/* navbar section */}
            <Navbar />

            <section className="min-h-screen bg-[#fef8f5] pt-28 pb-20 px-6 md:px-20 text-gray-800">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-semibold mb-12 text-center"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Let’s Connect With You
                    </motion.h2>

                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-xl shadow-xl space-y-6"
                        >
                            <div>
                                <label className="block mb-1 font-medium">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b26e63]"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Your Phone</label>
                                <input
                                    type="tel"
                                    placeholder="phone number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b26e63]"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Your Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Type your message here..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b26e63]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-[#b26e63] text-white px-6 py-3 rounded-full hover:bg-[#a05f55] transition"
                            >
                                <FiSend className="text-lg" />
                                Send Message
                            </button>
                        </motion.form>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-center space-y-6"
                        >
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 text-gray-700 text-lg">
                                    <FiPhone className="text-[#b26e63] text-2xl mt-1" />
                                    <div className="space-y-1">
                                        <a href="tel:+251911101049" className="block hover:underline">+251 911 101 049</a>
                                        <a href="tel:+251920549696" className="block hover:underline">+251 920 549 696</a>
                                        <a href="tel:+251923668888" className="block hover:underline">+251 923 668 888</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-700 text-lg">
                                    <FiMapPin className="text-[#b26e63] text-2xl" />
                                    <span>Addis Ababa, Ethiopia</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="my-6 border-t border-gray-200" />

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-[#b26e63]">Find Us On</h4>
                                <div className="flex gap-6 text-2xl">
                                    <a
                                        href="https://t.me/siscurtains"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-[#b26e63] transition"
                                    >
                                        <FaTelegramPlane />
                                    </a>
                                    <a
                                        href="https://tiktok.com/sis.curtains"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-[#b26e63] transition "
                                    >
                                        <FaTiktok />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/sis_curtain?igsh=M3liMjUzcGN6ZHM2"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-[#b26e63] transition "
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61567719637061"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-[#b26e63] transition "
                                    >
                                        <FaFacebookF />
                                    </a>
                                </div>
                            </div>


                            {/* Branch Locations */}
                            <div className="space-y-4 mt-8">
                                <h4 className="text-lg font-semibold text-[#b26e63]">Our Branches</h4>
                                <div className="space-y-4">
                                    <div className="bg-[#fef8f5] p-4 rounded-lg border border-[#ecdcd5] shadow-sm">
                                        <p className="font-medium text-gray-700 mb-1">Branch 1 – Gurd Shola, Sealite mehret</p>
                                        <a
                                            href="https://maps.app.goo.gl/6o8TZd7M5eT3pngr5"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-[#b26e63] hover:underline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                    <div className="bg-[#fef8f5] p-4 rounded-lg border border-[#ecdcd5] shadow-sm">
                                        <p className="font-medium text-gray-700 mb-1">Branch 2 – Yerer Alemayehu building</p>
                                        <a
                                            href="https://maps.app.goo.gl/Pc63j1ECBbU5t8KH7"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-[#b26e63] hover:underline"
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* footer section */}
            <Footer />
        </>
    );
};