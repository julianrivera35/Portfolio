import { useTranslation } from 'react-i18next';
import { MdOutlineSimCardDownload } from "react-icons/md";
import resumePDFEnglish from '../assets/CV - Julián Rivera - 2025 - v4.pdf';

const DownloadButton = () => {
    const t = useTranslation("global")[0];
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDFEnglish;
        link.download = 'CV - Julián Rivera - 2025 - v4.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={handleDownload} className='flex flex-row justify-center items-center text-xl rounded-3xl border-2 px-4 py-0.5 border-slate-500 bg-slate-500 text-stone-100'>
            <MdOutlineSimCardDownload className='text-4xl'/> {t("hero.resume")}
        </button>
    )
};

export default DownloadButton;