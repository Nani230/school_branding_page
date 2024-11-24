import React, { useState } from "react";
import Icon from "../icon/Icon";
const FeatureCard = ({ data, i }) => {
    const [hoverIndexCore, setHoverIndexCore] = useState(null);

    return (
        <div
            className={`lg:h-60 lg:w-60 sm:w-40 sm:h-40 w-32 h-32 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
                hoverIndexCore === i ? "bg-primary" : "bg-secondary"
            }`}
            onMouseEnter={() => setHoverIndexCore(i)}
            onMouseLeave={() => setHoverIndexCore(null)}
        >
            {hoverIndexCore === i ? (
                <div
                    className={`text-white text-[13px] w-full h-full pl-5 flex flex-col justify-start pt-5 space-y-10 overflow-scroll no-scrollbar cursor-move transition-transform duration-300 ease-in-out  transform-gpu ${
                        hoverIndexCore === i
                            ? "scale-90 opacity-1"
                            : "scale-100 opacity-0"
                    }`}
                >
                    {data.description.map((desc, idx) => (
                        <div key={idx}>
                            <p className="font-sans text-xs font-semibold sm:text-sm lg:text-xl">
                                {desc.module}
                            </p>
                            {desc.submodules.length > 0 && (
                                <ul className="flex flex-col justify-around h-full list-disc list-inside">
                                    {desc.submodules.map((sub, subIdx) => (
                                        <li
                                            className="font-sans font-semibold cursor-pointer sm:text-xs text-[10px] lg:pl-5 lg:text-sm"
                                            key={subIdx}
                                        >
                                            {sub}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center h-full justify-evenly">
                    <Icon
                        Source={data.icon}
                        fill="white"
                        className="w-10 h-10 text-white sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    />

                    <p className="text-white font-sans font-bold text-center mt-0.5 text-[14px] sm:text-sm md:text-lg">
                        {data.title}
                    </p>
                </div>
            )}
        </div>
    );
};

export default FeatureCard;
