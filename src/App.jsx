// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import Navbar from "./Components/ui/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Register/Register";
import Features from "./Pages/features/Features";
function App() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div
                    className={`fixed bottom-4 right-4 z-40 transition-opacity duration-300 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <button
                        onClick={scrollToTop}
                        className="p-3 text-white rounded-full shadow-lg bg-he bg-headingcolor focus:outline-none transition-transform duration-300 transform hover:translate-y-[-5px]"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="transition-transform duration-300" />
                    </button>
                </div>
                <div className="mt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Features" element={<Features />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
