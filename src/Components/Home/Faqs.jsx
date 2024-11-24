// Faqs.js
import React from "react";
import FaqsCard from "../ui/Home/FaqsCard";
import Faqsdata from "@/data/Faqsdata";
import image from "@assets/FaqsBackground.png";
import AnimatedSection from "@animation/AnimatedSection";

const Faqs = () => {
    return (
        <section
            id="faq"
            className="relative flex justify-center p-5 mt-48 bg-no-repeat bg-contain responsive-section h-max pt-9"
        >
            <pre className="absolute top-0 font-mono text-lg whitespace-pre-wrap -z-10">
                <code>
                    <img src={image} alt="" />
                </code>
            </pre>
            <div className="flex items-center flex-col bg-[#E7EAF3] lg:w-8/12 md:w-full sm:w-full lg:p-5 lg:px-9 md:px-3 sm:px-0 rounded-lg">
                <div className="flex flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold tracking-wider text-primary">
                        FAQ
                    </h1>
                    <p className="bg-[#546687] p-2 rounded-full w-16 mt-0.5"></p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-auto mb-3">
                    {Faqsdata.map((data, i) => (
                        <AnimatedSection key={i} index={i}>
                            <FaqsCard data={data} i={i} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
