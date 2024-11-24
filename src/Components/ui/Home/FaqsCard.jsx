import React, { useState } from "react"; // Ensure you import useState
import { FaChevronRight, FaPlus } from "react-icons/fa";

const FaqsCard = ({ data, i }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const isOpen = openIndex === i;

    return (
        <div
            className={`w-full m-2 p-4  rounded-lg transition-all duration-500 ease-in-out ${
                isOpen ? "bg-[#DBEAFE] shadow-lg" : "bg-primary"
            } hover:shadow-md`}
        >
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(i)}
                style={{
                    color: isOpen ? "#172B85" : "#fff",
                }}
            >
                <h1 className="flex items-center gap-4 font-sans text-xs font-bold lg:text-lg sm:text-base md:text-lg">
                    <span
                        className={`transition-transform duration-500 ease-in-out ${
                            isOpen ? "rotate-45" : ""
                        }`}
                    >
                        <FaPlus />
                    </span>
                    {data.que}
                </h1>
                <div
                    className={`transition-transform duration-500 ease-in-out ${
                        isOpen ? "rotate-90" : ""
                    }`}
                >
                    <FaChevronRight />
                </div>
            </div>
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <p className="py-2 pl-4 font-sans text-xs font-normal leading-6 sm:text-sm sm:pl-2 text-secondary">
                    {data.ans}
                </p>
            </div>
        </div>
    );
};

export default FaqsCard;
