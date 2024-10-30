import React from 'react';
import logoback from '../assets/footerlogoback.png';
import image from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-headingcolor flex justify-center items-center flex-col gap-20 py-10'>
            <div className='flex justify-center items-center flex-col gap-8'>
                <h1 className='text-white lg:text-3xl font-semibold text-center md:text-xl sm:text-lg'>Transform Your Educational Experience Today!</h1>
                <Link to="/Register" className='bg-[#DBEAFE] rounded-md py-1 px-4 font-semibold text-headingcolor text-lg'>Register Now</Link>
            </div>
            <div className='lg:flex flex-wrap lg:justify-between items-center w-full mx-auto px-4 sm:px-8 lg:px-16 md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center sm:gap-10'>
                <div className='flex justify-center items-center flex-col gap-2 w-full sm:w-1/2 lg:w-1/4 lg:pr-12 '>
                    <div className='h-48 w-48 bg-cover bg-center flex justify-center items-center p-4' style={{ backgroundImage: `url(${logoback})` }}>
                        <img src={image} alt="Logo" />
                    </div>
                    <p className='text-white tracking-wider font-semibold text-xl'>VisionicX</p>
                </div>
                <div className='' >
                    <div className='text-white flex flex-col gap-2'>
                        <h1 className='font-semibold text-xl tracking-wider'>COMPANY</h1>
                        <p className='text-lg'>Donec dignissim</p>
                        <p className='text-lg'>Curabitur egestas</p>
                        <p className='text-lg'>Donec dignissim</p>
                        <p className='text-lg'>Curabitur egestas</p>
                    </div>
                </div>
                <div className='' >
                    <div className='text-white flex flex-col gap-2'>
                        <h1 className='font-semibold text-xl tracking-wider'>Services</h1>
                        <p className='text-lg'>Donec dignissim</p>
                        <p className='text-lg'>Curabitur egestas</p>
                        <p className='text-lg'>Donec dignissim</p>
                        <p className='text-lg'>Curabitur egestas</p>
                    </div>
                </div>
                <div className='flex justify-between items-center sm:flex sm:justify-between w-56 mt-6  lg:mt-0'>

                    <div className='bg-textcolor rounded-full  w-8 h-8 flex justify-center items-center'>
                        <FaFacebookF className='text-white text-sm' />
                    </div>
                    <div className='bg-textcolor rounded-full w-8 h-8 flex justify-center items-center'>
                        <AiOutlineYoutube className='text-white text-lg' />
                    </div>
                    <div className='bg-textcolor rounded-full w-8 h-8 flex justify-center items-center'>
                        <FaTwitter className='text-white text-sm' />
                    </div>

                    <div className='bg-textcolor rounded-full w-8 h-8 flex justify-center items-center'>
                        <FaInstagram className='text-white text-sm' />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-[#DBEAFE] font-semibold tracking-wider'>© VisionariesAI PVT. LTD</p>
            </div>
        </div>
    );
};

export default Footer;
