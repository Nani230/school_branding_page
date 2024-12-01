import React from "react";
import { MdCheckBox, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const ExclusiveCard = ({ data }) => {
    return (
        <div className="flex flex-col justify-between h-[550px] w-[350px] sm:w-[500px] lg:w-[450px] xl:w-[500px] gap-4 px-6 py-4 bg-white border-2 rounded-lg border-secondary">
            <h1 className="text-sm font-semibold sm:text-xl text-primary">
                {data.title}
                <span className="ml-3 text-sm lg:text-base font-extralight">
                    {data.subtitle}
                </span>
            </h1>
            <h1 className="text-lg font-semibold sm:text-2xl text-primary">
                {data.offer}
                <span className="text-xs font-normal sm:text-sm text-cardtext">
                    {" "}
                    / {data.duration}
                </span>
            </h1>
            <p className="text-xs font-normal sm:text-sm text-cardtext">
                {data.desc}
            </p>

            <div className="flex flex-col gap-3">
                {data.para.map((para, i) => (
                    <li
                        key={i}
                        className="flex items-center justify-start gap-3"
                    >
                        <span
                            className={
                                i === 0
                                    ? data.title === "Regular"
                                        ? "text-red-500"
                                        : "text-green-500"
                                    : "text-primary"
                            }
                        >
                            {i === 0 && data.title === "Regular" ? (
                                <MdClose className="w-5 h-5" />
                            ) : (
                                <MdCheckBox className="w-5 h-5" />
                            )}
                        </span>
                        <span
                            className={
                                i === 0
                                    ? "text-primary font-medium text-base"
                                    : "text-[#606F7B] text-sm sm:text-base"
                            }
                        >
                            {para}
                        </span>
                    </li>
                ))}
            </div>

            <div className="flex items-center justify-center mt-4">
                <Link
                    to={`/form/${null}`} //
                    className={`bg-[#DBEAFE] px-10 py-2 text-sm cursor-pointer ${
                        data.button === "Choose plan"
                            ? "font-inter font-semibold bg-transparent border-2 rounded-2xl text-primary border-primary"
                            : "font-mono font-bold rounded-2xl text-primary"
                    }`}
                >
                    {data.button}
                </Link>
            </div>
        </div>
    );
};

export default ExclusiveCard;
