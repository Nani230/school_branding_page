import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Link component for navigation
import ExclusiveCard from "@components/ui/Register/ExclusiveCard"; // Import your exclusive card component
import data from "@data/Registration/Registerdata"; // Import data for exclusive plans

const Exclusive = () => {
    const { Exclusivedata } = data;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const plan = ["silver", "Gold", "Platinum", "Customize"];

    // Intersection Observer for visibility animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
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
            className="flex flex-col items-center w-full h-auto px-10 mt-3 overflow-hidden lg:gap-7 xl:gap-12 xl:overflow-visible lg:flex-row lg:justify-center"
        >
            {Exclusivedata.map((data, i) => (
                <div
                    key={i}
                    className={`transition-transform flex flex-col w-[550px] mb-5 items-center duration-1000 transform ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-36 opacity-0"
                    }`}
                >
                    <ExclusiveCard data={data} />
                    <div className="flex gap-1 my-3 sm:justify-evenly lg:w-full am:px-6">
                        {plan.map((planItem, i) => (
                            <Link
                                key={i}
                                to={`/form/${planItem}`} // Navigate to form page with selected plan
                                className="w-16 py-1 text-xs font-semibold text-center border-2 sm:text-sm sm:w-24 rounded-2xl border-secondary text-primary hover:bg-primary hover:text-white"
                            >
                                {planItem}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Exclusive;
