import React from "react";
import Card from "../ui/Features/Card";
// import data from "@/data/Features/Feasturesdata";
import AnimatedSection from "@animation/AnimatedSection";

const Chat = () => {
    return (
        <div className="px-5 overflow-hidden lg:px-16">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-5xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Chat
            </h1>
            <p className="font-sans text-sm font-bold lg:text-2xl text-headingcolor">
                The Chat feature promotes real-time communication across the
                institution. It is designed to facilitate quick interactions
                between users, reducing the need for emails or in-person
                meetings. Here’s how this feature supports campus life:
            </p>
            <div className="flex flex-col gap-4">
                {chatdata.map((data, i) => (
                    <AnimatedSection key={i} index={i} animationType="slide">
                        <Card data={data} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default Chat;
