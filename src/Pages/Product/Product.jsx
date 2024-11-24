import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"; // To access the URL parameters
import Banner from "@components/product/Banner";
import data from "@data/product/Productdata";
import Features from "@components/product/Features";
import NotFound from "../Notfound/Notfound";

const Product = () => {
    const { id } = useParams(); // Get the product id from the URL
    const [product, setProduct] = useState(null);
    const imgRef = useRef(null);
    const resultRef = useRef(null);
    const lensRef = useRef(null);
    const divRef = useRef(null); // Reference for the div
    const [isHovered, setIsHovered] = useState(false); // State to track hover status
    const [isimgHovered, setIsimgHovered] = useState(false); // State to track hover status
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Track screen size

    useEffect(() => {
        const productId = Number(id);
        const productDetails = data.find((product) => product.id === productId);
        setProduct(productDetails);
    }, [id]);

    useEffect(() => {
        // Check screen width on component mount and update state
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        setIsLargeScreen(mediaQuery.matches);

        // Add listener to track screen size changes
        const handleResize = (e) => {
            setIsLargeScreen(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!imgRef.current || !resultRef.current || !lensRef.current) return;

        const img = imgRef.current;
        const result = resultRef.current;
        const lens = lensRef.current;

        // Calculate the zoom ratio between the result and the lens
        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;

        // Set background size of the result to zoomed-in image
        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundSize = `${img.width * cx}px ${
            img.height * cy
        }px`;

        // Function to move the lens and update the zoomed-in view
        const moveLens = (e) => {
            e.preventDefault();
            const pos = getCursorPos(e, img);

            let x = pos.x - lens.offsetWidth / 2;
            let y = pos.y - lens.offsetHeight / 2;

            // Ensure the lens stays within image bounds
            if (x > img.width - lens.offsetWidth)
                x = img.width - lens.offsetWidth;
            if (x < 0) x = 0;
            if (y > img.height - lens.offsetHeight)
                y = img.height - lens.offsetHeight;
            if (y < 0) y = 0;

            // Position the lens and update the result's background position
            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        };

        // Get the cursor position relative to the image
        const getCursorPos = (e, img) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            return { x, y };
        };

        // Event listener for mousemove
        const handleMouseMove = (e) => {
            if (!isHovered || !isLargeScreen) return; // Only move lens if hovered and screen is large
            moveLens(e);
        };

        img.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listeners
        return () => {
            img.removeEventListener("mousemove", handleMouseMove);
        };
    }, [product, isHovered, isLargeScreen]); // Re-run when product or hover state changes

    const handleMouseEnter = () => {
        if (isLargeScreen) setIsHovered(true); // Set hover state to true when mouse enters the div and screen is large
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Set hover state to false when mouse leaves the div
    };

    const handleimgMouseEnter = () => {
        setIsimgHovered(true); // Set hover state to true when mouse enters the div
    };

    const handleimgMouseLeave = () => {
        setIsimgHovered(false); // Set hover state to false when mouse leaves the div
    };

    if (!product) {
        return <NotFound />;
    }

    return (
        <>
            <Banner data={product} />
            <p className="relative px-5 font-sans text-sm font-bold responsive-section lg:text-2xl lg:px-24 -top-16 lg:-top-36 text-primary">
                {product.des}
            </p>
            <div
                className="relative flex justify-center w-full py-10 responsive-section lg:-mt-32"
                onMouseEnter={handleMouseEnter} // Trigger hover on the main div
                onMouseLeave={handleMouseLeave} // Remove hover when mouse leaves the div
            >
                <div
                    className={`relative  transition-all duration-300 ease-in-out ${
                        isHovered ? "lg:ml-64" : ""
                    }  xl:ml-0`}
                    style={{
                        transform: isHovered ? "translateX(-110%)" : "none", // Move the element when hovered
                        transition: "transform 0.3s ease, z-index 0.3s ease", // Smooth transition for transform and z-index
                    }}
                >
                    <img
                        onMouseEnter={handleimgMouseEnter} // Trigger hover on the main div
                        onMouseLeave={handleimgMouseLeave} // Remove hover when mouse leaves the div
                        ref={imgRef}
                        src={product.img}
                        alt={product.title}
                        className="h-[600px] w-80  sm:w-96"
                        style={{
                            cursor: isHovered ? "crosshair" : "default", // Change cursor to crosshair on hover
                        }}
                    />
                    {/* Show lens and set cursor to + when hovered */}
                    {isHovered && isLargeScreen && (
                        <div
                            ref={lensRef}
                            className="absolute w-20 h-20 border-4 top-3 border-primary bg-opacity-30 cursor-crosshair"
                            style={{
                                zIndex: 25,
                                pointerEvents: "none",
                            }}
                        />
                    )}
                </div>
                <div
                    ref={resultRef}
                    className="absolute top-10   right-10 xl:right-20 ml-4 w-[550px] xl:w-[800px] h-[600px] border border-gray-300 bg-no-repeat"
                    style={{
                        display: isHovered && isLargeScreen ? "block" : "none",
                        zIndex: 20,
                    }}
                ></div>
            </div>
            <Features data={product.features} />
            <div className="px-5 py-10 responsive-section lg:px-16">
                <h1 className="mb-10 font-sans font-bold leading-tight text-center text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                    Goal of the project
                </h1>
                <p className="font-sans text-sm font-bold lg:text-2xl text-primary">
                    {product.goal}
                </p>
            </div>
        </>
    );
};

export default Product;
