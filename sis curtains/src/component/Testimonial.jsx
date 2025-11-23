import React from "react";
import Slider from "react-slick";

const ArrowButton = ({ onClick, direction }) => (
    <div
        onClick={onClick}
        className="mx-2 cursor-pointer bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black transition"
    >
        {direction === "next" ? <span className="text-xl">›</span> : <span className="text-xl rotate-180">›</span>}
    </div>
);

const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
};


const Testimonial = () => {
    const sliderRef = React.useRef(null);

    return (
        <section className="py-20 bg-white px-6 md:px-20 text-center relative z-10">
            <h2
                className="text-4xl font-semibold mb-12"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                What Our Customers Say
            </h2>

            <div className="max-w-4xl mx-auto overflow-visible [&_.slick-slide]:overflow-visible md:px-4">
                <Slider ref={sliderRef} {...testimonialSettings}>
                    {[
                        ["Absolutely love the new curtains – they changed the whole vibe.", "Sara K."],
                        ["Top-tier quality and fast delivery. Highly recommended!", "Mohammed T."],
                        ["The carpet is stunning and plush. Service was excellent.", "Eden M."],
                    ].map(([quote, author], idx) => (
                        <div key={idx} className="px-6 md:px-12 py-4">
                            <div className="p-8 border rounded-xl bg-gradient-to-br from-white via-[#f9f3f0] to-[#fef8f5] shadow-md  hover:scale-105 transition-all duration-300 ease-in-out">
                                <p className="italic text-gray-700 text-lg">“{quote}”</p>
                                <h5 className="mt-4 font-medium text-gray-900">– {author}</h5>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Arrows */}
                <div className="mt-6 flex justify-center">
                    <ArrowButton onClick={() => sliderRef.current?.slickPrev()} direction="prev" />
                    <ArrowButton onClick={() => sliderRef.current?.slickNext()} direction="next" />
                </div>
            </div>

        </section>
    );
};

export default Testimonial;