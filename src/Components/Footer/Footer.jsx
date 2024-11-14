import React from "react";
import logoback from "@assets/footerlogoback.png";
import image from "@assets/logo.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const socialIcons = [
        { icon: <FaFacebookF size={20} />, key: "facebook" },
        { icon: <FaLinkedin size={20} />, key: "linkedin" },
        { icon: <FaTwitter size={20} />, key: "twitter" },
        { icon: <FaInstagram size={20} />, key: "instagram" },
    ];

    const companyInfo = [
        "Donec dignissim",
        "Curabitur egestas",
        "Donec dignissim",
        "Curabitur egestas",
    ];
    const servicesInfo = ["Service 1", "Service 2", "Service 3", "Service 4"];

    return (
        <div className="flex flex-col items-center gap-20 py-10 responsive-section bg-headingcolor">
            <div className="flex flex-col items-center gap-8">
                <h1 className="font-sans font-bold text-center text-white lg:text-3xl md:text-xl sm:text-lg">
                    Transform Your Educational Experience Today!
                </h1>
                <Link
                    to="/Register"
                    className="flex justify-center py-2 overflow-hidden font-mono text-base font-bold rounded-lg hover:text-white text-headingcolor border border-headingcolor before:bg-textcolor bg-[#DBEAFE] group layer-btn"
                >
                    <span className="relative z-20">Register Now</span>
                </Link>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-row lg:flex sm:px-8 lg:px-16">
                <div className="flex flex-col items-center w-full gap-2 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:pr-12">
                    <div
                        className="flex items-center justify-center w-48 h-48 p-4 bg-center bg-cover"
                        style={{ backgroundImage: `url(${logoback})` }}
                    >
                        <img src={image} alt="Logo" />
                    </div>
                    <p className="text-xl font-semibold tracking-wider text-white">
                        VisionicX
                    </p>
                </div>

                {["COMPANY", "SERVICES"].map((title, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-full gap-5 mt-10 text-center text-white md:w-auto lg:text-start"
                    >
                        <h1 className="font-sans text-xl font-bold tracking-wider ">
                            {title}
                        </h1>
                        {(title === "COMPANY" ? companyInfo : servicesInfo).map(
                            (info, idx) => (
                                <li
                                    key={idx}
                                    className="font-sans text-base font-normal list-none cursor-pointer "
                                >
                                    {info}
                                </li>
                            )
                        )}
                        <hr className="md:hidden border border-[#03A7A11F]" />
                    </div>
                ))}
                <div className="flex items-center justify-between w-56 mt-6 lg:mt-0">
                    {socialIcons.map(({ icon, key }) => (
                        <li
                            key={key}
                            className="flex items-center justify-center p-2 text-white rounded-full cursor-pointer bg-textcolor"
                        >
                            {icon}
                        </li>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-[#DBEAFE] font-sans font-normal ">
                    © VisionariesAI PVT. LTD
                </p>
            </div>
        </div>
    );
};

export default Footer;
