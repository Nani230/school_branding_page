import React, { useState, useEffect } from "react";
import sliderimg1 from "@assets/Home/lap.png";
import sliderimg2 from "@assets/Home/mobile.png";
import sliderimg3 from "@assets/Home/devices.png";

import Homebanner from "@assets/Home.png";
import m_banner from "@assets/Home/m_banner.png";
import { Link } from "react-router-dom";

const data = [
    {
        head: "Revolutionizing Education Management with VisionicX!",
        para: "Empower your school with seamless communication, efficient administration, and engaging learning experiences.",
        img: sliderimg1,
    },
    {
        head: "Your All-in-One Solution for Modern Education!",
        para: "Simplify operations, enhance engagement, and foster success across schools, colleges, and campuses with our advanced management platform.",
        img: sliderimg2,
    },
    {
        head: "Exclusive Offer for Schools and colleges – Save on Our Education Management System!",
        para: `Get up to 100% Off, Offer Valid Till December 2024.
        
        Limited Time Discounts – Register Early and Unlock Huge Savings!`,
        img: sliderimg3,
    },
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNextSlide();
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(timer);
    }, []);

    const handleNextSlide = () => {
        setFadeOut(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setFadeOut(false);
        }, 1000); // Match with the fade duration
    };

    const handleDotClick = (index) => {
        setFadeOut(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setFadeOut(false);
        }, 1000); // Match with the fade duration
    };

    return (
        <section id="/">
            <div className="relative responsive-section flex flex-col w-full h-[650px] lg:h-[750px] lg:justify-center lg:items-center">
                <pre className="absolute w-full h-full font-mono text-lg whitespace-pre-wrap -top-4 lg:-top-5 xl:-top-0 -z-10">
                    <img
                        src={Homebanner}
                        className="hidden object-cover object-bottom w-full h-full max-w-full lg:block"
                        alt=""
                    />
                    <img
                        src={m_banner}
                        className="object-cover object-top w-full h-full max-w-full lg:hidden"
                        alt=""
                    />
                </pre>

                <div className="lg:h-[400px] h-[500px] lg:px-16 mt-10 px-5 lg:-mt-28 items-center w-full flex flex-col lg:flex-row lg:justify-between">
                    <div
                        className={`text-start w-full lg:w-3/6 flex flex-col lg:justify-between lg:gap-5 lg:items-start sm:items-center sm:justify-center transition-opacity duration-1000 ${
                            fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <h1 className="mb-4 font-medium leading-tight text-center text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                            {data[currentIndex].head}
                        </h1>
                        <p className="font-medium leading-snug text-center text-secondary sm:text-xl lg:text-xl xl:text-2xl sm:text-center lg:text-start sm:leading-normal lg:leading-relaxed">
                            {data[currentIndex].para}
                        </p>
                        <div className="flex justify-center w-full my-10 lg:my-0 lg:mt-10">
                            <Link
                                to="/Register"
                                className="flex justify-center py-2 overflow-hidden font-mono text-base font-bold text-white rounded-lg hover:text-white before:bg-primary bg-secondary group layer-btn"
                            >
                                <span className="relative z-20">
                                    Get Personalized Demo
                                </span>
                            </Link>
                        </div>
                    </div>
                    <img
                        src={data[currentIndex].img}
                        alt={`Slide ${currentIndex + 1}`}
                        className={`w-full lg:w-5/12 mt-5 h-60 sm:w-96 lg:h-[87%] transition-opacity duration-1000 ${
                            fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                    />
                </div>
                <div className="relative flex justify-center top-5 lg:top-20">
                    <div className="flex items-center gap-10">
                        {data.map((_, index) => (
                            <span
                                key={index}
                                className={`mx-1 border-4 rounded-full cursor-pointer transition-colors duration-300 ${
                                    index === currentIndex
                                        ? "rounded-xl border-4 border-primary bg-secondary w-4 h-3 lg:w-10 lg:h-7"
                                        : "lg:w-7 lg:h-7 w-4 h-4"
                                }`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
