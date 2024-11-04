import React from "react";
import { MdOutlineStars } from "react-icons/md";

const TierCard = ({ data }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start p-3 pb-4 mb-3 bg-white rounded-lg shadow-custom h-36">
                <h1 className="font-semibold text-center xl:text-lg text-headingcolor">
                    {data.Head}
                </h1>
                <p className="text-xs font-normal text-center xl:text-sm text-headingcolor">
                    {data.subhead}
                </p>
                <p className="mt-2 text-xs font-normal text-center xl:text-sm text-headingcolor">
                    {data.para}
                </p>
            </div>
            <div className="flex flex-col items-start justify-center p-3 pb-4 bg-white bg-opacity-100 rounded-lg shadow-custom">
                <div>
                    {data.description.map((desc, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-1">
                                <MdOutlineStars className="text-headingcolor" />
                                <p className="p-1 py-2 text-sm font-semibold tracking-wide text-center xl:text-base text-headingcolor">
                                    {desc.module}
                                </p>
                            </div>
                            {desc.submodules.length > 0 && (
                                <ul className="pl-4 list-disc list-inside">
                                    {desc.submodules.map((sub, subIdx) => (
                                        <li
                                            key={subIdx}
                                            className="text-xs xl:text-sm text-headingcolor"
                                        >
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TierCard;
