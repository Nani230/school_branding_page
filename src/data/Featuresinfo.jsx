import React, { useState } from "react";
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
import client_1 from "@assets/client/client-1.png";
import client_2 from "@assets/client/client-2.png";
import client_3 from "@assets/client/client-3.png";

const Clientdata = [
    {
        img: client_1,
    },
    {
        img: client_2,
    },
    {
        img: client_3,
    },
    {
        img: client_1,
    },
    {
        img: client_2,
    },
    {
        img: client_3,
    },
    {
        img: client_1,
    },
    {
        img: client_2,
    },
    {
        img: client_3,
    },
    {
        img: client_1,
    },
    {
        img: client_2,
    },
    {
        img: client_3,
    },
];

const campusdata = [
    {
        icon: <MdOutlineDashboardCustomize className="w-full h-full" />,
        title: "Dashboard",
        description: [
            {
                module: "Dashboard",
                submodules: [
                    "Branches",
                    "Academic Year",
                    "User Profile",
                    "Contacts",
                ],
            },
            {
                module: "Chat",
                submodules: [],
            },
        ],
    },
    {
        icon: <FaRoute className="w-full h-full" />,
        title: "Geo location",
        description: [
            {
                module: "Geo location",
                submodules: ["Track and manage locations", "Maps integration"],
            },
        ],
    },
    {
        icon: <MdOutlineDashboardCustomize className="w-full h-full" />,
        title: "Academics",
        description: [
            {
                module: "Academics",
                submodules: [
                    "Teacher Performance",
                    "Student Performance ",
                    " Classroom",
                    "Online Classes",
                    " Timetables",
                    "Student Marks",
                    "Attendance",
                ],
            },
        ],
    },
    {
        icon: <IoNewspaper className="w-full h-full" />,
        title: "Exams",
        description: [
            {
                module: "Exams",
                submodules: ["Create Question", "Schedule Exam"],
            },
        ],
    },
    {
        icon: <FaCalendarAlt className="w-full h-full" />,
        title: "Events",
        description: [
            {
                module: "Events",
                submodules: ["Event Management", "Schedules & Notifications"],
            },
        ],
    },
    {
        icon: <FaUsers className="w-full h-full" />,
        title: "Users",
        description: [
            {
                module: "Users",
                submodules: [
                    "Organization Admin",
                    "Admin",
                    "Teachers",
                    "Students",
                    "Workers",
                    "Etc..",
                ],
            },
        ],
    },
    {
        icon: <IoCashOutline className="w-full h-full" />,
        title: "Finance",
        description: [
            {
                module: "Finance",
                submodules: [
                    "Money Requests",
                    "Student Fees",
                    "Staff Payroll",
                    "Invoicing & Payments",
                ],
            },
        ],
    },
    {
        icon: <MdOutlineEmojiTransportation className="w-full h-full" />,
        title: "Transport",
        description: [
            {
                module: "Transport",
                submodules: ["Route Management", "Driver Management"],
            },
        ],
    },
    {
        icon: <GiFamilyHouse className="w-full h-full" />,
        title: "Hostel",
        description: [
            {
                module: "Hostel",
                submodules: [
                    "Booking List",
                    "Room List",
                    "Assign Rooms",
                    "Visitor List",
                ],
            },
        ],
    },
    {
        icon: <IoLibrary className="w-full h-full" />,
        title: "Library",
        description: [
            {
                module: "Library",
                submodules: ["Resources", "Add Resources", "E-Course"],
            },
        ],
    },
    {
        icon: <FaWarehouse className="w-full h-full" />,
        title: "Inventory",
        description: [
            {
                module: "Inventory",
                submodules: ["Products", "Supplier Management", "Orders"],
            },
        ],
    },
    {
        icon: <LiaBusinessTimeSolid className="w-full h-full" />,
        title: "Timesheet",
        description: [
            {
                module: "Timesheet",
                submodules: [
                    "Fill Timesheet",
                    "Apply Leave",
                    "Stand-By",
                    "Shift Management",
                    "Requests, FAQ",
                ],
            },
        ],
    },
    {
        icon: <VscFileSubmodule className="w-full h-full" />,
        title: "File Management",
        description: [
            {
                module: "File Management",
                submodules: ["Document Handling", "Upload/Download Files"],
            },
        ],
    },
];

const Performancedata = [
    {
        icon: <GrDocumentPerformance className="w-full h-full" />,
        title: "My Performance",
        description: [
            {
                module: "My Performance",
                submodules: [
                    "Employee Performance",
                    "Task Performance",
                    "Department Performance",
                    " Job Applicants",
                ],
            },
        ],
    },
    {
        icon: <AiFillProfile className="w-full h-full" />,
        title: "Expense Claims",
        description: [
            {
                module: "Expense Claims",
                submodules: ["Manage Reimbursements"],
            },
        ],
    },
    {
        icon: <FaTools className="w-full h-full" />,
        title: "My Requests",
        description: [
            {
                module: "My Requests",
                submodules: ["Personal Requests"],
            },
        ],
    },
    {
        icon: <FaAward className="w-full h-full" />,
        title: "My Rewards",
        description: [
            {
                module: "My Rewards",
                submodules: ["Track & Manage Rewards"],
            },
        ],
    },
    {
        icon: <MdNotificationsActive className="w-full h-full" />,
        title: "Notifications",
        description: [
            {
                module: "Notifications",
                submodules: ["Latest Activity", "Track Notifications"],
            },
        ],
    },
    {
        icon: <IoMdSettings className="w-full h-full" />,
        title: "Settings",
        description: [
            {
                module: "Settings",
                submodules: ["System Configuration"],
            },
        ],
    },
    {
        icon: <RiCustomerService2Line className="w-full h-full" />,
        title: "Customer Support",
        description: [
            {
                module: "Customer Support",
                submodules: ["Technical Support", "24/7 support"],
            },
        ],
    },
];

const Aidrivendata = [
    {
        icon: <GiWallet className="w-full h-full" />,
        title: "Wallet",
        description: [
            {
                module: "Wallet",
                submodules: ["Digital Payments"],
            },
        ],
    },
    {
        icon: <IoFastFoodSharp className="w-full h-full" />,
        title: "Food Court",
        description: [
            {
                module: "Food Court",
                submodules: ["Food List", "Manage Orders", "Food Menu"],
            },
        ],
    },
    {
        icon: <FaTv className="w-full h-full" />,
        title: "Collaboration Tools",
        description: [
            {
                module: "Collaboration Tools",
                submodules: ["Google Meet/Zoom Integration"],
            },
        ],
    },
    {
        icon: <GiArtificialIntelligence className="w-full h-full" />,
        title: "AI-Based Applications",
        description: [
            {
                module: "AI-Based Applications",
                submodules: [
                    "Safety & Security (Fire Detection, Person Tracking)",
                ],
            },
        ],
    },
    {
        icon: <HiMiniChatBubbleBottomCenterText className="w-full h-full" />,
        title: "AI ChatBot",
        description: [
            {
                module: "AI ChatBot",
                submodules: ["(Automatic Calling System)"],
            },
        ],
    },
];

const data = {
    Clientdata,
    campusdata,
    Performancedata,
    Aidrivendata,
};

export default data;
