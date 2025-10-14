import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const UpperBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-red-900 w-[100vw]">
            <div className="h-18 font-merri flex items-center justify-between">
                {/* Logo section */}
                <div className="text-white text-4xl font-merri ml-4 mr-4">
                    Julián
                </div>
                {/* Buttons Section */}
                <div className="hidden sm:block md:overflow-auto sm:overflow-auto">
                    <a href="" className="nav-button">Home</a>
                    <a href="" className="nav-button">About</a>
                    <a href="" className="nav-button">Resume</a>
                    <a href="" className="nav-button">Experience</a>
                    <a href="" className="nav-button">Projects</a>
                    <a href="" className="nav-button">Portfolio</a>
                    <a href="" className="nav-button">Skills</a>
                    <a href="" className="nav-button">Contact</a>
                </div>
                <div className="flex">
                    <button onClick={() => { }}
                        className="px-4 py-4 text-2xl text-white hover:bg-red-950/20 rounded-full mr-4">
                        <IoMdMoon />
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="block sm:hidden px-4 py-3 text-2xl text-white hover:bg-red-950/20 rounded-2xl mr-4">
                        <CiMenuBurger />
                    </button>
                </div>

            </div>

            {/* Buttons Section mobile */}
            <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100 space-y-2 pb-3 pt-3`}>
                <a href="" className="nav-button-mobile">Home</a>
                <a href="" className="nav-button-mobile">About</a>
                <a href="" className="nav-button-mobile">Resume</a>
                <a href="" className="nav-button-mobile">Experience</a>
                <a href="" className="nav-button-mobile">Projects</a>
                <a href="" className="nav-button-mobile">Portfolio</a>
                <a href="" className="nav-button-mobile">Skills</a>
                <a href="" className="nav-button-mobile">Contact</a>
            </div>

        </nav>
    );
}

export default UpperBar;