import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
    children,
    index = 0,
    animationType = "scale",
    dataIndex,
    dataType,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing after it becomes visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    let animationClass;
    if (animationType === "fade") {
        animationClass = `transition-opacity duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`;
    } else if (animationType === "slide") {
        animationClass = `transition-transform duration-500 transform ${
            isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
        }`;
    } else if (animationType === "slideright") {
        animationClass = `transition-transform duration-500 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`;
    } else {
        animationClass = `transition-transform duration-500 transform ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`;
    }

    return (
        <div
            ref={sectionRef}
            data-index={dataIndex}
            data-type={dataType}
            className={animationClass}
            style={{
                transitionDelay: `${index * 50}ms`, // Stagger effect for both types
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
