import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
    const t = useTranslation("global")[0];  
    return (
        <div className='bg-blue-100 w-full min-h-screen h-auto flex flex-col lg:flex-row items-start justify-evenly pt-10 pb-10'>
            <div className='flex-1'></div>
            <div className='flex flex-col justify-center flex-1 gap-2 mr-10 ml-10'>
                <h1 className='text-center mb-10 underline underline-offset-auto'>{t("about.title")}</h1>
                <h2 className='pb-8 underline underline-offset-auto'>{t("about.subtitle")}</h2>
                <p className='text-balance pb-2'>
                    {t("about.info")}
                </p>
                <p className='text-balance pb-2'>
                    {t("about.nowadays")}
                </p>
            </div>
        </div>
    )
}

export default AboutSection;