import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const UpperBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-red-900 w-full">
            <div className="h-18 font-merri flex items-center justify-between">
                {/* Logo section */}
                <div className="text-white text-4xl font-merri ml-10">
                    Julián
                </div>
                {/* Buttons Section */}
                <div className="lg:block hidden">
                    <a href="" className="nav-button">Home</a>
                    <a href="" className="nav-button">About</a>
                    <a href="" className="nav-button">Experience</a>
                    <a href="" className="nav-button">Projects</a>
                    <a href="" className="nav-button">Skills</a>
                    <a href="" className="nav-button">Contact</a>
                </div>
                <div className="flex">
                    <button onClick={() => { }}
                        className="px-4 py-4 text-2xl text-white hover:bg-red-950/20 rounded-full lg:mr-10 md:mr-0 sm:mr-0">
                        <IoMdMoon />
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden block px-4 py-3 text-2xl text-white hover:bg-red-950/20 rounded-2xl mr-4">
                        <CiMenuBurger />
                    </button>
                </div>

            </div>

            {/* Buttons Section mobile */}
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-gray-100 space-y-2 pb-3 pt-3`}>
                <a href="" className="nav-button-mobile">Home</a>
                <a href="" className="nav-button-mobile">About</a>
                <a href="" className="nav-button-mobile">Experience</a>
                <a href="" className="nav-button-mobile">Projects</a>
                <a href="" className="nav-button-mobile">Skills</a>
                <a href="" className="nav-button-mobile">Contact</a>
            </div>

        </nav>
    );
}

export default UpperBar;