import {
    FaTree, // Icon representing branches
    FaCalendarAlt, // Icon representing academic year
    FaUser, // Icon for user profile
    FaPhone, // Icon for contacts
    FaStickyNote, // Icon for notes
    FaCommentDots, // Icon for instant messaging
    FaUsers, // Icon for group chats
    FaShareSquare, // Icon for share feature
    FaBell, // Icon for notifications
} from "react-icons/fa";
import { MdChat, MdNotifications } from "react-icons/md"; // Additional icons from Material Design

// Overview section data with unique descriptions
const overviewdata = [
    {
        icon: <FaTree className="w-full h-full" />,
        para: "This section provides an organized view of all branches under the organization. Administrators and managers can access each branch’s details, including location, staff, students, and the specific programs they offer. This feature allows for easy navigation and management of multi-branch institutions, ensuring streamlined operations across different campuses.",
    },
    {
        icon: <FaCalendarAlt className="w-full h-full" />,
        para: "A centralized view of the ongoing academic year, including term dates, holidays, and exam schedules. It assists in planning activities and ensuring that all stakeholders are aware of the academic timeline, making it easier to schedule events, exams, and key deadlines without conflicts.",
    },
    {
        icon: <FaUser className="w-full h-full" />,
        para: " The User Profile allows each individual to manage their information securely. Depending on their role (e.g., admin, teacher, student), users can update personal details, view permissions, and access role-specific data, fostering a sense of personalized engagement and enhancing data security.",
    },
    {
        icon: <FaPhone className="w-full h-full" />,
        para: "A repository for managing the organization’s contacts, which includes important personnel and departments. It ensures that relevant information is accessible to all users, helping them to quickly find and communicate with individuals or departments within the campus, thus reducing delays and improving productivity.",
    },
    {
        icon: <FaStickyNote className="w-full h-full" />,
        para: "This section acts as a digital notepad for users, allowing them to create, organize, and store notes related to meetings, projects, classes, or any other tasks. It is designed to help users stay organized and keep track of essential information, which is particularly useful for busy educators, administrators, and students.",
    },
];

// Chat section data with unique descriptions
const chatdata = [
    {
        icon: <FaCommentDots className="w-full h-full" />,
        para: "This section provides an organized view of all branches under the organization. Administrators and managers can access each branch’s details, including location, staff, students, and the specific programs they offer. This feature allows for easy navigation and management of multi-branch institutions, ensuring streamlined operations across different campuses.",
    },
    {
        icon: <FaUsers className="w-full h-full" />,
        para: "A centralized view of the ongoing academic year, including term dates, holidays, and exam schedules. It assists in planning activities and ensuring that all stakeholders are aware of the academic timeline, making it easier to schedule events, exams, and key deadlines without conflicts.",

        icon: <FaShareSquare className="w-full h-full" />,
        para: " The User Profile allows each individual to manage their information securely. Depending on their role (e.g., admin, teacher, student), users can update personal details, view permissions, and access role-specific data, fostering a sense of personalized engagement and enhancing data security.",
    },
    {
        icon: <FaBell className="w-full h-full" />,
        para: "A repository for managing the organization’s contacts, which includes important personnel and departments. It ensures that relevant information is accessible to all users, helping them to quickly find and communicate with individuals or departments within the campus, thus reducing delays and improving productivity.",
    },
];

const data = {
    overviewdata,
    chatdata,
};

export default data;
