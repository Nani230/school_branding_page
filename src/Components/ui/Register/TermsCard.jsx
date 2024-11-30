import React from "react";

const TermsCard = ({ data }) => {
    // Function to render nested points
    const renderPoints = (points) => {
        return (
            <ul className="pl-6 list-disc list-inside">
                {points.map((point, idx) => (
                    <li key={idx} className="pl-5 text-base sm:text-lg">
                        {typeof point === "string" ? (
                            point
                        ) : (
                            <>
                                <span className="font-sans text-base font-normal text-primary">
                                    {point.subtitle}
                                </span>
                                {point.details && renderPoints(point.details)}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="py-1 mb-2 ">
            <h2 className="mb-2 font-sans text-xl font-bold sm:text-2xl text-primary">
                {data.title}
            </h2>
            {Array.isArray(data.description) ? (
                data.description.map((section, idx) => (
                    <div key={idx} className="mb-2">
                        {section.subtitle && (
                            <h3 className="pl-5 font-sans text-base font-semibold sm:text-lg text-primary">
                                {section.subtitle}
                            </h3>
                        )}
                        {section.points && renderPoints(section.points)}
                    </div>
                ))
            ) : (
                <p className="pl-5 font-sans text-base font-normal sm:text-lg">
                    {data.description}
                </p>
            )}
        </div>
    );
};

export default TermsCard;
