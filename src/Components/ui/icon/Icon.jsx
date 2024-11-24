import React from "react";

const Icon = ({ Source, className, ...props }) => {
    const defaultClassName = "text-white"; // Keep only the essential defaults, avoid conflicting dimensions here.

    if (!Source) {
        console.error("Icon: Missing Source prop.");
        return null; // Render nothing if Source is not provided
    }

    return (
        <Source
            {...props}
            className={`${defaultClassName} ${className || ""}`.trim()} // Merge default and custom classes
        />
    );
};

export default Icon;
