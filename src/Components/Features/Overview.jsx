import React, { useEffect, useState, useRef } from "react";
import data from "@/data/Features/Feasturesdata";
import Card from "../ui/Features/Card";

const Overview = () => {
    const { overviewdata } = data;
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute("data-index");
                        setVisibleCards((prev) => [...prev, index]);
                        observer.unobserve(entry.target); // Stop observing after it becomes visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="px-5 overflow-hidden lg:px-16">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Overview
            </h1>
            <div className="flex flex-col gap-4 ">
                {overviewdata.map((data, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        data-index={i}
                        className={`transition-transform relative  duration-500 transform ${
                            visibleCards.includes(i.toString())
                                ? "translate-x-0 opacity-100"
                                : "translate-x-20 opacity-0"
                        }`}
                    >
                        <Card data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
