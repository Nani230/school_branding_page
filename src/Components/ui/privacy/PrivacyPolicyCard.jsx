import React from "react";

const PrivacyPolicyCard = ({ data }) => {
    // Function to render nested details
    const renderDetails = (details) => {
        return (
            <ul className="pl-6 list-disc list-inside">
                {details.map((detail, idx) => (
                    <li key={idx} className="pl-5 text-base sm:text-lg">
                        {detail}
                    </li>
                ))}
            </ul>
        );
    };

    // Function to render subsections
    const renderSubsections = (subsections) => {
        return (
            <div className="mt-2">
                {subsections.map((subsection, idx) => (
                    <div key={idx} className="mb-2">
                        <h3 className="pl-5 font-sans text-lg font-semibold sm:text-xl text-primary">
                            {subsection.title}
                        </h3>
                        {subsection.details &&
                            renderDetails(subsection.details)}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="py-1 mb-2">
            <h2 className="mb-2 font-sans text-xl font-bold sm:text-2xl text-primary">
                {data.title}
            </h2>
            {Array.isArray(data.content) ? (
                <ul className="pl-6 list-disc list-inside">
                    {data.content.map((item, index) => (
                        <li key={index} className="pl-5 text-base sm:text-lg">
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="pl-5 font-sans text-base font-normal sm:text-lg">
                    {data.content}
                </p>
            )}
            {data.subsections && renderSubsections(data.subsections)}
        </div>
    );
};

export default PrivacyPolicyCard;
