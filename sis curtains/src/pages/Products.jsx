import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const productsData = [
    {
        id: 1,
        category: "Curtains",
        title: "Elegant Sheer Curtains",
        desc: "Light and airy, perfect for soft natural light.",
        img: "/images/products/curtain1.jpg",
        price: 12000,
    },
    {
        id: 2,
        category: "Curtains",
        title: "Velvet Drapes",
        desc: "Luxurious thick velvet to block light and add warmth.",
        img: "/images/products/curtain2.jpg",
        price: 15000,
    },
    {
        id: 3,
        category: "Carpets",
        title: "Persian Style Rug",
        desc: "Handwoven, rich in color and pattern.",
        img: "/images/products/carpet1.jpg",
        price: 15000,
    },
    {
        id: 4,
        category: "Carpets",
        title: "Modern Plush Carpet",
        desc: "Soft texture and neutral color for any room.",
        img: "/images/products/carpet2.jpg",
        price: 22000,
    },
];

const categories = ["All", "Curtains", "Carpets"];

export default function Products() {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter by category first
    let filteredProducts =
        filter === "All"
            ? productsData
            : productsData.filter((p) => p.category === filter);

    // Then filter by search term in title (case-insensitive)
    if (searchTerm.trim() !== "") {
        filteredProducts = filteredProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <>
            {/* Navbar section */}
            <Navbar />

            <div className="min-h-screen bg-[#fef8f5] px-6 md:px-20 py-30 text-gray-800">
                <h1
                    className="text-5xl font-bold mb-6 text-center"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Our Products
                </h1>

                {/* Search Input */}
                <div className="max-w-md mx-auto mb-8">
                    <input
                        type="text"
                        placeholder="Search by product title..."
                        className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b26e63]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-6 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full font-semibold transition 
              ${filter === cat
                                    ? "bg-[#b26e63] text-white shadow-lg"
                                    : "bg-white border border-gray-300 text-gray-700 hover:bg-[#b26e63] hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(({ id, title, desc, img, price }) => (
                            <motion.div
                                key={id}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={img}
                                    alt={title}
                                    className="h-56 w-full object-cover transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <h3
                                        className="text-2xl font-semibold mb-2"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{desc}</p>
                                    <p className="text-lg font-semibold text-[#b26e63]">{price.toLocaleString()} Birr</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No products found matching your search.
                        </p>
                    )}
                </div>
            </div>

            {/* Footer section */}
            <Footer />
        </>
    );
};
