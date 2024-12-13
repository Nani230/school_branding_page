const Exclusivedata = [
    {
        title: "Exclusive",
        subtitle: "Offer - Register Before December 2024",
        offer: "100%Off ",
        duration: "  5 Months",
        desc: "Pay only the registration fee, and get 5 Monthss free access. Free Setup and Integration: Let our team handle the entire setup, ensuring zero hassle for you",
        para: [
            " Free Setup and Integration",

            "Real-time Communication",

            "Customizable Reports",

            "Cloud-Based Security",

            "24/7 Support",

            "Exclusive Early Bird Access",
            "Zero Commitment Risk",
        ],
        button: "Register Now",
    },
    {
        title: "Regular",
        subtitle: "Pricing (After December 2024)",
        offer: "Full Cost ",
        duration: "  5 Months",
        desc: "No discounts; pay the regular subscription rate for all features.",

        para: [
            "Full Cost for 5 Monthss",
            "All-In-One School Management",
            "Customizable Dashboard",
            "Registration and complete fee applies",
            "Mobile-Friendly Access",
            "Priority 24/7 Support",
            "Manual updates",
        ],
        button: "Choose plan",
    },
];

const TierData = [
    {
        Head: "Silver Tier",
        subhead: "(Basic Features)",
        para: "This tier provides essential features for basic school management needs.",
        description: [
            {
                module: "Dashboard",
                submodules: [
                    "Overview (Branches, Academic Year, User Profile, Contacts, Notes)",
                    "Chat",
                ],
            },
            {
                module: "Geo Location",
                submodules: ["Track Branches, Blocks, Floors, Rooms"],
            },
            {
                module: "Users",
                submodules: [
                    "Organization Admin",
                    "Admin",
                    "Teachers",
                    "Students",
                    "Parents",
                    "Workers",
                ],
            },
            {
                module: "Academics",
                submodules: [
                    "Teacher Performance",
                    "Student Performance",
                    "Classroom Management",
                    {
                        submodule: "Timetables",
                        details: ["Staff Timetable", "Class Timetable"],
                    },
                    "Student Marks",
                    {
                        submodule: "Attendance",
                        details: ["Student Attendance", "Staff Attendance"],
                    },
                ],
            },

            {
                module: "File Management",
                submodules: ["Document Handling"],
            },
            {
                module: "Settings",
                submodules: ["System Configuration"],
            },
            {
                module: "Notifications",
                submodules: ["Latest Activity"],
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Priority basis"],
            },
        ],
    },

    {
        Head: "Gold Tier ",
        subhead: "(Intermediate Features)",
        para: "In addition to the Silver tier, this level includes extended capabilities for enhanced school management.",
        description: [
            {
                module: "Academics",
                submodules: ["Dashboard"],
            },
            {
                module: "Events",
                submodules: ["Event Management", "Schedules & Notifications"],
            },
            {
                module: "Library",
                submodules: ["Resources", "Add Resources"],
            },
            {
                module: "Inventory",
                submodules: ["Products", "Supplier Management"],
            },
            {
                module: "My Requests",
                submodules: ["Personal Requests"],
            },
            {
                module: "Expense Claims",
                submodules: ["Manage Reimbursements"],
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Available 24/7"],
            },
            {
                module: "Sports",
                submodules: ["Add Team", "Schedule Matches"],
            },
            {
                module: "Analytic Dashboard",
                submodules: ["Data Insights"],
            },
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
        Head: "Platinum Tier ",
        subhead: "(Advanced Features)",
        para: "In addition to the Gold tier, this tier includes more advanced features and analytics tools.",
        description: [
            {
                module: "Timesheet",
                submodules: [
                    "Fill Timesheet",
                    "Apply Leave",
                    "Stand-By",
                    "Shift Management",
                    "Requests",
                    "FAQ",
                ],
            },
            {
                module: "Exams",
                submodules: ["Create Question ", "Schedule Exam"],
            },
            {
                module: "Transport",
                submodules: ["Route Management", "Driver Management"],
            },
            {
                module: "Hostel",
                submodules: [
                    "Visitor List",
                    "Assign Rooms",
                    " Booking List",
                    "Room List",
                ],
            },
            {
                module: "Food Court",
                submodules: ["Food List", "Manage Orders", "Food Menu"],
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Available 24/7"],
            },
            {
                module: "Wallet",
                submodules: ["Digital Payments"],
            },
        ],
    },
    {
        Head: "Customize ",
        subhead: "(All-Inclusive, High-End Features)",
        para: "This tier gives you the freedom to choose and create your own personalized features.",
        description: [
            {
                module: "Collaboration Tools",
                submodules: ["Online Classes"],
            },
            {
                module: "AI-Based Applications",
                submodules: [
                    "Safety & Security (Fire Detection, Person Tracking)",
                ],
            },
            {
                module: "Transport",
                submodules: ["Full Transport Management with IoT monitoring"],
            },
            {
                module: "AI Chat Bot",
                submodules: ["Automatic Calling System"],
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Available 24/7"],
            },
            {
                module: "Customize Features",
                submodules: [
                    "Personalize features",
                    "Select preferred features ",
                ],
            },
        ],
    },
];

const data = {
    Exclusivedata,
    TierData,
};

export default data;
