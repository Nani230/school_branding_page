import React, { useState } from 'react';
import image1 from '../../assets/featurebackground.png';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaRoute } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoCashOutline } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaWarehouse } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { IoLibrary } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { AiFillProfile } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";


const Core_Campus_Management = [
    {
        icon: <MdOutlineDashboardCustomize size={32} />,
        title: "Dashboard",
        description: [
            {
                module: "Dashboard",
                submodules: ["Branches", "Academic Year", "User Profile", "Contacts"]
            },
            {
                module: "Chat",
                submodules: []
            }
        ]
    },
    {
        icon: <FaRoute size={32} />,
        title: "Geo location",
        description: [
            {
                module: "Geo location",
                submodules: ["Track and manage locations", "Maps integration"]
            }
        ]
    },
    {
        icon: <MdOutlineDashboardCustomize size={32} />,
        title: "Academics",
        description: [
            {
                module: "Academics",
                submodules: ["Teacher Performance", "Student Performance ", " Classroom", "Online Classes", " Timetables", "Student Marks", "Attendance"]
            }
        ]
    },
    {
        icon: <IoNewspaper size={32} />,
        title: "Exams",
        description: [
            {
                module: "Exams",
                submodules: ["Create Question", "Schedule Exam"]
            }
        ]
    },
    {
        icon: <FaCalendarAlt size={32} />,
        title: "Events",
        description: [
            {
                module: "Events",
                submodules: ["Event Management", "Schedules & Notifications"]
            }
        ]
    },
    {
        icon: <FaUsers size={32} />,
        title: "Users",
        description: [
            {
                module: "Users",
                submodules: ["Organization Admin", "Admin", "Teachers", "Students", "Workers", "Etc.."]
            }
        ]
    },
    {
        icon: <IoCashOutline size={32} />,
        title: "Finance",
        description: [
            {
                module: "Finance",
                submodules: ["Money Requests", "Student Fees", "Staff Payroll", "Invoicing & Payments"]
            }
        ]
    },
    {
        icon: <MdOutlineEmojiTransportation size={32} />,
        title: "Transport",
        description: [
            {
                module: "Transport",
                submodules: ["Route Management", "Driver Management"]
            }
        ]
    },
    {
        icon: <GiFamilyHouse size={32} />,
        title: "Hostel",
        description: [
            {
                module: "Hostel",
                submodules: ["Booking List", "Room List", "Assign Rooms", "Visitor List"]
            }
        ]
    },
    {
        icon: <IoLibrary size={32} />,
        title: "Library",
        description: [
            {
                module: "Library",
                submodules: ["Resources", "Add Resources", "E-Course"]
            }
        ]
    },
    {
        icon: <FaWarehouse size={32} />,
        title: "Inventory",
        description: [
            {
                module: "Inventory",
                submodules: ["Products", "Supplier Management", "Orders"]
            }
        ]
    },
    {
        icon: <LiaBusinessTimeSolid size={32} />,
        title: "Timesheet",
        description: [
            {
                module: "Timesheet",
                submodules: ["Fill Timesheet", "Apply Leave", "Stand-By", "Shift Management", "Requests, FAQ"]
            }
        ]
    },
    {
        icon: < VscFileSubmodule size={32} />,
        title: "File Management",
        description: [
            {
                module: "File Management",
                submodules: ["Document Handling", "Upload/Download Files"]
            }
        ]
    },
];


const Performance_Personal_Management = [
    {
        icon: <GrDocumentPerformance size={32} />,
        title: "My Performance",
        description: [
            {
                module: "My Performance",
                submodules: ["Employee Performance", "Task Performance", "Department Performance", " Job Applicants"]
            },

        ]
    },
    {
        icon: < AiFillProfile size={32} />,
        title: "Expense Claims",
        description: [
            {
                module: "Expense Claims",
                submodules: ["Manage Reimbursements"]
            }
        ]
    },
    {
        icon: <FaTools size={32} />,
        title: "My Requests",
        description: [
            {
                module: "My Requests",
                submodules: ["Personal Requests"]
            }
        ]
    },
    {
        icon: < FaAward size={32} />,
        title: "My Rewards",
        description: [
            {
                module: "My Rewards",
                submodules: ["Track & Manage Rewards"]
            },

        ]
    },
    {
        icon: <MdNotificationsActive size={32} />,
        title: "Notifications",
        description: [
            {
                module: "Notifications",
                submodules: ["Latest Activity", "Track Notifications"]
            }
        ]
    },
    {
        icon: < IoMdSettings size={32} />,
        title: "Settings",
        description: [
            {
                module: "Settings",
                submodules: ["System Configuration"]
            }
        ]
    },
    {
        icon: <RiCustomerService2Line size={32} />,
        title: "Customer Support",
        description: [
            {
                module: "Customer Support",
                submodules: ["Technical Support", "24/7 support"]
            }
        ]
    },
];

const Advanced_Ai_Driven_Features = [
    {
        icon: <GiWallet size={32} />,
        title: "Wallet",
        description: [
            {
                module: "Wallet",
                submodules: ["Digital Payments"]
            },

        ]
    },
    {
        icon: <IoFastFoodSharp size={32} />,
        title: "Food Court",
        description: [
            {
                module: "Food Court",
                submodules: ["Food List", "Manage Orders", "Food Menu"]
            }
        ]
    },
    {
        icon: < FaTv size={32} />,
        title: "Collaboration Tools",
        description: [
            {
                module: "Collaboration Tools",
                submodules: ["Google Meet/Zoom Integration"]
            }
        ]
    },
    {
        icon: < GiArtificialIntelligence size={32} />,
        title: "AI-Based Applications",
        description: [
            {
                module: "AI-Based Applications",
                submodules: ["Safety & Security (Fire Detection, Person Tracking)"]
            },

        ]
    },
    {
        icon: < HiMiniChatBubbleBottomCenterText size={32} />,
        title: "AI ChatBot",
        description: [
            {
                module: "AI ChatBot",
                submodules: ["(Automatic Calling System)"]
            }
        ]
    },

];

