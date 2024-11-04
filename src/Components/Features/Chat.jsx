import React, { useEffect, useState, useRef } from "react";
import Card from "../ui/Features/Card";
import data from "@/data/Features/Feasturesdata";

const Chat = () => {
    const { chatdata } = data;
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute("data-index");
                        setVisibleCards((prev) => [...prev, index]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="px-5 overflow-hidden lg:px-16">
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-headingcolor sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Chat
            </h1>
            <p className="font-sans text-sm font-bold lg:text-2xl text-headingcolor">
                The Chat feature promotes real-time communication across the
                institution. It is designed to facilitate quick interactions
                between users, reducing the need for emails or in-person
                meetings. Here’s how this feature supports campus life:
            </p>
            <div className="flex flex-col gap-4 ">
                {chatdata.map((data, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        data-index={i}
                        className={`transition-transform relative   duration-500 transform ${
                            visibleCards.includes(i.toString())
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-20 opacity-0"
                        }`}
                    >
                        <Card data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
