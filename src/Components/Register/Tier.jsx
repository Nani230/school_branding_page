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
            className="relative flex flex-col items-center w-full px-16 bg-center bg-cover"
        >
            <pre className="absolute w-full h-full font-mono text-lg whitespace-pre-wrap top-16 -z-10">
                <img
                    src={image1}
                    className="object-cover object-left w-full h-full max-w-full"
                    alt=""
                />
            </pre>
            <div>
                <h1 className="mt-5 mb-6 font-semibold text-center lg:text-2xl xl:text-3xl text-headingcolor">
                    Features for Each Tier
                </h1>
            </div>

            <div className="flex flex-wrap items-center justify-around w-full gap-5 mt-2 lg:gap-5 lg:flex-nowrap lg:justify-between lg:flex-row">
                {TierData.map((data, i) => (
                    <div
                        key={i}
                        className={`transition-transform relative duration-1000 transform ${
                            isVisible
                                ? "translate-y-0 opacity-100"
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
