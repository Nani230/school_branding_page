import React, { useEffect, useState, useRef } from "react";
import FaqsCard from "../ui/Home/FaqsCard";
import Faqsdata from "@/data/Faqsdata";
import image from "@assets/FaqsBackground.png";

const Faqs = () => {
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
        <div className="relative flex justify-center p-5 mt-48 bg-no-repeat bg-contain responsive-section h-max pt-9">
            <pre className="absolute top-0 font-mono text-lg whitespace-pre-wrap -z-10">
                <code>
                    <img src={image} alt="" />
                </code>
            </pre>
            <div className="flex items-center flex-col bg-[#E7EAF3] lg:w-8/12 md:w-full sm:w-full lg:p-5 lg:px-9 md:px-3 sm:px-0 rounded-lg">
                <div className="flex flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold tracking-wider text-headingcolor">
                        FAQ
                    </h1>
                    <p className="bg-[#546687] p-2 rounded-full w-16 mt-0.5"></p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-auto mb-3">
                    {Faqsdata.map((data, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardRefs.current[i] = el)}
                            data-index={i}
                            className={`transition-transform duration-500 transform ${
                                visibleCards.includes(i.toString())
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95"
                            }`}
                            style={{
                                transitionDelay: `${i * 50}ms`, // Stagger effect
                            }}
                        >
                            <FaqsCard data={data} i={i} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
