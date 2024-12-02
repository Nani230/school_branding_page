import React from "react";
import TermsCard from "../ui/Register/TermsCard";
import terms from "@data/terms/Termsdata";
import AnimatedSection from "@animation/AnimatedSection";

const Terms = () => {
    return (
        <div className="min-h-screen px-10 mt-10 responsive-section lg:pt-10 md:px-20 lg:px-32">
            <h1 className="mb-6 font-sans text-xl font-bold text-center sm:text-3xl text-primary">
                Terms and Conditions
            </h1>
            <p className="font-sans text-base font-normal sm:text-lg">
                These detailed Terms and Conditions govern the use of VisionicX
                products, which include the Universal Management System (UMS),
                Attendance Management System, Single-Phase Energy Monitoring
                System, and Three-Phase Energy Monitoring System. By accessing
                or using any VisionicX product, users agree to comply with these
                terms. VisionicX is product of VisionariesAI Labs Pvt Ltd, and
                these terms outline the rights and responsibilities of users and
                the company.
            </p>

            {terms.map((term, index) => (
                <AnimatedSection
                    key={index}
                    index={index}
                    animationType="slide"
                >
                    <TermsCard key={index} data={term} />
                </AnimatedSection>
            ))}
            <p className="mb-5 font-sans text-base font-normal sm:text-lg">
                By using VisionicX products, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions. Powered by
                VisionariesAI Labs Pvt Ltd, VisionicX ensures innovation,
                customization, and reliability across industries.
            </p>
        </div>
    );
};

export default Terms;
