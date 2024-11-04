import React, { useEffect, useRef, useState } from "react";
import ExclusiveCard from "@components/ui/Register/ExclusiveCard";
import data from "@/data/Registerdata";

const Exclusive = () => {
    const { Exclusivedata } = data;
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
            className="flex flex-col items-center w-full h-auto gap-12 mt-3 overflow-hidden xl:overflow-visible lg:flex-row lg:justify-center"
        >
            {Exclusivedata.map((data, i) => (
                <div
                    key={i}
                    className={`transition-transform  duration-1000 transform ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-36 opacity-0"
                    }`}
                >
                    <ExclusiveCard data={data} />
                </div>
            ))}
        </div>
    );
};

export default Exclusive;
