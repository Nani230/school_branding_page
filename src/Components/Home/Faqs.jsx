import React from "react";
import FaqsCard from "../ui/Home/FaqsCard";
import Faqsdata from "@/data/Faqsdata";
import image from "@assets/FaqsBackground.png";

const Faqs = () => {
    return (
        <div
            className="relative flex justify-center p-5 mt-48 bg-no-repeat bg-contain responsive-section h-max bg- pt-9"
            // style={{
            //     backgroundImage: `url(${image})`,
            // }}
        >
            <pre className="absolute top-0 font-mono text-lg whitespace-pre-wrap -z-10">
                <code>
                    <img src={image} alt="" />
                </code>
            </pre>
            <div className="flex items-center flex-col bg-[#E7EAF3] lg:w-8/12 md:w-full sm:w-full lg:p-5 lg:px-9 md:px-3 sm:px-0 rounded-lg">
                <div className="flex flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold tracking-wider text-headingcolor">
                        FAQ
                    </h1>
                    <p className="bg-[#546687] p-2 rounded-full w-16 mt-0.5"></p>
                </div>
                <div className="flex flex-col items-start justify-center w-full h-auto mb-3">
                    {Faqsdata.map((data, i) => (
                        <FaqsCard data={data} i={i} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;

//    {/* <div className="relative w-full h-screen bg-black">
//             {/* Triangle */}
//             <div className="absolute top-4 left-4 w-10 h-10 border-l-4 border-b-4 border-[#546687] rotate-45 transform -translate-y-1/2"></div>

//             {/* Square with dots */}
//             <div className="absolute left-1/4 top-1/2 w-16 h-16 bg-[#546687] rotate-45 rounded-lg flex items-center justify-center transform -translate-y-1/2">
//                 <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-[#546687] rounded-full"></div>
//                     <div className="w-2 h-2 bg-[#546687] rounded-full"></div>
//                 </div>
//             </div>

//             {/* Dotted Pattern */}
//             <div className="absolute grid grid-cols-4 gap-1 top-16 right-16">
//                 {[...Array(16)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="w-2 h-2 bg-[#546687] rounded-full"
//                     ></div>
//                 ))}
//             </div>

//             {/* Circle */}
//             <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-[#546687] rounded-full"></div>
//         </div> */}
