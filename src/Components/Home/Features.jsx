// Features.js
import React from "react";
import image1 from "@assets/featurebackground.png";
import m_banner from "@assets/Home/m_features.png";
import data from "@/data/Featuresinfo";
import FeatureCard from "../ui/Home/FeatureCard";
import ClientCard from "../ui/Home/ClientCard";
import AnimatedSection from "@animation/AnimatedSection";
import { Link } from "react-router-dom";
const Features = () => {
    const { Clientdata, campusdata, Performancedata, Aidrivendata } = data;
    return (
        <section
            id="features"
            className="relative flex flex-col items-center justify-center h-auto p-3 pb-10 responsive-section"
        >
            <pre className="absolute w-full h-full overflow-hidden font-mono text-lg whitespace-pre-wrap lg:-top-5 xl:-top-0 -z-10">
                <img
                    src={image1}
                    className="hidden object-cover object-left-top w-full h-full max-w-full lg:block"
                    alt=""
                />
                <img
                    src={m_banner}
                    className="object-cover object-left-top w-full h-full max-w-full lg:hidden"
                    alt=""
                />
            </pre>

            <section className="flex flex-col items-center justify-center p-4 pt-20 ">
                <h1 className="font-sans text-4xl font-bold tracking-wider text-primary ">
                    Feature
                </h1>
                <p className="bg-custom-gradient p-2 rounded-full w-20 mt-0.5"></p>
            </section>
            <section
                id="features"
                className="flex flex-col items-center justify-center mb-3"
            >
                <h1 className="py-6 pb-8 font-bold tracking-wider text-center text-primary lg:text-2xl md:text-2xl sm:text-lg ">
                    Core Campus Management
                </h1>
                <div className="flex flex-wrap justify-around gap-10 md:px-20">
                    {campusdata.map((data, i) => (
                        <AnimatedSection
                            key={i}
                            dataIndex={i}
                            dataType="feature"
                            animationType="fade"
                        >
                            <Link
                                to={`/Features/Core_Campus_Management/${data.id}`}
                            >
                                <FeatureCard data={data} />
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            <section
                id="features"
                className="flex flex-col items-center justify-center pt-20 mb-3"
            >
                <h1 className="py-6 pb-8 font-sans font-bold tracking-wider text-center text-primary lg:text-3xl md:text-2xl sm:text-lg ">
                    Performance & Personal Management
                </h1>
                <div className="flex flex-wrap justify-around gap-10 md:px-20">
                    {Performancedata.map((data, i) => (
                        <AnimatedSection
                            key={i}
                            dataIndex={i}
                            dataType="feature"
                            animationType="fade"
                        >
                            <Link
                                to={`/Features/Performance_Personal_Management/${data.id}`}
                            >
                                <FeatureCard data={data} />
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            <section
                id="features"
                className="flex flex-col items-center justify-center w-full pt-20 mb-3"
            >
                <h1 className="py-6 pb-8 font-sans font-bold tracking-wider text-center text-primary lg:text-3xl md:text-2xl sm:text-lg">
                    Advanced & AI-Driven
                </h1>
                <div className="flex flex-wrap justify-around w-full gap-10 md:px-20">
                    {Aidrivendata.map((data, i) => (
                        <AnimatedSection
                            key={i}
                            dataIndex={i}
                            dataType="feature"
                            animationType="fade"
                        >
                            <Link
                                to={`/Features/Advanced_AI-Driven/${data.id}`}
                            >
                                <FeatureCard data={data} />
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Features;
