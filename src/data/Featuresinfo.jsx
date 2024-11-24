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
        id: 1,
        icon: MdOutlineDashboardCustomize,
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
        ],
    },
    {
        id: 2,
        icon: FaRoute,
        title: "Geo location",
        description: [
            {
                module: "Geo location",
                submodules: ["Track and manage locations", "Maps integration"],
            },
        ],
    },
    {
        id: 3,
        icon: MdOutlineDashboardCustomize,
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
        id: 4,
        icon: IoNewspaper,
        title: "Exams",
        description: [
            {
                module: "Exams",
                submodules: ["Create Question", "Schedule Exam"],
            },
        ],
    },
    {
        id: 5,
        icon: FaCalendarAlt,
        title: "Events",
        description: [
            {
                module: "Events",
                submodules: ["Event Management", "Schedules & Notifications"],
            },
        ],
    },
    {
        id: 6,
        icon: FaUsers,
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
        id: 7,
        icon: IoCashOutline,
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
        id: 8,
        icon: GiFamilyHouse,
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
        id: 9,
        icon: IoLibrary,
        title: "Library",
        description: [
            {
                module: "Library",
                submodules: ["Resources", "Add Resources", "E-Course"],
            },
        ],
    },
    {
        id: 10,
        icon: FaWarehouse,
        title: "Inventory",
        description: [
            {
                module: "Inventory",
                submodules: ["Products", "Supplier Management", "Orders"],
            },
        ],
    },
    {
        id: 11,
        icon: LiaBusinessTimeSolid,
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
        id: 12,
        icon: VscFileSubmodule,
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
        id: 1,
        icon: GrDocumentPerformance,
        title: "My Performance",
        description: [
            {
                module: "My Performance",
                submodules: [
                    "Employee Performance",
                    "Task Performance",
                    "Department Performance",
                    "Job Applicants",
                ],
            },
        ],
    },
    {
        id: 2,
        icon: AiFillProfile,
        title: "Expense Claims",
        description: [
            {
                module: "Expense Claims",
                submodules: ["Manage Reimbursements"],
            },
        ],
    },
    {
        id: 3,
        icon: FaTools,
        title: "My Requests",
        description: [
            {
                module: "My Requests",
                submodules: ["Personal Requests"],
            },
        ],
    },
    {
        id: 4,
        icon: FaAward,
        title: "My Rewards",
        description: [
            {
                module: "My Rewards",
                submodules: ["Track & Manage Rewards"],
            },
        ],
    },
    {
        id: 5,
        icon: MdNotificationsActive,
        title: "Notifications",
        description: [
            {
                module: "Notifications",
                submodules: ["Latest Activity", "Track Notifications"],
            },
        ],
    },
    {
        id: 6,
        icon: IoMdSettings,
        title: "Settings",
        description: [
            {
                module: "Settings",
                submodules: ["System Configuration"],
            },
        ],
    },
    {
        id: 7,
        icon: RiCustomerService2Line,
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
        id: 1,
        icon: GiWallet,
        title: "Wallet",
        description: [
            {
                module: "Wallet",
                submodules: ["Digital Payments"],
            },
        ],
    },
    {
        id: 2,
        icon: IoFastFoodSharp,
        title: "Food Court",
        description: [
            {
                module: "Food Court",
                submodules: ["Food List", "Manage Orders", "Food Menu"],
            },
        ],
    },
    {
        id: 3,
        icon: FaTv,
        title: "Collaboration Tools",
        description: [
            {
                module: "Collaboration Tools",
                submodules: ["Google Meet/Zoom Integration"],
            },
        ],
    },
    {
        id: 4,
        icon: GiArtificialIntelligence,
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
        id: 5,
        icon: HiMiniChatBubbleBottomCenterText,
        title: "Transport",
        description: [
            {
                module: "Transport",
                submodules: [
                    "Branches",
                    "Academic Year",
                    "User Profile",
                    "Contacts",
                ],
            },
        ],
    },
    {
        id: 6,
        icon: HiMiniChatBubbleBottomCenterText,
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
