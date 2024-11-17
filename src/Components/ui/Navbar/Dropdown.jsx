// src/components/Dropdown.js

import React from "react";
import scanner from "@assets/product/Scanner.png";
import singlephase from "@assets/product/singlephase.png";
import threephase from "@assets/product/threephase.png";

const Dropdown = React.forwardRef((props, ref) => {
    const products = [
        { id: 1, img: scanner, description: "Attendance Management System" },
        {
            id: 2,
            img: singlephase,
            description: "Single-Phase Energy Monitoring System",
        },
        {
            id: 3,
            img: threephase,
            description: "Three-Phase Energy Monitoring System",
        },
    ];

    return (
        <div
            ref={ref}
            className={`absolute p-8 transform transition-all duration-300 ease-in-out ${
                props.isProductsOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
            } bg-white shadow-xl rounded-lg w-[600px] top-5 left-1/2 -translate-x-1/2`}
        >
            <div className="flex flex-col items-center gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center w-full gap-8 p-4 text-center bg-[#D0D6ED] rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        <img
                            className="transition-opacity duration-300 w-28 h-28 hover:opacity-90"
                            src={product.img}
                            alt=""
                        />
                        <p className="font-sans text-base font-semibold">
                            {product.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Dropdown;
