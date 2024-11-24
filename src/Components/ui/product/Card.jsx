import React from "react";

const Card = ({ data }) => {
    return (
        <div
            className={`flex rounded-xl flex-col items-center lg:items-center   md:flex-row w-full gap-3  lg:gap-10
         lg:p-5 p-3 mb-2`}
        >
            <div
                className={` lg:w-80 py-5 text-white font-sans font-bold text-center mt-0.5 text-[14px] sm:text-sm md:text-lg bg-secondary sm:w-40  w-32    rounded-lg flex flex-col items-center justify-center `}
            >
                {data.title}
            </div>
            <div className="w-full ml-0 md:w-10/12 md:ml-4">
                <p className=" font-sans text-xs font-bold text-center sm:text-start md:text-xl lg:text-2xl text-[#3F4D8C] font-poetsen">
                    {data.des}
                </p>
            </div>
        </div>
    );
};

export default Card;
