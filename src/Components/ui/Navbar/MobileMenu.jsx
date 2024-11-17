// src/components/MobileMenu.js

import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MobileMenu = ({
    isOpen,
    navItems,
    handleScroll,
    activeSection,
    isProductsOpen,
    setIsProductsOpen,
}) => {
    return (
        <ul
            className={`absolute top-20 right-0 w-3/4 bg-white flex flex-col gap-5 shadow-md text-center h-screen py-10 z-10 font-semibold text-textcolor md:hidden transition-transform duration-300 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {navItems.map((item) => (
                <li key={item.id}>
                    {item.title === "Products" ? (
                        <span
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className={`relative cursor-pointer ${
                                isProductsOpen
                                    ? "border-b-2 border-textcolor"
                                    : ""
                            }`}
                        >
                            {item.title}
                            {isProductsOpen && <Dropdown />}
                        </span>
                    ) : item.scroll ? (
                        <span
                            onClick={() => handleScroll(item.link)}
                            className={`relative cursor-pointer ${
                                activeSection === item.link
                                    ? "border-b-2 border-textcolor"
                                    : ""
                            }`}
                        >
                            {item.title}
                        </span>
                    ) : (
                        <Link
                            to={item.link}
                            className={`relative ${
                                activeSection === item.link
                                    ? "border-b-2 border-textcolor"
                                    : ""
                            }`}
                        >
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MobileMenu;
