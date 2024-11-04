import React from "react";
import Card from "../ui/Features/Card";
import data from "@/data/Features/Feasturesdata";

const Chat = () => {
    const { chatdata } = data;

    return (
        <div className="px-5 lg:px-16 ">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Chat
            </h1>
            <p className="font-sans text-sm font-bold  lg:text-2xl text-headingcolor">
                The Chat feature promotes real-time communication across the
                institution. It is designed to facilitate quick interactions
                between users, reducing the need for emails or in-person
                meetings. Here’s how this feature supports campus life:
            </p>
            {chatdata.map((data, i) => (
                <Card data={data} key={i} i={i} />
            ))}
        </div>
    );
};

export default Chat;
