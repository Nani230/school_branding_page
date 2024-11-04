import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "@assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Navigation items
    const navItems = [
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "Features", link: "/features" },
        { id: 3, title: "Products", link: "/products" },
        { id: 4, title: "FAQ", link: "/faq" },
        { id: 5, title: "Contact", link: "/contact" },
    ];

    return (
        <nav className="fixed top-0 z-30 flex items-center justify-between w-full h-20 px-4 bg-white shadow-md lg:px-16 text-textcolor">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10" />
                <h1 className="ml-2 text-xl font-bold text-headingcolor">
                    VisionicX
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden space-x-10 font-semibold lg:space-x-20 md:flex">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.link}
                            className={`relative ${
                                location.pathname === item.link
                                    ? "active-dot text-headingcolor"
                                    : ""
                            }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <FaBars className="w-6 h-6 " />
                </button>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isOpen}
                navItems={navItems}
                location={location}
            />
        </nav>
    );
};

const MobileMenu = ({ isOpen, navItems, location }) => {
    return (
        <ul
            className={`${
                isOpen ? "block" : "hidden"
            } absolute top-20 right-0 w-3/4 bg-white  text-center py-10  z-10 font-semibold text-textcolor md:hidden space-y-6`}
        >
            {navItems.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.link}
                        className={`hover:text-gray-600 ${
                            location.pathname === item.link
                                ? "border-b-2 border-textcolor"
                                : ""
                        }`}
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;
