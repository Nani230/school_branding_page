import React from "react";

import Card from "../ui/Features/Card";
import AnimatedSection from "@animation/AnimatedSection";

const Overview = ({ data }) => {
    return (
        <div className="px-5 overflow-hidden lg:-mt-10 lg:px-16">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Overview
            </h1>
            <div className="flex flex-col gap-4 ">
                {data.map((data, i) => (
                    <AnimatedSection
                        key={i}
                        dataIndex={i}
                        animationType="slideright"
                        index={i}
                    >
                        <Card data={data} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Overview;
