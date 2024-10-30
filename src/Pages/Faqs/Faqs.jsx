import React, { useState } from 'react';
import image from '../../assets/FaqsBackground.png';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqsdata = [
    {
        que: "1. What types of educational institutions can use VisionicX?",
        ans: "VisionicX is designed for a wide range of institutions, including schools, colleges, universities, and other learning centers. Our platform adapts to the unique needs of any educational environment."
    },
    {
        que: "2. How does VisionicX improve communication between students, teachers, and parents?",
        ans: "Our platform offers real-time messaging, notifications, and updates, ensuring that students, teachers, and parents stay connected. It simplifies sharing important information like grades, attendance, and school events."
    },
    {
        que: "3. Is VisionicX easy to integrate with existing systems?",
        ans: "Yes! VisionicX can seamlessly integrate with most existing student information systems (SIS) and learning management systems (LMS), allowing for a smooth transition without disrupting current operations."
    },
    {
        que: "4. What features does VisionicX offer for colleges and universities?",
        ans: "VisionicX offers advanced features like course management, faculty collaboration, event scheduling, attendance tracking, and real-time student performance analytics, catering to the specific needs of higher education institutions."
    },
    {
        que: "5. Can I customize VisionicX for my institution’s specific needs?",
        ans: "Absolutely! VisionicX allows for customizable modules, enabling institutions to select features that align with their unique requirements, whether for administration, student tracking, or communication."
    },
    {
        que: "6. How does VisionicX help with event management?",
        ans: "Our platform simplifies organizing events, from scheduling and registration to real-time updates and communication with attendees. This feature is available for both educational and extracurricular activities."
    },
    {
        que: "7. Is VisionicX accessible on mobile devices?",
        ans: "Yes, VisionicX offers a fully responsive mobile app that allows students, parents, and faculty to access important features on-the-go, ensuring accessibility anytime, anywhere."
    },
    {
        que: "8. Is training provided for administrators and staff?",
        ans: "Yes! VisionicX provides comprehensive training and support for administrators and staff to ensure a smooth implementation and effective use of the platform."
    },
    {
        que: "9. How secure is the data in VisionicX?",
        ans: "Data security is our top priority. VisionicX uses advanced encryption and data protection protocols to ensure that all personal and institutional information is secure and confidential."
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='h-full bg-cover bg-center flex justify-center p-5 pt-9' style={{ backgroundImage: `url(${image})` }}>
            <div className='flex items-center flex-col bg-[#E7EAF3] lg:w-8/12 md:w-full sm:w-full lg:p-5 lg:px-9 md:px-3 sm:px-0 rounded-lg'>
                <div className='p-4 flex justify-center items-center flex-col '>
                    <h1 className='text-headingcolor text-4xl font-bold tracking-wider'>FAQ</h1>
                    <p className='bg-[#546687] p-2 rounded-full w-16 mt-0.5'></p>
                </div>
                <div className='flex justify-center items-start flex-col mb-3 w-full'>
                    {Faqsdata.map((each, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`w-full lg:m-3 sm:my-2 p-3 rounded-lg transition-all duration-500 ease-in-out transform ${isOpen ? 'bg-[#DBEAFE] shadow-lg' : 'bg-headingcolor'} hover:shadow-md`}
                            >
                                <div
                                    className='flex justify-between items-center cursor-pointer'
                                    onClick={() => handleToggle(i)}
                                    style={{ color: isOpen ? "#172B85" : '#fff' }}
                                >
                                    <h1 className='font-semibold lg:text-lg sm:text-base md:text-lg'>{each.que}</h1>
                                    <div className={`transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                                        {isOpen ? <FaChevronUp className='font-bold text-lg sm:ml-2' /> : <FaChevronDown className='font-bold text-lg sm:ml-4' />}
                                    </div>
                                </div>
                                <div
                                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className='lg:pl-10 sm:pl-3 py-2 text-textcolor text-sm leading-6'>{each.ans}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Faqs;
