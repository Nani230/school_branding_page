import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "./Dropdown";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false); // For products dropdown
    const [activeSection, setActiveSection] = useState("Home");
    const [clickedSection, setClickedSection] = useState("");
    const [isObserverDisabled, setIsObserverDisabled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const observerRef = useRef(null);
    const dropdownRef = useRef(null);

    const navItems = [
        { id: 1, title: "Home", link: "/", scroll: true },
        { id: 2, title: "Features", link: "features", scroll: true },
        { id: 3, title: "Products", link: "products", scroll: false },
        { id: 4, title: "FAQ", link: "faq", scroll: true },
        { id: 5, title: "Contact", link: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Use onMouseEnter and onMouseLeave to open and close the dropdown on hover
    const handleMouseEnterProducts = () => setIsProductsOpen(true);
    const handleMouseLeaveProducts = () => setIsProductsOpen(false);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsProductsOpen(false);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const thresholdval = window.innerWidth < 1300 ? 0.46 : 0.5;
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (isObserverDisabled || isProductsOpen) return;
                let inViewSection = "";
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        inViewSection = entry.target.id;
                    }
                });
                if (inViewSection && activeSection !== inViewSection) {
                    setActiveSection(inViewSection);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: thresholdval,
            }
        );
        sections.forEach((section) => {
            observerRef.current.observe(section);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [[], isObserverDisabled, isProductsOpen]);

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveSection("/"); // Home route
        } else {
            setActiveSection("");
        }
    }, [location.pathname]);

    const handleScroll = (sectionId) => {
        setClickedSection(sectionId);
        setActiveSection(sectionId);

        if (location.pathname === "/") {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setIsObserverDisabled(true);
                setTimeout(() => {
                    setIsObserverDisabled(false);
                    setClickedSection("");
                }, 800);
            }
        } else {
            navigate("/"); // Navigate to home
            observeForSection(sectionId);
            setIsObserverDisabled(true);
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(sectionId);
                    setClickedSection(sectionId);
                    setTimeout(() => {
                        setIsObserverDisabled(false);
                        setClickedSection("");
                    }, 800);
                }
            }, 100);
        }
    };

    const observeForSection = (sectionId) => {
        const observer = new MutationObserver((mutations) => {
            const section = document.getElementById(sectionId);
            if (section) {
                setIsObserverDisabled(true);
                section.scrollIntoView({ behavior: "smooth" });
                setActiveSection(sectionId);
                setTimeout(() => {
                    setIsObserverDisabled(false);
                    setClickedSection("");
                }, 800);
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };

    const getActiveDot = () => {
        if (isProductsOpen) return ""; // No other dots highlighted if products dropdown is open
        if (location.pathname !== "/") return "";
        return clickedSection || activeSection;
    };

    function locationpath() {
        if (isProductsOpen) return "";
        return location.pathname;
    }

    return (
        <nav className="fixed top-0 z-40 flex items-center justify-between w-full h-20 px-4 bg-white shadow-md lg:px-16 text-secondary">
            <Link to="/">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10" />
                    <h1 className="ml-2 text-xl font-bold text-primary">
                        VisionicX
                    </h1>
                </div>
            </Link>

            <ul className="hidden space-x-10 font-semibold lg:space-x-20 md:flex">
                {navItems.map((item) => (
                    <li key={item.id}>
                        {item.title === "Products" ? (
                            <span
                                onMouseEnter={handleMouseEnterProducts}
                                onMouseLeave={handleMouseLeaveProducts}
                                className={`relative cursor-pointer ${
                                    isProductsOpen
                                        ? "active-dot text-primary"
                                        : ""
                                }`}
                            >
                                {item.title}
                                {isProductsOpen && (
                                    <Dropdown
                                        ref={dropdownRef}
                                        isProductsOpen={isProductsOpen}
                                    />
                                )}
                            </span>
                        ) : item.scroll ? (
                            <span
                                onClick={() => handleScroll(item.link)}
                                className={`relative cursor-pointer ${
                                    getActiveDot() === item.link
                                        ? "active-dot text-primary"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </span>
                        ) : (
                            <Link
                                to={item.link}
                                className={`relative ${
                                    locationpath() === item.link
                                        ? "active-dot text-primary"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}
                </button>
            </div>

            <MobileMenu
                isOpen={isOpen}
                navItems={navItems}
                handleScroll={handleScroll}
                activeSection={getActiveDot()}
                locationpath={locationpath()}
                isProductsOpen={isProductsOpen}
                setIsProductsOpen={setIsProductsOpen}
            />
        </nav>
    );
};

export default Navbar;
