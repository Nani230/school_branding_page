import {
    FaUserCheck,
    FaClipboardList,
    FaUsers,
    FaUserTie,
    FaMoneyCheckAlt,
    FaBell,
    FaTasks,
    FaTrophy,
    FaCogs,
    FaHeadset,
    FaClock,
} from "react-icons/fa";

const Performancedata = [
    {
        id: 1,
        name: "My Performance: Employee Performance, Task Performance, Department Performance, Job Applicants",
        title: "My Performance",
        benifit:
            "The My Performance feature enhances both individual and organizational growth by providing valuable insights into performance at multiple levels. By tracking employee, task, and department performance, it ensures that progress is measurable and transparent, supporting both personal development and team effectiveness. It empowers managers to provide targeted feedback, recognize achievements, and address challenges proactively. Additionally, by integrating job applicant tracking, the feature streamlines the hiring process, helping organizations attract and retain top talent. Overall, this feature promotes a culture of continuous improvement, accountability, and strategic alignment, fostering an environment where employees can thrive and contribute to organizational success.",
        des: `The My Performance feature is designed to provide a comprehensive view of an individual’s performance within an organization. It helps employees, managers, and HR teams track various aspects of performance, including personal achievements, task completion, departmental contributions, and the status of job applicants. By centralizing performance data, this feature enables continuous improvement and ensures that employees' contributions align with organizational goals.`,
        data: [
            {
                icon: FaUserCheck,
                title: "Employee Performance",
                para: "The employee performance section tracks and evaluates the performance of individual employees. It provides insights into key performance indicators (KPIs), such as productivity, quality of work, and adherence to deadlines. This feature allows managers to provide constructive feedback, identify areas of improvement, and recognize top performers. It helps employees understand how their work impacts the organization and motivates them to achieve their best. Regular performance tracking also supports career development and helps guide employees toward professional growth.",
            },
            {
                icon: FaClipboardList,
                title: "Task Performance",
                para: "Task performance monitors how well employees complete specific tasks assigned to them. It tracks metrics like completion time, accuracy, and the quality of results. By analyzing task performance, managers can assess whether tasks are being completed on schedule and if the desired outcomes are achieved. This feature also helps employees understand their strengths and areas where they may need additional support or training, ensuring that tasks are completed efficiently and effectively.",
            },
            {
                icon: FaUsers,
                title: "Department Performance",
                para: "The department performance feature provides an overview of how well an entire department is performing. It aggregates individual task performance data and provides insights into how each team or department contributes to the organization's overall objectives. This helps managers identify high-performing departments or areas that may require attention or additional resources. It fosters a sense of accountability and encourages departments to collaborate to meet common organizational goals, aligning their efforts for maximum impact.",
            },
            {
                icon: FaUserTie,
                title: "Job Applicants",
                para: "The job applicants section tracks the status and progress of candidates applying for positions within the organization. HR teams can view detailed information about each applicant, including resumes, application statuses, and interview outcomes. This feature helps streamline the hiring process by providing easy access to candidate data and ensuring that no application is overlooked. It supports decision-making by allowing HR teams to compare applicants, track their progress, and make informed choices when selecting the best candidates for open positions.",
            },
        ],
    },
    {
        id: 2,
        name: "Expense Claims: Manage Reimbursements",
        title: "Expense Claims",
        benifit:
            "The Expense Claims feature simplifies the reimbursement process by making it more transparent, efficient, and error-free. It ensures that employees can easily claim back legitimate business expenses, while also giving finance teams the tools they need to review, approve, and process claims swiftly. By automating and centralizing this workflow, the system reduces the administrative burden, ensures compliance with company policies, and speeds up reimbursement times. Ultimately, this feature enhances employee satisfaction, as they receive timely reimbursements, while also improving financial oversight and reducing the risk of fraudulent claims.",
        des: `The Expense Claims feature is designed to streamline the process of submitting, approving, and managing reimbursements for employees within an organization. Whether for travel expenses, office supplies, or other work-related costs, this system ensures that employees are reimbursed promptly and accurately, while also maintaining transparency and accountability in the organization’s financial processes.`,
        data: [
            {
                icon: FaMoneyCheckAlt,
                title: "Manage Reimbursements",
                para: "The reimbursement management feature allows employees to submit claims for out-of-pocket expenses incurred while performing their job duties. Employees can upload receipts, specify the nature of the expense, and enter necessary details such as dates and amounts. Once submitted, the claim can be reviewed and approved by the appropriate manager or finance team member. The system keeps track of all claims, ensuring timely approval and reimbursement. For finance teams, it offers an organized and centralized platform to manage, review, and process reimbursements quickly, reducing administrative time and minimizing errors. Additionally, the feature can enforce company policies, such as expense limits or types of reimbursable costs, ensuring compliance across the board.",
            },
        ],
    },
    {
        id: 3,
        name: "My Requests: Personal Requests",
        title: "My Requests",
        benifit:
            "The Personal Requests feature enhances organizational efficiency by providing employees with a simple and centralized platform to submit their requests. It empowers employees to manage their time and needs while maintaining clear communication with managers and HR. This feature reduces administrative workload by automating the request process, ensuring transparency, and ensuring that personal needs are addressed promptly and fairly. By streamlining personal requests, the organization can boost employee satisfaction and improve overall operational workflow.",
        des: `The My Requests feature is designed to allow employees to submit and manage personal requests within the organization, helping streamline administrative processes and improve the employee experience. Whether it's a request for time off, a change in work schedule, or any other personal need, this feature ensures that all personal requests are handled efficiently and transparently.`,
        data: [
            {
                icon: FaClipboardList,
                title: "Personal Requests",
                para: "The personal requests section allows employees to easily submit various types of personal requests, such as leave applications, shift changes, or special accommodations. Employees can specify the type of request, provide any necessary details, and submit the request for approval. This feature makes it easy for employees to track the status of their requests and receive notifications about approvals or denials. It also ensures that managers can review and address personal requests in a timely manner, ensuring that the organization's operations continue smoothly while meeting employees' needs.",
            },
        ],
    },
    {
        id: 4,
        name: "My Rewards: Track & Manage Rewards",
        title: "My Rewards",
        benifit:
            "The Track & Manage Rewards feature enhances employee motivation and satisfaction by making rewards transparent, accessible, and easily manageable. By providing employees with a clear view of their achievements and earned rewards, it encourages a sense of accomplishment and drives further engagement and productivity. This feature also supports the organization's culture of recognition, ensuring that top performers are consistently rewarded for their hard work. It strengthens employee retention and morale, creating an environment where employees feel valued and are incentivized to contribute to the organization’s success.",
        des: `The My Rewards feature is designed to track and manage the rewards and recognition that employees earn within an organization. It serves as a central platform where employees can view, track, and manage their rewards, ensuring transparency, motivation, and engagement. Whether it’s a performance-based incentive, a milestone achievement, or a company-wide recognition program, this feature makes sure that employees are acknowledged for their contributions.`,
        data: [
            {
                icon: FaTrophy,
                title: "Track & Manage Rewards",
                para: "The rewards tracking section allows employees to keep track of the rewards they have earned through their work or specific achievements. Employees can view the details of their rewards, such as points, bonuses, or recognition certificates, and monitor their progress towards future rewards. This feature offers a clear overview of the rewards system, making it easy for employees to understand how they can earn more and what actions or performance metrics are needed to unlock additional rewards. Employees can also manage their rewards, whether it’s redeeming earned points for perks or using their rewards for specific benefits offered by the organization. Additionally, managers and HR can use this feature to oversee the reward distribution process, ensuring that it is fair and based on clearly defined criteria.",
            },
        ],
    },
    {
        id: 5,
        name: "Notifications: Latest Activity, Track Notifications",
        title: "Notifications",
        benifit:
            "The Notifications feature enhances organizational communication by ensuring that all relevant updates are delivered promptly and clearly. By keeping users informed about the latest activities and allowing them to track and manage notifications efficiently, it improves overall responsiveness, accountability, and collaboration. This feature ensures that critical tasks and updates are not overlooked, helping employees stay on top of their work and fostering a proactive approach to problem-solving. It contributes to smoother workflows and better alignment across teams, ultimately enhancing productivity and ensuring that all members are kept in the loop.",
        des: `The Notifications feature is designed to keep users informed about the most important updates and activities within the organization. It helps streamline communication by ensuring that all users are aware of the latest developments, tasks, or actions that require their attention. Whether it’s an update on a project, a new task assignment, or a general announcement, this feature ensures that key notifications are delivered efficiently.`,
        data: [
            {
                icon: FaBell,
                title: "Latest Activity",
                para: "The latest activity section provides real-time updates on important events and actions within the organization. This includes notifications about task progress, approvals, new messages, upcoming deadlines, or changes in schedules. By receiving timely alerts on the latest activity, users can stay on top of their responsibilities and respond promptly to any changes or new tasks. This feature helps employees and managers avoid missing critical information and ensures that everyone is aligned with the latest developments in their workflows.",
            },
            {
                icon: FaTasks,
                title: "Track Notifications",
                para: "The track notifications functionality allows users to manage and monitor their notifications in a centralized way. Users can easily view, filter, and track their notifications, keeping them organized and accessible. Whether it’s for urgent tasks or general updates, users can ensure that they don’t overlook any important messages. This feature also allows users to mark notifications as read, dismiss them, or revisit them later for follow-up, making it easy to track their activities and responsibilities over time.",
            },
        ],
    },
    {
        id: 6,
        name: "Settings: System Configuration",
        title: "Settings",
        benifit:
            "The System Configuration feature empowers administrators to tailor the platform to the specific requirements of the organization, ensuring optimal performance and compliance. By providing granular control over system settings, this feature enhances flexibility, security, and user experience. It allows the organization to streamline processes, enforce policies, and integrate seamlessly with existing tools, ensuring the system supports both day-to-day operations and long-term goals. Ultimately, this level of customization leads to greater efficiency, improved workflow management, and a more user-centric experience for everyone in the organization.",
        des: `The Settings feature, specifically the System Configuration section, allows administrators to customize and configure various settings within the platform to ensure it aligns with the organization’s specific needs and operational requirements. This feature offers a centralized hub for managing system-wide preferences, settings, and configurations that impact how the system functions for all users.`,
        data: [
            {
                icon: FaCogs,
                title: "System Configuration",
                para: "The system configuration section enables administrators to adjust key settings across the platform, such as user roles and permissions, notification preferences, system security protocols, and integration options with other tools or platforms. Administrators can configure settings to ensure compliance with organizational policies, streamline workflows, and enhance user experiences. For example, the system might allow administrators to customize the user interface, set up default templates for documents, manage data access rights, or integrate with third-party tools like email services or project management software. By having full control over the system configuration, organizations can ensure that the platform supports their operational needs and adheres to internal standards.",
            },
        ],
    },
    {
        id: 7,
        name: "Customer Support: Technical Support, 24/7 Support",
        title: "Customer Support",
        benifit:
            "The Customer Support feature, with its Technical Support and 24/7 Support offerings, significantly improves user satisfaction by providing constant access to assistance whenever needed. By offering reliable and round-the-clock support, the organization ensures that users can quickly address technical issues and minimize disruptions to their work. This comprehensive support system builds trust and confidence in the platform, fostering a positive user experience and maintaining productivity across the organization. With prompt, accessible support, users can resolve problems efficiently, contributing to smoother workflows and less frustration.",
        des: `The Customer Support feature is designed to offer users a comprehensive and responsive support system, ensuring they can easily access assistance whenever they encounter issues or have inquiries. This feature aims to enhance user satisfaction by providing timely solutions to technical problems and general inquiries related to the system. The inclusion of Technical Support and 24/7 Support ensures that users receive continuous and efficient assistance, no matter the time or the nature of the problem.`,
        data: [
            {
                icon: FaHeadset,
                title: "Technical Support",
                para: "The technical support aspect of the feature provides users with expert help for troubleshooting and resolving technical issues they may face while using the platform. Whether it’s a problem with system functionality, software bugs, or integration issues, users can reach out to the support team for solutions. This could involve step-by-step guidance, remote troubleshooting, or escalations to higher-level support if needed. The goal is to minimize downtime and ensure that users can continue their tasks without disruption.",
            },
            {
                icon: FaClock,
                title: "24/7 Support",
                para: "The 24/7 support aspect ensures that assistance is always available, regardless of the time of day or day of the week. This is particularly valuable for global organizations or users working in different time zones who may need help at unconventional hours. With 24/7 support, users can contact customer support at any time and receive prompt responses, ensuring a seamless experience and quick resolution of any issues they encounter.",
            },
        ],
    },
];

export default Performancedata;
