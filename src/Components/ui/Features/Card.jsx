import React from "react";

const Card = ({ data }) => {
    return (
        <div
            className={`flex rounded-xl flex-col items-center lg:items-start   md:flex-row w-full   lg:gap-10
         lg:p-5 p-3 mb-2`}
        >
            <div
                className={`lg:h-44 lg:w-44 bg-textcolor sm:w-40 sm:h-40 w-32 h-32   rounded-lg flex flex-col items-center justify-center `}
            >
                <div className="flex flex-col items-center h-full justify-evenly">
                    <span className="w-5 h-5 text-white sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-10 lg:h-10">
                        {data.icon}
                    </span>
                    <p className="text-white font-sans font-bold text-center mt-0.5 text-[14px] sm:text-sm md:text-lg">
                        {data.title}
                    </p>
                </div>
            </div>
            <div className="w-full ml-0 md:w-10/12 md:ml-4">
                <p className="mt-2 font-sans text-xs font-bold text-center sm:text-start md:text-xl lg:text-2xl text-[#3F4D8C] font-poetsen">
                    {data.para}
                </p>
            </div>
        </div>
    );
};

export default Card;
