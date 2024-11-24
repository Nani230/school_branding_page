import React, { useState, useEffect } from "react";
import sliderimg1 from "@assets/sliderimg1.png";
import sliderimg3 from "@assets/sliderimg3.png";
import Homebanner from "@assets/Home.png";
import m_banner from "@assets/Home/m_banner.png";
import { Link } from "react-router-dom";

const Slideshow = ({ data }) => {
    return (
        <>
            <div className="relative  responsive-section flex flex-col w-full h-auto pb-10 lg:pb-0   lg:h-[750px] lg:justify-center lg:items-center">
                <pre className="absolute w-full h-full font-mono text-lg whitespace-pre-wrap -top-4 lg:-top-5 xl:-top-0 -z-10">
                    <img
                        src={Homebanner}
                        className="hidden object-cover object-bottom w-full h-full max-w-full lg:block" // Visible only at and above lg breakpoint
                        alt=""
                    />

                    <img
                        src={m_banner}
                        className="object-cover object-top w-full h-full max-w-full lg:hidden" // Added responsive hidden class
                        alt=""
                    />
                </pre>

                <div className="lg:h-[400px] h-[500px]  lg:px-16 mt-10 px-5 lg:-mt-52  items-center w-full flex flex-col lg:flex-row      lg:justify-between">
                    <div
                        className={`text-start w-full lg:w-3/6 flex flex-col lg:justify-center  lg:gap-5 lg:items-start sm:items-center sm:justify-center`}
                    >
                        <h1 className="mb-4 font-sans font-bold leading-tight text-center text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                            {data.name}
                        </h1>
                        <div className="flex justify-center w-full my-10 lg:my-0 lg:mt-10">
                            <Link
                                to="/Register"
                                className="flex justify-center py-2 overflow-hidden font-mono text-base font-bold text-white rounded-lg hover:text-white before:bg-primary bg-secondary group layer-btn"
                            >
                                <span className="relative z-20">
                                    Get Personalized Demo
                                </span>
                            </Link>
                        </div>
                    </div>
                    <img
                        src="https://picsum.photos/600/300?random=1"
                        alt={""}
                        className={`w-full lg:w-5/12 mt-5 h-60  sm:w-96 lg:h-[87%] transition-opacity duration-1000 `}
                    />
                </div>
            </div>
        </>
    );
};

export default Slideshow;
