import React from 'react';
import { useNavigate } from 'react-router-dom'
import Testimonial from '../component/testimonial';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ProductCategories from '../component/ProductCategories'
import WhyChooseUs from '../component/WhyChooseUs'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div style={{ fontFamily: "'Inter', sans-serif" }} className="text-gray-800 bg-white">
        {/* Hero */}
        <Hero />

        {/* Wave Transition */}
        <svg className="w-full -mt-1" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C720,100 720,0 1440,100 L1440,00 L0,0 Z" fill="#ffffff" />
        </svg>

        {/* Product Categories */}
        <ProductCategories />

        {/* Decorative Section Separator */}
        <svg className="w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C720,0 720,100 1440,0 L1440,100 L0,100 Z" fill="#fef8f5" />
        </svg>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonial />

        {/* CTA */}
        <section className="bg-[#e6d8cf] text-center py-16 px-6">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Elevate Your Space?
          </h2>
          <p className="mb-6 text-gray-700 text-lg max-w-xl mx-auto">
            Contact us today or explore our premium collection in-store or online.
          </p>
          <button
            onClick={() => { navigate("/contact") }}
            className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
            Get in Touch
          </button>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};