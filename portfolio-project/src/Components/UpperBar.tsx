import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const UpperBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
    }
    return (
        <nav className="bg-slate-500 w-full fixed z-10">
            <div className="h-18 font-merri flex items-center justify-between">
                {/* Logo section */}
                <div className="text-white text-4xl font-family-merri font-bold ml-10">
                    Julián
                </div>
                {/* Buttons Section */}
                <div className="lg:block hidden">
                    <a href="" className="nav-button">{t("navbar.home")}</a>
                    <a href="" className="nav-button">{t("navbar.about")}</a>
                    <a href="" className="nav-button">{t("navbar.experience")}</a>
                    <a href="" className="nav-button">{t("navbar.projects")}</a>
                    <a href="" className="nav-button">{t("navbar.skills")}</a>
                    <a href="" className="nav-button">{t("navbar.portfolio")}</a>
                    <a href="" className="nav-button">{t("navbar.contact")}</a>
                </div>
                <div className="flex">
                    <button onClick={() => handleChangeLanguage("en")}>EN</button>
                    <button onClick={() => handleChangeLanguage("es")}>ES</button>
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