const Feature = () => {
    const [hoverIndexCore, setHoverIndexCore] = useState(null);
    const [hoverIndexPerformance, setHoverIndexPerformance] = useState(null);
    const [hoverAdvancedPerformance, setHoverAdvancedPerformance] = useState(null);

    return (
        <div className='h-full flex justify-center items-center flex-col p-3 pb-10 ' style={{ backgroundImage: `url(${image1})` }}>

            <div className='p-4 flex justify-center items-center flex-col '>
                <h1 className='text-headingcolor text-4xl font-bold tracking-wider'>Feature</h1>
                <p className='bg-[#546687] p-2 rounded-full w-16 mt-0.5'></p>
            </div>

            <div className='flex justify-center items-center flex-col mb-3'>
                <h1 className='text-headingcolor lg:text-2xl md:text-2xl sm:text-lg font-bold tracking-wider py-6 pb-8 text-center '>Core Campus Management</h1>
                <div className='flex lg:gap-20 md:gap-20 sm:gap-10 mt-3 flex-wrap items-center justify-center lg:px-36 md:px-16 sm:px-0'>
                    {Core_Campus_Management.map((each, i) => (
                        <div
                            key={i}
                            className={`lg:h-36 lg:w-36 md:w-36 md:h-36 sm:h-24 sm:w-24 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 ${hoverIndexCore === i ? 'bg-headingcolor' : 'bg-textcolor'}`}
                            onMouseEnter={() => setHoverIndexCore(i)}
                            onMouseLeave={() => setHoverIndexCore(null)}
                        >
                            {hoverIndexCore === i ? (
                                <div className='text-white text-[13px] p-2 overflow-scroll no-scrollbar cursor-move'>
                                    {each.description.map((desc, idx) => (
                                        <div key={idx}>
                                            <p className='font-bold text-sm'>{desc.module}</p>
                                            {desc.submodules.length > 0 && (
                                                <ul className='list-disc list-inside'>
                                                    {desc.submodules.map((sub, subIdx) => (
                                                        <li key={subIdx}>{sub}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <div className='text-white'>{each.icon}</div>
                                    <p className='text-white text-center mt-0.5 sm:text-sm md:text-lg'>{each.title}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mb-3'>
                <h1 className='text-headingcolor lg:text-2xl md:text-2xl sm:text-lg font-bold tracking-wider py-6 pb-8 text-center '>Performance & Personal Management</h1>
                <div className='flex lg:gap-20 md:gap-20 sm:gap-10 mt-3 flex-wrap items-center justify-center lg:px-36 md:px-16 sm:px-0'>
                    {Performance_Personal_Management.map((each, i) => (
                        <div
                            key={i}
                            className={`lg:h-36 lg:w-36 md:w-36 md:h-36 sm:h-24 sm:w-24 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 ${hoverIndexPerformance === i ? 'bg-headingcolor' : 'bg-textcolor'}`}
                            onMouseEnter={() => setHoverIndexPerformance(i)}
                            onMouseLeave={() => setHoverIndexPerformance(null)}
                        >
                            {hoverIndexPerformance === i ? (
                                <div className='text-white text-[13px] p-2 overflow-scroll no-scrollbar cursor-move'>
                                    {each.description.map((desc, idx) => (
                                        <div key={idx}>
                                            <p className='font-bold text-sm'>{desc.module}</p>
                                            {desc.submodules.length > 0 && (
                                                <ul className='list-disc list-inside'>
                                                    {desc.submodules.map((sub, subIdx) => (
                                                        <li key={subIdx}>{sub}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <div className='text-white'>{each.icon}</div>
                                    <p className='text-white text-center mt-0.5 sm:text-sm md:text-lg'>{each.title}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mb-3'>
                <h1 className='text-headingcolor lg:text-2xl md:text-2xl sm:text-lg font-bold tracking-wider py-6 pb-8 text-center'>Advanced & AI-Driven</h1>
                <div className='flex lg:gap-20 md:gap-20 sm:gap-10 mt-3 flex-wrap items-center justify-center lg:px-36 md:px-16 sm:px-0'>
                    {Advanced_Ai_Driven_Features.map((each, i) => (
                        <div
                            key={i}
                            className={`lg:h-36 lg:w-36 md:w-36 md:h-36 sm:h-24 sm:w-24 rounded-lg flex flex-col items-center justify-center transition-transform duration-300  ${hoverAdvancedPerformance === i ? 'bg-headingcolor' : 'bg-textcolor'}`}
                            onMouseEnter={() => setHoverAdvancedPerformance(i)}
                            onMouseLeave={() => setHoverAdvancedPerformance(null)}
                        >
                            {hoverAdvancedPerformance === i ? (
                                <div className='text-white text-[13px] p-2 overflow-scroll no-scrollbar cursor-move'>
                                    {each.description.map((desc, idx) => (
                                        <div key={idx}>
                                            <p className='font-bold text-sm'>{desc.module}</p>
                                            {desc.submodules.length > 0 && (
                                                <ul className='list-disc list-inside'>
                                                    {desc.submodules.map((sub, subIdx) => (
                                                        <li key={subIdx}>{sub}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <div className='text-white'>{each.icon}</div>
                                    <p className='text-white text-center mt-0.5'>{each.title}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
