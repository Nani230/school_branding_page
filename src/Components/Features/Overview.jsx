import React from "react";
import data from "@/data/Features/Feasturesdata";
import Card from "../ui/Features/Card";
const Overview = () => {
    const { overviewdata } = data;
    return (
        <div className="px-5 lg:px-16 ">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Overview
            </h1>
            {overviewdata.map((data, i) => (
                <Card data={data} key={i} i={i} />
            ))}
        </div>
    );
};

export default Overview;
