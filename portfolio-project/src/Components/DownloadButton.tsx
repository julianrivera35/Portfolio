import { useTranslation } from 'react-i18next';
import { MdOutlineSimCardDownload } from "react-icons/md";


const DownloadButton = () => {
    const [t, i18n]  = useTranslation("global");
    const resumePDFEnglish = '/CV - Julián Rivera - 2025 - v4.pdf';
const resumePDFSpanish = '/CV - Julián Rivera - 2025 - es.pdf';
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = i18n.language === 'en' ? resumePDFEnglish : resumePDFSpanish;
        link.download = 'CV - Julián Rivera - 2025 - v4.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={handleDownload} className='flex flex-row justify-center items-center text-xl font-semibold rounded-3xl border-2 px-4 py-0.5 border-slate-500 bg-slate-500 text-stone-100'>
            <MdOutlineSimCardDownload className='text-3xl pr-2'/> {t("hero.resume")}
        </button>
    )
};

export default DownloadButton;