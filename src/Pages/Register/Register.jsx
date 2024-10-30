import React from 'react'
import image from '../../assets/registerbackground.png';
import image1 from '../../assets/registercardbackground.png'
import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";




const Exclusivecard = [
    {
        para: "Free Setup and Integration"
    },
    {
        para: "Real-time Communication"
    },
    {
        para: "Customizable Reports"
    },
    {
        para: "Cloud-Based Security"
    },
    {
        para: "24/7 Support"
    },
    {
        para: "Exclusive Early Bird Access"
    },
    {
        para: "Zero Commitment Risk"
    },

]

const Regularcard = [
    {
        para: "Full Cost for 6 Months"
    },
    {
        para: "All-In-One School Management"
    },
    {
        para: "Customizable Dashboard"
    },
    {
        para: "Registration and complete fee applies"
    },
    {
        para: "Mobile-Friendly Access"
    },
    {
        para: "Priority 24/7 Support"
    },
    {
        para: "Manual updates"
    },

]


const Silver_Tier_Data = [
    {

        Head: "Silver Tier ",
        subhead: "(Basic Features)",
        para: "This tier provides essential features for basic school management needs.",
        description: [
            {
                module: "Dashboard",
                submodules: ["Branches", "Academic Year", "User Profile", "Contacts"]
            },
            {
                module: "Chat",
                submodules: ["Group Chating ", "Personal Chating"]
            },
            {
                module: "Geo location",
                submodules: ["Track Branches, Blocks, Floors, Rooms", "Maps integration"]
            },
            {
                module: "Academics",
                submodules: ["Teacher Performance", "Student Performance ", " Classroom", "Online Classes", "Student Marks",]
            },
            {
                module: "Timetables",
                submodules: ["Staff Timetables", "Class Timetables"]
            },
            {
                module: "Attendance",
                submodules: ["Student Attendance", "Staff Attendance"]
            },
            {
                module: "File Management",
                submodules: ["Document Handling"]
            },
            {
                module: "Settings",
                submodules: ["System Configuration"]
            },
            {
                module: "Notifications",
                submodules: ["Latest Activity"]
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Priority basis"]
            },
        ]

    },
]
const Gold_Tier_Data = [
    {

        Head: "Gold Tier ",
        subhead: "(Intermediate Features)",
        para: "In addition to the Silver tier, this level includes extended capabilities for enhanced school management.",
        description: [
            {
                module: "Dashboard",
                submodules: ["Branches", "Academic Year", "User Profile", "Contacts"]
            },
            {
                module: "Chat",
                submodules: ["Group Chating ", "Personal Chating"]
            },
            {
                module: "Geo location",
                submodules: ["Track Branches, Blocks, Floors, Rooms", "Maps integration"]
            },
            {
                module: "Academics",
                submodules: ["Teacher Performance", "Student Performance ", " Classroom", "Online Classes", "Student Marks",]
            },
            {
                module: "Timetables",
                submodules: ["Staff Timetables", "Class Timetables"]
            },
            {
                module: "Attendance",
                submodules: ["Student Attendance", "Staff Attendance"]
            },
            {
                module: "File Management",
                submodules: ["Document Handling"]
            },
            {
                module: "Settings",
                submodules: ["System Configuration"]
            },
            {
                module: "Notifications",
                submodules: ["Latest Activity"]
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Priority basis"]
            },
        ]

    },
]
const Platinum_Tier_Data = [
    {

        Head: "Platinum Tier ",
        subhead: "(Intermediate Features)",
        para: "In addition to the Silver tier, this level includes extended capabilities for enhanced school management.",
        description: [
            {
                module: "Dashboard",
                submodules: ["Branches", "Academic Year", "User Profile", "Contacts"]
            },
            {
                module: "Chat",
                submodules: ["Group Chating ", "Personal Chating"]
            },
            {
                module: "Geo location",
                submodules: ["Track Branches, Blocks, Floors, Rooms", "Maps integration"]
            },
            {
                module: "Academics",
                submodules: ["Teacher Performance", "Student Performance ", " Classroom", "Online Classes", "Student Marks",]
            },
            {
                module: "Timetables",
                submodules: ["Staff Timetables", "Class Timetables"]
            },
            {
                module: "Attendance",
                submodules: ["Student Attendance", "Staff Attendance"]
            },
            {
                module: "File Management",
                submodules: ["Document Handling"]
            },
            {
                module: "Settings",
                submodules: ["System Configuration"]
            },
            {
                module: "Notifications",
                submodules: ["Latest Activity"]
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Priority basis"]
            },
        ]

    },
]
const Premium_Tier_Data = [
    {

        Head: "Premium Tier ",
        subhead: "(Intermediate Features)",
        para: "In addition to the Silver tier, this level includes extended capabilities for enhanced school management.",
        description: [
            {
                module: "Dashboard",
                submodules: ["Branches", "Academic Year", "User Profile", "Contacts"]
            },
            {
                module: "Chat",
                submodules: ["Group Chating ", "Personal Chating"]
            },
            {
                module: "Geo location",
                submodules: ["Track Branches, Blocks, Floors, Rooms", "Maps integration"]
            },
            {
                module: "Academics",
                submodules: ["Teacher Performance", "Student Performance ", " Classroom", "Online Classes", "Student Marks",]
            },
            {
                module: "Timetables",
                submodules: ["Staff Timetables", "Class Timetables"]
            },
            {
                module: "Attendance",
                submodules: ["Student Attendance", "Staff Attendance"]
            },
            {
                module: "File Management",
                submodules: ["Document Handling"]
            },
            {
                module: "Settings",
                submodules: ["System Configuration"]
            },
            {
                module: "Notifications",
                submodules: ["Latest Activity"]
            },
            {
                module: "Customer Support",
                submodules: ["Technical Support", "Priority basis"]
            },
        ]

    },
]



