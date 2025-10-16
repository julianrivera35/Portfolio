import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.webp';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection: React.FC = () => {
    return (
        <div className="bg-amber-100 w-full h-[95vh] flex flex-col lg:flex-row items-center justify-evenly pt-10 pb-10">
            <div className='flex flex-col h-full justify-center items-center lg:items-start text-center text-balance lg:text-left'>
                <h3 >Hi, I am</h3>
                <h2>Julián Rivera</h2>
                <h1>Systems and Computing Engineer</h1>
                <h2>& AI Enthusiast</h2>
                <p>Driving innovation with Big Data & AI</p>
                {/* Buttons */}
                <div className='flex gap-6 mt-4'>
                    <a href="https://www.linkedin.com/in/julian-rivera-81795a253/" className='text-4xl'><FaLinkedin/></a>
                    <a href="https://github.com/julianrivera35" className='text-4xl'><FaGithub/></a>
                </div>
            </div>
            <img src={ProfilePhoto} alt="Chuerk" className='rounded-full max-w-70 lg:max-w-sm mt-4 lg:mt-0'/>
        </div>
    )
}

export default HeroSection;