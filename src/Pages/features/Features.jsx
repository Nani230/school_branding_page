import React from "react";
import Banner from "@components/Features/Banner";
import Overview from "@/Components/Features/Overview";
import Chat from "@/Components/Features/Chat";
const Features = () => {
    return (
        <div className="responsive-section">
            <Banner />
            <Overview />
            <Chat />
            <div className="px-5 py-10 lg:px-16">
                <h1 className="mb-10 font-sans font-bold leading-tight text-center text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl lg:text-start sm:text-center sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                    Key Benefits of the Dashboard
                </h1>
                <p className="font-sans text-sm font-bold lg:text-2xl text-headingcolor">
                    The Dashboard serves as the central hub for campus
                    management, offering users easy access to essential
                    functions and a holistic view of key academic and
                    administrative operations. It is designed to enhance user
                    experience by consolidating multiple features and insights
                    into a single interface, enabling seamless access to
                    information and streamlining communication across the
                    organization. Here’s an overview of its main
                    functionalities:
                </p>
            </div>
        </div>
    );
};

export default Features;
