import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // Search input state
    const [searchError, setSearchError] = useState(""); // State to display error message
    const navigate = useNavigate(); // For navigation on search submit

    // Simulated data for search validation
    const availablePages = ["/", "register", "contact"]; // Example list of available pages

    // Trigger animation after the component loads
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Handle the search submit
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
        if (availablePages.includes(query)) {
            setSearchError(""); // Clear any previous error
            navigate(`${query}`); // Navigate to the page if it exists
        } else {
            setSearchError(`This ${query} page is not available.`); // Show error if page doesn't exist
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen sm:items-start sm:-mt-10">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute  sm:top-1/4 sm:left-1/3 w-[300px] h-[300px] bg-secondary rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute sm:bottom-1/4 sm:right-1/3 w-[300px] h-[300px] bg-primary rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Content Section */}
            <div
                className={`relative z-10 flex flex-col items-center   text-center transition-all duration-1000 transform ${
                    isLoaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
            >
                {/* Large 404 with Robot */}
                <div className="flex items-center justify-center gap-6">
                    <h1 className="text-primary text-[5rem] sm:text-[12rem] md:text-[15rem] font-extrabold">
                        4
                    </h1>
                    <img
                        src="https://cdn.pixabay.com/photo/2018/03/24/09/19/robot-3256109_960_720.png"
                        alt="Robot Illustration"
                        className="w-40 ml-8 md:w-52 animate-float"
                    />
                    <h1 className="text-primary text-[5rem] sm:text-[12rem] md:text-[15rem] font-extrabold">
                        4
                    </h1>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl font-bold pt sm:-mt-5 md:text-4xl text-primary">
                    Oops! You seem lost.
                </h2>
                <p className="mt-3 text-lg md:text-xl text-[#606F7B]">
                    The page you’re looking for can’t be found. Let’s help you
                    get back on track.
                </p>

                {/* Search Bar */}
                <div className="mt-5">
                    <form
                        onSubmit={handleSearch}
                        className="flex justify-center"
                    >
                        <input
                            type="text"
                            placeholder="Search for a page..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-48 px-4 py-2 border-2 rounded-lg  sm:w-64 border-secondary"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 ml-2 text-white transition-all duration-300 rounded-lg bg-primary hover:bg-secondary"
                        >
                            Search
                        </button>
                    </form>
                    {searchError && (
                        <p className="mt-2 text-red-500">{searchError}</p>
                    )}
                </div>

                {/* Helpful Links */}
                <div className="mt-4 text-primary">
                    <p>Or check out some of these links:</p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Link
                            to="/"
                            className="px-6 py-2 text-lg font-medium text-white transition-all duration-300 rounded-lg bg-primary hover:bg-secondary"
                        >
                            Home
                        </Link>
                        <Link
                            to="/Register"
                            className="px-6 py-2 text-lg font-medium text-white transition-all duration-300 rounded-lg bg-secondary hover:bg-primary"
                        >
                            Register
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-2 text-lg font-medium text-white transition-all duration-300 rounded-lg bg-secondary hover:bg-primary"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Go Back Home Button */}
                <div className="mt-8">
                    <Link
                        to="/"
                        className="px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 rounded-lg shadow-lg md:px-8 md:py-4 bg-primary hover:bg-secondary hover:scale-105"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
