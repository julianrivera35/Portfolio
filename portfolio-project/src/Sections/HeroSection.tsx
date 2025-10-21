import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.webp';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadButton from '../Components/DownloadButton';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
    const t = useTranslation("global")[0];
    return (
        <div className="section-container primary flex-col lg:flex-row items-center gap-5">
            <div className='flex flex-col h-full justify-center items-center xl:items-start text-center text-balance xl:text-left gap-2 mt-2' >
                <h4 className='text-slate-700'>{t("hero.greeting")}</h4>
                <h1>Julián Rivera</h1>
                <h2 className='text-slate-700'>{t("hero.profession")}</h2>
                <h2 className='text-slate-700'>{t("hero.hobby")}</h2>
                <p className='text-lg text-slate-700'>{t("hero.description")}</p>
                {/* Buttons */}
                <div className='flex gap-6 mt-4 justify-center items-center'>
                    <a href="https://www.linkedin.com/in/julian-rivera-81795a253/" className='text-4xl'><FaLinkedin className='text-blue-800'/></a>
                    <a href="https://github.com/julianrivera35" className='text-4xl'><FaGithub /></a>
                    <DownloadButton />
                </div>
            </div >
            <img src={ProfilePhoto} alt="Julian's Photo" className='rounded-full max-w-70 lg:max-w-sm mt-4 lg:mt-0' />
        </div >
    )
}

export default HeroSection;