import React from "react";
import { MdOutlineStars } from "react-icons/md";

const TierCard = ({ data }) => {
    // Function to render submodules and nested submodules
    const renderSubmodules = (submodules) => {
        return (
            <ul className="pl-6 list-disc list-inside">
                {submodules.map((sub, subIdx) => (
                    <li
                        key={subIdx}
                        className="text-xs xl:text-sm text-primary"
                    >
                        {typeof sub === "string" ? (
                            sub
                        ) : (
                            <>
                                {sub.submodule}
                                {sub.details && renderSubmodules(sub.details)}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="flex flex-col items-center h-full ">
            {/* Card Header */}
            <div className="flex flex-col items-center justify-start p-3 pb-4 mb-3 bg-white rounded-lg shadow-custom h-36">
                <h1 className="font-semibold text-center xl:text-lg text-primary">
                    {data.Head}
                </h1>
                <p className="text-xs font-normal text-center xl:text-sm text-primary">
                    {data.subhead}
                </p>
                <p className="mt-2 text-xs font-normal text-center xl:text-sm text-primary">
                    {data.para}
                </p>
            </div>
            {/* Card Description */}
            <div className="flex flex-col items-start justify-start w-full h-full p-3 pb-4 bg-white bg-opacity-100 rounded-lg shadow-custom">
                {data.description.map((desc, idx) => (
                    <div key={idx} className="mb-2">
                        {/* Module Title */}
                        <div className="flex items-center gap-1">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.06215 1.53451C8.38431 0.663889 9.61569 0.663888 9.93785 1.53451L11.5413 5.86785C11.6426 6.14157 11.8584 6.35738 12.1321 6.45867L16.4655 8.06215C17.3361 8.38431 17.3361 9.61569 16.4655 9.93785L12.1321 11.5413C11.8584 11.6426 11.6426 11.8584 11.5413 12.1321L9.93785 16.4655C9.61569 17.3361 8.38431 17.3361 8.06215 16.4655L6.45867 12.1321C6.35738 11.8584 6.14157 11.6426 5.86785 11.5413L1.53451 9.93785C0.663889 9.61569 0.663888 8.38431 1.53451 8.06215L5.86785 6.45867C6.14157 6.35738 6.35738 6.14157 6.45867 5.86785L8.06215 1.53451Z"
                                    fill="#172B85"
                                    fillOpacity="0.76"
                                />
                            </svg>
                            <p className="p-1 py-2 text-sm font-semibold tracking-wide text-center xl:text-base text-primary">
                                {desc.module}
                            </p>
                        </div>
                        {/* Submodules */}
                        {desc.submodules && renderSubmodules(desc.submodules)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TierCard;
