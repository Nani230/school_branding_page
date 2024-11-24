import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaChevronRight } from "react-icons/fa";

const MobileMenu = ({
    isOpen,
    navItems,
    handleScroll,
    activeSection,
    isProductsOpen,
    setIsProductsOpen,
    dropdownRef,
}) => {
    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent propagation to child elements
        setIsProductsOpen(true);
    };

    return (
        <ul
            className={`absolute top-20 right-0 w-3/4 bg-white flex flex-col gap-5 shadow-md text-center h-screen py-10 z-10 font-semibold text-textcolor md:hidden transition-transform duration-300 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {navItems.map((item) => (
                <li key={item.id} className="relative">
                    {item.title === "Products" ? (
                        <div className="flex flex-col items-center w-full">
                            {/* Products Header */}
                            <span
                                onClick={toggleDropdown}
                                className={`cursor-pointer flex items-center gap-4 ml-4 justify-between ${
                                    isProductsOpen
                                        ? "border-b-2 border-secondary"
                                        : ""
                                }`}
                            >
                                {item.title}
                                <div
                                    className={`transition-transform duration-500 ease-in-out ${
                                        isProductsOpen ? "rotate-90" : ""
                                    }`}
                                >
                                    <FaChevronRight />
                                </div>
                            </span>

                            {/* Dropdown Section */}
                            <div
                                className={`overflow-hidden z-40 transition-all duration-300 ease-in-out ${
                                    isProductsOpen
                                        ? "opacity-100 max-h-[400px] pointer-events-auto"
                                        : "max-h-0 opacity-0 "
                                }`}
                            >
                                <Dropdown
                                    ref={dropdownRef}
                                    isProductsOpen={isProductsOpen}
                                />
                            </div>
                        </div>
                    ) : item.scroll ? (
                        <span
                            onClick={() => handleScroll(item.link)}
                            className={`relative cursor-pointer ${
                                activeSection === item.link
                                    ? "border-b-2 border-secondary"
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
                                    ? "border-b-2 border-secondary"
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
