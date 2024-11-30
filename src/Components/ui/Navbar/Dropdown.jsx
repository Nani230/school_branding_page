// src/components/Dropdown.js

import React from "react";
import scanner from "@assets/product/Scanner.png";
import singlephase from "@assets/product/singlephase.png";
import threephase from "@assets/product/threephase.png";
import universal from "@assets/product/universalmanagement.png";

import { Link } from "react-router-dom";

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
        {
            id: 4,
            img: universal,
            description: "Universal Management System",
        },
    ];

    return (
        <div
            ref={ref}
            className={`md:absolute  p-4 md:p-8 transform transition-all duration-300 ease-in-out ${
                props.isProductsOpen
                    ? "opacity-100 scale-100 "
                    : "opacity-0 scale-90"
            } md:bg-white md:shadow-xl rounded-lg w-full  md:w-[600px] right-0 md:top-5 md:left-1/2 md:-translate-x-1/2 `}
        >
            <div className="flex flex-col items-center gap-4">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        className="flex items-center w-full gap-4  md:gap-8 p-4 text-center bg-[#D0D6ED] rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                        to={product.id === 4 ? "/" : `/product/${product.id}`}
                    >
                        <img
                            className="w-10 h-10 transition-opacity duration-300 md:w-28 md:h-28 hover:opacity-90"
                            src={product.img}
                            alt=""
                        />
                        <p className="font-sans text-[10px]  sm:text-xs font-semibold text-start text md:text-base">
                            {product.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
});

export default Dropdown;