const Register = () => {
    return (
        <>        <div className='h-full bg-cover bg-center flex flex-col items-center ' style={{ backgroundImage: `url(${image})` }}>

            {/* header-------------------------*/}

            <div className='bg-white m-5 p-5 bg-opacity-75 rounded-lg shadow-lg w-2/4'>
                <h1 className='text-headingcolor font-semibold text-3xl text-center leading-10'>Exclusive Offer for Schools – Save on Our Education Management System!</h1>
                <p className='text-headingcolor text-sm text-center mt-4'>Limited Time Discounts – Register Early and Unlock Huge Savings!</p>
            </div>

            {/* Exclusive and Regular box------------------------- */}

            <div className='flex gap-12 justify-center mt-3'>
                <div className=' w-1/3 px-4'>
                    <div className=' bg-white px-6 py-4 rounded-lg border-2 border-textcolor flex flex-col gap-4'>
                        <h1 className='text-headingcolor font-semibold text-xl'>Exclusive <span className='font-extralight text-base'> Offer - Register Before November 30th</span></h1>
                        <h1 className='text-headingcolor font-semibold text-2xl'>100%Off <span className='text-sm text-cardtext font-normal'> / 6 Month</span></h1>
                        <p className='text-sm text-cardtext font-normal'>Pay only the registration fee, and get 6 months free access.
                            Free Setup and Integration: Let our team handle the entire setup, ensuring zero hassle for you.</p>
                        <div className='flex flex-col gap-3'>
                            {Exclusivecard.map((each, i) => {
                                return (
                                    <div key={i} className='flex justify-start items-center gap-3'>
                                        {/* Apply green color to the first icon and text, and blurred style to the rest */}
                                        <p className={i === 0 ? 'text-green-500' : 'text-[#172B85]'}>
                                            <FaRegCircleDot />
                                        </p>
                                        <p className={i === 0 ? 'text-[#172B85] font-medium text-base' : 'text-[#606F7B]  text-base'}>
                                            {each.para}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex justify-center items-center mt-4'>
                            <button className='bg-[#DBEAFE] px-3 py-1.5 rounded-sm text-textcolor font-semibold text-sm cursor-pointer'>Register Now</button>
                        </div>

                    </div>
                    <div className='flex justify-between items-center px-6 my-3'>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Silver</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Gold</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Platinum</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Premium</button>
                    </div>
                </div>

                {/*  Regular box------------------------- */}

                <div className=' w-1/3 px-4'>
                    <div className=' bg-white px-6 py-4 rounded-lg border-2 border-textcolor flex flex-col gap-4'>
                        <h1 className='text-headingcolor font-semibold text-xl'>Regular <span className='font-extralight text-base'> Pricing (After November 30th)</span></h1>
                        <h1 className='text-headingcolor font-semibold text-xl'>Full Cost <span className='text-sm text-cardtext font-normal'> / 6 Month</span></h1>
                        <p className='text-sm text-cardtext font-normal'>No discounts; pay the regular subscription rate for all features.</p>
                        <div className='flex flex-col gap-3 mt-5'>
                            {Regularcard.map((each, i) => {
                                return (
                                    <div key={i} className='flex justify-start items-center gap-3'>
                                        {/* Apply green color to the first icon and text, and blurred style to the rest */}
                                        <p className={i === 0 ? 'text-red-500' : 'text-[#172B85]'}>
                                            <FaRegCircleDot />
                                        </p>
                                        <p className={i === 0 ? 'text-[#172B85] font-medium text-base' : 'text-[#606F7B]  text-base'}>
                                            {each.para}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex justify-center items-center mt-4'>
                            <button className='border-2 border-textcolor px-3 py-1.5 rounded-lg text-textcolor font-semibold text-sm cursor-pointer'>Choose plan</button>
                        </div>

                    </div>
                    <div className='flex justify-between items-center px-6 my-3'>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Silver</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Gold</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Platinum</button>
                        <button className='border-2 border-textcolor rounded-lg py-1 px-3 text-headingcolor text-sm font-semibold hover:bg-headingcolor hover:text-white'>Premium</button>
                    </div>
                </div>

            </div>
            <div className='mt-10  mb-5 flex flex-col gap-2'>
                <h1 className='text-headingcolor font-semibold text-4xl text-center'>Let our team handle the entire setup, ensuring zero hassle for you.</h1>
                <p className='text-[#172B85] text-center'>Don’t miss the limited offer.</p>
            </div>



        </div>
            {/*Features for Each Tier----------------- */}

            <div className='flex flex-col items-center w-full px-8 bg-cover bg-center ' style={{ backgroundImage: `url(${image1})` }}>

                <div>
                    <h1 className='text-headingcolor font-semibold text-3xl text-center mt-5 mb-6'>Features for Each Tier</h1>
                </div>
                <div className='flex justify-between gap-5 items-center w-full mt-2'>
                    <div className='w-1/4 mb-5'>
                        {Silver_Tier_Data.map((each, i) => {
                            return (
                                < >
                                    <div className='w-full '>
                                        <div className='flex flex-col justify-start items-center bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4 mb-3 h-36'>
                                            <h1 className='text-headingcolor font-semibold text-lg text-center'>{each.Head}</h1>
                                            <p className='text-headingcolor font-normal text-sm text-center'>{each.subhead}</p>
                                            <p className='text-headingcolor font-normal text-sm text-center mt-2'>{each.para}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-start bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4'>

                                            <div>
                                                {each.description.map((desc, idx) => (
                                                    <div key={idx}>
                                                        <div className='flex items-center gap-1'>
                                                            <MdOutlineStars className='text-headingcolor' />
                                                            <p className='font-semibold text-base p-1 py-2 text-headingcolor text-center tracking-wide'>{desc.module}</p>
                                                        </div>
                                                        {desc.submodules.length > 0 && (
                                                            <ul className='list-disc list-inside pl-4'>
                                                                {desc.submodules.map((sub, subIdx) => (
                                                                    <li key={subIdx} className='text-headingcolor text-sm'>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='w-1/4 mb-5'>
                        {Gold_Tier_Data.map((each, i) => {
                            return (
                                < >
                                    <div className='w-full '>
                                        <div className='flex flex-col justify-start items-center bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4 mb-3 h-36'>
                                            <h1 className='text-headingcolor font-semibold text-lg text-center'>{each.Head}</h1>
                                            <p className='text-headingcolor font-normal text-sm text-center'>{each.subhead}</p>
                                            <p className='text-headingcolor font-normal text-sm text-center mt-2'>{each.para}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-start bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4'>

                                            <div>
                                                {each.description.map((desc, idx) => (
                                                    <div key={idx}>
                                                        <div className='flex items-center gap-1'>
                                                            <MdOutlineStars className='text-headingcolor' />
                                                            <p className='font-semibold text-base p-1 py-2 text-headingcolor text-center tracking-wide'>{desc.module}</p>
                                                        </div>
                                                        {desc.submodules.length > 0 && (
                                                            <ul className='list-disc list-inside pl-4'>
                                                                {desc.submodules.map((sub, subIdx) => (
                                                                    <li key={subIdx} className='text-headingcolor text-sm'>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='w-1/4 mb-5'>
                        {Platinum_Tier_Data.map((each, i) => {
                            return (
                                < >
                                    <div className='w-full '>
                                        <div className='flex flex-col justify-start items-center bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4 mb-3 h-36'>
                                            <h1 className='text-headingcolor font-semibold text-lg text-center'>{each.Head}</h1>
                                            <p className='text-headingcolor font-normal text-sm text-center'>{each.subhead}</p>
                                            <p className='text-headingcolor font-normal text-sm text-center mt-2'>{each.para}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-start bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4'>

                                            <div>
                                                {each.description.map((desc, idx) => (
                                                    <div key={idx}>
                                                        <div className='flex items-center gap-1'>
                                                            <MdOutlineStars className='text-headingcolor' />
                                                            <p className='font-semibold text-base p-1 py-2 text-headingcolor text-center tracking-wide'>{desc.module}</p>
                                                        </div>
                                                        {desc.submodules.length > 0 && (
                                                            <ul className='list-disc list-inside pl-4'>
                                                                {desc.submodules.map((sub, subIdx) => (
                                                                    <li key={subIdx} className='text-headingcolor text-sm'>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='w-1/4 mb-5'>
                        {Premium_Tier_Data.map((each, i) => {
                            return (
                                < >
                                    <div className='w-full '>
                                        <div className='flex flex-col justify-start items-center bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4 mb-3 h-36'>
                                            <h1 className='text-headingcolor font-semibold text-lg text-center'>{each.Head}</h1>
                                            <p className='text-headingcolor font-normal text-sm text-center'>{each.subhead}</p>
                                            <p className='text-headingcolor font-normal text-sm text-center mt-2'>{each.para}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-start bg-white shadow-custom bg-opacity-75 rounded-lg p-3 pb-4'>

                                            <div>
                                                {each.description.map((desc, idx) => (
                                                    <div key={idx}>
                                                        <div className='flex items-center gap-1'>
                                                            <MdOutlineStars className='text-headingcolor' />
                                                            <p className='font-semibold text-base p-1 py-2 text-headingcolor text-center tracking-wide'>{desc.module}</p>
                                                        </div>
                                                        {desc.submodules.length > 0 && (
                                                            <ul className='list-disc list-inside pl-4'>
                                                                {desc.submodules.map((sub, subIdx) => (
                                                                    <li key={subIdx} className='text-headingcolor text-sm'>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register
