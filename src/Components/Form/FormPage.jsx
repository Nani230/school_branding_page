import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const FormPage = () => {
    const { name: planName } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [iframeSrc, setIframeSrc] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen responsive-section ">
            <div className="w-full h-[3800px]">
                <iframe
                    title="Empower Your Institution with VisionicX Registration Form"
                    className="w-full h-screen overflow-hidden"
                    style={{ height: "100%", width: "100%", border: "none" }}
                    src="https://forms.zohopublic.in/contactvision1/form/VisionicXRegistrationForm/formperma/eBBi-0CTa4Xpkj1s1LkouZ3qATXRzLbnCLCknw2A-0g"
                ></iframe>
            </div>
        </div>
    );
};

export default FormPage;
