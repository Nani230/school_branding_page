import React, { useEffect, useRef, useState } from "react";
import TierCard from "../ui/Register/TierCard";
import data from "@/data/Registerdata";
import image1 from "@assets/registercardbackground.png";

const Tier = () => {
    const { TierData } = data;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className="relative flex flex-col items-center w-full px-4 overflow-hidden bg-center bg-cover sm:px-8 md:px-16"
            style={{ backgroundImage: `url(${image1})` }}
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={image1}
                    className="object-cover w-full h-full opacity-50" // Adjust opacity for a subtle background
                    alt=""
                />
            </div>
            <h1 className="z-10 mt-5 mb-6 text-lg font-semibold text-center sm:text-xl md:text-2xl lg:text-3xl text-primary">
                Features for Each Tier
            </h1>

            <div className="flex flex-wrap items-center justify-center w-full gap-5 mt-2 lg:flex-nowrap">
                {TierData.map((data, i) => (
                    <div
                        key={i}
                        className={`transition-transform  mb-5  w-72 sm:w-80  duration-1000 transform ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-96 opacity-0" // Start with a small translate
                        }`}
                    >
                        <TierCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tier;
