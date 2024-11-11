import React, { useEffect, useRef, useState } from "react";
import ExclusiveCard from "@components/ui/Register/ExclusiveCard";
import data from "@/data/Registerdata";

const Exclusive = () => {
    const { Exclusivedata } = data;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    let plan = ["silver", "Gold", "Platinum", "Premium", "Customize"];
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
            className="flex flex-col items-center w-full h-auto px-10 mt-3 overflow-hidden lg:gap-7 xl:gap-12 xl:overflow-visible lg:flex-row lg:justify-center"
        >
            {Exclusivedata.map((data, i) => (
                <div
                    key={i}
                    className={`transition-transform flex flex-col w-[550px] mb-5  items-center duration-1000 transform ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-36 opacity-0"
                    }`}
                >
                    <ExclusiveCard data={data} />
                    <div className="flex justify-between gap-1 my-3 lg:w-full am:px-6">
                        {plan.map((planItem, i) => (
                            <button
                                key={i}
                                className="w-16 py-1 text-xs font-semibold border-2 sm:text-sm sm:w-24 rounded-2xl border-textcolor text-headingcolor hover:bg-headingcolor hover:text-white"
                            >
                                {planItem}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Exclusive;
