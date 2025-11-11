import { useTranslation } from 'react-i18next';
import PhotoSeneca from '../assets/SenecaPhoto.webp'
const AboutSection = () => {
    const t = useTranslation("global")[0];  
    return (
        <div id='about' className='section-container secondary flex-col gap-2 lg:flex-row items-start'>
            <div className=' flex flex-1 justify-center items-center'>
                <img src={PhotoSeneca} alt="Julian's personal foto" className='max-h-[75vh]' />
            </div>
            <div className='flex flex-col justify-center flex-1 gap-2 mr-10 ml-10'>
                <h1 className='text-left mt-10 mb-5'>{t("about.title")}</h1>
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