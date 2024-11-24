import {
    FaWallet,
    FaList,
    FaClipboardList,
    FaUtensils,
    FaVideo,
    FaCalendarAlt,
    FaUsers,
    FaFire,
    FaUserShield,
    FaClock,
    FaRoute,
    FaCarAlt,
    FaRegCalendarCheck,
    FaPhoneAlt,
    FaRobot,
    FaComments,
} from "react-icons/fa";

const Advanceddata = [
    {
        id: 1,
        name: "Wallet: Digital Payments",
        title: "Wallet",
        benifit:
            "The Digital Payments feature simplifies financial transactions by centralizing them within the platform, making it easier and more efficient for users to make payments and manage their finances. By offering secure, seamless, and flexible payment options, this feature enhances user convenience and ensures that transactions are completed quickly and safely. It eliminates the need for external payment methods, streamlining the payment process for both individuals and organizations. The transparency and real-time tracking of payments further empower users to stay on top of their financial activities, ensuring a smooth and reliable experience.",
        des: `The Wallet feature, specifically the Digital Payments section, provides users with a secure and convenient way to handle financial transactions within the platform. It allows users to make payments, receive funds, and manage their digital finances directly through the system, without the need for external payment methods or platforms. The Digital Payments feature ensures a seamless, fast, and secure way to handle all financial transactions, whether it's for services, products, or internal company expenses.`,
        data: [
            {
                icon: FaWallet,
                title: "Digital Payments",
                para: "The digital payments functionality enables users to pay for various services or products using their wallet balance or linked payment methods. Users can securely store and manage their funds in the digital wallet, and make payments for items such as fees, subscriptions, or purchases directly from the platform. It integrates with multiple payment gateways and supports various methods like credit/debit cards, bank transfers, or digital wallets, offering flexibility in how users can pay. The system ensures secure transactions through encryption and complies with financial regulations, providing peace of mind to users when making payments. Additionally, users can monitor their transaction history, check their wallet balance, and even receive notifications for successful payments, ensuring transparency and control over their digital finances.",
            },
        ],
    },
    {
        id: 2,
        name: "Food Court: Food List, Manage Orders, Food Menu",
        title: "Food Court",
        benifit:
            "The Food Court feature is designed to provide a smooth and organized system for managing food-related activities within an organization or campus. It enables users to access a comprehensive food menu, place orders, and manage food-related tasks efficiently. The feature aims to enhance the dining experience by simplifying the ordering process, improving food availability, and ensuring smooth management of food services.",
        des: `The Food Court feature is designed to provide a smooth and organized system for managing food-related activities within an organization or campus. It enables users to access a comprehensive food menu, place orders, and manage food-related tasks efficiently. The feature aims to enhance the dining experience by simplifying the ordering process, improving food availability, and ensuring smooth management of food services.`,
        data: [
            {
                icon: FaList,
                title: "Food List",
                para: "The food list section provides users with a detailed overview of available food items within the food court or dining facility. This list includes all the food options currently on offer, ranging from snacks and beverages to full meals. Users can browse through the available items and view details such as ingredients, nutritional information, and prices. This helps users make informed choices based on their preferences, dietary needs, or budget.",
            },
            {
                icon: FaClipboardList,
                title: "Manage Orders",
                para: "The manage orders section allows users to place, track, and manage their food orders. Whether it's an individual or bulk order, users can easily select items from the food list, specify the quantity, and place their order with a few clicks. This section also enables the monitoring of the order status—whether it's being prepared, ready for pickup, or delivered. Additionally, users can modify or cancel orders before they are processed, giving them flexibility in their choices.",
            },
            {
                icon: FaUtensils,
                title: "Food Menu",
                para: "The food menu section is where the full list of available food items is displayed, categorized into different sections (e.g., breakfast, lunch, snacks, drinks). It gives users an easy-to-navigate interface to explore various food options and choose meals based on their preferences. The menu can be updated in real-time to reflect seasonal items, special offers, or any changes in food availability, ensuring users always have access to the most current information.",
            },
        ],
    },
    {
        id: 3,
        name: "Collaboration Tools: Google Meet/Zoom Integration",
        title: "Collaboration Tools",
        benifit:
            "The Google Meet/Zoom Integration feature enhances communication and collaboration by providing seamless access to video conferencing tools. This integration allows users to easily schedule, join, and manage video meetings within the platform, supporting remote work and online collaboration. It ensures that all meeting-related activities are centralized and simplifies coordination, allowing teams to collaborate efficiently, whether they are working remotely or in different locations.",
        des: `The Collaboration Tools feature, specifically Google Meet/Zoom Integration, is designed to enhance communication and collaboration within the platform by providing seamless access to popular video conferencing tools. With the increasing demand for remote work, virtual meetings, and online collaboration, this integration ensures that users can easily connect with colleagues, students, clients, or stakeholders without having to switch between platforms.`,
        data: [
            {
                icon: FaVideo,
                title: "Video Meetings",
                para: "This functionality allows users to schedule, join, and manage video meetings directly within the platform using Google Meet or Zoom. Whether for team discussions, client meetings, or online training sessions, users can create and share meeting links, set up recurring meetings, and send calendar invites without leaving the platform. The integration ensures that all relevant information is centralized, allowing for a smoother workflow and eliminating the need for manual link sharing or external calendar management. Additionally, users can enjoy all the standard features of Google Meet and Zoom, such as screen sharing, chat, breakout rooms, and recording, while having the added convenience of managing everything within the existing system.",
            },
        ],
    },
    {
        id: 4,
        name: "AI-Based Applications: Safety & Security (Fire Detection, Person Tracking)",
        title: "AI-Based Applications",
        benifit:
            "The AI-Based Applications for Safety & Security significantly enhance the protection and well-being of individuals within an organization by leveraging intelligent systems for real-time fire detection and person tracking. The fire detection system ensures that potential fire hazards are swiftly identified, triggering prompt responses and minimizing damage. Similarly, person tracking enhances security by monitoring movements and preventing unauthorized access, all while supporting faster evacuations during emergencies. By integrating AI into these critical safety measures, organizations can improve overall safety, reduce risk, and ensure a secure environment for all individuals, fostering greater peace of mind and operational efficiency.",
        des: `The AI-Based Applications feature, specifically the Safety & Security aspect, incorporates advanced artificial intelligence technologies to enhance the safety and security measures within the system. This feature focuses on real-time monitoring and response systems, ensuring that safety risks are minimized and security threats are swiftly addressed. The inclusion of Fire Detection and Person Tracking makes this a vital component in creating a secure environment for users and premises.`,
        data: [
            {
                icon: FaFire,
                title: "Fire Detection",
                para: "The AI-powered fire detection system uses sensors and machine learning algorithms to detect signs of fire or smoke in real-time. It continuously monitors various environmental factors, such as temperature, smoke levels, and air quality, to identify potential fire hazards. Once detected, the system triggers alarms, sends notifications to relevant authorities, and can even automatically activate fire suppression systems if integrated. This proactive approach reduces response time, ensuring that fire-related emergencies are managed efficiently, which is crucial for the safety of individuals and property. The AI system continuously learns from past incidents, improving its detection capabilities over time to ensure more accurate alerts.",
            },
            {
                icon: FaUserShield,
                title: "Person Tracking",
                para: ": Person tracking utilizes AI algorithms to monitor the movement and location of individuals within a specific area, such as a building or campus. By integrating with sensors, cameras, or wearable devices, the system can track personnel in real time, ensuring their safety and security. In case of an emergency or security breach, the system can quickly identify the location of individuals, aiding in swift evacuation or targeted response. Person tracking is also used for monitoring unauthorized access, ensuring that only authorized personnel are present in certain restricted areas. It can even be used to enhance productivity by tracking movements within the premises, ensuring smooth operations and alerting security to potential threats.",
            },
        ],
    },
    {
        id: 5,
        name: "Transport: Route Management, Driver Management",
        title: "Transport",
        benifit:
            "The Route Management and Driver Management features work together to optimize transportation logistics, improving both efficiency and safety. By streamlining route planning and adjusting in real-time, organizations can ensure punctual transport services while minimizing disruptions. The Driver Management system further strengthens the overall transportation framework by maintaining high safety and performance standards, preventing operational errors, and ensuring that drivers adhere to necessary regulations. Together, these features create a more reliable, safe, and cost-effective transportation system, enhancing the overall experience for users and increasing operational effectiveness.",
        des: `The Transport feature focuses on optimizing and managing transportation operations within an organization, ensuring smooth logistics for employees, students, or other stakeholders who rely on organizational transport systems. The Route Management and Driver Management components work together to streamline travel operations, enhance efficiency, and ensure safety for all users.`,
        data: [
            {
                icon: FaRoute,
                title: "Route Management",
                para: "The Route Management system allows organizations to plan, optimize, and monitor transport routes in real-time. It enables the creation of the most efficient travel paths for buses, shuttles, or other transport vehicles based on factors like traffic conditions, pick-up/drop-off points, and time constraints. By analyzing real-time data, it can automatically adjust routes to avoid delays and ensure timely arrivals. The system also allows for scheduling and tracking routes, ensuring that transportation services are well-coordinated and responsive to the needs of passengers. Additionally, route management provides transparency, as users can view upcoming routes, estimated arrival times, and potential delays.",
            },
            {
                icon: FaCarAlt,
                title: "Driver Management",
                para: " Driver Management ensures that all drivers are properly assigned, monitored, and evaluated to maintain safety and operational efficiency. This includes tracking the performance, schedules, and availability of drivers, as well as ensuring compliance with regulations, such as work hours or safety standards. The system can also provide driver performance reports, which help in identifying any areas of improvement and maintaining high service quality. Features such as automated notifications for driver assignments, real-time location tracking, and monitoring driver behavior contribute to reducing risks and enhancing safety for both drivers and passengers. Additionally, organizations can track the health and certification status of drivers to ensure that only qualified personnel are behind the wheel",
            },
        ],
    },
    {
        id: 6,
        name: "AI ChatBot (Automatic Calling System)",
        title: "AI ChatBot",
        benifit:
            "The AI ChatBot (Automatic Calling System) streamlines communication by automating routine calling tasks, saving time and reducing the need for human involvement in repetitive processes. This not only increases operational efficiency but also improves user satisfaction by providing faster responses and personalized interactions. Organizations can rely on the system to handle large volumes of calls, providing consistent, high-quality service 24/7, without the limitations of human availability. The AI-powered chatbot's ability to understand user inputs and provide accurate, context-aware responses enhances the user experience and ensures that customers receive timely and relevant information, all while reducing operational costs and improving overall productivity.",
        des: `The AI ChatBot (Automatic Calling System) is an advanced feature designed to enhance communication and customer service by integrating artificial intelligence into the process of making automated calls. This system uses AI-powered chatbots and voice recognition technology to initiate, manage, and respond to calls without the need for human intervention. It provides a seamless and efficient way to handle a variety of communication tasks, from customer support to appointment reminders, thus improving overall user engagement and operational efficiency.`,
        data: [
            {
                icon: FaPhoneAlt,
                title: "Automatic Calling System",
                para: "The AI-powered Automatic Calling System allows businesses or organizations to automate their calling processes for various tasks. Whether it's sending reminders, collecting feedback, updating users about important events, or handling routine inquiries, the system can make scheduled calls to users and interact with them through pre-recorded messages or live AI-generated responses. It can be used for a wide range of functions, such as confirming appointments, reminding about bills or payments, sending service updates, or even conducting surveys. The chatbot understands and responds to user inputs, providing a natural conversational experience. It can also integrate with user data, providing personalized interactions based on the recipient's history or preferences.",
            },
            {
                icon: FaRobot,
                title: "AI ChatBot Integration",
                para: " The AI ChatBot is an integral part of the automatic calling system, offering interactive, real-time communication with users. The chatbot uses natural language processing (NLP) to interpret spoken or typed responses and provide accurate answers or instructions. For example, if a user answers an automated call with a query or request, the AI can understand the context and provide the necessary information or actions, such as rescheduling an appointment or answering frequently asked questions. Additionally, the chatbot can continuously learn from interactions to improve its responses and adapt to user behavior over time, making it more efficient with each use.",
            },
        ],
    },
];

export default Advanceddata;
