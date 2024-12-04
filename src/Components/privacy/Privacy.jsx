import React from "react";
import TermsCard from "../ui/Register/TermsCard";
import terms from "@data/terms/Termsdata";
import AnimatedSection from "@animation/AnimatedSection";
import PrivacyPolicyCard from "../ui/privacy/PrivacyPolicyCard";
import Privacydata from "@data/privacy/Privacydata";

const Privacy = () => {
    return (
        <div className="min-h-screen px-5 pt-10 sm:px-10 responsive-section md:px-20 lg:px-32">
            <h1 className="mb-6 font-sans text-xl font-bold text-center sm:text-3xl text-primary">
                Privacy Policy for VisionicX Products
            </h1>
            <p className="mb-5 font-sans text-base font-normal sm:text-lg">
                This Privacy Policy explains how VisionariesAI Labs Pvt Ltd
                (“we,” “our,” or “us”) collects, uses, shares, and protects
                personal data related to VisionicX products, including the
                Universal Management System (UMS), Attendance Management System,
                Single-Phase Energy Monitoring System, and Three-Phase Energy
                Monitoring System. By using VisionicX products, you agree to
                this policy.
            </p>

            {Privacydata.map((data, index) => (
                <AnimatedSection
                    key={index}
                    index={index}
                    animationType="slide"
                >
                    <PrivacyPolicyCard key={index} data={data} />
                </AnimatedSection>
            ))}
            <h1 className="mb-4 font-bold leading-tight lg:px-0 text-primary sm:text-2xl md:text-3xl lg:text-2xl text-start sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-tight">
                Commitment to Privacy
            </h1>
            <p className="mb-5 font-sans text-base font-normal sm:text-lg">
                At VisionicX, powered by VisionariesAI Labs Pvt Ltd, we
                prioritize the privacy and security of our users. This Privacy
                Policy ensures transparency and demonstrates our commitment to
                protecting your data while delivering innovative and reliable
                products.
            </p>
        </div>
    );
};

export default Privacy;
