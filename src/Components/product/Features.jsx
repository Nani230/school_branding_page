import AnimatedSection from "@animation/AnimatedSection";
import React from "react";
import Card from "@components/ui/product/Card";

// Destructure 'data' from the props
const Features = ({ data }) => {
    return (
        <div className="px-5 mt-10 overflow-hidden responsive-section lg:px-16">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Key Features of the project:
            </h1>
            <div className="flex flex-col md:gap-4">
                {data.map((item, i) => (
                    <AnimatedSection
                        key={i}
                        dataIndex={i}
                        animationType="slideright"
                        index={i}
                    >
                        <Card data={item} />{" "}
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Features;
