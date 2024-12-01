import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const FormPage = () => {
    const { name: planName } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [iframeSrc, setIframeSrc] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!planName) {
            navigate("/"); // Redirect if no plan is selected
            return;
        }

        const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSeut_tzG4Ano185FWx_YOIRTa1tJGB9QRnepXkz6UafnKABqA/viewform?embedded=true&usp=pp_url&entry.392276593=${encodeURIComponent(
            planName
        )}`;
        setIframeSrc(googleFormURL);
    }, [planName, navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen ">
            <h2 className="my-4 font-sans text-2xl font-bold text-primary">
                Complete Your Registration
            </h2>
            {iframeSrc ? (
                <div className="w-full h-[2590px]">
                    <iframe
                        src={iframeSrc}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            ) : (
                <p>Loading form...</p>
            )}
        </div>
    );
};

export default FormPage;
