import React from "react";
import image from "../../assets/registerbackground.png";
import image1 from "../../assets/registercardbackground.png";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";
import Exclusive from "@/Components/Register/Exclusive";
import Tier from "@/Components/Register/Tier";
import Terms from "@/Components/Register/Terms";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className=" responsive-section">
            <div className="relative flex flex-col items-center w-full h-auto pb-10 bg-center bg-cover responsive-section">
                <pre className="absolute w-full h-full font-mono text-lg whitespace-pre-wrap -top-4 lg:-top-5 xl:-top-0 -z-10">
                    <img
                        src={image}
                        className="hidden object-cover object-bottom w-full h-full max-w-full lg:block" // Visible only at and above lg breakpoint
                        alt=""
                    />
                </pre>
                <div className="w-2/4 p-5 m-5 bg-white bg-opacity-75 rounded-lg shadow-lg">
                    <h1 className="text-xs font-bold text-center md:leading-10 font-inter sm:text-sm lg:text-xl xl:text-3xl text-primary">
                        Exclusive Offer for Schools – Save on Our Education
                        Management System!
                    </h1>
                    <p className="mt-4 text-xs text-center md:text-sm text-primary">
                        Limited Time Discounts – Register Early and Unlock Huge
                        Savings!
                    </p>
                </div>
                <Exclusive />
            </div>

            <div className="flex flex-col gap-2 mb-5 ">
                <h1 className="font-semibold text-center md:text-xl lg:text-2xl xl:text-3xl text-primary">
                    Let our team handle the entire setup, ensuring zero hassle
                    for you.
                </h1>
                <p className="text-center text-primary">
                    Don’t miss the limited offer.
                </p>
            </div>
            <Tier />
            <Link to="/terms">
                <h1 className="w-full mt-10 font-sans text-base font-semibold text-center text-primary">
                    Terms and Conditions*
                </h1>
            </Link>
        </div>
    );
};

export default Register;
