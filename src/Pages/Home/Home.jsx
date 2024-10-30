import React, { useEffect, useState } from 'react';
import image from '../../assets/HomeBackground.png';
import sliderimg1 from '../../assets/sliderimg1.png';
import sliderimg3 from '../../assets/sliderimg3.png';
import Feature from '../Feature/Feature';
import Faqs from '../Faqs/Faqs';

const data = [
    {
        head: "Revolutionizing Education Management with VisionicX!",
        para: "Empower your school with seamless communication, efficient administration, and engaging learning experiences.",
        img: sliderimg1
    },
    {
        head: "Your All-in-One Solution for Modern Education!",
        para: "Simplify operations, enhance engagement, and foster success across schools, colleges, and campuses with our advanced management platform.",
        img: sliderimg3
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true); // Trigger fade-out

            // After fade-out, change slide and start fade-in after delay
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Change slide
                setFadeOut(false); // Trigger fade-in
            }, 500); // Blank screen moment after 1 second

        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className="h-4/6 w-ful flex flex-col lg:flex-row bg-white lg:bg-cover lg:bg-center border-2"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="flex items-start justify-between lg:flex-row sm:flex-col-reverse lg:px-10 sm:px-3 mt-16 w-full">
                    <div className={`text-start p-4 w-full lg:w-1/2 flex lg:items-start sm:items-center lg:justify-start sm:justify-center flex-col lg:mt-5 sm:mt-0 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                        <h1 className="text-headingcolor lg:text-4xl sm:text-2xl md:text-3xl mb-4 font-semibold leading-normal sm:text-center lg:text-start">
                            {data[currentIndex].head}
                        </h1>
                        <p className="text-textcolor lg:text-2xl sm:text-xl font-medium lg:pr-40 sm:text-center lg:text-start">
                            {data[currentIndex].para}
                        </p>
                    </div>

                    <div className="lg:p-4 sm:p-1 w-full lg:w-1/2 flex items-center justify-end ">
                        <div className={`w-full transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                            <img
                                src={data[currentIndex].img}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <Faqs />
        </>
    );
};

export default Home;
