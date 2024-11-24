import { FaCommentDots, FaUsers, FaShareSquare, FaBell } from "react-icons/fa";

const chatdata = [
    {
        icon: <FaCommentDots className="w-full h-full" />,
        title: "Instant Messaging",
        para: "This section provides an organized view of all branches under the organization. Administrators and managers can access each branch’s details, including location, staff, students, and the specific programs they offer. This feature allows for easy navigation and management of multi-branch institutions, ensuring streamlined operations across different campuses.",
    },
    {
        icon: <FaUsers className="w-full h-full" />,
        title: "Group Chats",
        para: "A centralized view of the ongoing academic year, including term dates, holidays, and exam schedules. It assists in planning activities and ensuring that all stakeholders are aware of the academic timeline, making it easier to schedule events, exams, and key deadlines without conflicts.",
    },
    {
        icon: <FaShareSquare className="w-full h-full" />,
        title: "File Sharing",
        para: "The User Profile allows each individual to manage their information securely. Depending on their role (e.g., admin, teacher, student), users can update personal details, view permissions, and access role-specific data, fostering a sense of personalized engagement and enhancing data security.",
    },
    {
        icon: <FaBell className="w-full h-full" />,
        title: "Notification Alerts",
        para: "A repository for managing the organization’s contacts, which includes important personnel and departments. It ensures that relevant information is accessible to all users, helping them to quickly find and communicate with individuals or departments within the campus, thus reducing delays and improving productivity.",
    },
];

export default chatdata;
