import React from "react";

import image1 from "@assets/featurebackground.png";
import m_banner from "@assets/Home/m_features.png";

import data from "@/data/Featuresinfo";

import FeatureCard from "../ui/Home/FeatureCard";
import ClientCard from "../ui/Home/ClientCard";
const Features = () => {
    const { Clientdata, campusdata, Performancedata, Aidrivendata } = data;
    return (
        <div
            className="relative flex flex-col items-center justify-center h-full p-3 pb-10 responsive-section "
            // style={{ backgroundImage: `url(${image1})` }}
        >
            <pre className="absolute w-full h-full overflow-hidden font-mono text-lg whitespace-pre-wrap lg:-top-5 xl:-top-0 -z-10">
                <img
                    src={image1}
                    className="hidden object-cover object-left w-full h-full max-w-full lg:block"
                    alt=""
                />
                <img
                    src={m_banner}
                    className="object-cover object-left-top w-full h-full max-w-full lg:hidden"
                    alt=""
                />
            </pre>

            <div className="flex flex-col items-center w-full pt-10 mb-3">
                <h1 className="text-4xl font-bold tracking-wider lg:py-10 text-headingcolor">
                    Our Client
                </h1>
                <div className="flex flex-wrap justify-between w-full gap-10 mt-20 lg:gap-28 md:px-20">
                    {Clientdata.map((data, i) => (
                        <ClientCard data={data} key={i} i={i} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pt-48 ">
                <h1 className="text-4xl font-bold tracking-wider text-headingcolor ">
                    Feature
                </h1>
                <p className="bg-custom-gradient p-2 rounded-full w-20 mt-0.5"></p>
            </div>

            <div className="flex flex-col items-center justify-center mb-3">
                <h1 className="py-6 pb-8 font-bold tracking-wider text-center text-headingcolor lg:text-2xl md:text-2xl sm:text-lg ">
                    Core Campus Management
                </h1>
                <div className="flex flex-wrap justify-around gap-10 md:px-20">
                    {campusdata.map((data, i) => (
                        <FeatureCard data={data} key={i} i={i} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 mb-3">
                <h1 className="py-6 pb-8 font-bold tracking-wider text-center text-headingcolor lg:text-2xl md:text-2xl sm:text-lg ">
                    Performance & Personal Management
                </h1>
                <div className="flex flex-wrap justify-around gap-10 md:px-20">
                    {Performancedata.map((data, i) => (
                        <FeatureCard data={data} key={i} i={i} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 mb-3">
                <h1 className="py-6 pb-8 font-bold tracking-wider text-center text-headingcolor lg:text-2xl md:text-2xl sm:text-lg">
                    Advanced & AI-Driven
                </h1>
                <div className="flex flex-wrap justify-around gap-10 md:px-20">
                    {Aidrivendata.map((data, i) => (
                        <FeatureCard data={data} key={i} i={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
