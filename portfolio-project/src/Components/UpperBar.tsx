import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import LanguageButton from './LanguageButton';

const UpperBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [t] = useTranslation("global");

    return (
        <nav className="bg-slate-500 w-full fixed z-10">
            <div className="h-18 font-merri flex items-center xl:justify-evenly justify-between xl:px-0 px-4">
                {/* Logo section */}
                <div className="font-family-prata text-white text-4xl font-family-merri font-bold px-4">
                    Julián
                </div>
                {/* Buttons Section */}
                <div className="xl:block hidden">
                    <a href="" className="nav-button">{t("navbar.home")}</a>
                    <a href="" className="nav-button">{t("navbar.about")}</a>
                    <a href="" className="nav-button">{t("navbar.experience")}</a>
                    <a href="" className="nav-button">{t("navbar.projects")}</a>
                    <a href="" className="nav-button">{t("navbar.skills")}</a>
                    <a href="" className="nav-button">{t("navbar.portfolio")}</a>
                    <a href="" className="nav-button">{t("navbar.contact")}</a>
                </div>
                <div className="flex items-center justify-evenly gap-2">
                    <LanguageButton />
                    <button onClick={() => { }}
                        className="px-4 py-4 text-2xl text-white hover:bg-slate-600 rounded-full">
                        <IoMdMoon />
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden block px-4 py-3 text-2xl text-white hover:bg-slate-600 rounded-2xl mr-4">
                        <CiMenuBurger />
                    </button>
                </div>

            </div>

            {/* Buttons Section mobile */}
            <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-gray-100 space-y-2 pb-4 pt-3`}>
                <a href="" className="nav-button-mobile">{t("navbar.home")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.about")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.experience")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.projects")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.skills")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.portfolio")}</a>
                <a href="" className="nav-button-mobile">{t("navbar.contact")}</a>
            </div>

        </nav>
    );
}

export default UpperBar;