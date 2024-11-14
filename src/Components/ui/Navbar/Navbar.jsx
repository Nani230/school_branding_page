import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home"); // Default to "Home"
    const [clickedSection, setClickedSection] = useState("");
    const [isObserverDisabled, setIsObserverDisabled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const observerRef = useRef(null);

    const navItems = [
        { id: 1, title: "Home", link: "/", scroll: true },
        { id: 2, title: "Features", link: "features", scroll: true },
        { id: 3, title: "Products", link: "products", scroll: true },
        { id: 4, title: "FAQ", link: "faq", scroll: true },
        { id: 5, title: "Contact", link: "/contact" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Initialize the observer
        const sections = document.querySelectorAll("section");

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (isObserverDisabled) return;

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
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observerRef.current.observe(section));

        // Cleanup the observer on unmount
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [
        [],
        isObserverDisabled,
        location.pathname,
        clickedSection,
        activeSection,
    ]); // Ensure the observer is reinitialized on path change

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveSection("/"); // Set to "Home" on initial page load
        } else {
            setActiveSection(""); // Empty or default value for other paths
        }
    }, [location.pathname]);

    const handleScroll = (sectionId) => {
        // setClickedSection(sectionId);
        setActiveSection(sectionId);
        if (location.pathname === "/") {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setIsObserverDisabled(true);

                setTimeout(() => {
                    setIsObserverDisabled(false);
                    setClickedSection("");
                }, 800); // Adjust time as needed
            }
        } else {
            navigate("/"); // Navigate to the homepage first
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

    const getActiveDot = () => {
        if (location.pathname !== "/") {
            return "";
        }
        return (
            clickedSection || activeSection || (activeSection && clickedSection)
        );
    };

    return (
        <nav className="fixed top-0 z-30 flex items-center justify-between w-full h-20 px-4 bg-white shadow-md lg:px-16 text-textcolor">
            <Link to="/">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10" />
                    <h1 className="ml-2 text-xl font-bold text-headingcolor">
                        VisionicX
                    </h1>
                </div>
            </Link>

            <ul className="hidden space-x-10 font-semibold lg:space-x-20 md:flex">
                {navItems.map((item) => (
                    <li key={item.id}>
                        {item.scroll ? (
                            <span
                                onClick={() => handleScroll(item.link)}
                                className={`relative cursor-pointer ${
                                    getActiveDot() === item.link
                                        ? "active-dot text-headingcolor"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </span>
                        ) : (
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
            />
        </nav>
    );
};

const MobileMenu = ({ isOpen, navItems, handleScroll, activeSection }) => {
    return (
        <ul
            className={`absolute top-20 right-0 w-3/4 bg-white flex flex-col gap-5 shadow-md text-center h-screen py-10 z-10 font-semibold text-textcolor md:hidden transition-transform duration-300 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {navItems.map((item) => (
                <li key={item.id}>
                    {item.scroll ? (
                        <span
                            onClick={() => handleScroll(item.link)}
                            className={`cursor-pointer ${
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
                            className={`hover:text-gray-600 ${
                                location.pathname === item.link
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

export default Navbar;
