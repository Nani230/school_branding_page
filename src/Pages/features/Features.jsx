import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the URL parameters
import Banner from "@components/Features/Banner";
import Overview from "@/Components/Features/Overview";
import campusdata from "@data/Features/Campusdata";
import Performancedata from "@data/Features/performencedata";
import Advanceddata from "@data/Features/Advanceddata";
import NotFound from "../../Pages/Notfound/Notfound";

const Features = () => {
    const { name, id } = useParams();
    const [featureData, setFeatureData] = useState(null);

    useEffect(() => {
        let selectedData;

        if (name === "Core_Campus_Management") {
            selectedData = campusdata;
        } else if (name === "Performance_Personal_Management") {
            selectedData = Performancedata;
        } else if (name === "Advanced_AI-Driven") {
            selectedData = Advanceddata;
        } else {
            console.error("No matching data found for name:", name);
            selectedData = [];
        }

        // Find the feature by id
        const featureDetails = selectedData?.find(
            (feature) => feature.id === Number(id)
        );

        setFeatureData(featureDetails);
    }, [name, id]);

    if (!featureData) {
        return <NotFound />;
    }

    return (
        <div className="responsive-section">
            <Banner data={featureData} />
            <p className="relative px-5 font-sans text-sm font-bold lg:text-2xl lg:px-24 -top-16 lg:-top-36 text-primary">
                {featureData.des}
            </p>
            <Overview data={featureData.data} />
            {/* <Chat /> */}
            <div className="px-5 py-10 lg:px-16">
                <h1 className="mb-10 font-sans font-bold leading-tight text-center text-primary sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                    Key Benefits of {featureData.title}
                </h1>
                <p className="font-sans text-sm font-bold lg:text-2xl text-primary">
                    {featureData.benifit}
                </p>
            </div>
        </div>
    );
};

export default Features;
